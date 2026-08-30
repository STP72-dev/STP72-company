import type { ReactNode } from "react";
import { siteConfig, type Locale } from "@/config/site";
import type { SubPageKey } from "@/config/routes";
import { getContent } from "@/content";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { DisplayHeading, Lede } from "@/components/ds/Heading";
import { PageLink } from "@/components/nav/PageLink";
import { Button } from "@/components/ui/button";

/** Small directional glyph reused by the editorial page shells. */
export const Arrow = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
  >
    <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
  </svg>
);

type PageHeroProps = {
  locale: Locale;
  page: SubPageKey;
  eyebrow: string;
  summary: string[];
  /** Overrides the registry page title when the page needs a fuller H1. */
  title?: string;
  /** Single primary action per page. */
  withCta?: boolean;
  children?: ReactNode;
};

/** Breadcrumb + editorial hero, shared by the non-service full pages. */
export function PageHero({ locale, page, eyebrow, summary, title, withCta = true }: PageHeroProps) {
  const c = getContent(locale);
  const p = c.pages[page];

  return (
    <div className="border-b border-border bg-background">
      <Container width="wide" className="py-10 md:py-14">
        <nav aria-label={c.common.breadcrumbLabel} className="text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
            <li>
              <PageLink
                page="home"
                locale={locale}
                className="border-b border-transparent hover:border-current hover:text-foreground"
              >
                {c.common.homeLabel}
              </PageLink>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground" aria-current="page">
              {p.navLabel}
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-sm text-muted-foreground">{eyebrow}</p>
            <DisplayHeading level={1} size="lg" className="mt-5">
              {title ?? p.title}
            </DisplayHeading>
            {summary.map((paragraph, index) =>
              index === 0 ? (
                <Lede key={paragraph} className="mt-6">
                  {paragraph}
                </Lede>
              ) : (
                <p
                  key={paragraph}
                  className="mt-4 max-w-[46rem] text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ),
            )}
            {withCta ? (
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <a href={`mailto:${siteConfig.contact.email}`}>
                    {c.home.contact.cta}
                    <Arrow />
                  </a>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}

/** Closing contact band, identical in behaviour to the service pages. */
export function ContactBand({ locale, headingId }: { locale: Locale; headingId: string }) {
  const c = getContent(locale);

  return (
    <Section surface="inverse" spacing="md" aria-labelledby={headingId}>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="label-section border-t border-inverse-foreground/40 pt-3">{c.home.contact.title}</p>
          <h2 id={headingId} className="type-display-sm mt-6 text-balance">
            {c.home.contact.heading}
          </h2>
          <p className="mt-4 max-w-[42rem] text-sm leading-relaxed text-inverse-foreground/80">
            {c.home.contact.body}
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex h-12 items-center justify-between gap-6 bg-accent px-4 text-sm font-medium text-accent-foreground hover:bg-interactive-hover"
          >
            {c.home.contact.cta}
            <Arrow />
          </a>
        </div>
      </div>
    </Section>
  );
}

/** Dashed-rule bullet list used for capability / criteria style copy. */
export function RuleList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-4 border-t border-border py-4 text-sm leading-relaxed text-muted-foreground first:border-t-0 first:pt-0"
        >
          <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-border-strong" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
