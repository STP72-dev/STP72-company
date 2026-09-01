# STP72-company — Context Document

## Identity

STP72 Foundation is a bilingual Hungarian/English, SSR corporate website and solution catalogue. It presents three primary solution families (AI, business systems, data/forecasting), thirteen detail solutions, supporting engineering capabilities, references, process, and contact information. It is not itself an AI agent or application: AI-related statements are static catalogue content; the `AILabel` component is a ready transparency control for any future model output.

## Core Concepts

| Concept             | Definition                                                                           | Where it appears                          |
| ------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------- |
| Conceptual page key | Locale-independent identity for each site destination.                               | `config/routes.ts`                        |
| Localized slug      | URL segment for a page/solution in Hungarian or English.                             | `config/routes.ts`, `config/solutions.ts` |
| Solution family     | AI, business, or data group owning a flagship parent page.                           | `config/solutions.ts`                     |
| Content dictionary  | Fully typed locale object with all visitor-facing strings.                           | `content/types.ts`, `content/{hu,en}.ts`  |
| Page template       | Shared component rendering a content shape, not a hard-coded page.                   | `components/pages/*`                      |
| Evidence maturity   | Demonstrator, reference architecture, or prototype; presented with a glyph and text. | `StatusIndicator.tsx`                     |

## Architecture

**Type:** full-stack SSR content platform

**Stack:** TanStack Start + Router, React 19, TypeScript, Vite/Nitro, Tailwind CSS v4

**Primary workflow:** URL → guarded stable key → localized typed data → page template → SSR HTML/hydration

The only route files are root, locale home, localized single-slug page, and localized parent/child detail. A page key selects the correct template; both content and SEO are derived from that same key. The shell owns theme, accessibility landmarks, navigation, footer, search, and locale switching.

## Patterns

| ID      | Type              | Name                               | Key files                                       |
| ------- | ----------------- | ---------------------------------- | ----------------------------------------------- |
| PAT_001 | config-driven     | localized route registry           | `config/routes.ts`, `config/solutions.ts`       |
| PAT_002 | typed schema      | bilingual content engine           | `content/types.ts`, `content/{hu,en}.ts`        |
| PAT_003 | routing           | guarded reverse slug resolution    | `routes/$locale/*`                              |
| PAT_004 | template dispatch | reusable page shells               | `components/pages/*`                            |
| PAT_005 | derived metadata  | canonical + hreflang SEO           | `lib/seo.ts`                                    |
| PAT_006 | client index      | weighted local search              | `lib/search-index.ts`, `SiteSearch.tsx`         |
| PAT_007 | design system     | semantic CSS tokens + theme        | `styles.css`, `lib/theme.ts`                    |
| PAT_008 | error handling    | SSR error containment              | `start.ts`, `server.ts`, `lib/error-capture.ts` |
| PAT_009 | delivery          | Docker/ECR/ECS Express CI pipeline | `Dockerfile`, workflow                          |
| PAT_010 | transparency      | AI disclosure primitive            | `components/ds/AILabel.tsx`                     |

## Integration Points

| System               | Protocol                              | Purpose                    |
| -------------------- | ------------------------------------- | -------------------------- |
| Google Fonts         | HTTPS                                 | IBM Plex typography        |
| Browser Web APIs     | storage, media query, keyboard events | theme, search, interaction |
| GitHub Actions / AWS | OIDC, Docker, AWS CLI                 | build and intended deploy  |

## Key Files

| File                                             | Purpose                                               |
| ------------------------------------------------ | ----------------------------------------------------- |
| `src/config/site.ts`                             | locales, brand, contact and external link constants   |
| `src/config/routes.ts`                           | page keys, localized page slugs and navigation groups |
| `src/config/solutions.ts`                        | family/solution taxonomy and localized detail paths   |
| `src/content/types.ts`                           | content contracts; edit before adding a content field |
| `src/content/hu.ts`, `en.ts`                     | primary locale dictionaries                           |
| `src/content/solutions.hu.ts`, `solutions.en.ts` | solution catalogue and all detail copy                |
| `src/routes/$locale/$slug.index.tsx`             | validates and dispatches normal localized pages       |
| `src/routes/$locale/$slug.$child.tsx`            | validates and renders solution details                |
| `src/components/nav/PageLink.tsx`                | only normal typed navigation boundary                 |
| `src/lib/seo.ts`                                 | localized canonical and alternate tags                |
| `src/lib/search-index.ts`                        | content-derived search corpus and scoring             |
| `src/start.ts` / `src/server.ts`                 | security/error middleware and SSR response handling   |
| `src/styles.css`                                 | global semantic visual tokens                         |
| `.github/workflows/deploy-aws.yml`               | validation and delivery pipeline                      |

## Usage

**Run:** `bun run dev` or `npm run dev`

**Verify:** `bun x tsc --noEmit && bun run lint && bun run build`; formatting script is a writer, so inspect its intended scope before running it.

**Extend:** Define/adjust content schemas first; update both dictionaries; add stable routes/solution keys and both slugs; use `PageLink`/`SolutionLink`; let build regenerate `routeTree.gen.ts`.

## Research Context

- File-based routing should own the generated route tree. [TanStack Router](https://tanstack.com/router/latest/docs/routing/file-based-routing)
- Start must explicitly retain CSRF middleware once `start.ts` is customized. [TanStack Start](https://tanstack.com/start/latest/docs/framework/react/guide/server-functions)
- ECS Express Mode is the approved managed-container target for this repository; App Runner is historical context only. [AWS](https://docs.aws.amazon.com/apprunner/latest/dg/apprunner-availability-change.html)
