import { siteConfig, type Locale } from "@/config/site";
import type { SubPageKey } from "@/config/routes";
import { familyOfParentPage, solutionsByFamily } from "@/config/solutions";
import { getContent } from "@/content";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { DisplayHeading, Lede, SectionLabel } from "@/components/ds/Heading";
import { Tile } from "@/components/ds/Tile";
import { ArrowLink } from "@/components/ds/ArrowLink";
import { StatusIndicator } from "@/components/ds/StatusIndicator";
import { ForecastChart } from "@/components/ds/ForecastChart";
import { PageLink, SolutionLink } from "@/components/nav/PageLink";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
    <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
  </svg>
);

/** Column count follows the real number of blocks so no empty cell is left. */
const gridFor = (count: number) =>
  cn("grid gap-px border-t border-border bg-border md:grid-cols-2", count % 3 === 0 ? "xl:grid-cols-3" : "");

/**
 * Editorial shell for the fully written flagship service pages.
 * Every string comes from `content.servicePages[page]` — nothing is inlined.
 */
export function ServicePage({ locale, page }: { locale: Locale; page: SubPageKey }) {
  const c = getContent(locale);
  const p = c.pages[page];
  const s = c.servicePages[page];
  if (!s) return null;

  const mailto = `mailto:${siteConfig.contact.email}`;
  // Flagship parents own a family of nested solutions; supporting pages do not.
  const family = familyOfParentPage(page);
  const children = family ? solutionsByFamily[family] : [];
  const evidence = s.evidence.keys
    .map((key) => c.home.references.items.find((item) => item.key === key))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      {/* A — breadcrumb + service hero */}
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
              <p className="text-sm text-muted-foreground">{s.eyebrow}</p>
              <DisplayHeading level={1} size="lg" className="mt-5">
                {p.title}
              </DisplayHeading>
              {s.summary.map((paragraph, index) =>
                index === 0 ? (
                  <Lede key={paragraph} className="mt-6">
                    {paragraph}
                  </Lede>
                ) : (
                  <p key={paragraph} className="mt-4 max-w-[46rem] text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ),
              )}
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <a href={mailto}>
                    {c.home.contact.cta}
                    <Arrow />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* B — business situations */}
      <Section surface="layer" spacing="md" aria-labelledby="situations-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{p.navLabel}</SectionLabel>
            <DisplayHeading id="situations-heading" size="sm" className="mt-6">
              {s.situations.title}
            </DisplayHeading>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
            {s.situations.intro}
          </p>
        </div>

        <ul className="mt-12 border-t border-border-strong">
          {s.situations.items.map((item) => (
            <li key={item.key} className="grid gap-2 border-b border-border py-6 lg:grid-cols-12 lg:gap-8">
              <h3 className="text-base font-semibold text-foreground lg:col-span-4">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-8">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Solution areas — the family's own children, in authoritative order */}
      {children.length > 0 ? (
        <Section spacing="md" aria-labelledby="areas-heading">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <DisplayHeading id="areas-heading" size="sm">
                {c.common.solutionAreasTitle}
              </DisplayHeading>
            </div>
            <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
              {c.common.solutionAreasIntro}
            </p>
          </div>

          <ul className="mt-12 border-t border-border-strong">
            {children.map((key) => {
              const d = c.solutionDetails[key];
              return (
                <li key={key} className="grid gap-3 border-b border-border py-6 lg:grid-cols-12 lg:gap-8">
                  <h3 className="text-base font-semibold text-foreground lg:col-span-4">{d.navLabel}</h3>
                  <div className="lg:col-span-8">
                    <p className="max-w-[46rem] text-sm leading-relaxed text-muted-foreground">
                      {d.catalogSummary}
                    </p>
                    <SolutionLink
                      solution={key}
                      locale={locale}
                      className="mt-3 inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-link hover:border-current"
                    >
                      <span>{c.common.detailsLabel}</span>
                      <Arrow />
                    </SolutionLink>
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}

      {/* Optional criteria block */}
      {s.criteria ? (
        <Section spacing="md" aria-labelledby="criteria-heading">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <DisplayHeading id="criteria-heading" size="sm">
                {s.criteria.title}
              </DisplayHeading>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.criteria.intro}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-border-strong">
                {s.criteria.items.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-border py-4 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-border-strong" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {s.criteria.note ? (
                <p className="mt-6 border-l-2 border-border-strong pl-4 text-sm leading-relaxed text-muted-foreground">
                  {s.criteria.note}
                </p>
              ) : null}
            </div>
          </div>
        </Section>
      ) : null}

      {/* C — scope / deliverables */}
      <Section surface="layer" spacing="md" aria-labelledby="scope-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="scope-heading" size="sm">
              {s.scope.title}
            </DisplayHeading>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
            {s.scope.intro}
          </p>
        </div>
        <div className={cn("mt-12", gridFor(s.scope.items.length))}>
          {s.scope.items.map((item) => (
            <Tile
              key={item.key}
              level={3}
              title={item.title}
              description={item.body}
              className="bg-background"
            />
          ))}
        </div>
      </Section>

      {/* D — how it connects to existing operations */}
      {s.fit ? (
        <Section spacing="md" aria-labelledby="fit-heading">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <DisplayHeading id="fit-heading" size="sm">
                {s.fit.title}
              </DisplayHeading>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.fit.intro}</p>
            </div>
            <ul className="lg:col-span-6 lg:col-start-7">
              {s.fit.items.map((item) => (
                <li key={item.key} className="border-t border-border py-6 first:border-t-0 first:pt-0">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}


      {/* Optional illustrative figure */}
      {s.figure ? (
        <Section surface="layer" spacing="md">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ForecastChart
                title={c.home.data.chart.title}
                actualLabel={c.home.data.chart.actualLabel}
                forecastLabel={c.home.data.chart.forecastLabel}
                bandLabel={c.home.data.chart.bandLabel}
                xAxisLabel={c.home.data.chart.xAxisLabel}
                yAxisLabel={c.home.data.chart.yAxisLabel}
                note={c.home.data.chart.note}
              />
            </div>
            <ul className="lg:col-span-5 lg:col-start-8 lg:self-center">
              {c.home.data.points.map((point) => (
                <li
                  key={point}
                  className="border-t border-border py-4 text-sm leading-relaxed text-muted-foreground first:border-t-0"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      {/* Optional maturity path */}
      {s.maturity ? (
        <Section spacing="md" aria-labelledby="maturity-heading">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <DisplayHeading id="maturity-heading" size="sm">
                {s.maturity.title}
              </DisplayHeading>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.maturity.intro}</p>
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {s.maturity.steps.map((step) => (
                <li key={step.key} className="border-t border-border py-6 first:border-t-0 first:pt-0">
                  <h3 className="text-base font-semibold text-foreground">{step.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      ) : null}

      {/* E — how a project starts */}
      <Section surface="layer" spacing="md" aria-labelledby="start-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="start-heading" size="sm">
              {s.start.title}
            </DisplayHeading>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
            {s.start.intro}
          </p>
        </div>
        <ol className="mt-12 grid gap-px border-t border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {s.start.steps.map((step, index) => (
            <li key={step.key} className="flex h-full flex-col bg-background p-6 md:p-8">
              <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* F — engineering evidence */}
      <Section spacing="md" aria-labelledby="evidence-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{c.home.references.title}</SectionLabel>
            <DisplayHeading id="evidence-heading" size="sm" className="mt-6">
              {s.evidence.title}
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.evidence.intro}</p>
            <ArrowLink href={siteConfig.links.github} external className="mt-8">
              {c.home.references.cta}
            </ArrowLink>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {evidence.map((item) => (
              <li key={item.key} className="border-t border-border py-6 first:border-t-0 first:pt-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                  <StatusIndicator
                    status={item.status}
                    label={c.home.references.statusLabels[item.status]}
                    className="shrink-0"
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                {item.url ? (
                  <ArrowLink href={item.url} external className="mt-3">
                    {c.common.openRepository}
                  </ArrowLink>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* G — technical background, deliberately low on the page */}
      <Section surface="layer" spacing="sm" aria-labelledby="technical-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="technical-heading" level={2} size="sm">
              {s.technical.title}
            </DisplayHeading>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{s.technical.intro}</p>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {s.technical.items.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-t border-border py-4 text-sm leading-relaxed text-muted-foreground first:border-t-0 first:pt-0"
              >
                <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-border-strong" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* H — contact */}
      <Section surface="inverse" spacing="md" aria-labelledby="service-contact-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label-section border-t border-inverse-foreground/40 pt-3">{c.home.contact.title}</p>
            <h2 id="service-contact-heading" className="type-display-sm mt-6 text-balance">
              {c.home.contact.heading}
            </h2>
            <p className="mt-4 max-w-[42rem] text-sm leading-relaxed text-inverse-foreground/80">
              {c.home.contact.body}
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <a
              href={mailto}
              className="inline-flex h-12 items-center justify-between gap-6 bg-accent px-4 text-sm font-medium text-accent-foreground hover:bg-interactive-hover"
            >
              {c.home.contact.cta}
              <Arrow />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
