# STP72 ECS Express IAM Artifacts

These are JSON templates for the production release. Replace every
`<AWS_ACCOUNT_ID>` token in-memory after authenticating as the approved non-root
AWS administrator; do not commit rendered policies or an account identifier.

## Roles

| Role                                   | Trust policy                            | Permissions                                                                     |
| -------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------- |
| `STP72CompanyGitHubDeploy`             | `github-actions-oidc-trust.json`        | `github-actions-ecs-express-policy.json`                                        |
| `STP72CompanyEcsTaskExecution`         | `ecs-task-execution-trust.json`         | `ecs-task-execution-policy.json`                                                |
| `STP72CompanyEcsExpressInfrastructure` | `ecs-express-infrastructure-trust.json` | AWS managed `service-role/AmazonECSInfrastructureRoleforExpressGatewayServices` |

The task execution policy is intentionally an equivalent, resource-scoped
replacement for `AmazonECSTaskExecutionRolePolicy`: it pulls only the
`stp72-company` ECR image and emits only `/ecs/stp72-company` log streams.
The infrastructure policy remains AWS-managed because ECS Express Mode's managed
load balancer, security group, ACM, and autoscaling permissions change with the
service; AWS currently publishes it as version `v6`.

## Security Boundary

- The GitHub trust policy requires both `aud=sts.amazonaws.com` and the exact
  `repo:STP72-dev/STP72-company:environment:production` subject.
- The GitHub permissions policy scopes image upload to one ECR repository and
  `iam:PassRole` to the exact execution and infrastructure roles.
- No policy grants static credentials, administrator access, IAM role creation,
  Route 53 changes, ACM changes, secrets access, or application task-role access.
- The unscoped ECS read/create actions are constrained to `eu-central-1`; AWS's
  current ECS Express action requires the default cluster to be creatable and
  documents several deployment-state operations without resource-level examples.

## Provisioning Order

1. Create or verify the GitHub OIDC provider for `token.actions.githubusercontent.com`.
2. Render and create `STP72CompanyGitHubDeploy` from the first two JSON files.
3. Create `STP72CompanyEcsTaskExecution` from its trust and resource-scoped policy.
4. Create `STP72CompanyEcsExpressInfrastructure` and attach the AWS managed policy.
5. Wait for IAM propagation, then add the resulting ARNs as GitHub repository variables.

## Provisioning Sequence (AWS CLI)

Run this only in a terminal authenticated as the approved **non-root** AWS
administrator (`aws sts get-caller-identity` must not return a `:root` ARN).
It renders the account-neutral templates into a temporary directory,
substitutes the caller's own account ID, creates each resource only if it
does not already exist, and never writes a rendered file back into the
repository.

```sh
set -euo pipefail

# 0. Refuse to proceed as the account root principal.
CALLER_ARN=$(aws sts get-caller-identity --query Arn --output text)
if [[ "$CALLER_ARN" == *:root ]]; then
  echo "Refusing to provision as the AWS root principal." >&2
  exit 1
fi
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REGION=eu-central-1

# 1. Render templates into a temporary directory (never committed).
RENDER_DIR=$(mktemp -d)
trap 'rm -rf "$RENDER_DIR"' EXIT
for f in .aws/iam/*.json; do
  sed "s/<AWS_ACCOUNT_ID>/${ACCOUNT_ID}/g" "$f" > "$RENDER_DIR/$(basename "$f")"
done

# 2. GitHub OIDC provider (idempotent). AWS verifies the provider's TLS chain
#    against its trusted CA store, so --thumbprint-list is no longer required.
OIDC_ARN="arn:aws:iam::${ACCOUNT_ID}:oidc-provider/token.actions.githubusercontent.com"
if ! aws iam get-open-id-connect-provider --open-id-connect-provider-arn "$OIDC_ARN" >/dev/null 2>&1; then
  aws iam create-open-id-connect-provider \
    --url https://token.actions.githubusercontent.com \
    --client-id-list sts.amazonaws.com
fi

# 3. STP72CompanyGitHubDeploy (GitHub OIDC deployment role)
if ! aws iam get-role --role-name STP72CompanyGitHubDeploy >/dev/null 2>&1; then
  aws iam create-role --role-name STP72CompanyGitHubDeploy \
    --assume-role-policy-document "file://$RENDER_DIR/github-actions-oidc-trust.json"
fi
aws iam put-role-policy --role-name STP72CompanyGitHubDeploy \
  --policy-name STP72CompanyGitHubDeployPolicy \
  --policy-document "file://$RENDER_DIR/github-actions-ecs-express-policy.json"

# 4. STP72CompanyEcsTaskExecution (task execution role, resource-scoped)
if ! aws iam get-role --role-name STP72CompanyEcsTaskExecution >/dev/null 2>&1; then
  aws iam create-role --role-name STP72CompanyEcsTaskExecution \
    --assume-role-policy-document "file://$RENDER_DIR/ecs-task-execution-trust.json"
fi
aws iam put-role-policy --role-name STP72CompanyEcsTaskExecution \
  --policy-name STP72CompanyEcsTaskExecutionPolicy \
  --policy-document "file://$RENDER_DIR/ecs-task-execution-policy.json"

# 5. STP72CompanyEcsExpressInfrastructure (AWS-managed Express policy)
if ! aws iam get-role --role-name STP72CompanyEcsExpressInfrastructure >/dev/null 2>&1; then
  aws iam create-role --role-name STP72CompanyEcsExpressInfrastructure \
    --assume-role-policy-document "file://$RENDER_DIR/ecs-express-infrastructure-trust.json"
fi
aws iam attach-role-policy --role-name STP72CompanyEcsExpressInfrastructure \
  --policy-arn "arn:aws:iam::aws:policy/service-role/AmazonECSInfrastructureRoleforExpressGatewayServices"

# 6. Wait for IAM propagation, then print the ARNs to record as GitHub
#    repository variables (AWS_ACCOUNT_ID, AWS_ROLE_TO_ASSUME,
#    ECS_TASK_EXECUTION_ROLE_ARN, ECS_INFRASTRUCTURE_ROLE_ARN).
sleep 10
echo "AWS_ACCOUNT_ID=${ACCOUNT_ID}"
echo "AWS_ROLE_TO_ASSUME=arn:aws:iam::${ACCOUNT_ID}:role/STP72CompanyGitHubDeploy"
echo "ECS_TASK_EXECUTION_ROLE_ARN=arn:aws:iam::${ACCOUNT_ID}:role/STP72CompanyEcsTaskExecution"
echo "ECS_INFRASTRUCTURE_ROLE_ARN=arn:aws:iam::${ACCOUNT_ID}:role/STP72CompanyEcsExpressInfrastructure"
```

Before attaching, validate each rendered inline policy document with IAM
Access Analyzer (fails closed on `ERROR`-severity findings; `SECURITY_WARNING`
and `SUGGESTION` findings should be reviewed manually):

```sh
aws accessanalyzer validate-policy \
  --policy-document "file://$RENDER_DIR/github-actions-ecs-express-policy.json" \
  --policy-type IDENTITY_POLICY
```

References: [AWS IAM GitHub OIDC trust conditions](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html), [ECS Express action permissions](https://github.com/aws-actions/amazon-ecs-deploy-express-service), [ECS task execution role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html), [ECS Express infrastructure policy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonECSInfrastructureRoleforExpressGatewayServices.html), and [IAM Access Analyzer policy validation](https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-validation.html).
