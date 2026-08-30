import { useId, useState } from "react";
import type { Locale } from "@/config/site";
import { getContent } from "@/content";
import { cn } from "@/lib/utils";

type AILabelProps = {
  locale: Locale;
  /** What the AI did, in one plain sentence. */
  whatItDid: string;
  /** High-level description of the information it used. */
  whatItUsed: string;
  /** What the person should check before acting on the output. */
  whatToVerify: string;
  className?: string;
};

/**
 * AI transparency marker with progressive explainability disclosure.
 *
 * Use ONLY where the UI actually presents AI-generated or AI-recommended content.
 * This is not decorative branding: never place it on marketing sections, headings
 * or cards just because the company works with AI.
 */
export function AILabel({
  locale,
  whatItDid,
  whatItUsed,
  whatToVerify,
  className,
}: AILabelProps) {
  const c = getContent(locale);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <span className={cn("relative inline-flex", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="inline-flex h-6 items-center gap-1 border border-support/50 bg-support/8 px-2 font-mono text-[0.6875rem] font-medium text-support hover:bg-support/15 dark:bg-support/12"
      >
        {c.common.ai.label}
        <span aria-hidden="true" className="text-[0.625rem]">
          ⓘ
        </span>
        <span className="sr-only">— {c.common.ai.disclosureTitle}</span>
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label={c.common.ai.disclosureTitle}
          className="absolute left-0 top-8 z-30 w-80 border border-border bg-popover p-4 text-left text-popover-foreground"
        >
          <p className="text-sm font-semibold">{c.common.ai.disclosureTitle}</p>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="text-xs text-muted-foreground">{c.common.ai.whatItDid}</dt>
              <dd className="mt-1">{whatItDid}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">{c.common.ai.whatItUsed}</dt>
              <dd className="mt-1">{whatItUsed}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">{c.common.ai.whatToVerify}</dt>
              <dd className="mt-1">{whatToVerify}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 text-sm font-medium text-link hover:underline"
          >
            {c.common.ai.close}
          </button>
        </div>
      ) : null}
    </span>
  );
}
