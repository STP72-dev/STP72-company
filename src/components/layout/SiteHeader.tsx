import { useEffect, useState } from "react";
import { LOCALES, siteConfig, type Locale } from "@/config/site";
import { navMore, navPrimary, type PageKey } from "@/config/routes";
import type { SolutionKey } from "@/config/solutions";
import { getContent } from "@/content";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/brand/Wordmark";
import { PageLink, SolutionLink } from "@/components/nav/PageLink";
import { SiteSearch } from "@/components/search/SiteSearch";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type SiteHeaderProps = {
  locale: Locale;
  /** Conceptual page currently rendered — drives active state and language switching. */
  page: PageKey;
  /** Nested solution currently rendered, if any. Language switching follows it. */
  solution?: SolutionKey | undefined;
};

/**
 * Enterprise shell header: 48px bar on mobile, 56px from md up.
 * Compact primary navigation plus a restrained supporting-pages menu.
 * The dominant primary action stays on the page, not in the header.
 */
export function SiteHeader({ locale, page, solution }: SiteHeaderProps) {
  const c = getContent(locale);
  const [open, setOpen] = useState(false);

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [locale, page, solution]);

  const label = (key: PageKey) =>
    key === "home" ? c.common.homeLabel : c.pages[key].navLabel;

  const moreIsActive = navMore.includes(page);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="flex h-12 items-stretch md:h-14">
        <PageLink
          page="home"
          locale={locale}
          aria-label={siteConfig.brand}
          className="flex shrink-0 items-center gap-3 px-4 hover:bg-layer-01 md:px-6"
        >
          <Wordmark locale={locale} showDescriptor />
        </PageLink>

        <nav aria-label={c.common.mainNav} className="hidden flex-1 items-stretch lg:flex">
          {navPrimary.map((key) => {
            const active = key === page;
            return (
              <PageLink
                key={key}
                page={key}
                locale={locale}
                aria-current={active ? "page" : undefined}
                className={cn(
                  // Active state uses a border indicator + weight, not colour alone.
                  "flex items-center border-b-2 px-4 text-sm hover:bg-layer-01 hover:text-foreground",
                  active
                    ? "border-accent font-semibold text-foreground"
                    : "border-transparent text-muted-foreground",
                )}
              >
                {label(key)}
              </PageLink>
            );
          })}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "flex items-center gap-2 border-b-2 px-4 text-sm hover:bg-layer-01 hover:text-foreground",
                moreIsActive
                  ? "border-accent font-semibold text-foreground"
                  : "border-transparent text-muted-foreground",
              )}
            >
              {c.common.moreLabel}
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 rounded-none">
              {navMore.map((key) => (
                <DropdownMenuItem key={key} asChild className="rounded-none">
                  <PageLink
                    page={key}
                    locale={locale}
                    aria-current={key === page ? "page" : undefined}
                    className={cn(
                      "block w-full px-2 py-2 text-sm",
                      key === page ? "font-semibold text-foreground" : "text-foreground",
                    )}
                  >
                    {label(key)}
                  </PageLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="ml-auto flex items-stretch">
          <SiteSearch locale={locale} />

          {/* Language switching preserves the current conceptual page. */}
          <div
            className="hidden items-stretch border-l border-border sm:flex"
            role="group"
            aria-label={c.common.languageSwitch}
          >
            {LOCALES.map((l) => {
              const className = cn(
                "flex items-center px-3 text-sm hover:bg-layer-01",
                l === locale ? "font-semibold text-foreground" : "text-muted-foreground",
              );
              const shared = {
                hrefLang: l,
                "aria-label": siteConfig.localeLabels[l],
                "aria-current": l === locale ? ("true" as const) : undefined,
                className,
              };
              return solution ? (
                <SolutionLink key={l} solution={solution} locale={l} {...shared}>
                  {l.toUpperCase()}
                </SolutionLink>
              ) : (
                <PageLink key={l} page={page} locale={l} {...shared}>
                  {l.toUpperCase()}
                </PageLink>
              );
            })}
          </div>

          <ThemeToggle locale={locale} />

          {/* Lower emphasis than the page's primary CTA: text action, no filled accent. */}
          <PageLink
            page="contact"
            locale={locale}
            className="hidden items-center border-l border-border px-4 text-sm font-medium text-foreground hover:bg-layer-01 md:flex"
          >
            {c.common.contactLabel}
          </PageLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex w-12 items-center justify-center border-l border-border text-foreground hover:bg-layer-01 lg:hidden"
              aria-label={c.common.openMenu}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(20rem,100vw)] gap-0 overflow-y-auto rounded-none border-l border-border bg-background p-0"
            >
              <SheetHeader className="border-b border-border px-4 py-3 text-left">
                <SheetTitle className="text-sm font-semibold text-foreground">
                  {c.common.mainNav}
                </SheetTitle>
              </SheetHeader>

              <nav aria-label={c.common.mainNav}>
                <ul className="flex flex-col">
                  {[...navPrimary, ...navMore, "contact" as PageKey].map((key) => {
                    const active = key === page;
                    return (
                      <li key={key} className="border-b border-border-subtle">
                        <PageLink
                          page={key}
                          locale={locale}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex items-center justify-between gap-3 border-l-2 px-4 py-3 text-sm hover:bg-layer-01",
                            active
                              ? "border-accent font-semibold text-foreground"
                              : "border-transparent text-foreground",
                          )}
                        >
                          {label(key)}
                          {active ? (
                            <span className="text-xs font-normal text-muted-foreground">
                              {c.common.currentPageLabel}
                            </span>
                          ) : null}
                        </PageLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div
                className="flex items-center gap-1 px-4 py-3"
                role="group"
                aria-label={c.common.languageSwitch}
              >
                <span className="mr-2 text-sm text-muted-foreground">
                  {c.common.languageSwitch}:
                </span>
                {LOCALES.map((l) => {
                  const shared = {
                    hrefLang: l,
                    "aria-current": l === locale ? ("true" as const) : undefined,
                    className: cn(
                      "px-2 py-1 text-sm",
                      l === locale ? "font-semibold text-foreground" : "text-muted-foreground",
                    ),
                  };
                  return solution ? (
                    <SolutionLink key={l} solution={solution} locale={l} {...shared}>
                      {siteConfig.localeLabels[l]}
                    </SolutionLink>
                  ) : (
                    <PageLink key={l} page={page} locale={l} {...shared}>
                      {siteConfig.localeLabels[l]}
                    </PageLink>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
