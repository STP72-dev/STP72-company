import { siteConfig, type Locale } from "@/config/site";
import type { SubPageKey } from "@/config/routes";
import { getContent } from "@/content";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { DisplayHeading, Lede, SectionLabel } from "@/components/ds/Heading";
import { Tile } from "@/components/ds/Tile";
import { PageLink } from "@/components/nav/PageLink";
import { cn } from "@/lib/utils";

/**
 * Shared shell for every localized destination page.
 * All copy comes from the locale content files — nothing is inlined here.
 */
export function SubPage({ locale, page }: { locale: Locale; page: SubPageKey }) {
  const c = getContent(locale);
  const p = c.pages[page];

  return (
    <>
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

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <DisplayHeading level={1} size="lg">
                {p.title}
              </DisplayHeading>
              <Lede className="mt-6">{p.intro}</Lede>
            </div>
          </div>
        </Container>
      </div>

      <Section surface="layer" spacing="md">
        {/* Column count follows the real number of blocks — never leaves an empty cell. */}
        <div
          className={cn(
            "grid gap-px border-t border-border bg-border md:grid-cols-2",
            p.sections.length >= 3 ? "xl:grid-cols-3" : "",
          )}
        >
          {p.sections.map((section) => (
            <Tile
              key={section.key}
              level={2}
              title={section.title}
              description={section.body}
              className="bg-background"
            />
          ))}
        </div>

        <p className="mt-8 max-w-[46rem] border-l-2 border-border-strong pl-4 text-sm text-muted-foreground">
          {c.common.pageInProgress}
        </p>
      </Section>

      <Section surface="inverse" spacing="md">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel className="border-inverse-foreground/40 text-inverse-foreground">{c.home.contact.title}</SectionLabel>
            <DisplayHeading size="sm" className="mt-6 text-inverse-foreground">
              {c.home.contact.heading}
            </DisplayHeading>
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
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
