<!-- BEGIN maintaining-agent-docs (generated) -->

# Agent Operating Guidelines: STP72 Foundation

Canonical instructions and operating boundaries for AI coding agents working on the STP72 Foundation repository (`STP72-company`).

## Purpose & System Overview

- **Project**: STP72 Foundation (`tanstack_start_ts`) — corporate web platform and technical solutions catalogue for SME AI, business systems, and data analytics (`src/config/site.ts:L11-17`).
- **Core Architecture**: Fullstack TanStack Start (SSR) + Nitro, React 19, TypeScript, and Tailwind CSS v4 (`package.json:L45-70`).
- **Detailed System Manual**: Deep architectural specifications and references are located in `docs/` (`docs/README.md`).

## Setup & Installation

- **Prerequisites**: Node.js 20+ or Bun 1.2+ (`README.md:L5`, `package.json:L15`).
- **Install Dependencies**:
  ```sh
  npm install
  # or
  bun install
  ```
  _(Source: `package.json:L1-90`, `README.md:L10`)_

## Build & Run Commands

All commands verified from `package.json:L6-13`:

- **Development Server**: `npm run dev` (or `bun run dev` / `vite dev`)
- **Production Build**: `npm run build` (or `bun run build` / `vite build`)
- **Development Build**: `npm run build:dev` (`vite build --mode development`)
- **Preview Production Build**: `npm run preview` (`vite preview`)
- **Linting**: `npm run lint` (`eslint .`)
- **Formatting**: `npm run format` (`prettier --write .`)

## Test & Verification (Definition of Done)

Before marking any task complete or submitting changes, agents MUST execute:

1. **Type Checking**: Run `npx tsc --noEmit` (or `bun x tsc --noEmit`) with zero errors (`tsconfig.json:L1-25`).
2. **Linting**: Run `npm run lint` (`eslint.config.js:L1-37`).
3. **Format Check**: Run `npm run format` (`.prettierrc:L1-8`).
4. **Build Verification**: Run `npm run build` to ensure SSR bundles compile cleanly (`vite.config.ts:L9-15`).
5. **Documentation Validation**: Run `python3 .agents/skills/maintaining-agent-docs/scripts/validate.py .`

## Project Structure & Layout

- `src/routes/`: File-based TanStack Start route tree (`src/routes/README.md:L1-21`).
  - `__root.tsx`: Document root shell, SEO metadata, theme initialization script (`src/routes/__root.tsx:L81-147`).
  - `index.tsx`: Root redirect to default locale (`/hu`) (`src/routes/index.tsx:L5-10`).
  - `$locale/index.tsx`: Localized homepage (`src/routes/$locale/index.tsx:L9-29`).
  - `$locale/$slug.index.tsx`: Flagship hubs & standalone subpages (`src/routes/$locale/$slug.index.tsx:L20-58`).
  - `$locale/$slug.$child.tsx`: 13 nested sub-solution pages (`src/routes/$locale/$slug.$child.tsx:L16-46`).
- `src/config/`: Central routing and taxonomy configuration (`site.ts`, `routes.ts`, `solutions.ts`).
- `src/content/`: Strongly typed content engine (`types.ts`, `hu.ts`, `en.ts`, `solutions.hu.ts`, `solutions.en.ts`).
- `src/components/`: Design system primitives (`ds/`), layout structures (`layout/`), type-safe links (`nav/`), page views (`pages/`), and Radix atomic UI (`ui/`).
- `src/lib/`: Error capture (`error-capture.ts`), search indexer (`search-index.ts`), dynamic SEO (`seo.ts`), and theme manager (`theme.ts`).
- `src/server.ts`: Nitro SSR entrypoint & catastrophic error interceptor (`src/server.ts:L47-61`).
- `src/start.ts`: TanStack Start instance with CSRF middleware (`src/start.ts:L23-29`).
- `src/styles.css`: Tailwind v4 `@theme` mappings & OKLCH color tokens (`src/styles.css:L17-91`).
- `docs/`: In-depth architecture manual and technical specifications (`docs/README.md`).

## Code Style, Safety & Conventions

1. **Zero-Inline Copy Policy**: Never write customer-facing copy directly in JSX components. Define schemas in `src/content/types.ts` and add translations to `src/content/{hu,en}.ts`.
2. **Invariant Routing Rule**: Never hardcode localized URLs. Always use `<PageLink page="..." locale={locale}>` or `<SolutionLink solution="..." locale={locale}>` (`src/components/nav/PageLink.tsx:L23-68`).
3. **Design System Constraints**:
   - Adhere to the IBM Carbon / Plex discipline (rectangular geometry `0px` radius, 8px spatial grid).
   - Use semantic OKLCH tokens (`--background`, `--layer-01`, `--layer-02`, `--layer-03`, `--accent`).
   - Status cues must always pair color with shape glyphs (`●`, `▲`, `■`, `◆`) via `StatusIndicator` (`src/components/ds/StatusIndicator.tsx:L14-19`).
4. **AI Transparency Rule**: Any AI feature or model output must include an `AILabel` component with disclosures for task description, source data, and verification steps (`src/components/ds/AILabel.tsx:L32-93`).
5. **No Secrets / Credential Leaks**: Never commit `.env` files, API tokens, private keys, or absolute home paths (`eslint.config.js:L1-37`).

## High-Risk Paths

- `src/config/routes.ts` & `src/config/solutions.ts`: Breaking changes here break slug resolution, 404 guards, and SEO hreflang across the entire site.
- `src/content/types.ts`: Changes to interfaces require synchronizing all four dictionary files (`hu.ts`, `en.ts`, `solutions.hu.ts`, `solutions.en.ts`).
- `src/server.ts` & `src/start.ts`: Modifying server middleware or error trapping can cause unhandled 500 response drops or CSRF vulnerabilities.
- `src/routes/__root.tsx`: Controls HTML `lang`, critical CSS links, Google Fonts preconnect, and zero-FOUC theme scripts.

<!-- END maintaining-agent-docs -->
