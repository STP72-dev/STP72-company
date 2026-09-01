---
name: plan-execute-review
description: Turn an ambiguous request into a grounded plan, an evidence-backed execution, and a reviewed result. Use for non-trivial coding tasks that benefit from a plan→execute→review loop.
---

# Plan → Execute → Review

A portable, provider-agnostic workflow for taking an ambiguous request to a reviewed change.
This is a seed skill demonstrating the `.agents/skills/` convention; extend it for your needs.

## Phase 1 — Plan
Read `assets/prompts/plan.md`. Ground the request in the actual repo: list the files involved,
state assumptions explicitly, and produce a numbered, verifiable plan. Stop for approval if the
request is underspecified.

## Phase 2 — Execute
Follow `assets/prompts/execute.md`. Make the smallest change that satisfies the plan. Prefer
worktree isolation for anything that mutates files (see `docs/safe-execution.md`). Run the
repo's verify command after each meaningful step.

## Phase 3 — Review
Use `assets/prompts/review.md`. Check the change against the plan and the repo's definition of
"done" (the verify command in `AGENTS.md`). Surface anything skipped or uncertain.

## Done
The verify command passes and the change matches the approved plan.
