import { createFileRoute, notFound } from "@tanstack/react-router";
import { isLocale } from "@/config/routes";
import { solutionKeyFromSlugs } from "@/config/solutions";
import { DEFAULT_LOCALE, type Locale } from "@/config/site";
import { getContent } from "@/content";
import { buildLocaleHead } from "@/lib/seo";
import { PageShell } from "@/components/layout/PageShell";
import { SolutionDetailPage } from "@/components/pages/SolutionDetailPage";
import { parentPageOfSolution } from "@/config/solutions";

/**
 * Nested solution detail routes: /{locale}/{family-slug}/{solution-slug}.
 * The pair is resolved through the solution catalogue, so a slug belonging to
 * the other locale — or to the wrong family — is a genuine 404.
 */
export const Route = createFileRoute("/$locale/$slug/$child")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) throw notFound();
    if (!solutionKeyFromSlugs(params.locale, params.slug, params.child)) throw notFound();
  },
  head: ({ params }) => {
    const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const solution = solutionKeyFromSlugs(locale, params.slug, params.child);
    if (!solution) return {};
    return buildLocaleHead({
      locale,
      seo: getContent(locale).solutionDetails[solution].seo,
      solution,
      page: parentPageOfSolution(solution),
    });
  },
  component: SolutionRoute,
});

function SolutionRoute() {
  const params = Route.useParams();
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  const solution = solutionKeyFromSlugs(locale, params.slug, params.child);
  if (!solution) throw notFound();

  return (
    <PageShell locale={locale} page={parentPageOfSolution(solution)} solution={solution}>
      <SolutionDetailPage locale={locale} solution={solution} />
    </PageShell>
  );
}
