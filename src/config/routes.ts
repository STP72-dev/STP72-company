/**
 * Central, locale-independent route registry.
 *
 * Every conceptual page has one stable key and one localized slug per locale.
 * Components must build URLs with `pagePath()` / the `page` prop instead of
 * hard-coding literal paths, so language switching can preserve the current
 * conceptual page and slugs can change in exactly one place.
 */

import { LOCALES, type Locale } from "./site";

export const PAGE_KEYS = [
  "home",
  "ai-solutions",
  "business-systems",
  "data-forecasting",
  "software-integrations",
  "devops-infrastructure",
  "solutions",
  "references",
  "how-we-work",
  "about",
  "contact",
] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

/** Sub-pages: every page that has its own localized slug segment. */
export type SubPageKey = Exclude<PageKey, "home">;

export const SUB_PAGE_KEYS = PAGE_KEYS.filter((key): key is SubPageKey => key !== "home");

/** Localized slug segments. `home` has no segment — it is `/{locale}`. */
export const routeSlugs: Record<SubPageKey, Record<Locale, string>> = {
  "ai-solutions": { hu: "ai-megoldasok", en: "ai-solutions" },
  "business-systems": { hu: "uzleti-rendszerek", en: "business-systems" },
  "data-forecasting": { hu: "adat-es-elorejelzes", en: "data-forecasting" },
  "software-integrations": { hu: "szoftver-es-integraciok", en: "software-integrations" },
  "devops-infrastructure": { hu: "devops-infrastruktura", en: "devops-infrastructure" },
  solutions: { hu: "megoldasok", en: "solutions" },
  references: { hu: "referenciak", en: "references" },
  "how-we-work": { hu: "hogyan-dolgozunk", en: "how-we-work" },
  about: { hu: "rolunk", en: "about" },
  contact: { hu: "kapcsolat", en: "contact" },
};

/** Absolute public path for a conceptual page in a locale. */
export function pagePath(page: PageKey, locale: Locale): string {
  if (page === "home") return `/${locale}`;
  return `/${locale}/${routeSlugs[page][locale]}`;
}

/** Resolves a localized slug back to its conceptual key, per locale. */
export function pageKeyFromSlug(locale: Locale, slug: string): SubPageKey | undefined {
  return SUB_PAGE_KEYS.find((key) => routeSlugs[key][locale] === slug);
}

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/**
 * Navigation information architecture — intentionally unequal.
 * Flagship offerings sit in the primary bar; supporting pages live behind
 * a restrained "More" menu. Contact stays a utility action, never a nav item.
 */
export const navPrimary: PageKey[] = [
  "ai-solutions",
  "business-systems",
  "data-forecasting",
  "solutions",
  "references",
];

export const navMore: PageKey[] = [
  "software-integrations",
  "devops-infrastructure",
  "how-we-work",
  "about",
];
