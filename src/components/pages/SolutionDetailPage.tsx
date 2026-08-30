import { type Locale } from "@/config/site";
import { parentPageOfSolution, type SolutionKey } from "@/config/solutions";
import { getContent } from "@/content";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { DisplayHeading, Lede, SectionLabel } from "@/components/ds/Heading";
import { ArrowLink } from "@/components/ds/ArrowLink";
import { StatusIndicator } from "@/components/ds/StatusIndicator";
import { PageLink } from "@/components/nav/PageLink";
import { ContactBand, RuleList } from "@/components/pages/PageParts";
import { cn } from "@/lib/utils";

/** Column count follows the real number of blocks so no empty cell is left. */
const gridFor = (count: number) =>
  cn(
    "grid gap-px border-t border-border bg-border md:grid-cols-2",
    count % 3 === 0 ? "xl:grid-cols-3" : "",
  );

/**
 * One reusable editorial shell for all thirteen nested solution pages.
 * Every string comes from `content.solutionDetails[key]` and the shared
 * `common.solutionSections` headings — nothing is inlined here.
 */
export function SolutionDetailPage({
  locale,
  solution,
}: {
  locale: Locale;
  solution: SolutionKey;
}) {
  const c = getContent(locale);
  const d = c.solutionDetails[solution];
  const parent = parentPageOfSolution(solution);
  const labels = c.common.solutionSections;

  const evidence = d.evidenceKeys
    .map((key) => c.home.references.items.find((item) => item.key === key))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      {/* 1-2 — breadcrumb and hero */}
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
              <li>
                <PageLink
                  page={parent}
                  locale={locale}
                  className="border-b border-transparent hover:border-current hover:text-foreground"
                >
                  {c.pages[parent].navLabel}
                </PageLink>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground" aria-current="page">
                {d.navLabel}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-sm text-muted-foreground">{d.eyebrow}</p>
              <DisplayHeading level={1} size="lg" className="mt-5">
                {d.title}
              </DisplayHeading>
              <Lede className="mt-6">{d.summary[0]}</Lede>
              <p className="mt-4 max-w-[46rem] text-base leading-relaxed text-muted-foreground">
                {d.summary[1]}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* 3 — when it is useful */}
      <Section surface="layer" spacing="md" aria-labelledby="situations-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>{c.pages[parent].navLabel}</SectionLabel>
            <DisplayHeading id="situations-heading" size="sm" className="mt-6">
              {labels.situations}
            </DisplayHeading>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <RuleList items={d.situations} />
          </div>
        </div>
      </Section>

      {/* 4 — what it can cover */}
      <Section spacing="md" aria-labelledby="capabilities-heading">
        <DisplayHeading id="capabilities-heading" size="sm">
          {labels.capabilities}
        </DisplayHeading>
        <div className={cn("mt-10", gridFor(d.capabilities.length))}>
          {d.capabilities.map((item, index) => (
            <div key={item} className="flex h-full flex-col bg-background p-6 md:p-8">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5 — inputs and connections */}
      <Section surface="layer" spacing="md" aria-labelledby="inputs-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="inputs-heading" size="sm">
              {labels.inputs}
            </DisplayHeading>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <RuleList items={d.inputs} />
          </div>
        </div>
      </Section>

      {/* 6 — how it starts */}
      <Section spacing="md" aria-labelledby="start-heading">
        <DisplayHeading id="start-heading" size="sm">
          {labels.start}
        </DisplayHeading>
        <ol className={cn("mt-10", gridFor(d.start.length))}>
          {d.start.map((step, index) => (
            <li key={step.key} className="flex h-full flex-col bg-background p-6 md:p-8">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">{step.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 7 — how it is evaluated */}
      <Section surface="layer" spacing="md" aria-labelledby="evaluation-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="evaluation-heading" size="sm">
              {labels.evaluation}
            </DisplayHeading>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <RuleList items={d.evaluation} />
          </div>
        </div>
      </Section>

      {/* 8 — related engineering material; status is meaningful only here */}
      {evidence.length > 0 ? (
        <Section spacing="md" aria-labelledby="evidence-heading">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>{c.home.references.title}</SectionLabel>
              <DisplayHeading id="evidence-heading" size="sm" className="mt-6">
                {labels.evidence}
              </DisplayHeading>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {c.referencesPage.limits.note}
              </p>
              <PageLink
                page="references"
                locale={locale}
                className="mt-8 inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-link hover:border-current"
              >
                <span>{c.pages.references.navLabel}</span>
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
              </PageLink>
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
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
      ) : null}

      {/* 9 — technical background, deliberately low on the page */}
      <Section surface="layer" spacing="sm" aria-labelledby="technical-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="technical-heading" size="sm">
              {labels.technical}
            </DisplayHeading>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {c.solutionsPage.summary[1]}
            </p>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {d.technical.map((item) => (
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

      {/* 10 — closing CTA: the single filled action on the page */}
      <ContactBand locale={locale} headingId="solution-contact-heading" />
    </>
  );
}
