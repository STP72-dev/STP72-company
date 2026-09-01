# STP72-company — Architecture Overview

## Repository Identity

- **Name:** STP72 Foundation (`tanstack_start_ts` package)
- **URL:** https://github.com/STP72-dev/STP72-company
- **Primary language:** TypeScript
- **Actual repo type:** localized full-stack corporate web platform (the automated classifier's `workflow-orchestrator` result is a false positive caused by workflow and flow terminology in content and files)
- **Analysis scope:** 127 non-generated, non-secret repository files; 2026-08-31; research depth: deep

## Tech Stack

| Technology              | Version in manifest | Role                                                  |
| ----------------------- | ------------------: | ----------------------------------------------------- |
| TanStack Start / Router |         1.168–1.170 | SSR application shell, file-based routes, typed links |
| React / React Query     |        19.2 / 5.101 | UI rendering and router context client                |
| Vite / Nitro            |        8.1 / 3 beta | development/build pipeline and Node server bundle     |
| Tailwind CSS            |                 4.2 | CSS-first token system and utilities                  |
| TypeScript              |                 5.8 | strict content, route, and component contracts        |
| Radix UI                |                 1.x | accessible interaction primitives                     |

## Architecture Summary

STP72 is a server-rendered, bilingual catalogue for AI, business-system, and data/forecasting services. It has no live data source, authentication, API client, database, or server function at present: the product is rendered from strongly typed Hungarian and English dictionaries. The content model deliberately separates stable conceptual keys from localized copy and slugs.

The main durability mechanism is the route/content taxonomy. `src/config/routes.ts` maps eleven conceptual pages to two localized slugs; `src/config/solutions.ts` maps three solution families and thirteen nested solution keys. Route guards resolve incoming slugs back into those stable keys, while `PageLink` and `SolutionLink` are the only normal URL constructors. This prevents cross-locale links, stale hard-coded URLs, and mismatched canonical/hreflang tags.

The UI is a small set of page templates over the content contracts in `src/content/types.ts`, with localized data in `hu.ts`, `en.ts`, and the split solution files. SSR is wrapped twice: Start request middleware converts unexpected application errors to a safe HTML response, while `src/server.ts` normalizes h3's swallowed JSON 500 output. Client-only enhancements are isolated to search, theme choice, responsive navigation, and content switchers.

## Key Decisions

| Decision                                                      | Rationale                                                                                                             | Evidence                                                                                                             |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Stable keys before localized paths                            | A page/solution keeps its identity when language changes, copy changes, or a slug changes.                            | `src/config/routes.ts`, `src/config/solutions.ts`                                                                    |
| Dictionary-driven visible copy                                | Translation completeness and tone are type-checked instead of being distributed through JSX.                          | `src/content/types.ts`, `src/content/{hu,en}.ts`                                                                     |
| Four route templates rather than one file per catalogue entry | 13 detail pages share one presentation shell while retaining independent SEO and editorial data.                      | `src/routes/$locale/$slug.$child.tsx`, `src/components/pages/SolutionDetailPage.tsx`                                 |
| CSS-first design tokens                                       | Tailwind v4 utilities resolve semantic tokens, while light/dark values stay in `:root` and `.dark`.                   | `src/styles.css`; [Tailwind theme docs](https://tailwindcss.com/docs/theme)                                          |
| Explicit CSRF after defining `start.ts`                       | TanStack Start does not auto-install its default middleware when `src/start.ts` exists.                               | `src/start.ts`; [TanStack Start docs](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions) |
| Node-server container build                                   | The custom server entry needs a standalone Nitro Node listener rather than the Vite-config default Cloudflare target. | `vite.config.ts`, `Dockerfile`                                                                                       |

## Entry Points

| Entry point            | Purpose                                                        | Command                   |
| ---------------------- | -------------------------------------------------------------- | ------------------------- |
| `src/router.tsx`       | Creates a fresh QueryClient and typed TanStack Router.         | `bun run dev`             |
| `src/start.ts`         | Registers request error handling and CSRF middleware.          | invoked by TanStack Start |
| `src/server.ts`        | Nitro fetch entry and catastrophic-SSR response normalization. | built by `bun run build`  |
| `src/routes/index.tsx` | Redirects `/` to `/hu`.                                        | browser request           |
| `Dockerfile`           | Builds and runs `.output/server/index.mjs`.                    | `docker compose up -d`    |

## Directory Structure

```text
STP72-company/
├── src/
│   ├── config/       # stable locales, page keys/slugs, solution taxonomy
│   ├── content/      # schemas plus Hungarian/English dictionaries
│   ├── routes/       # four URL shapes and root document shell
│   ├── components/   # page templates, navigation, layout, DS primitives
│   ├── lib/          # SEO, search, theme, and SSR error utilities
│   ├── start.ts      # Start middleware configuration
│   └── server.ts     # custom Nitro SSR entry
├── docs/             # existing 10-chapter engineering manual
├── .github/workflows/# validation + ECR/ECS Express pipeline
└── Dockerfile        # production Node/Nitro image
```

## Related Documents

- [Logic Map](logic-map.md)
- [Diagrams](diagrams.md)
- [Research Notes](research-notes.md)
- [Context](context.md)
