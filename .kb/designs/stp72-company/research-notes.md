# STP72-company — Research Notes

## Research Scope

**Analyzed patterns:** PAT_001 through PAT_010

**Detected frameworks:** TanStack Start, TanStack Router, Vite, Nitro, Tailwind CSS v4, React 19, GitHub Actions, Amazon ECS Express Mode

**Research depth:** deep

**Queries executed:** 8, restricted to framework/vendor documentation.

## Findings by Pattern

### PAT_003: File-based route guard and generated tree

**Queries:** TanStack Router file-based routing, file-route conventions, router construction.

TanStack documents that supported bundlers generate route configuration/tree from the filesystem and that `createFileRoute` is the route API. This supports the repository rule that `src/routeTree.gen.ts` is generated, not manually changed. [TanStack file-based routing](https://tanstack.com/router/latest/docs/routing/file-based-routing)

**Key takeaway:** Preserve the four compact route shapes and move only conceptual resolution into configuration; adding one physical route per localized slug would weaken the current invariant.

### PAT_008: Request middleware and CSRF

**Query:** TanStack Start CSRF middleware after custom `src/start.ts`.

TanStack confirms that defining `src/start.ts` requires re-adding `createCsrfMiddleware` to preserve the default protection for server functions. The project does exactly this. [TanStack Start server-functions guide](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions)

**Key takeaway:** Any future server function must keep the CSRF middleware and add authorization at the function/data boundary; `beforeLoad` alone is only route UX.

### PAT_007: CSS token design system

**Query:** Tailwind CSS v4 theme variables and CSS-first configuration.

Tailwind v4 uses top-level `@theme` variables to generate utilities; `@theme inline` is appropriate when tokens reference CSS custom properties. That matches the `src/styles.css` design-token mapping. [Tailwind theme variables](https://tailwindcss.com/docs/theme)

**Key takeaway:** Add visual tokens in `src/styles.css` first, then consume semantic utility names. Do not replace tokens with arbitrary raw colors in page components.

### PAT_009: Production build and AWS deployment

**Queries:** Vite production build; AWS App Runner availability change; ECS Express Mode GitHub Actions deployment.

Vite documents `vite build` as the production build command, consistent with the `build` script. [Vite production builds](https://vite.dev/guide/build) AWS documents ECS Express Mode as the managed successor for new customers moving from App Runner, with GitHub Actions building images, pushing them to ECR, and deploying the service. [AWS availability change](https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html)

**Material current constraint:** AWS stopped accepting new App Runner customers on **2026-03-31**. This repository therefore targets ECS Express Mode, whose ECR repository, IAM roles, protected GitHub environment, and release variables remain to be configured. [AWS availability change](https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html)

**Key takeaway:** Before provisioning, pass the repository quality gate, then configure ECR, least-privilege IAM roles, GitHub OIDC, and the protected release environment for ECS Express Mode.

## Best Practices

| Practice                                                      | Source                                                                                                        | Applies to |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------- |
| Treat generated route trees as build output.                  | [TanStack Router](https://tanstack.com/router/latest/docs/routing/file-based-routing)                         | PAT_003    |
| Reinstall CSRF middleware when owning Start configuration.    | [TanStack Start](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions)               | PAT_008    |
| Keep token-to-utility mapping explicit in CSS.                | [Tailwind](https://tailwindcss.com/docs/theme)                                                                | PAT_007    |
| Deploy an immutable ECR image through the ECS Express action. | [AWS availability change](https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html) | PAT_009    |

## Alternatives

| Current approach                           | Alternative                    | Tradeoff                                                                                                               | Source                                                                                                        |
| ------------------------------------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ECS Express Mode as primary compute target | Standard ECS/Fargate service   | ECS Express reduces infrastructure configuration; standard ECS/Fargate is the fallback if Express Mode is unavailable. | [AWS availability change](https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html) |
| Typed route helpers                        | raw path strings in components | Raw strings bypass locale/slug invariants and SEO parity.                                                              | repository source, PAT_001                                                                                    |
| Dictionary content                         | JSX-embedded translations      | Inline copy removes the compile-time completeness boundary.                                                            | repository source, PAT_002                                                                                    |
