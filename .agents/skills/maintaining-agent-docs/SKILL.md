---
name: maintaining-agent-docs
description: Generate and maintain a repository's agent-instruction files — AGENTS.md (canonical), CLAUDE.md and GEMINI.md (thin shims that import AGENTS.md), README.md (for humans), and an optional llms.txt — with cross-file consistency, single-source-of-truth (no duplicated policy), and a validation gate. Use when the user asks to set up, create, generate, audit, fix, align, or update AGENTS.md / CLAUDE.md / GEMINI.md / README.md / llms.txt, make a repo "agent-ready", or resolve duplication/drift between these files. Reconciles existing files via diff-then-approve; never clobbers human-written content.
---

# Maintaining Agent Docs

Provider-agnostic workflow to create and maintain a repo's agent-instruction files from **repo-verified
facts**, keeping one canonical source and thin shims. Portable-first; works for any tool that reads
AGENTS.md (Codex, Cursor, Copilot, Gemini CLI, Aider…) plus Claude Code and Gemini CLI shims.

## The file model (memorize this — it is the whole point)

- **AGENTS.md** — the single **canonical** source of agent operating rules. Plain markdown, *convention
  not schema* (use any headings). Holds: purpose, setup, build/run, **test & verification (definition of
  done)**, code style, project layout, commit/PR conventions, safety boundaries, do/don't, high-risk paths.
- **CLAUDE.md** / **GEMINI.md** — **thin shims**. They `@AGENTS.md`-import (or symlink) the canonical
  rules and add only tool-specific runtime notes. **Never restate policy.** Keep each well under 200 lines.
- **README.md** — for **humans** (title, quickstart, install, usage, layout, contributing, license). Not
  the agent source of truth.
- **llms.txt** — **opt-in**, only when the repo publishes a docs *site*. A link map per llmstxt.org (an
  `# H1` is the only required part; `> summary` optional; `##` link lists; an `## Optional` section). It is
  a website-root convention with low real-world AI adoption — **do not generate it by default**.

**Anti-duplication rule (load-bearing):** every fact lives in exactly one place; the other files link to
it. Policy text appears only in AGENTS.md; shims only import.

Per-file detail lives in `references/` (load on demand): `references/agents-md.md`,
`references/provider-shims.md`, `references/readme.md`, `references/llms-txt.md`.

## When to use / not use

Use when asked to create/audit/fix/align any of these files or make a repo agent-ready. **Don't** invent
content for a repo you haven't read; **don't** generate llms.txt unless there's a published docs site.

## Gated procedure (do not skip; never write before the approval gate)

1. **Scan the repo (including nested).** Detect existing `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`,
   `README.md`, `llms.txt`, and **every nested `**/AGENTS.md`** (closest-file-wins; never replace a root
   file in a way that drops directory-scoped rules). Read package manifests, Makefile/CI, lockfiles, and
   `docs/`. Require a **clean working tree** for the doc files before writing.
2. **Extract repo-verified facts only.** Pull setup/build/test/run commands **only** from real sources
   (package.json scripts, Makefile, CI, lockfiles) and cite each as `file:line`. **Never invent** commands,
   package names, sections, URLs, or tool behavior — if unknown, write `TODO: verify` rather than guess.
   (Hallucinated commands are a real supply-chain/RCE risk.)
3. **Diff against existing using managed regions.** Wrap generated content in markers so reruns are
   idempotent and human edits survive:
   ```
   <!-- BEGIN maintaining-agent-docs (generated) -->
   ...generated content...
   <!-- END maintaining-agent-docs -->
   ```
   Only ever rewrite content **between** the markers; leave everything outside untouched. For a file with
   no markers yet, propose insertion points; don't overwrite the file wholesale.
4. **Run the validator.** `python scripts/validate.py <repo-root>` (the layer described in Phase 4 of the
   design). Fix what it reports.
5. **Diff-then-approve + backup.** Show the user a unified diff of every file to be created/changed. On a
   modify, back up the original (`<file>.bak` or `git stash`) first. **Get explicit approval.** For
   file-mutating work, prefer **worktree isolation** (see `docs/safe-execution.md`).
6. **Write.** Apply approved changes. Re-run the validator. Report what changed.

## Hard guardrails

- Repo-verified facts only, cited; no fabrication.
- Never overwrite/delete a file (or a human-written section) without a shown diff + approval + backup.
- Single source of truth: refuse to write the same policy block into two files; shims import only.
- Secret scan generated output (respect `.gitignore`); never emit keys, `.env` values, or absolute home paths.
- llms.txt is opt-in and every link must resolve.
- Do not emit deprecated formats (e.g. `.cursorrules` → use `.cursor/rules/*.mdc` if Cursor support is wanted).
- For large repos, prefer path-scoped `.claude/rules/` over a giant CLAUDE.md.

## Validation layer

`scripts/validate.py` is deterministic (stdlib) and also installable as a pre-commit/CI check. It verifies:
per-file completeness, **single-source-of-truth / duplication drift**, local link resolution (incl.
llms.txt), secret scan, managed-region marker balance, and SKILL/frontmatter limits. Advisory by default;
`--strict` exits non-zero. See `scripts/validate.py --help`.

## Standards notes (verified 2026-06)

AGENTS.md is convention, not a spec. CLAUDE.md thin-shim via `@AGENTS.md` import is Anthropic-documented
(imports max depth 4; keep CLAUDE.md short; Claude reads CLAUDE.md, not AGENTS.md, natively). GEMINI.md is
configurable via Gemini CLI `settings.json` (`context.fileName`). llms.txt adoption by AI crawlers is
currently low — treat as optional.
