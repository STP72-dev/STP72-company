import { PageLink } from "@/components/nav/PageLink";
import { LOCALES, siteConfig, type Locale } from "@/config/site";
import type { PageKey } from "@/config/routes";
import { getContent } from "@/content";
import { Container } from "./Container";

/** Serious corporate footer: structured columns, flat surface, no decoration. */
export function SiteFooter({ locale, page }: { locale: Locale; page: PageKey }) {
  const c = getContent(locale);

  return (
    <footer className="border-t border-border bg-layer-01">
      <Container width="wide" className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-base font-semibold text-foreground">{siteConfig.brand}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.descriptor[locale]}
            </p>
            <dl className="mt-6 space-y-1 text-sm">
              <dt className="text-muted-foreground">{c.common.emailLabel}</dt>
              <dd>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="border-b border-transparent text-link hover:border-current"
                >
                  {siteConfig.contact.email}
                </a>
              </dd>
            </dl>
          </div>

          {c.footer.columns.map((column) => (
            <nav key={column.key} aria-label={column.title}>
              <h2 className="text-sm font-semibold text-foreground">{column.title}</h2>
              <ul className="mt-4 space-y-2">
                {column.pages.map((key) => (
                  <li key={key}>
                    <PageLink
                      page={key}
                      locale={locale}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {c.pages[key].navLabel}
                    </PageLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.brand}. {c.footer.legal}
          </p>
          <div className="flex items-center gap-3">
            <span>{c.common.languageSwitch}:</span>
            {LOCALES.map((l) => (
              <PageLink
                key={l}
                page={page}
                locale={l}
                hrefLang={l}
                className="hover:text-foreground aria-[current]:text-foreground"
                aria-current={l === locale ? "true" : undefined}
              >
                {siteConfig.localeLabels[l]}
              </PageLink>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
