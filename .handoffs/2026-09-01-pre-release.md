# Session Handoff

> **Date:** 2026-09-01
> **Session focus:** Prepare the uncommitted STP72-company ECS Express release, verify local quality gates, and establish the cloud-release prerequisite state.
> **Status:** blocked

## What Was Done

- Reconciled the release workflow in `.github/workflows/deploy-aws.yml` for the intended GitHub Actions OIDC → ECR → ECS Express topology in `eu-central-1`. Validation now runs for source, deployment configuration, agent-instruction, and documentation changes; the release path uses Bun 1.2.22, a SHA-tagged ECR image, ECS Express deployment, and the `/hu` health check.
- Reconciled deployment documentation and repository knowledge files with the working-tree Bun Docker builder and ECS Express implementation. Stale App Runner/current `configure-aws-credentials` v4 language was removed or kept only as historical context.
- Replaced committed absolute local-home-directory documentation links with repository-relative links.
- Ran Prettier across the repository. The resulting source, documentation, workflow, and agent-instruction formatting changes remain uncommitted.
- Built and ran the container locally. `/hu`, `/en/ai-solutions`, and `/en/ai-solutions/ai-agents` each returned HTTP 200.
- Completed the required local quality gates successfully: type check, lint (warnings only), Prettier check, production build, strict agent-doc validation, whitespace check, plus workflow syntax/actionlint checks.
- Inspected GitHub and AWS state without writing external resources. GitHub repository access works; no `production` environment or Actions repository variables exist. In `eu-central-1`, the ECR repository, ECS cluster, GitHub OIDC provider, and documented deployment/execution/infrastructure roles are absent. The public `stp72.com.` Route 53 hosted zone exists.
- Archived the prior handoff at `.handoffs/2026-09-01.md` before creating this replacement.

### Files Changed

```
.github/workflows/deploy-aws.yml
AGENTS.md
CLAUDE.md
Dockerfile
GEMINI.md
HANDOFF.md
README.md
docker-compose.yml
docs/.plan/docker-aws-deployment-plan.md
docs/01-executive-summary.md
docs/02-architecture-overview.md
docs/03-routing-and-i18n.md
docs/04-content-engine-and-type-system.md
docs/05-design-system-and-ui-architecture.md
docs/06-runtime-subsystems.md
docs/07-operations-build-and-deployment.md
docs/08-security-performance-and-quality.md
docs/09-appendices-and-glossary.md
docs/10-deployment-and-cloud-infrastructure.md
docs/README.md
package.json
src/components/ds/AILabel.tsx
src/components/ds/FlowDiagram.tsx
src/components/ds/ForecastChart.tsx
src/components/ds/Heading.tsx
src/components/ds/Tile.tsx
src/components/layout/SiteHeader.tsx
src/components/pages/HomePage.tsx
src/components/pages/PageParts.tsx
src/components/pages/ProcessPage.tsx
src/components/pages/ReferencesPage.tsx
src/components/pages/ServicePage.tsx
src/components/pages/SolutionDetailPage.tsx
src/components/pages/SubPage.tsx
src/components/search/SiteSearch.tsx
src/components/ui/button.tsx
src/content/en.ts
src/content/hu.ts
src/content/solutions.en.ts
src/content/solutions.hu.ts
src/content/types.ts
src/lib/search-index.ts
src/lib/seo.ts
src/lib/theme.ts
src/routes/$locale/$slug.index.tsx
src/routes/README.md
src/routes/__root.tsx
src/styles.css
.kb/ (new, ECS Express architecture/context artifacts)
.handoffs/2026-09-01.md (archived prior handoff)
```

## Decisions Made

- **ECS Express in `eu-central-1` remains the production target.** — because the requested topology is GitHub Actions OIDC → ECR → ECS Express; App Runner must not be reintroduced as the current deployment service.
- **Bun 1.2.22 is the canonical build environment.** — because the project lockfile and release workflow require it; isolated Docker builders were used when Bun was unavailable on the host.
- **Documentation-only and agent-instruction changes trigger validation.** — because deployment and operational guidance is part of the release contract and must not bypass the documented quality gate.
- **Images are immutable commit-SHA tags and use `/hu` for service health.** — because each deployed artifact must be traceable and the localized landing route is the agreed health endpoint.
- **`stp72.com` is the intended production hostname.** — because the user selected it; no Route 53 change has been made and DNS remains deferred until a healthy ECS deployment exists.
- **AWS provisioning must use a non-root administrative session.** — because root principals are prohibited for provisioning, even with broad release authorization.

## Dead Ends

- **Tried:** AWS prerequisite inspection with the current CLI session → **Failed because:** the caller is the AWS root principal, which is explicitly prohibited from provisioning; no AWS writes were attempted.
- **Tried:** using locally installed Bun for the required checks → **Failed because:** Bun was unavailable on the host; isolated Docker builder containers supplied the canonical Bun environment successfully.

## Open Questions

- [ ] Provide or activate a non-root IAM Identity Center, assumed-admin-role, or equivalent administrative AWS profile with permission to create the agreed ECR, IAM/OIDC, ECS Express, and Route 53 prerequisites in `eu-central-1`.
- [ ] Choose the production-environment reviewer policy and ECR image-retention count if they differ from the documented defaults.
- [ ] After prerequisites and a successful deployment, explicitly confirm the exact Route 53 record change for `stp72.com` and its rollback target before DNS is modified.
- [ ] Before any commit or push, approve the final scoped Git diff and commit message after cloud prerequisites are ready.

## Next Steps

1. **Immediate:** In a terminal authenticated as a non-root AWS administrator, run `aws sts get-caller-identity --region eu-central-1`; continue only when the returned ARN is not an AWS root ARN and the session can administer IAM, ECR, ECS, and Route 53 in scope.
2. Re-run the read-only prerequisite discovery, then create the missing ECR repository, GitHub OIDC provider, least-privilege deployment/execution/infrastructure roles, ECS Express cluster/service, GitHub `production` environment, and the eight non-secret repository variables after confirming the selected reviewer/retention settings.
3. Review the final diff, obtain commit/push approval, push `main`, monitor the Actions validation/release workflow, and verify `/hu`, one English route, and one nested English solution route return HTTP 200. Only then request the separate Route 53 record-change approval for `stp72.com`.

## Context for Next Session

Current branch is `main`; `origin` points to the GitHub repository. The worktree is deliberately uncommitted: 48 tracked files currently differ (850 insertions, 728 deletions) and `.kb/` is new. Preserve unrelated changes and do not reset, checkout, or discard the tree.

Validated command outcomes from this session:

- `bun x tsc --noEmit` in the isolated Docker Bun builder: passed.
- `bun run lint` in the isolated Docker Bun builder: passed with 10 existing `react-refresh/only-export-components` warnings and no errors.
- `bun x prettier --check .` in the isolated Docker Bun builder: passed.
- `bun run build` in the isolated Docker Bun builder: passed; Vite emitted a non-fatal client-chunk-size warning.
- `python3 .agents/skills/maintaining-agent-docs/scripts/validate.py . --strict`: passed with 0 errors and 0 warnings.
- `git diff --check`: passed.
- `actionlint` and YAML parsing for `.github/workflows/deploy-aws.yml`: passed.
- Local final container HTTP checks: `/hu`, `/en/ai-solutions`, and `/en/ai-solutions/ai-agents` each returned HTTP 200. Temporary verification containers and images were removed afterwards.

Read-only cloud/GitHub findings must be treated as a baseline to re-check after changing credentials. No AWS, GitHub, DNS, commit, or push write occurred in this session. Do not print credentials, tokens, account identifiers, private keys, or environment-file contents. Do not use the root AWS principal.
