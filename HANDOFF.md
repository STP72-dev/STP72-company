# Session Handoff

> **Date:** 2026-09-01
> **Session focus:** Prepare the STP72 ECS Express production release, configure GitHub release controls, and generate least-privilege IAM artifacts while AWS credentials are repaired.
> **Status:** blocked

## What Was Done

- Revalidated the uncommitted ECS Express release implementation. The workflow uses Bun 1.2.22 and the committed lockfile, validates source/deployment/docs/agent-guide changes, builds immutable commit-SHA ECR images, deploys with GitHub OIDC to ECS Express Mode, and uses `/hu` as the health-check path.
- Ran the required release gates successfully: TypeScript, lint (10 existing Fast Refresh warnings and no errors), Prettier check, production build, strict agent-document validation, whitespace validation, actionlint, and an absolute-local-path scan.
- Built a fresh production Docker image with the Bun builder/non-root Node Nitro runner. `/hu`, `/en/ai-solutions`, and `/en/ai-solutions/ai-agents` each returned HTTP 200 from an ephemeral loopback-only container.
- Created the GitHub `production` environment. It has an authenticated administrator reviewer, self-review prevention, and a custom `main`-only deployment branch policy. Repository variables remain intentionally unset until AWS role ARNs exist.
- Researched current AWS and GitHub documentation. ECS Express Mode remains the selected architecture: it provisions the Fargate service, ALB, autoscaling, logging, and managed infrastructure from a private ECR image plus execution and infrastructure roles.
- Added `.aws/iam/` policy templates for the GitHub OIDC deployment role, resource-scoped ECS task-execution role, and ECS Express infrastructure-role trust. Added a role mapping/provisioning guide and linked it from the deployment manual.
- Supplied a copy-pasteable AWS CLI role-provisioning sequence. It renders the account-neutral templates only in a temporary directory and rejects an AWS root caller before making writes.
- Archived the preceding root handoff to `.handoffs/2026-09-01-pre-release.md` before writing this one.

### Files Changed

```
.github/workflows/deploy-aws.yml          # Bun validation + OIDC/ECR/ECS Express release path
Dockerfile, docker-compose.yml             # deterministic Bun builder and non-root Nitro runner
.aws/iam/                                  # new OIDC/ECS role trust and permission-policy templates
.agents/prompts/gh-actions+release_policy.md # user-supplied IAM policy-generation prompt
docs/01-executive-summary.md               # local path made repository-relative
docs/10-deployment-and-cloud-infrastructure.md # links to IAM templates and current deployment model
docs/.plan/docker-aws-deployment-plan.md
docs/01-executive-summary.md through docs/09-appendices-and-glossary.md
docs/README.md, README.md, AGENTS.md, CLAUDE.md, GEMINI.md
package.json, src/**                       # existing release-preparation/content/UI formatting changes
.kb/                                        # new repository-analysis artifacts
.handoffs/2026-09-01.md                    # prior archived handoff
.handoffs/2026-09-01-pre-release.md        # handoff archived at this session boundary
HANDOFF.md                                  # this current handoff
```

The worktree has 48 modified tracked files plus untracked `.agents/prompts/`, `.aws/`, `.handoffs/`, and `.kb/`. Preserve all existing changes; do not reset, checkout, or discard them.

## Decisions Made

- **ECS Express Mode in `eu-central-1` remains the production target.** — because current AWS documentation confirms that Express manages the Fargate service, ALB, autoscaling, logging, and supporting infrastructure while retaining the requested ECR container workflow.
- **GitHub OIDC is restricted to `repo:STP72-dev/STP72-company:environment:production`.** — because GitHub environment subjects are stable and AWS requires a non-wildcard `sub` condition; the production environment is now also restricted to `main` with review protection.
- **The GitHub deployment role scopes ECR writes to `stp72-company` and `iam:PassRole` to two exact roles.** — because the release action needs ECR upload and ECS Express create/update operations but must not gain broad IAM access.
- **The task execution role uses a custom resource-scoped policy; the infrastructure role uses AWS's managed Express policy.** — because task image pulls/log publishing can be limited to one ECR repository and log group, while AWS updates the infrastructure policy as Express requirements evolve.
- **No AWS root principal may be used.** — because the release constraint explicitly prohibits it; all AWS commands must first reject root identity.
- **No commit, push, ECR image, ECS service, certificate, or DNS record has been created yet.** — because the only configured AWS CLI profile is not a valid non-root administrative session.

## Dead Ends

- **Tried:** `aws sso login --profile default` → **Failed because:** the profile lacks both `sso_start_url` and `sso_region`; it is incomplete rather than merely expired.
- **Tried:** AWS state discovery with the configured default profile → **Failed because:** STS could not obtain a valid SSO authorization grant, so caller identity cannot be safely classified as non-root.
- **Tried:** strict agent-document validation after mounting a Bun dependency install in the worktree → **Failed because:** generated `node_modules` third-party skill files introduced warnings and were owned by the container user. Resolved by removing only the disposable `node_modules` and `.output` artifacts through the same container, then rerunning validation successfully.

## Open Questions

- [ ] Obtain the IAM Identity Center start URL, SSO Region, target account, and a non-root administrative permission set for the intended AWS account; alternatively provide an existing named non-root assumed-role profile.
- [ ] After a non-root session is active, re-check the current ECR, ECS Express, OIDC provider, CloudWatch, ACM, and Route 53 record state before creating any AWS resource.
- [ ] Inspect and record the exact existing Route 53 apex record set and rollback target before the post-deployment DNS cutover.

## Next Steps

1. **Immediate:** From the repository root, run `aws configure sso --profile default`, enter the approved non-root IAM Identity Center start URL, SSO Region, target account, and administrator permission set; then run `aws sso login --profile default` followed by `aws sts get-caller-identity --profile default --query Arn --output text`. Continue only if the returned ARN is not an AWS root ARN.
2. Open `.aws/iam/README.md`, rerun the supplied role-provisioning sequence with the verified profile, and confirm all three roles plus the GitHub OIDC provider exist before setting GitHub repository variables.
3. Create the immutable scan-on-push ECR repository and ten-image lifecycle policy, deploy the committed SHA through GitHub Actions, verify ECS health/logs/routes, then perform ACM/ALB/Route 53 apex cutover only after recording the current DNS rollback target.

## Context for Next Session

Current branch is `main`; `origin` is `https://github.com/STP72-dev/STP72-company.git`. The latest commit is `75fe7ff docs: add session handoff document`; nothing from the current release preparation has been committed or pushed.

GitHub state is known and has changed in this session: the repository is public on `main`; the `production` environment exists, is restricted to the `main` branch through a custom branch policy, requires an existing authorized reviewer, and prevents self-review. No required repository variables have been set because the role ARNs do not yet exist.

Validated local outcomes:

- `bun x tsc --noEmit`: passed in the isolated Bun 1.2.22 container.
- `bun run lint`: passed with 10 existing `react-refresh/only-export-components` warnings and no errors.
- `bun x prettier --check .`: passed.
- `bun run build`: passed; Vite reported only a non-fatal client-chunk-size warning.
- `python3 .agents/skills/maintaining-agent-docs/scripts/validate.py . --strict`: passed with 0 errors and 0 warnings.
- `git diff --check`: passed.
- `actionlint`: passed for `.github/workflows/deploy-aws.yml`.
- Production Docker smoke test: HTTP 200 for `/hu`, `/en/ai-solutions`, and `/en/ai-solutions/ai-agents`.
- All five `.aws/iam/*.json` documents parse as JSON. AWS Access Analyzer/server-side policy validation remains deferred until the non-root session is available.

Do not print credentials, tokens, private keys, account identifiers, or environment-file contents. Do not use an AWS root principal for inspection, provisioning, deployment, IAM, DNS, or other operational actions.
