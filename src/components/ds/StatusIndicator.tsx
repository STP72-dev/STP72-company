import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

export type MaturityStatus = "demonstrator" | "reference-architecture" | "prototype";

/**
 * Semantic status indicator. Status is never conveyed by color alone:
 * each state has a distinct shape/glyph plus a readable label.
 * Use only where maturity actually matters — not as decoration.
 */
const shapes: Record<MaturityStatus, { color: string; glyph: ReactElement }> = {
  demonstrator: {
    color: "text-support-success",
    glyph: (
      <>
        <circle cx="8" cy="8" r="6.25" />
        <path d="M5.25 8.25 7.25 10.25 10.75 6" />
      </>
    ),
  },
  "reference-architecture": {
    color: "text-support-info",
    glyph: (
      <>
        <rect x="2.25" y="2.25" width="11.5" height="11.5" />
        <path d="M2.25 8h11.5M8 2.25v11.5" />
      </>
    ),
  },
  prototype: {
    color: "text-support-warning",
    glyph: (
      <>
        <path d="M8 1.75 14.25 13.5H1.75L8 1.75z" />
        <path d="M8 6v3.5M8 11.25v.75" />
      </>
    ),
  },
};

export function StatusIndicator({
  status,
  label,
  className,
}: {
  status: MaturityStatus;
  label: string;
  className?: string;
}) {
  const { color, glyph } = shapes[status];
  return (
    <span className={cn("inline-flex items-center gap-2 text-left text-sm", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className={cn("h-4 w-4 shrink-0", color)}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      >
        {glyph}
      </svg>
      <span className="text-muted-foreground">{label}</span>
    </span>
  );
}
