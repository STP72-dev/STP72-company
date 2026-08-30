import { createFileRoute, notFound } from "@tanstack/react-router";
import { isLocale, pageKeyFromSlug } from "@/config/routes";
import { DEFAULT_LOCALE, type Locale } from "@/config/site";
import { getContent } from "@/content";
import { buildLocaleHead } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { SubPage } from "@/components/pages/SubPage";
import { ServicePage } from "@/components/pages/ServicePage";
import { ReferencesPage } from "@/components/pages/ReferencesPage";
import { ProcessPage } from "@/components/pages/ProcessPage";
import { SolutionsPage } from "@/components/pages/SolutionsPage";


/**
 * Every localized destination page.
 * The slug is resolved through the central route registry, so an unknown slug —
 * or a slug belonging to the other language — is a genuine 404 rather than a
 * silently mismatched page.
 */
export const Route = createFileRoute("/$locale/$slug/")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
    if (!pageKeyFromSlug(params.locale, params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const page = pageKeyFromSlug(locale, params.slug);
    if (!page) return {};
    return buildLocaleHead({ locale, seo: getContent(locale).pages[page].seo, page });
  },
  component: LocalePage,
});

function LocalePage() {
  const params = Route.useParams();
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const page = pageKeyFromSlug(locale, params.slug);
  if (!page) throw notFound();

  // Fully written service pages get the editorial shell; the rest use the generic one.
  const hasServicePage = Boolean(getContent(locale).servicePages[page]);

  return (
    <PageShell locale={locale} page={page}>
      {page === "solutions" ? (
        <SolutionsPage locale={locale} />
      ) : page === "references" ? (
        <ReferencesPage locale={locale} />
      ) : page === "how-we-work" ? (
        <ProcessPage locale={locale} />
      ) : hasServicePage ? (
        <ServicePage locale={locale} page={page} />
      ) : (
        <SubPage locale={locale} page={page} />
      )}
    </PageShell>
  );
}


