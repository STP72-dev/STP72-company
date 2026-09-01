import type { Locale } from "@/config/site";
import { SUB_PAGE_KEYS, type PageKey } from "@/config/routes";
import {
  SOLUTION_FAMILY_KEYS,
  familyParentPage,
  parentPageOfSolution,
  solutionsByFamily,
  type SolutionKey,
} from "@/config/solutions";
import { getContent } from "@/content";
import type { SearchGroup, ServiceContent } from "@/content/types";

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  /** Conceptual destination page from the route registry. */
  page: PageKey;
  /** Optional in-page anchor appended to the destination route. */
  hash?: string;
  /** Set when the result addresses a nested solution page directly. */
  solution?: SolutionKey;
  group: SearchGroup;
};

export type SearchResult = SearchEntry & { score: number };

/** Services map onto their real destination pages, not onto homepage anchors. */
const servicePage: Record<ServiceContent["key"], PageKey> = {
  "ai-automation": "ai-solutions",
  "business-applications": "business-systems",
  "data-forecasting": "data-forecasting",
  "integration-operations": "software-integrations",
};

/** Builds the client-side index from the real localized site content. */
export function buildSearchIndex(locale: Locale): SearchEntry[] {
  const c = getContent(locale);
  const entries: SearchEntry[] = [];

  // Primary results: real localized pages.
  for (const key of SUB_PAGE_KEYS) {
    const page = c.pages[key];
    entries.push({
      id: `page-${key}`,
      title: page.navLabel,
      description: page.intro,
      page: key,
      group: "page",
    });
  }

  // Nested solution pages: results address the exact page, not just the parent.
  for (const family of SOLUTION_FAMILY_KEYS) {
    for (const key of solutionsByFamily[family]) {
      const d = c.solutionDetails[key];
      entries.push({
        id: `solution-detail-${key}`,
        title: d.navLabel,
        description: [
          d.catalogSummary,
          ...d.catalogPoints,
          ...d.capabilities,
          ...d.situations,
          c.solutionFamilies[family].label,
        ].join(" "),
        page: parentPageOfSolution(key),
        solution: key,
        group: "solution-detail",
      });
    }
    entries.push({
      id: `solution-family-${family}`,
      title: c.solutionFamilies[family].label,
      description: [
        c.solutionFamilies[family].description,
        ...c.solutionFamilies[family].when,
      ].join(" "),
      page: familyParentPage[family],
      group: "solution",
    });
  }

  for (const service of c.services) {
    entries.push({
      id: `service-${service.key}`,
      title: service.name,
      description: [service.summary, ...service.points].join(" "),
      page: servicePage[service.key],
      group: "service",
    });
  }

  for (const item of c.home.solutions.items) {
    entries.push({
      id: `solution-${item.key}`,
      title: item.name,
      description: item.summary,
      page: "solutions",
      group: "solution",
    });
  }

  for (const item of c.home.references.items) {
    entries.push({
      id: `reference-${item.key}`,
      title: item.name,
      description: [
        item.summary,
        ...(item.evidence ?? []),
        c.home.references.statusLabels[item.status],
      ].join(" "),
      page: "references",
      group: "reference",
    });
  }

  // Secondary results: homepage sections, still reachable by anchor.
  for (const item of c.home.situations.items) {
    entries.push({
      id: `situation-${item.key}`,
      title: item.title,
      description: item.body,
      page: "home",
      hash: "helyzetek",
      group: "situation",
    });
  }

  for (const item of c.nav) {
    entries.push({
      id: `nav-${item.key}`,
      title: item.label,
      description: c.common.searchGroups.section,
      page: "home",
      hash: item.href.replace(/^#/, ""),
      group: "section",
    });
  }

  return entries;
}

const normalize = (value: string) =>
  value
    .toLocaleLowerCase("hu")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

/** Accent-insensitive token matching; titles weigh more than body text. */
export function searchEntries(entries: SearchEntry[], query: string): SearchResult[] {
  const tokens = normalize(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  return entries
    .map((entry) => {
      const title = normalize(entry.title);
      const body = normalize(entry.description);
      let score = 0;
      // Real pages outrank homepage anchors for the same term.
      if (entry.group === "page") score += 2;
      // Exact nested solution names should outrank the parent page for the same term.
      if (entry.group === "solution-detail") score += 3;
      for (const token of tokens) {
        if (title.startsWith(token)) score += 6;
        else if (title.includes(token)) score += 4;
        else if (body.includes(token)) score += 1;
        else return { ...entry, score: -1 };
      }
      return { ...entry, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}
