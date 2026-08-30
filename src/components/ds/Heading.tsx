import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Level = 1 | 2 | 3 | 4;

const displaySizes = {
  lg: "type-display-lg",
  md: "type-display-md",
  sm: "type-display-sm",
} as const;

type DisplayHeadingProps = {
  level?: Level;
  size?: keyof typeof displaySizes;
  className?: string;
  id?: string;
  children: ReactNode;
};

/** Editorial heading. Semantic level and visual size are chosen independently. */
export function DisplayHeading({
  level = 2,
  size = "md",
  className,
  id,
  children,
}: DisplayHeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  return (
    <Tag id={id} className={cn(displaySizes[size], "text-balance text-foreground", className)}>
      {children}
    </Tag>
  );
}

/** Small structural section label. Sentence case, no tracked-out uppercase. */
export function SectionLabel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={cn("label-section border-t border-border-strong pt-3 text-foreground", className)}>
      {children}
    </p>
  );
}

export function Lede({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn("type-lede max-w-[46rem] text-muted-foreground", className)}>{children}</p>;
}
