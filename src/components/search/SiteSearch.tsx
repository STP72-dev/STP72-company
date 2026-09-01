import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { getContent } from "@/content";
import { buildSearchIndex, searchEntries, type SearchEntry } from "@/lib/search-index";
import { useNavigateToPage } from "@/components/nav/PageLink";
import { cn } from "@/lib/utils";

/**
 * Functional client-side site search over the real indexed content.
 * Opens in a dialog panel: result count, keyboard navigation, and a helpful
 * follow-up instead of a dead-end empty state.
 */
export function SiteSearch({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigateToPage = useNavigateToPage();
  const index = useMemo(() => buildSearchIndex(locale), [locale]);
  const results = useMemo(() => searchEntries(index, query), [index, query]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /** Results navigate to real localized routes; homepage sections keep their anchor. */
  const go = (entry: Pick<SearchEntry, "page" | "hash" | "solution">) => {
    setOpen(false);
    void navigateToPage(entry.page, locale, entry.hash, entry.solution);
  };

  const onInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const result = results[active];
      if (result) go(result);
    }
  };

  const trimmed = query.trim();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={c.common.searchLabel}
        aria-expanded={open}
        className="flex w-12 items-center justify-center border-l border-border text-foreground hover:bg-layer-01"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="10.5" cy="10.5" r="6.25" />
          <path d="M15 15l4.5 4.5" />
        </svg>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex justify-center">
          <button
            type="button"
            aria-label={c.common.searchClose}
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-overlay"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={c.common.searchLabel}
            className="relative mt-0 flex h-fit w-full max-w-2xl flex-col border-b border-border bg-background sm:mt-24 sm:border"
          >
            <div className="flex items-stretch border-b border-border">
              <span className="flex w-12 items-center justify-center text-muted-foreground">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="10.5" cy="10.5" r="6.25" />
                  <path d="M15 15l4.5 4.5" />
                </svg>
              </span>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder={c.common.searchPlaceholder}
                aria-label={c.common.searchPlaceholder}
                className="h-12 min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
              />
              {trimmed ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  className="px-4 text-sm text-muted-foreground hover:bg-layer-01 hover:text-foreground"
                >
                  {c.common.searchClear}
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex w-12 items-center justify-center border-l border-border text-foreground hover:bg-layer-01"
              >
                <span className="sr-only">{c.common.searchClose}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {trimmed ? (
              <div className="max-h-[60vh] overflow-y-auto">
                <p
                  aria-live="polite"
                  className="border-b border-border-subtle px-4 py-3 text-xs text-muted-foreground"
                >
                  {c.common.searchResultsCount.replace("{count}", String(results.length))}
                </p>

                {results.length > 0 ? (
                  <ul>
                    {results.map((result, i) => (
                      <li key={result.id}>
                        <button
                          type="button"
                          onClick={() => go(result)}
                          onMouseEnter={() => setActive(i)}
                          aria-current={i === active ? "true" : undefined}
                          className={cn(
                            "flex w-full flex-col items-start gap-1 border-b border-border-subtle px-4 py-3 text-left",
                            i === active ? "bg-layer-01" : "hover:bg-layer-01",
                          )}
                        >
                          <span className="text-sm font-medium text-foreground">
                            {result.title}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {c.common.searchGroups[result.group]}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-6">
                    <p className="text-sm text-foreground">{c.common.searchNoResults}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {c.common.searchNoResultsHelp}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setQuery("");
                          inputRef.current?.focus();
                        }}
                        className="text-sm font-medium text-link hover:underline"
                      >
                        {c.common.searchClear}
                      </button>
                      <button
                        type="button"
                        onClick={() => go({ page: "solutions" })}
                        className="text-sm font-medium text-link hover:underline"
                      >
                        {c.home.solutions.title}
                      </button>
                      <button
                        type="button"
                        onClick={() => go({ page: "contact" })}
                        className="text-sm font-medium text-link hover:underline"
                      >
                        {c.common.contactLabel}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
