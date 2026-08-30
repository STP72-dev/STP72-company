/**
 * Authoritative solution catalogue: three flagship families, thirteen sub-solutions.
 *
 * Keys are locale-independent and stable. Localized slugs live here and nowhere
 * else, so a nested page can always resolve to its equivalent in the other
 * locale. Software & Integrations and DevOps & Infrastructure deliberately stay
 * OUTSIDE this catalogue — they are supporting engineering capabilities.
 */

import { routeSlugs, type SubPageKey } from "./routes";
import { LOCALES, type Locale } from "./site";

export const SOLUTION_FAMILY_KEYS = ["ai", "business", "data"] as const;
export type SolutionFamilyKey = (typeof SOLUTION_FAMILY_KEYS)[number];

/** Each family is rendered under its existing flagship parent page. */
export const familyParentPage: Record<SolutionFamilyKey, SubPageKey> = {
  ai: "ai-solutions",
  business: "business-systems",
  data: "data-forecasting",
};

export const SOLUTION_KEYS = [
  "company-knowledge-ai",
  "ai-automation",
  "ai-agents",
  "ai-integration",
  "inventory-wms",
  "erp-operations",
  "production",
  "rental-asset-management",
  "custom-business-system",
  "analytics",
  "forecasting",
  "what-if-planning",
  "ai-analyst",
] as const;

export type SolutionKey = (typeof SOLUTION_KEYS)[number];

/** Authoritative order inside each family. */
export const solutionsByFamily: Record<SolutionFamilyKey, SolutionKey[]> = {
  ai: ["company-knowledge-ai", "ai-automation", "ai-agents", "ai-integration"],
  business: [
    "inventory-wms",
    "erp-operations",
    "production",
    "rental-asset-management",
    "custom-business-system",
  ],
  data: ["analytics", "forecasting", "what-if-planning", "ai-analyst"],
};

export const familyOfSolution: Record<SolutionKey, SolutionFamilyKey> = Object.fromEntries(
  SOLUTION_FAMILY_KEYS.flatMap((family) =>
    solutionsByFamily[family].map((key) => [key, family] as const),
  ),
) as Record<SolutionKey, SolutionFamilyKey>;

/** Localized last path segment of every nested solution page. */
export const solutionSlugs: Record<SolutionKey, Record<Locale, string>> = {
  "company-knowledge-ai": { hu: "vallalati-tudas-ai", en: "company-knowledge-ai" },
  "ai-automation": { hu: "ai-automatizalas", en: "ai-automation" },
  "ai-agents": { hu: "ai-agentek", en: "ai-agents" },
  "ai-integration": { hu: "ai-integracio", en: "ai-integration" },
  "inventory-wms": { hu: "keszlet-es-wms", en: "inventory-wms" },
  "erp-operations": { hu: "erp-es-mukodesiranyitas", en: "erp-operations" },
  production: { hu: "termeles", en: "production" },
  "rental-asset-management": { hu: "berles-es-eszkozkezeles", en: "rental-asset-management" },
  "custom-business-system": { hu: "egyedi-uzleti-rendszer", en: "custom-business-system" },
  analytics: { hu: "adatelemzes", en: "analytics" },
  forecasting: { hu: "elorejelzes", en: "forecasting" },
  "what-if-planning": { hu: "what-if-tervezes", en: "what-if-planning" },
  "ai-analyst": { hu: "ai-elemzo", en: "ai-analyst" },
};

/** Parent page key of a nested solution. */
export const parentPageOfSolution = (key: SolutionKey): SubPageKey =>
  familyParentPage[familyOfSolution[key]];

/** Absolute public path of a nested solution page in a locale. */
export function solutionPath(key: SolutionKey, locale: Locale): string {
  const parent = routeSlugs[parentPageOfSolution(key)][locale];
  return `/${locale}/${parent}/${solutionSlugs[key][locale]}`;
}

/** Resolves a localized `parent/child` slug pair back to its stable key. */
export function solutionKeyFromSlugs(
  locale: Locale,
  parentSlug: string,
  childSlug: string,
): SolutionKey | undefined {
  return SOLUTION_KEYS.find(
    (key) =>
      solutionSlugs[key][locale] === childSlug &&
      routeSlugs[parentPageOfSolution(key)][locale] === parentSlug,
  );
}

/** Route-map validation helper: every locale × solution pair with its path. */
export const solutionRouteMap = () =>
  LOCALES.flatMap((locale) =>
    SOLUTION_KEYS.map((key) => ({ locale, key, path: solutionPath(key, locale) })),
  );

/** Family owning a flagship parent page, if the page is a catalogue parent. */
export const familyOfParentPage = (page: SubPageKey): SolutionFamilyKey | undefined =>
  SOLUTION_FAMILY_KEYS.find((family) => familyParentPage[family] === page);
