import type { SubPageKey } from "@/config/routes";
import type { SolutionFamilyKey, SolutionKey } from "@/config/solutions";

/**
 * Content architecture types.
 * All translated strings live in src/content/{hu,en}.ts — never inline in components.
 */

export type SeoContent = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

export type NavItem = {
  /** Stable, locale-independent key. */
  key: string;
  label: string;
  /** In-page anchor on the homepage. Real pages are addressed by PageKey. */
  href: string;
};

/** Copy for one conceptual page in the route registry. */
export type PageContent = {
  /** Short label used in navigation, breadcrumbs and search results. */
  navLabel: string;
  /** Page H1. */
  title: string;
  /** One-paragraph introduction. */
  intro: string;
  /** Short structural blocks outlining scope. No invented outcomes or metrics. */
  sections: Array<{ key: string; title: string; body: string }>;
  seo: SeoContent;
};

export type ServiceTier = "primary" | "supporting";

/** Pictogram key for a service. Only set where a pictogram genuinely aids scanning. */
export type ServicePictogram = "automation" | "applications" | "forecasting" | "integration";

export type ServiceContent = {
  key: "ai-automation" | "business-applications" | "data-forecasting" | "integration-operations";
  name: string;
  summary: string;
  points: string[];
  tier: ServiceTier;
  pictogram: ServicePictogram;
};

/** Maturity of a public engineering reference. Never implies a customer deployment. */
export type ReferenceStatus = "demonstrator" | "reference-architecture" | "prototype";

export type ReferenceItem = {
  key: string;
  name: string;
  summary: string;
  status: ReferenceStatus;
  /** Public repository URL for this piece of engineering evidence. */
  url?: string;
  /** What is actually visible in the public material. No metrics, no customer claims. */
  evidence?: string[];
};

/** Titled block list used across the service pages. */
export type NamedBlock = { key: string; title: string; body: string };

/** A numbered stage in a project or maturity sequence. */
export type StageBlock = { key: string; name: string; body: string };

/**
 * Full editorial content for a flagship service page.
 * Presentation components read this; no service copy lives in components.
 */
export type ServicePageContent = {
  /** Short positioning line above the H1. */
  eyebrow: string;
  /** One or two sentences under the H1 — replaces the generic page intro. */
  summary: string[];
  situations: { title: string; intro: string; items: NamedBlock[] };
  scope: { title: string; intro: string; items: NamedBlock[] };
  /** Optional block on how the work fits existing operations / handover. */
  fit?: { title: string; intro: string; items: NamedBlock[] };

  /** Optional criteria block (e.g. when AI is worth using; data maturity path). */
  criteria?: { title: string; intro: string; items: string[]; note?: string };
  start: { title: string; intro: string; steps: StageBlock[] };
  /** Optional staged maturity path shown as an ordered list. */
  maturity?: { title: string; intro: string; steps: StageBlock[] };
  /** Set on the page that carries the illustrative forecast figure. */
  figure?: boolean;
  /** Engineering evidence shown here, referenced by reference-item key. */
  evidence: { title: string; intro: string; keys: string[] };
  /** Restrained technical credibility block, low on the page. */
  technical: { title: string; intro: string; items: string[] };
};

/** Editorial content for the engineering references page. */
export type ReferencesPageContent = {
  eyebrow: string;
  summary: string[];
  /** How to read the public material: scope / evidence / maturity. */
  howToRead: { title: string; intro: string; items: NamedBlock[] };
  /** Restrained explanation of the status vocabulary. */
  legend: { title: string; intro: string; note: string };
  /** What an engineering reference does and does not mean. */
  limits: { title: string; intro: string; items: string[]; note: string };
  /** Label above the per-item evidence bullet list. */
  evidenceLabel: string;
};

/** Editorial content for the commercial process page. */
export type ProcessPageContent = {
  eyebrow: string;
  summary: string[];
  stages: {
    title: string;
    intro: string;
    outputLabel: string;
    items: Array<{ key: string; code: string; name: string; body: string; output: string }>;
    note: string;
  };
  prepare: { title: string; intro: string; items: string[]; note: string };
  outputs: { title: string; intro: string; items: NamedBlock[] };
  stop: { title: string; intro: string; items: string[] };
  dataAccess: { title: string; intro: string; items: string[] };
};

/** Groups used to label results in the site search panel. */
export type SearchGroup =
  "page" | "section" | "service" | "solution" | "solution-detail" | "situation" | "reference";

/**
 * One of the thirteen nested solution detail pages.
 * Section headings are shared (`common.solutionSections`); only substance lives here.
 */
export type SolutionDetailContent = {
  /** Short label for navigation, catalogue rows, breadcrumbs and search. */
  navLabel: string;
  /** Page H1. */
  title: string;
  /** Business-job positioning line above the H1 — never technology hype. */
  eyebrow: string;
  /** Exactly two concise paragraphs under the H1. */
  summary: [string, string];
  /** One or two sentences used in the catalogue and on the parent page. */
  catalogSummary: string;
  /** Three capability / situation bullets shown in the catalogue row. */
  catalogPoints: [string, string, string];
  /** Concrete operational situations (3-5). */
  situations: string[];
  /** Concrete capabilities the solution can cover (4-6). */
  capabilities: string[];
  /** Possible source data, documents and interfaces. Conditional language only. */
  inputs: string[];
  /** How a project starts (3-4 steps). */
  start: StageBlock[];
  /** Solution-appropriate validation logic. No invented performance values. */
  evaluation: string[];
  /** Reference-item keys from the canonical engineering evidence model. */
  evidenceKeys: string[];
  /** Implementation possibilities, never mandatory architecture claims. */
  technical: string[];
  seo: SeoContent;
};

/** Family-level copy shown in the catalogue switcher and on the parent page. */
export type SolutionFamilyContent = {
  /** Switcher segment label. */
  label: string;
  /** Family heading inside the catalogue. */
  title: string;
  description: string;
  /** "When to consider this family" bullets. */
  when: string[];
};

/** Editorial content for the solutions catalogue page. */
export type SolutionsPageContent = {
  eyebrow: string;
  /** Catalogue H1 — more specific than the short nav label. */
  title: string;
  summary: string[];
  switcherLabel: string;
  /** Supporting engineering band below the three-family catalogue. */
  supporting: {
    title: string;
    intro: string;
    items: Array<{ key: SubPageKey; body: string }>;
  };
};

export type SolutionArea = {
  key: string;
  name: string;
  summary: string;
};

export type ProcessStep = {
  key: string;
  name: string;
  body: string;
};

export type FooterColumn = {
  key: string;
  title: string;
  /** Route-registry keys; labels come from `pages[key].navLabel`. */
  pages: SubPageKey[];
};

export type LocaleContent = {
  meta: {
    home: SeoContent;
  };
  /** Copy for every non-home route in the registry. */
  pages: Record<SubPageKey, PageContent>;
  /** Fully written service pages. Pages absent here fall back to the generic shell. */
  servicePages: Partial<Record<SubPageKey, ServicePageContent>>;
  /** Dedicated editorial page: public engineering references. */
  referencesPage: ReferencesPageContent;
  /** Dedicated editorial page: how we work (commercial process). */
  processPage: ProcessPageContent;
  /** Solutions catalogue page. */
  solutionsPage: SolutionsPageContent;
  /** Family-level catalogue copy, keyed by solution family. */
  solutionFamilies: Record<SolutionFamilyKey, SolutionFamilyContent>;
  /** All thirteen nested solution detail pages. */
  solutionDetails: Record<SolutionKey, SolutionDetailContent>;

  common: {
    skipToContent: string;
    languageSwitch: string;
    mainNav: string;
    openMenu: string;
    closeMenu: string;
    contactLabel: string;
    emailLabel: string;
    /** Label of the restrained supporting-pages menu in the header. */
    moreLabel: string;
    /** Breadcrumb label for the locale home. */
    homeLabel: string;
    /** Accessible name for the breadcrumb navigation landmark. */
    breadcrumbLabel: string;
    /** Note shown on page shells whose detailed content lands later. */
    pageInProgress: string;
    /** Accessible marker for the current page in navigation. */
    currentPageLabel: string;
    /** Appearance (light/dark) control. */
    appearanceLabel: string;
    themeToDark: string;
    themeToLight: string;
    /** Site search. */
    /** Label for a link that opens a public engineering repository. */
    openRepository: string;
    /** Low-emphasis link label leading to a nested solution detail page. */
    detailsLabel: string;
    /** Heading of the sub-solution list on a flagship parent page. */
    solutionAreasTitle: string;
    solutionAreasIntro: string;
    /** Shared "when to consider this family" heading. */
    familyWhenTitle: string;
    /** Shared section headings of every solution detail page. */
    solutionSections: {
      situations: string;
      capabilities: string;
      inputs: string;
      start: string;
      evaluation: string;
      evidence: string;
      technical: string;
    };
    searchLabel: string;
    searchPlaceholder: string;
    searchClear: string;
    searchClose: string;
    /** Result count string containing the {count} placeholder. */
    searchResultsCount: string;
    searchNoResults: string;
    searchNoResultsHelp: string;
    searchGroups: Record<SearchGroup, string>;
    /** Reusable AI transparency labels (used only where AI is actually involved). */
    ai: {
      label: string;
      disclosureTitle: string;
      whatItDid: string;
      whatItUsed: string;
      whatToVerify: string;
      close: string;
    };
  };
  nav: NavItem[];
  home: {
    hero: {
      eyebrow: string;
      title: string;
      body: string;
      primaryCta: string;
      secondaryCta: string;
    };
    services: {
      title: string;
      intro: string;
    };
    situations: {
      title: string;
      intro: string;
      items: Array<{ key: string; title: string; body: string }>;
    };
    modular: {
      title: string;
      body: string;
      points: Array<{ key: string; title: string; body: string }>;
    };
    solutions: {
      title: string;
      intro: string;
      note: string;
      items: SolutionArea[];
    };
    data: {
      title: string;
      heading: string;
      body: string;
      points: string[];
      chart: {
        title: string;
        actualLabel: string;
        forecastLabel: string;
        bandLabel: string;
        xAxisLabel: string;
        yAxisLabel: string;
        note: string;
      };
    };
    process: {
      title: string;
      intro: string;
      steps: ProcessStep[];
    };
    /** Homepage preview of the solution architecture — names only, no marketing. */
    architecture: {
      title: string;
      intro: string;
      cta: string;
    };
    /** Two related lenses on the same content region (content switcher). */
    lenses: {
      switcherLabel: string;
      situationsTab: string;
      solutionsTab: string;
    };
    references: {
      title: string;
      heading: string;
      body: string;
      cta: string;
      statusLabels: Record<ReferenceStatus, string>;
      statusColumn: string;
      items: ReferenceItem[];
    };

    contact: {
      title: string;
      heading: string;
      body: string;
      cta: string;
    };
  };
  footer: {
    columns: FooterColumn[];
    legal: string;
  };
  services: ServiceContent[];
};

/**
 * One stage of a service explainer diagram (see components/ds/FlowDiagram).
 * Locale-independent structure; every visible string is localized content.
 */
export type DiagramStage = {
  key: string;
  /** Stage name, e.g. "Knowledge layer". */
  label: string;
  /** One-sentence explanation of the stage. */
  detail?: string;
  /** Parallel elements inside the stage, rendered as adjacent cells. */
  items?: string[];
  /** Short qualifier, e.g. "implementation pattern where justified". */
  note?: string;
  /** Localized non-colour cue: existing environment, STP72 scope, outcome. */
  tag?: string;
  tone?: "context" | "core" | "outcome";
};
