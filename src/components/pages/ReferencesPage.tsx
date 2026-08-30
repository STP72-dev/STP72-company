import { siteConfig, type Locale } from "@/config/site";
import { getContent } from "@/content";
import { Section } from "@/components/layout/Section";
import { DisplayHeading, SectionLabel } from "@/components/ds/Heading";
import { Tile } from "@/components/ds/Tile";
import { ArrowLink } from "@/components/ds/ArrowLink";
import { StatusIndicator } from "@/components/ds/StatusIndicator";
import { ContactBand, PageHero, RuleList } from "./PageParts";

/**
 * Engineering references page.
 * The four items come from the single canonical reference list in
 * `content.home.references.items` — nothing is duplicated here.
 */
export function ReferencesPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const r = c.referencesPage;
  const refs = c.home.references;

  return (
    <>
      <PageHero locale={locale} page="references" eyebrow={r.eyebrow} summary={r.summary} withCta={false} />

      {/* How to read the material */}
      <Section surface="layer" spacing="md" aria-labelledby="how-to-read-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{refs.title}</SectionLabel>
            <DisplayHeading id="how-to-read-heading" size="sm" className="mt-6">
              {r.howToRead.title}
            </DisplayHeading>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
            {r.howToRead.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-px border-t border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {r.howToRead.items.map((item) => (
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

      {/* The four public items */}
      <Section spacing="md" aria-labelledby="reference-items-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="reference-items-heading" size="sm">
              {refs.heading}
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{refs.body}</p>
            <ArrowLink href={siteConfig.links.github} external className="mt-8">
              {refs.cta}
            </ArrowLink>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-border-strong">
              {refs.items.map((item) => (
                <li key={item.key} className="border-b border-border py-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    <StatusIndicator
                      status={item.status}
                      label={refs.statusLabels[item.status]}
                      className="shrink-0"
                    />
                  </div>
                  <p className="mt-3 max-w-[46rem] text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                  {item.evidence?.length ? (
                    <>
                      <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                        {r.evidenceLabel}
                      </p>
                      <RuleList items={item.evidence} className="mt-2 max-w-[46rem]" />
                    </>
                  ) : null}
                  {item.url ? (
                    <ArrowLink href={item.url} external className="mt-5">
                      {c.common.openRepository}
                    </ArrowLink>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Status legend + what a reference does not mean */}
      <Section surface="layer" spacing="md" aria-labelledby="reference-legend-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="reference-legend-heading" size="sm">
              {r.legend.title}
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{r.legend.intro}</p>
            <p className="mt-6 border-l-2 border-border-strong pl-4 text-sm leading-relaxed text-muted-foreground">
              {r.legend.note}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <DisplayHeading size="sm">{r.limits.title}</DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{r.limits.intro}</p>
            <RuleList items={r.limits.items} className="mt-6" />
            <p className="mt-6 border-l-2 border-border-strong pl-4 text-sm leading-relaxed text-muted-foreground">
              {r.limits.note}
            </p>
          </div>
        </div>
      </Section>

      <ContactBand locale={locale} headingId="references-contact-heading" />
    </>
  );
}
