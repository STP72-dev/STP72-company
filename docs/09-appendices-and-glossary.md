# Chapter 09: Appendices, Route Matrix & Domain Glossary

## 9.1 Complete Route Matrix

| Conceptual Key | Category | Hungarian Slug (`/hu/...`) | English Slug (`/en/...`) | Component Shell |
| :--- | :--- | :--- | :--- | :--- |
| `home` | Top-Level | `/hu` | `/en` | [`HomePage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/HomePage.tsx) |
| `ai-solutions` | Flagship Hub | `/hu/ai-megoldasok` | `/en/ai-solutions` | [`ServicePage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/ServicePage.tsx) |
| `business-systems` | Flagship Hub | `/hu/uzleti-rendszerek` | `/en/business-systems` | [`ServicePage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/ServicePage.tsx) |
| `data-forecasting` | Flagship Hub | `/hu/adat-es-elorejelzes` | `/en/data-forecasting` | [`ServicePage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/ServicePage.tsx) |
| `solutions` | Catalogue | `/hu/megoldasok` | `/en/solutions` | [`SolutionsPage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/SolutionsPage.tsx) |
| `references` | Evidence | `/hu/referenciak` | `/en/references` | [`ReferencesPage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/ReferencesPage.tsx) |
| `how-we-work` | Process | `/hu/hogyan-dolgozunk` | `/en/how-we-work` | [`ProcessPage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/ProcessPage.tsx) |
| `software-integrations` | Supporting | `/hu/szoftver-es-integraciok` | `/en/software-integrations` | [`ServicePage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/ServicePage.tsx) |
| `devops-infrastructure` | Supporting | `/hu/devops-infrastruktura` | `/en/devops-infrastructure` | [`SubPage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/SubPage.tsx) |
| `about` | Corporate | `/hu/rolunk` | `/en/about` | [`SubPage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/SubPage.tsx) |
| `contact` | Utility | `/hu/kapcsolat` | `/en/contact` | [`SubPage.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/components/pages/SubPage.tsx) |

---

## 9.2 Complete Solution Catalogue Matrix (13 Solutions)

| Solution Key | Family Key | Parent Flagship Page | Hungarian Path | English Path |
| :--- | :--- | :--- | :--- | :--- |
| `company-knowledge-ai` | `ai` | `ai-solutions` | `/hu/ai-megoldasok/vallalati-tudas-ai` | `/en/ai-solutions/company-knowledge-ai` |
| `ai-automation` | `ai` | `ai-solutions` | `/hu/ai-megoldasok/ai-automatizalas` | `/en/ai-solutions/ai-automation` |
| `ai-agents` | `ai` | `ai-solutions` | `/hu/ai-megoldasok/ai-agentek` | `/en/ai-solutions/ai-agents` |
| `ai-integration` | `ai` | `ai-solutions` | `/hu/ai-megoldasok/ai-integracio` | `/en/ai-solutions/ai-integration` |
| `inventory-wms` | `business` | `business-systems` | `/hu/uzleti-rendszerek/keszlet-es-wms` | `/en/business-systems/inventory-wms` |
| `erp-operations` | `business` | `business-systems` | `/hu/uzleti-rendszerek/erp-es-mukodesiranyitas` | `/en/business-systems/erp-operations` |
| `production` | `business` | `business-systems` | `/hu/uzleti-rendszerek/termeles` | `/en/business-systems/production` |
| `rental-asset-management`| `business` | `business-systems` | `/hu/uzleti-rendszerek/berles-es-eszkozkezeles` | `/en/business-systems/rental-asset-management` |
| `custom-business-system` | `business` | `business-systems` | `/hu/uzleti-rendszerek/egyedi-uzleti-rendszer` | `/en/business-systems/custom-business-system` |
| `analytics` | `data` | `data-forecasting` | `/hu/adat-es-elorejelzes/adatelemzes` | `/en/data-forecasting/analytics` |
| `forecasting` | `data` | `data-forecasting` | `/hu/adat-es-elorejelzes/elorejelzes` | `/en/data-forecasting/forecasting` |
| `what-if-planning` | `data` | `data-forecasting` | `/hu/adat-es-elorejelzes/what-if-tervezes` | `/en/data-forecasting/what-if-planning` |
| `ai-analyst` | `data` | `data-forecasting` | `/hu/adat-es-elorejelzes/ai-elemzo` | `/en/data-forecasting/ai-analyst` |

---

## 9.3 Domain & Technical Glossary

* **Invariant Conceptual Key**: A permanent, language-agnostic identifier (e.g. `company-knowledge-ai`) that binds components, search indexes, translations, and routes together regardless of URL string changes.
* **Zero-FOUC (Flash of Unstyled Content)**: An execution strategy where theme tokens (`light`/`dark`) are resolved synchronously via inline script before browser render painting occurs.
* **Demonstrator**: An end-to-end functional software project available publicly to verify engineering claims without referencing confidential client data.
* **Cause-Chain Traversal**: The process of recursively interrogating an `Error.cause` hierarchy to retain nested exceptions that would otherwise be discarded during network serialization.
* **Sectional Surface Contrast**: Creating visual hierarchy purely through variations in background luminance (`--layer-01`, `--layer-02`) rather than elevated drop shadows.

---

## 9.4 Troubleshooting & Diagnostics

| Symptom | Root Cause | Remediation |
| :--- | :--- | :--- |
| **`404 Page Not Found` on valid URL** | Slugs in URL belong to different language or mismatched family owner. | Verify URL parameters match [`src/config/routes.ts`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/config/routes.ts) and [`src/config/solutions.ts`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/config/solutions.ts). |
| **Theme flashing to white on page refresh in dark mode** | Inline script in `__root.tsx` was modified or removed. | Ensure [`themeInitScript`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/lib/theme.ts#L36-L46) is present in the `<head>` of [`src/routes/__root.tsx`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/routes/__root.tsx#L126). |
| **Search modal returns no results for existing text** | Query normalization mismatch or missing index group. | Check [`buildSearchIndex`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/lib/search-index.ts#L37-L113) to ensure target content is registered in index groups. |
| **TypeScript compile error on `content.pages[key]`** | Key missing from one of the language dictionaries (`hu.ts` or `en.ts`). | Check [`src/content/types.ts`](file:///home/w7-loqker/w7-workspace/selfbase/@stp72.com/repos/STP72-company/src/content/types.ts) and ensure both `hu.ts` and `en.ts` provide matching keys. |
