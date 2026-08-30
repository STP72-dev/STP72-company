import type { ReactNode } from "react";
import { type Locale } from "@/config/site";
import type { PageKey } from "@/config/routes";
import type { SolutionKey } from "@/config/solutions";
import { getContent } from "@/content";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type PageShellProps = {
  locale: Locale;
  /** Conceptual page currently rendered — drives active nav + language switching. */
  page: PageKey;
  /** Set on nested solution pages so language switching stays on the same solution. */
  solution?: SolutionKey | undefined;
  children: ReactNode;
};

/** Locale-aware shell: theme context, skip link, corporate header, main landmark, footer. */
export function PageShell({ locale, page, solution, children }: PageShellProps) {
  const c = getContent(locale);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-50 focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:text-accent-foreground"
        >
          {c.common.skipToContent}
        </a>

        <SiteHeader locale={locale} page={page} solution={solution} />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter locale={locale} page={page} />
      </div>
    </ThemeProvider>
  );
}
