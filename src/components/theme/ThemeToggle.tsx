import { useTheme } from "./ThemeProvider";
import { getContent } from "@/content";
import type { Locale } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Appearance control: a single rectangular icon button, not a content switcher.
 * Binary input, so a toggle button with an accessible label is the correct pattern.
 */
export function ThemeToggle({ locale, className }: { locale: Locale; className?: string }) {
  const c = getContent(locale);
  const { resolved, toggle } = useTheme();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? c.common.themeToLight : c.common.themeToDark}
      title={c.common.appearanceLabel}
      className={cn(
        "flex w-12 items-center justify-center border-l border-border text-foreground hover:bg-layer-01",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
          </>
        ) : (
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
        )}
      </svg>
    </button>
  );
}
