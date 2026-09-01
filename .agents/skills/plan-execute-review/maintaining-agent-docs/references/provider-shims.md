# Reference: CLAUDE.md & GEMINI.md (thin shims)

Provider entry points. **They must not duplicate policy** — they import the canonical `AGENTS.md` and add
only tool-specific runtime notes.

## CLAUDE.md (Claude Code)

- Auto-loaded each session; supports **`@path` imports** (relative/absolute, **max depth 4**, home-dir ok).
  Hierarchy: managed policy → user `~/.claude/CLAUDE.md` → project `./CLAUDE.md` (or `./.claude/CLAUDE.md`)
  → `CLAUDE.local.md`. Keep it short (target < ~200 lines). **Claude Code reads CLAUDE.md, not AGENTS.md,
  natively** — so the shim is what bridges them.
- **Recommended shim:**
  ```markdown
  @AGENTS.md

  ## Claude-specific notes
  - Runtime config (permissions, hooks, MCP) lives in `.claude/settings.json` — policy stays in AGENTS.md.
  - <only Claude-specific notes here>
  ```
  (A symlink `CLAUDE.md -> AGENTS.md` is an alternative when there are zero Claude-specific notes.)
- For large repos, prefer path-scoped `.claude/rules/` over a long CLAUDE.md.

## GEMINI.md (Gemini CLI)

- Configurable filename via Gemini CLI `settings.json` (`context.fileName`); same nearest-wins hierarchy.
- **Recommended shim:** point to `AGENTS.md` as canonical and add only Gemini-specific notes. (Gemini CLI
  may not resolve Claude's `@import` syntax — if so, use a short prose pointer or a symlink instead.)

## Anti-duplication / drift

The validator flags any large text block shared between a shim and `AGENTS.md` as **duplication drift**.
Fix by replacing the duplicated block with an import/pointer. A shim that contains real policy is a bug.

## Do not emit
- Deprecated `.cursorrules` (use `.cursor/rules/*.mdc` with glob frontmatter if Cursor support is wanted).
