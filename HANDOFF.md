# Session Handoff

> **Date:** 2026-09-02
> **Session focus:** Unblock the AWS ECS Express GitHub Actions pipeline, bootstrap a fresh non-root AWS account end to end, and complete the first successful production deployment.
> **Status:** partial — deployment succeeded; the `stp72.com` DNS/ACM cutover is intentionally deferred

## What Was Done

- Diagnosed and fixed the actual CI pipeline blocker: every entry under `.agents/skills/` was a git-committed symlink pointing to the previous developer's local machine path (`/home/w7-loqker/...`), which does not exist on the GitHub Actions runner. Replaced all six with real, portable file copies. Also fixed a second latent bug in `.agents/skills/maintaining-agent-docs/scripts/validate.py`: its SKILL.md scan excluded `.git` but not `node_modules`, so any fresh `bun install` (including in CI) always failed the strict doc-validation gate on third-party `@tanstack/*` packages' bundled SKILL.md files. (`41d9544`)
- Reformatted 4 previously-unformatted files under `.aws/` and `.agents/prompts/`, and added `.agents` to `.prettierignore` (vendored content, matches `.dockerignore`'s existing treatment). (`188a9c5`, `41d9544`)
- Added the missing copy-pasteable AWS CLI IAM-provisioning sequence to `.aws/iam/README.md` — the prior handoff claimed this existed; it did not. (`188a9c5`, extended in `98a6d63`)
- Verified all five `.aws/iam/*.json` templates action-by-action against live AWS documentation and IAM Access Analyzer (`validate-policy`); no changes needed to the two ECS trust policies (they matched AWS's own official example verbatim).
- Bootstrapped IAM Identity Center from scratch for a brand-new AWS Organizations member account, `infra72` (`169406897447`, `eu-central-1`), since only AWS root credentials existed beforehand. Created Identity Center user `l7-sabo`, assigned `AdministratorAccess` permission set to the `infra72` account.
- Provisioned all required AWS resources via the documented CLI sequence: GitHub OIDC provider, `STP72CompanyGitHubDeploy` / `STP72CompanyEcsTaskExecution` / `STP72CompanyEcsExpressInfrastructure` IAM roles, and the `stp72-company` ECR repository (immutable tags, scan-on-push, 10-image lifecycle policy).
- Set all 8 required GitHub repository variables (`AWS_REGION`, `AWS_ACCOUNT_ID`, `ECR_REPOSITORY`, `ECS_CLUSTER`, `ECS_SERVICE`, `AWS_ROLE_TO_ASSUME`, `ECS_TASK_EXECUTION_ROLE_ARN`, `ECS_INFRASTRUCTURE_ROLE_ARN`).
- Diagnosed and fixed three real, sequential deployment failures (each confirmed from actual GitHub Actions logs, not guessed):
  1. **OIDC trust mismatch** — the `STP72-dev` GitHub organization has the OIDC subject-claim "immutable ID" customization enabled, so the actual `sub` claim is `repo:STP72-dev@322710513/STP72-company@1351216350:environment:production`, not the plain `repo:STP72-dev/STP72-company:environment:production` form. Confirmed by temporarily adding a workflow step that printed the real issued token's `sub`/`aud`/`iss` claims (added and removed in the same run). Fixed the trust policy template and the live role. (`7f5a3b6` debug step, `97d693c` fix)
  2. **Missing ECR permission** — `docker/build-push-action@v6` against ECR needs `ecr:BatchGetImage` even for a pure push (BuildKit checks for existing manifests). Added it to `STP72CompanyGitHubDeploy`'s inline policy. (`6a72552`)
  3. **Missing service-linked roles** — brand-new AWS account had never used ECS, ELB, or Application Auto Scaling, so `AWSServiceRoleForECS`, `AWSServiceRoleForElasticLoadBalancing`, and `AWSServiceRoleForApplicationAutoScaling_ECSService` didn't exist. Created all three once via the interactive admin session (not granted to the GitHub deploy role — one-time account bootstrap, not a recurring pipeline permission). Documented in `.aws/iam/README.md`. (`98a6d63`)
- **First successful production deployment**: GitHub Actions run [`33561626212`](https://github.com/STP72-dev/STP72-company/actions/runs/33561626212) — both `Code Quality & Definition of Done` and `Build Docker, Push to ECR, and Deploy ECS Express` jobs succeeded.
- Verified live, not assumed: ECS Express service `stp72-company` is `status.statusCode = ACTIVE`; deployed image is exactly the commit-SHA tag `98a6d63...`; `https://st-ac41566cdbe0408fb416df509df4a30b.ecs.eu-central-1.on.aws{/hu,/en/ai-solutions,/en/ai-solutions/ai-agents}` all returned HTTP 200; CloudWatch log group `/ecs/stp72-company` shows a clean Nitro startup with no errors.
- Wrote this handoff; archived the pre-existing `HANDOFF.md` (which had uncommitted, unrelated in-progress edits — see Context below) to `.handoffs/2026-09-02-pre-handoff.md` without discarding it.

### Files Changed

```
.agents/skills/*                              # de-symlinked to real files (6 skill directories)
.agents/skills/maintaining-agent-docs/scripts/validate.py  # node_modules exclusion fix
.agents/prompts/gh-actions+release_policy.md  # Prettier formatting only
.aws/iam/README.md                             # provisioning sequence + service-linked-role note
.aws/iam/github-actions-oidc-trust.json        # immutable-ID sub claim fix
.aws/iam/github-actions-ecs-express-policy.json # + ecr:BatchGetImage; Prettier formatting
.aws/iam/ecs-task-execution-policy.json        # Prettier formatting only
.github/workflows/deploy-aws.yml               # unrelated to this session's IAM fixes; debug step added+removed
.prettierignore                                # + .agents exclusion
HANDOFF.md                                     # this handoff (new)
.handoffs/2026-09-02-pre-handoff.md            # archived prior (concurrently-modified) handoff
```

No `src/**` or `docs/**` files were touched this session — `docs/07-operations-build-and-deployment.md` and `docs/10-deployment-and-cloud-infrastructure.md` have unrelated, uncommitted, accurate edits from a different concurrent session (see Context).

## Decisions Made

- **Created a brand-new AWS Organizations member account (`infra72`, `169406897447`) rather than repairing the old SSO profile** — because the only available credential was AWS root, and no non-root administrative access existed at all; the user also wanted a fresh account regardless.
- **Provisioned every AWS resource via the AWS CLI sequence in `.aws/iam/README.md`, not the console** — because it's scriptable, idempotent (`get-role` before `create-role` everywhere), and auditable, matching the account-neutral template design already in the repo.
- **Created the three missing service-linked roles via the interactive admin session instead of granting `iam:CreateServiceLinkedRole` to the GitHub deploy role** — because this is a one-time account bootstrap need (service-linked roles persist forever once created), not a recurring pipeline permission; widening the CI role's IAM permissions permanently for a one-time need would violate the documented least-privilege posture.
- **Kept the GitHub OIDC `sub` condition scoped to `:environment:production` only (no branch qualifier), despite an IAM Access Analyzer WARNING suggesting branch-scoping** — because the GitHub `production` environment already has a `main`-only custom deployment branch policy, and AWS's own OIDC documentation endorses the environment-scoped pattern as sufficient when environment protection rules exist.
- **De-symlinked `.agents/skills/*` into real committed files rather than `.gitignore`-ing the missing script** — because the workflow's Definition-of-Done gate depends on `.agents/skills/maintaining-agent-docs/scripts/validate.py` existing in a fresh CI checkout; a symlink to a local machine path can never work there.
- **Deferred the `stp72.com` DNS/ACM cutover entirely** — because it is a change to a live, public production domain that must not proceed without first recording the current apex record set as an explicit rollback target, and this session's scope/time was consumed by the pipeline diagnosis chain above.
- **Archived rather than overwrote the pre-existing `HANDOFF.md`** — because it had uncommitted edits that did not originate from this session (see Context for Next Session) and may represent another agent's in-progress work.

## Dead Ends

- **Tried:** validating the OIDC trust policy logic with `aws iam simulate-custom-policy` before waiting for another CI cycle → **Failed because:** that API evaluates identity-based/resource-based policies, not federated OIDC trust-condition matching against a `Federated` principal; it returned `InvalidInput: Policy input list item 1 has invalid content` and is not the right tool for this class of trust policy.
- **Tried:** assuming IAM/STS propagation delay explained the first two `Not authorized to perform sts:AssumeRoleWithWebIdentity` failures, and simply retrying → **Failed because:** a third attempt, well past any plausible propagation window, failed identically. The real cause was GitHub's immutable-ID subject-claim customization on this specific organization — only found by adding a temporary debug step that printed the actual issued token's claims from a live run.
- **Tried:** applying the corrected OIDC trust policy to the live IAM role with `aws iam update-assume-role-policy` → **Failed the first time because:** the file passed still contained the literal, unrendered `<AWS_ACCOUNT_ID>` placeholder (forgot to `sed`-render it first). Self-corrected within the same turn by re-rendering with the real account ID before the next workflow run; the role was briefly left with an unusable (not insecure — strictly more restrictive) trust policy for a few seconds, never exercised by CI in that state.

## Open Questions

- [ ] Desired production hostname: bare apex `stp72.com`, or a subdomain such as `www.stp72.com`? Determines the Route 53 record type and whether an apex↔`www` redirect is also needed.
- [ ] Should the other 5 vendored skills under `.agents/skills/` (`docs-architect`, `skill-creator`, `analyzing-ai-repos`, `plan-execute-review`, `writing-session-handoffs`) be kept in sync with their upstream sources on some cadence, or are they now considered forked/frozen local copies?
- [ ] What rollback SLA/monitoring window is wanted after the DNS cutover before the AWS-generated fallback endpoint (`https://st-ac41566cdbe0408fb416df509df4a30b.ecs.eu-central-1.on.aws`) is considered safe to stop relying on?
- [ ] The concurrently-running session's uncommitted `docs/07-operations-build-and-deployment.md` / `docs/10-deployment-and-cloud-infrastructure.md` edits (see Context) describe the same deployment accurately as of this session's end state — should they be reviewed and committed together with this handoff, or handled independently by that session?

## Next Steps

1. **Immediate:** Before touching any DNS record, capture the current rollback target. Run:
   ```sh
   ZONE_ID=$(aws route53 list-hosted-zones-by-name --profile default --dns-name stp72.com. --query "HostedZones[0].Id" --output text)
   aws route53 list-resource-record-sets --profile default --hosted-zone-id "$ZONE_ID" \
     --query "ResourceRecordSets[?Name=='stp72.com.' || Name=='www.stp72.com.']" > .aws/dns-rollback-2026-09-02.json
   ```
   Do not proceed to any Route 53 write until this file exists and has been reviewed.
2. Request/validate an ACM certificate for `stp72.com` (region `eu-central-1`, DNS validation), then attach it to the ECS Express service's ALB HTTPS listener with a host-header rule for `stp72.com`. Reference `docs/10-deployment-and-cloud-infrastructure.md` §10.8 for the intended sequence, but re-verify its content against this handoff first since it was edited by a different session.
3. Create the Route 53 apex alias record to the ECS Express ALB; verify `https://stp72.com/hu`, `/en/ai-solutions`, and `/en/ai-solutions/ai-agents` all return HTTP 200 before considering cutover complete. Keep the AWS-generated endpoint reachable as the rollback path until cutover is confirmed stable.
4. Review the uncommitted `docs/07-operations-build-and-deployment.md` and `docs/10-deployment-and-cloud-infrastructure.md` changes (from the concurrent session — see Context) against this handoff's facts, then commit them together with this handoff once reconciled.

## Context for Next Session

Branch `main`, up to date with `origin` (`https://github.com/STP72-dev/STP72-company.git`); last pushed commit is `98a6d63`.

**AWS access:** account `169406897447` (org member account named `infra72`), region `eu-central-1`. Local `default` CLI profile now uses IAM Identity Center SSO (session `stp72`, start URL `https://d-90667cdb26.awsapps.com/start`, SSO region `us-east-1`), role `AdministratorAccess`, assigned to Identity Center user `l7-sabo`. If `aws sts get-caller-identity --profile default` fails or errors, run `aws sso login --profile default` again — sessions are short-lived by design. **Never use an AWS root principal** for any operational action.

**Live production state:** ECS Express service `stp72-company` in cluster `default`, `ACTIVE`, running the `98a6d63` image, reachable at `https://st-ac41566cdbe0408fb416df509df4a30b.ecs.eu-central-1.on.aws`. `stp72.com` itself is **not yet** pointed at it — the public hosted zone exists but no cutover has started.

**GitHub Actions operational note:** the `production` environment requires a fresh manual reviewer approval on *every single run*, not just once ever — this was observed repeatedly and is expected GitHub deployment-protection behavior, not a bug. Approve at `https://github.com/STP72-dev/STP72-company/actions/runs/<run-id>`.

**Concurrent session note:** `HANDOFF.md`, `docs/07-operations-build-and-deployment.md`, and `docs/10-deployment-and-cloud-infrastructure.md` were all found with uncommitted local edits at the start of this session that this session did not make. Their content accurately describes the same deployment this session performed (same run ID, same image SHA), strongly suggesting a second, concurrently-running agent session in this same working directory. The prior `HANDOFF.md` was archived (not discarded) to `.handoffs/2026-09-02-pre-handoff.md`; the `docs/07`/`docs/10` edits were left untouched. Coordinate before committing further changes to those two files to avoid clobbering that session's work.

Do not print credentials, tokens, private keys, account identifiers beyond what is already documented here, or environment-file contents.
