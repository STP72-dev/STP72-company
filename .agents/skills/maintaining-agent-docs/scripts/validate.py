#!/usr/bin/env python3
"""Validate a repo's agent-instruction files (AGENTS.md / CLAUDE.md / GEMINI.md / README.md / llms.txt).

Deterministic, stdlib-only. The validation-and-drift layer for the `maintaining-agent-docs` skill; also
usable standalone or as a pre-commit / CI check.

    python validate.py [REPO_ROOT] [--strict] [--quiet]

Checks: per-file completeness, single-source-of-truth / duplication drift between shims and AGENTS.md,
local link resolution (incl. llms.txt), secret scan, managed-region marker balance, and SKILL.md
frontmatter limits. Advisory by default (exit 0); --strict exits non-zero on any ERROR or WARN.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

DOC_FILES = ["AGENTS.md", "CLAUDE.md", "GEMINI.md", "README.md", "llms.txt"]
SHIMS = ["CLAUDE.md", "GEMINI.md"]
COMPLETENESS = {  # AGENTS.md heading keywords → human label
    "setup/install": r"setup|install|bootstrap",
    "build/run": r"build|run|start|usage",
    "test/verify": r"test|verif|definition of done|lint|check",
    "structure/layout": r"structure|layout|directory|project",
    "safety/conventions": r"safe|security|convention|style|do/?n.?t|rules",
}
SECRET_PATTERNS = {
    "AWS access key": r"AKIA[0-9A-Z]{16}",
    "private key block": r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----",
    "OpenAI-style key": r"\bsk-[A-Za-z0-9]{20,}",
    "GitHub token": r"\bgh[pousr]_[A-Za-z0-9]{30,}",
    "Slack token": r"\bxox[baprs]-[A-Za-z0-9-]{10,}",
    "assigned secret": r"(?i)(api[_-]?key|secret|password|token)\s*[:=]\s*['\"][^'\"]{8,}['\"]",
    "absolute home path": r"/(?:home|Users)/[A-Za-z0-9._-]+/",
}
LINK_RE = re.compile(r"\[[^\]]*\]\(([^)]+)\)")
BEGIN_RE = re.compile(r"<!--\s*BEGIN maintaining-agent-docs")
END_RE = re.compile(r"<!--\s*END maintaining-agent-docs")


class Report:
    def __init__(self) -> None:
        self.items: list[tuple[str, str]] = []

    def add(self, sev: str, msg: str) -> None:
        self.items.append((sev, msg))

    def count(self, sev: str) -> int:
        return sum(1 for s, _ in self.items if s == sev)


def _substantial_lines(text: str) -> set[str]:
    out: set[str] = set()
    for raw in text.splitlines():
        line = raw.strip()
        if len(line) >= 40 and not line.startswith(("#", "-", "*", ">", "|", "<!--", "```")):
            out.add(line)
    return out


def _strip_code(text: str) -> str:
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    return re.sub(r"`[^`]*`", "", text)


def check(root: Path, rep: Report) -> None:
    present = {f: (root / f) for f in DOC_FILES if (root / f).is_file()}

    # AGENTS.md presence + completeness
    agents = present.get("AGENTS.md")
    if not agents:
        rep.add("WARN", "AGENTS.md not found at repo root (canonical agent rules missing).")
    else:
        low = agents.read_text(encoding="utf-8").lower()
        for label, rx in COMPLETENESS.items():
            if not re.search(rx, low):
                rep.add("INFO", f"AGENTS.md: no section matching '{label}'.")

    # Shim: should reference AGENTS.md; should not duplicate large policy blocks
    agents_lines = _substantial_lines(agents.read_text(encoding="utf-8")) if agents else set()
    for shim in SHIMS:
        p = present.get(shim)
        if not p:
            continue
        text = p.read_text(encoding="utf-8")
        if "AGENTS.md" not in text:
            rep.add("WARN", f"{shim}: thin shim should point to AGENTS.md (no reference found).")
        shared = agents_lines & _substantial_lines(text)
        if len(shared) > 3:
            rep.add("WARN", f"{shim}: duplication drift — {len(shared)} substantial lines also in "
                            f"AGENTS.md. Replace duplicated policy with an @AGENTS.md import/pointer.")

    # Local link resolution (skip http/anchors/mailto)
    for name, p in present.items():
        base = p.parent
        for target in LINK_RE.findall(_strip_code(p.read_text(encoding="utf-8"))):
            t = target.split("#", 1)[0].strip()
            if not t or t.startswith(("http://", "https://", "mailto:", "#")):
                continue
            if not (base / t).exists():
                rep.add("ERROR", f"{name}: broken local link -> {target}")

    # llms.txt validity
    llms = present.get("llms.txt")
    if llms:
        first = next((ln for ln in llms.read_text(encoding="utf-8").splitlines() if ln.strip()), "")
        if not first.startswith("# "):
            rep.add("ERROR", "llms.txt: missing required H1 title (first non-empty line must start with '# ').")

    # Secret scan across the doc files
    for name, p in present.items():
        text = p.read_text(encoding="utf-8")
        for label, rx in SECRET_PATTERNS.items():
            if re.search(rx, text):
                rep.add("ERROR", f"{name}: possible {label} in generated docs — remove before committing.")

    # Managed-region marker balance
    for name, p in present.items():
        text = p.read_text(encoding="utf-8")
        b, e = len(BEGIN_RE.findall(text)), len(END_RE.findall(text))
        if b != e:
            rep.add("ERROR", f"{name}: unbalanced managed-region markers (BEGIN={b}, END={e}).")

    # Nested AGENTS.md discovery (info)
    nested = [str(x.relative_to(root)) for x in root.rglob("AGENTS.md")
              if x != (root / "AGENTS.md") and ".git" not in x.parts and "node_modules" not in x.parts]
    if nested:
        rep.add("INFO", f"Nested AGENTS.md found (preserve these): {', '.join(sorted(nested))}")

    # SKILL.md frontmatter limits (any under root)
    for sk in root.rglob("SKILL.md"):
        if ".git" in sk.parts or "node_modules" in sk.parts:
            continue
        head = sk.read_text(encoding="utf-8")
        m = re.match(r"---\s*\n(.*?)\n---", head, re.DOTALL)
        rel = sk.relative_to(root)
        if not m:
            rep.add("WARN", f"{rel}: SKILL.md missing frontmatter.")
            continue
        fm = m.group(1)
        nm = re.search(r"^name:\s*(.+)$", fm, re.MULTILINE)
        de = re.search(r"^description:\s*(.+)$", fm, re.MULTILINE)
        if not nm or not de:
            rep.add("WARN", f"{rel}: SKILL.md frontmatter needs both name and description.")
        else:
            if not re.fullmatch(r"[a-z0-9-]{1,64}", nm.group(1).strip()):
                rep.add("WARN", f"{rel}: skill name must be lowercase/hyphen, <=64 chars.")
            if len(de.group(1).strip()) > 1024:
                rep.add("WARN", f"{rel}: skill description exceeds 1024 chars.")


def main() -> int:
    ap = argparse.ArgumentParser(description="Validate agent-instruction docs.")
    ap.add_argument("root", nargs="?", default=".", help="Repo root (default: cwd)")
    ap.add_argument("--strict", action="store_true", help="Exit non-zero on any ERROR or WARN")
    ap.add_argument("--quiet", action="store_true", help="Only print the summary line")
    args = ap.parse_args()
    root = Path(args.root).resolve()

    rep = Report()
    if not root.is_dir():
        print(f"ERROR: not a directory: {root}")
        return 2
    check(root, rep)

    order = {"ERROR": 0, "WARN": 1, "INFO": 2}
    if not args.quiet:
        print(f"=== maintaining-agent-docs validate: {root} ===\n")
        for sev, msg in sorted(rep.items, key=lambda x: order.get(x[0], 9)):
            print(f"  [{sev}] {msg}")
        print()
    errors, warns = rep.count("ERROR"), rep.count("WARN")
    print(f"summary: {errors} error(s), {warns} warning(s), {rep.count('INFO')} info")

    if errors or (args.strict and warns):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
