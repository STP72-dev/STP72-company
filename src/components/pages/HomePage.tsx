import { useEffect, useState } from "react";
import { siteConfig, type Locale } from "@/config/site";
import { getContent } from "@/content";
import { SOLUTION_FAMILY_KEYS, familyParentPage, solutionsByFamily } from "@/config/solutions";
import { PageLink, SolutionLink } from "@/components/nav/PageLink";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArrowLink } from "@/components/ds/ArrowLink";
import { DisplayHeading, Lede, SectionLabel } from "@/components/ds/Heading";
import { ForecastChart } from "@/components/ds/ForecastChart";
import { Tile } from "@/components/ds/Tile";
import { Pictogram } from "@/components/ds/Pictogram";
import { StatusIndicator } from "@/components/ds/StatusIndicator";
import { ContentSwitcher, SwitcherPanel } from "@/components/ds/ContentSwitcher";

type Lens = "situations" | "solutions";

/** Corporate homepage: hero, services, needs/areas, approach, data, process, references, contact. */
export function HomePage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const mailto = `mailto:${siteConfig.contact.email}`;
  const [lens, setLens] = useState<Lens>("situations");

  // Deep links to #teruletek open the solution-areas view of the same region.
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#teruletek") setLens("solutions");
      else if (window.location.hash === "#helyzetek") setLens("situations");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <>
      {/* Hero — exactly one dominant primary action on the page's first screen */}
      <div className="border-b border-border bg-background">
        <Container width="wide" className="py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-sm text-muted-foreground">{c.home.hero.eyebrow}</p>
              <DisplayHeading level={1} size="lg" className="mt-6">
                {c.home.hero.title}
              </DisplayHeading>
              <Lede className="mt-8">{c.home.hero.body}</Lede>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button variant="cta" size="lg" asChild>
                  <a href={mailto}>
                    {c.home.hero.primaryCta}
                    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25">
                      <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
                    </svg>
                  </a>
                </Button>
                <Button variant="technical" size="lg" asChild>
                  <a href="#megoldasok">
                    {c.home.hero.secondaryCta}
                    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25">
                      <path d="M8 3v9.5M4.5 9l3.5 3.5L11.5 9" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* What we do — four categories, each with one editorial pictogram */}
      <Section id="megoldasok" surface="layer" aria-labelledby="services-heading">
        <SectionLabel>{c.home.services.title}</SectionLabel>
        <DisplayHeading id="services-heading" size="sm" className="mt-6 max-w-3xl">
          {c.home.services.intro}
        </DisplayHeading>
        <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-4">
          {c.services.map((service) => (
            <li key={service.key} className="min-w-0">
              <Tile
                title={service.name}
                description={service.summary}
                points={service.points}
                emphasis={service.tier === "primary" ? "primary" : "supporting"}
                className="bg-background"
                media={<Pictogram name={service.pictogram} size={48} />}
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* Solution architecture preview — names only, the catalogue lives on its own page */}
      <Section aria-labelledby="architecture-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{c.pages.solutions.navLabel}</SectionLabel>
            <DisplayHeading id="architecture-heading" size="sm" className="mt-6">
              {c.home.architecture.title}
            </DisplayHeading>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
            <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground">
              {c.home.architecture.intro}
            </p>
            <PageLink
              page="solutions"
              locale={locale}
              className="mt-6 inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-link hover:border-current"
            >
              <span>{c.home.architecture.cta}</span>
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
              </svg>
            </PageLink>
          </div>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 border-t border-border-strong md:grid-cols-3">
          {SOLUTION_FAMILY_KEYS.map((family) => (
            <div key={family} className="min-w-0 pt-6">
              <h3 className="text-base font-semibold text-foreground">
                <PageLink
                  page={familyParentPage[family]}
                  locale={locale}
                  className="border-b border-transparent hover:border-current"
                >
                  {c.solutionFamilies[family].label}
                </PageLink>
              </h3>
              <ul className="mt-4">
                {solutionsByFamily[family].map((key) => (
                  <li key={key} className="border-t border-border-subtle py-2.5">
                    <SolutionLink
                      solution={key}
                      locale={locale}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {c.solutionDetails[key].navLabel}
                    </SolutionLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Two related lenses on the same region: business needs / solution areas */}
      <Section id="helyzetek" aria-labelledby="lens-heading">
        <span id="teruletek" className="sr-only" aria-hidden="true" />
        <SectionLabel>{c.home.situations.title}</SectionLabel>
        <DisplayHeading id="lens-heading" size="sm" className="mt-6 max-w-3xl">
          {c.home.situations.intro}
        </DisplayHeading>

        <ContentSwitcher
          className="mt-10"
          label={c.home.lenses.switcherLabel}
          value={lens}
          onChange={(value) => setLens(value as Lens)}
          options={[
            { value: "situations", label: c.home.lenses.situationsTab },
            { value: "solutions", label: c.home.lenses.solutionsTab },
          ]}
        />

        <div className="mt-10">
          <SwitcherPanel value="situations" selected={lens === "situations"}>
            <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {c.home.situations.items.map((item) => (
                <li key={item.key} className="border-t border-border pt-4">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </SwitcherPanel>

          <SwitcherPanel value="solutions" selected={lens === "solutions"}>
            <dl className="border-t border-border-strong">
              {c.home.solutions.items.map((item) => (
                <div
                  key={item.key}
                  className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-semibold text-foreground md:col-span-4">
                    {item.name}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-8">
                    {item.summary}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-muted-foreground">{c.home.solutions.note}</p>
          </SwitcherPanel>
        </div>
      </Section>

      {/* Modular implementation */}
      <Section surface="layer" aria-labelledby="modular-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{c.home.modular.title}</SectionLabel>
            <DisplayHeading id="modular-heading" size="md" className="mt-6">
              {c.home.modular.body}
            </DisplayHeading>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {c.home.modular.points.map((point, i) => (
              <li
                key={point.key}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-6 first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Data & forecasting */}
      <Section id="adat" aria-labelledby="data-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{c.home.data.title}</SectionLabel>
            <DisplayHeading id="data-heading" size="md" className="mt-6">
              {c.home.data.heading}
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {c.home.data.body}
            </p>
            <ul className="mt-8 space-y-3 border-t border-border pt-6">
              {c.home.data.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-border-strong" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
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
        </div>
      </Section>

      {/* How we work */}
      <Section id="folyamat" surface="layer" aria-labelledby="process-heading">
        <SectionLabel>{c.home.process.title}</SectionLabel>
        <DisplayHeading id="process-heading" size="sm" className="mt-6 max-w-3xl">
          {c.home.process.intro}
        </DisplayHeading>
        <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
          {c.home.process.steps.map((step, i) => (
            <li key={step.key} className="min-w-0 bg-background p-6 md:p-8">
              <p className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Engineering references — the one place where status is meaningful */}
      <Section id="referenciak" aria-labelledby="references-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{c.home.references.title}</SectionLabel>
            <DisplayHeading id="references-heading" size="sm" className="mt-6">
              {c.home.references.heading}
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {c.home.references.body}
            </p>
            <ArrowLink href={siteConfig.links.github} external className="mt-8">
              {c.home.references.cta}
            </ArrowLink>
          </div>

          <ul className="lg:col-span-7 lg:col-start-6">
            {c.home.references.items.map((item) => (
              <li key={item.key} className="border-t border-border py-6 first:border-t-0 first:pt-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                  <StatusIndicator
                    status={item.status}
                    label={c.home.references.statusLabels[item.status]}
                    className="shrink-0"
                  />
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
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

      {/* Contact */}
      <Section id="kapcsolat" surface="inverse" aria-labelledby="contact-heading">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label-section border-t border-inverse-foreground/40 pt-3">
              {c.home.contact.title}
            </p>
            <h2 id="contact-heading" className="type-display-md mt-6 text-balance">
              {c.home.contact.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-inverse-foreground/75">
              {c.home.contact.body}
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <a
              href={mailto}
              className="inline-flex h-12 items-center justify-between gap-6 bg-accent px-4 text-sm font-medium text-accent-foreground hover:bg-interactive-hover"
            >
              {c.home.contact.cta}
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.25">
                <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
              </svg>
            </a>
            <p className="mt-6 text-sm text-inverse-foreground/75">
              {c.common.emailLabel}:{" "}
              <a href={mailto} className="border-b border-inverse-foreground/40 hover:border-current">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
