# Session Handoff

> **Date:** 2026-09-01
> **Session focus:** Complete the ECS Express production release and document the remaining custom-domain cutover.
> **Status:** partial — application release is healthy; `stp72.com` cutover is pending.

## What Was Done

- Completed the GitHub Actions validation, immutable ECR publication, and ECS Express deployment path through a non-root administrative session. GitHub Actions run `33561626212` completed both jobs successfully.
- Verified the ECS Express service is `ACTIVE` and uses the immutable image for commit `98a6d63…`.
- Verified HTTP 200 at the AWS-generated HTTPS endpoint for `/hu`, `/en/ai-solutions`, and `/en/ai-solutions/ai-agents`; CloudWatch startup logs were clean.
- Corrected each independent pipeline blocker: non-portable agent-skill symlinks, validation scanning generated dependencies, OIDC subject-claim customization, ECR upload permission, and missing one-time service-linked roles in the new AWS account.
- Provisioned the GitHub `production` environment and the required non-secret repository variables after the AWS roles existed. The release continues to use GitHub OIDC only; no long-lived AWS key is stored.
- Updated the AWS deployment documentation to distinguish verified live infrastructure from the deferred Route 53/ACM phase.

## Decisions Made

- **ECS Express Mode remains the production architecture in `eu-central-1`.** It was available, deployed successfully, and required no App Runner or standard ECS/Fargate fallback.
- **The GitHub OIDC trust uses the exact immutable-ID `sub` emitted by the organization.** The generic name-only subject failed because GitHub immutable-ID subject customization is enabled. Keep the committed trust-template condition unchanged unless a freshly issued production token proves a new value.
- **The GitHub deployment role includes `ecr:BatchGetImage`.** Docker/ECR publication required it in addition to the earlier upload actions.
- **Service-linked roles were bootstrapped interactively, not delegated to GitHub Actions.** ECS, ELB, and Application Auto Scaling roles were absent in the new account; this is a one-time account setup, not a recurring deployment permission.
- **Do not use AWS root.** All future AWS inspection and cutover work must use the established non-root administrative session.
- **Do not change DNS before recording rollback state.** The current `stp72.com` apex `A` and `AAAA` records and targets are not yet captured in this release phase.

## Release Evidence

| Check | Result |
| --- | --- |
| GitHub Actions | Run `33561626212`, validation and release jobs successful |
| ECR / deployed release | Immutable commit-SHA image beginning `98a6d63` |
| ECS Express | `ACTIVE` |
| Application health | HTTP 200: `/hu`, `/en/ai-solutions`, `/en/ai-solutions/ai-agents` |
| Runtime logs | Clean application startup; no observed errors |
| Final hostname | Not yet cut over; service is currently verified at its AWS-generated HTTPS endpoint |

## Files and State Worth Preserving

- [`.github/workflows/deploy-aws.yml`](.github/workflows/deploy-aws.yml) — Bun quality gate, immutable ECR push, protected GitHub OIDC, and ECS Express deployment.
- [`.aws/iam/README.md`](.aws/iam/README.md) — IAM role boundaries, immutable-ID trust explanation, and one-time service-linked-role bootstrap record.
- [`.aws/iam/github-actions-oidc-trust.json`](.aws/iam/github-actions-oidc-trust.json) — verified OIDC trust condition; do not replace with the generic name-only form.
- [`docs/10-deployment-and-cloud-infrastructure.md`](docs/10-deployment-and-cloud-infrastructure.md) — authoritative release state and custom-domain runbook.
- [`docs/07-operations-build-and-deployment.md`](docs/07-operations-build-and-deployment.md) — operational documentation link to the release record.

The working tree contains the documentation refresh from this session. Preserve unrelated changes and never reset, checkout, or discard the worktree wholesale.

## Remaining Work

1. **Immediate, read-only:** authenticate with the established non-root AWS profile, locate the public hosted zone, and record the current apex rollback target before changing anything:

   ```sh
   aws route53 list-hosted-zones-by-name --dns-name stp72.com --max-items 1
   aws route53 list-resource-record-sets --hosted-zone-id <PUBLIC_HOSTED_ZONE_ID> --query "ResourceRecordSets[?Name == 'stp72.com.']"
   ```

   Expected outcome: saved current `A` and `AAAA` apex record sets, including alias target fields if present.
2. Request or confirm authorization for the public DNS change, then create or validate the ACM certificate in `eu-central-1`, complete DNS validation, and configure the AWS-supported ALB listener/host routing for `stp72.com`.
3. Change the Route 53 apex alias only after certificate issuance and service health are confirmed. Verify `https://stp72.com`, root locale redirect, `/hu`, `/en/ai-solutions`, and `/en/ai-solutions/ai-agents`.
4. If cutover fails, immediately restore the recorded apex record set and verify the rollback target.

## Safety Notes for the Next Session

- Never print credentials, tokens, private keys, account identifiers, or environment-file contents.
- Never use the AWS root principal for normal inspection, IAM, deployment, ACM, ALB, or Route 53 operations.
- Keep rollback images immutable and use the deployed commit SHA or digest, not `latest`.
- Do not report a certificate, listener rule, Route 53 change, or final-domain success unless it is verified by an AWS/API/DNS/HTTPS observation.
