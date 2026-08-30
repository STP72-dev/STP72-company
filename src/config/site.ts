/**
 * Central site & brand configuration.
 * Single source of truth for brand naming, descriptor, locales and contact data.
 */

export const LOCALES = ["hu", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "hu";

export const siteConfig = {
  brand: "STP72",
  /** Customer-facing descriptor — change in one place. */
  descriptor: {
    hu: "AI, üzleti szoftver és adatelemzés",
    en: "AI, business software and data solutions",
  },

  localeLabels: {
    hu: "Magyar",
    en: "English",
  },
  htmlLang: {
    hu: "hu",
    en: "en",
  },
  contact: {
    email: "hello@stp72.com",
  },
  links: {
    /** Public engineering repositories. Update when the org handle changes. */
    github: "https://github.com/w7-mgfcode",
  },
} as const;

export const localePath = (locale: Locale, path = "") =>
  `/${locale}${path ? (path.startsWith("/") ? path : `/${path}`) : ""}`;
