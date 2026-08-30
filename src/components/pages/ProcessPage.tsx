import type { Locale } from "@/config/site";
import { getContent } from "@/content";
import { Section } from "@/components/layout/Section";
import { DisplayHeading, SectionLabel } from "@/components/ds/Heading";
import { Tile } from "@/components/ds/Tile";
import { ContactBand, PageHero, RuleList } from "./PageParts";

/** Commercial process page: five conceptual stages plus engagement practicalities. */
export function ProcessPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const p = c.processPage;

  return (
    <>
      <PageHero locale={locale} page="how-we-work" eyebrow={p.eyebrow} summary={p.summary} />

      {/* Five stages */}
      <Section surface="layer" spacing="md" aria-labelledby="stages-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{c.pages["how-we-work"].navLabel}</SectionLabel>
            <DisplayHeading id="stages-heading" size="sm" className="mt-6">
              {p.stages.title}
            </DisplayHeading>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
            {p.stages.intro}
          </p>
        </div>

        <ol className="mt-12 border-t border-border-strong">
          {p.stages.items.map((stage, index) => (
            <li key={stage.key} className="grid gap-4 border-b border-border py-8 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} · {stage.code}
                </p>
                <h3 className="mt-3 text-base font-semibold text-foreground">{stage.name}</h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                <p className="mt-4 border-l-2 border-border-strong pl-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{p.stages.outputLabel}: </span>
                  {stage.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-[46rem] text-sm leading-relaxed text-muted-foreground">{p.stages.note}</p>
      </Section>

      {/* What we ask for before the first conversation */}
      <Section spacing="md" aria-labelledby="prepare-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="prepare-heading" size="sm">
              {p.prepare.title}
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.prepare.intro}</p>
            <p className="mt-6 border-l-2 border-border-strong pl-4 text-sm leading-relaxed text-muted-foreground">
              {p.prepare.note}
            </p>
          </div>
          <RuleList items={p.prepare.items} className="lg:col-span-6 lg:col-start-7" />
        </div>
      </Section>

      {/* Outputs per stage */}
      <Section surface="layer" spacing="md" aria-labelledby="outputs-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="outputs-heading" size="sm">
              {p.outputs.title}
            </DisplayHeading>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
            {p.outputs.intro}
          </p>
        </div>
        <div className="mt-12 grid gap-px border-t border-border bg-border md:grid-cols-2">
          {p.outputs.items.map((item) => (
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

      {/* When we stop + data and access */}
      <Section spacing="md" aria-labelledby="stop-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <DisplayHeading id="stop-heading" size="sm">
              {p.stop.title}
            </DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.stop.intro}</p>
            <RuleList items={p.stop.items} className="mt-6" />
          </div>
          <div className="lg:col-span-6">
            <DisplayHeading size="sm">{p.dataAccess.title}</DisplayHeading>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{p.dataAccess.intro}</p>
            <RuleList items={p.dataAccess.items} className="mt-6" />
          </div>
        </div>
      </Section>

      <ContactBand locale={locale} headingId="process-contact-heading" />
    </>
  );
}
