import { LOCALES, siteConfig, DEFAULT_LOCALE, type Locale } from "@/config/site";
import { pagePath, type PageKey } from "@/config/routes";
import { solutionPath, type SolutionKey } from "@/config/solutions";
import type { SeoContent } from "@/content/types";

type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

type LinkTag = { rel: string; href: string; hrefLang?: string };

export type LocaleHeadInput = {
  locale: Locale;
  seo: SeoContent;
  /** Conceptual page in the route registry; drives canonical + hreflang URLs. */
  page?: PageKey;
  /** Nested solution page. When set it takes precedence over `page` for URLs. */
  solution?: SolutionKey;
  ogType?: "website" | "article";
};

/**
 * Reusable, locale-aware head model.
 * Canonical and hreflang alternates are derived from the route registry, so a
 * Hungarian page always points at the matching English slug and vice versa.
 */
export function buildLocaleHead({
  locale,
  seo,
  page = "home",
  solution,
  ogType = "website",
}: LocaleHeadInput): { meta: MetaTag[]; links: LinkTag[] } {
  const pathFor = (l: Locale) => (solution ? solutionPath(solution, l) : pagePath(page, l));
  const url = pathFor(locale);
  const title = seo.title;
  const description = seo.description;

  const meta: MetaTag[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: seo.ogTitle ?? title },
    { property: "og:description", content: seo.ogDescription ?? description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteConfig.brand },
    { property: "og:locale", content: locale === "hu" ? "hu_HU" : "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.ogTitle ?? title },
    { name: "twitter:description", content: seo.ogDescription ?? description },
  ];

  const links: LinkTag[] = [
    { rel: "canonical", href: url },
    ...LOCALES.map((l) => ({
      rel: "alternate",
      hrefLang: l,
      href: pathFor(l),
    })),
    { rel: "alternate", hrefLang: "x-default", href: pathFor(DEFAULT_LOCALE) },
  ];

  return { meta, links };
}
