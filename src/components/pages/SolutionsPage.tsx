import { useState } from "react";
import type { Locale } from "@/config/site";
import { getContent } from "@/content";
import {
  SOLUTION_FAMILY_KEYS,
  solutionsByFamily,
  type SolutionFamilyKey,
} from "@/config/solutions";
import { Section } from "@/components/layout/Section";
import { DisplayHeading, SectionLabel } from "@/components/ds/Heading";
import { ContentSwitcher, SwitcherPanel } from "@/components/ds/ContentSwitcher";
import { Pictogram } from "@/components/ds/Pictogram";
import { PageHero, ContactBand, RuleList } from "@/components/pages/PageParts";
import { PageLink, SolutionLink } from "@/components/nav/PageLink";
import { cn } from "@/lib/utils";

/** One editorial pictogram per family — never one per sub-solution. */
const familyPictogram: Record<SolutionFamilyKey, "automation" | "applications" | "forecasting"> = {
  ai: "automation",
  business: "applications",
  data: "forecasting",
};

const Arrow = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
  >
    <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
  </svg>
);

/**
 * Solutions catalogue: one content region shown through three alternate family
 * views. The content switcher is the single high-hierarchy page control here.
 */
export function SolutionsPage({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const page = c.solutionsPage;
  const [family, setFamily] = useState<SolutionFamilyKey>("ai");

  return (
    <>
      <PageHero
        locale={locale}
        page="solutions"
        eyebrow={page.eyebrow}
        title={page.title}
        summary={page.summary}
        withCta={false}
      />

      <Section surface="layer" spacing="md" aria-labelledby="catalogue-heading">
        <SectionLabel>{c.pages.solutions.navLabel}</SectionLabel>
        <h2 id="catalogue-heading" className="sr-only">
          {page.switcherLabel}
        </h2>

        <ContentSwitcher
          className="mt-6"
          label={page.switcherLabel}
          contrast="high"
          value={family}
          onChange={(value) => setFamily(value as SolutionFamilyKey)}
          options={SOLUTION_FAMILY_KEYS.map((key) => ({
            value: key,
            label: c.solutionFamilies[key].label,
          }))}
        />

        <div className="mt-12">
          {SOLUTION_FAMILY_KEYS.map((key) => {
            const f = c.solutionFamilies[key];
            return (
              <SwitcherPanel key={key} value={key} selected={key === family}>
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <Pictogram name={familyPictogram[key]} size={48} />
                    <DisplayHeading level={3} size="sm" className="mt-6">
                      {f.title}
                    </DisplayHeading>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                  <div className="lg:col-span-6 lg:col-start-7">
                    <h4 className="text-sm font-semibold text-foreground">
                      {c.common.familyWhenTitle}
                    </h4>
                    <RuleList items={f.when} className="mt-4" />
                  </div>
                </div>

                <ul className="mt-14 border-t border-border-strong">
                  {solutionsByFamily[key].map((solutionKey) => {
                    const d = c.solutionDetails[solutionKey];
                    return (
                      <li
                        key={solutionKey}
                        className="grid gap-4 border-b border-border py-8 lg:grid-cols-12 lg:gap-8"
                      >
                        <div className="lg:col-span-4">
                          <h4 className="text-lg font-semibold leading-snug text-foreground">
                            {d.navLabel}
                          </h4>
                          <SolutionLink
                            solution={solutionKey}
                            locale={locale}
                            className="mt-3 inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-link hover:border-current"
                          >
                            <span>{c.common.detailsLabel}</span>
                            <Arrow />
                          </SolutionLink>
                        </div>
                        <div className="lg:col-span-8">
                          <p className="max-w-[46rem] text-sm leading-relaxed text-muted-foreground">
                            {d.catalogSummary}
                          </p>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                            {d.catalogPoints.map((point) => (
                              <li
                                key={point}
                                className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </SwitcherPanel>
            );
          })}
        </div>
      </Section>

      {/* Supporting engineering: outside the three-family catalogue by design. */}
      <Section spacing="md" aria-labelledby="supporting-heading">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <DisplayHeading id="supporting-heading" size="sm">
              {page.supporting.title}
            </DisplayHeading>
          </div>
          <p className="max-w-[42rem] text-base leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7 lg:self-end">
            {page.supporting.intro}
          </p>
        </div>

        <ul className="mt-12 border-t border-border-strong">
          {page.supporting.items.map((item) => (
            <li
              key={item.key}
              className={cn("grid gap-3 border-b border-border py-6 lg:grid-cols-12 lg:gap-8")}
            >
              <h3 className="text-base font-semibold text-foreground lg:col-span-4">
                {c.pages[item.key].navLabel}
              </h3>
              <div className="lg:col-span-8">
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <PageLink
                  page={item.key}
                  locale={locale}
                  className="mt-3 inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-link hover:border-current"
                >
                  <span>{c.common.detailsLabel}</span>
                  <Arrow />
                </PageLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <ContactBand locale={locale} headingId="solutions-contact-heading" />
    </>
  );
}
