import { siteConfig, type Locale } from "@/config/site";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  locale: Locale;
  showDescriptor?: boolean;
  className?: string;
};

/** Logotype: STP72 set in the sans family, optional descriptor line. */
export function Wordmark({ locale, showDescriptor = false, className }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-baseline gap-2 leading-none", className)}>
      <span className="text-base font-semibold tracking-tight text-foreground">
        {siteConfig.brand}
      </span>
      {showDescriptor ? (
        <span className="hidden text-sm text-muted-foreground lg:inline">
          {siteConfig.descriptor[locale]}
        </span>
      ) : null}
    </span>
  );
}
