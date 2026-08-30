import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

export type PictogramName = "automation" | "applications" | "forecasting" | "integration";

/**
 * Original STP72 line pictograms — productive style, token-driven strokes so they
 * work in both themes. Editorial illustration only, never a substitute for a 16/20px
 * UI icon and never used as the logo. Rendered at 48px minimum.
 */
const paths: Record<PictogramName, ReactElement> = {
  // Automation: an input queue routed through a rule block into an output
  automation: (
    <>
      <path d="M4 12h10M4 24h10M4 36h10" />
      <path d="M18 8h12v32H18z" />
      <path d="M30 24h14M38 18l6 6-6 6" />
      <path d="M22 18h4M22 24h4M22 30h4" />
    </>
  ),
  // Business applications: an application shell with structured records
  applications: (
    <>
      <path d="M5 8h38v32H5z" />
      <path d="M5 16h38" />
      <path d="M9 12h3M15 12h3" />
      <path d="M12 22h12M12 28h12M12 34h8" />
      <path d="M30 22h8M30 28h8M30 34h8" />
    </>
  ),
  // Data and forecasting: measured series continuing into a projected path
  forecasting: (
    <>
      <path d="M6 6v36h36" />
      <path d="M10 34l8-8 6 5 8-13" />
      <path d="M32 18l4-6" strokeDasharray="4 3" />
      <path d="M36 12l6 6" strokeDasharray="4 3" />
      <path d="M24 42v-4M32 42v-4M40 42v-4" />
    </>
  ),
  // Integration and operations: connected systems around a shared exchange
  integration: (
    <>
      <path d="M18 18h12v12H18z" />
      <path d="M4 6h10v10H4zM34 6h10v10H34zM4 32h10v10H4zM34 32h10v10H34z" />
      <path d="M14 11h4v7M34 11h-4v7M14 37h4v-7M34 37h-4v-7" />
    </>
  ),
};

export function Pictogram({
  name,
  size = 48,
  className,
}: {
  name: PictogramName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={cn("shrink-0 text-accent", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {paths[name]}
    </svg>
  );
}
