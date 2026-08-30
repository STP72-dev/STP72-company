import { createFileRoute, notFound } from "@tanstack/react-router";
import { DEFAULT_LOCALE, type Locale } from "@/config/site";
import { isLocale } from "@/config/routes";
import { getContent } from "@/content";
import { buildLocaleHead } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/$locale/")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
  },
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    return buildLocaleHead({ locale, seo: getContent(locale).meta.home, page: "home" });
  },
  component: LocaleHome,
});

function LocaleHome() {
  const { locale } = Route.useParams();
  const safeLocale: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;

  return (
    <PageShell locale={safeLocale} page="home">
      <HomePage locale={safeLocale} />
    </PageShell>
  );
}
