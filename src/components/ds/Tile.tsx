import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type TileProps = {
  /** Semantic heading level for the tile title. */
  level?: 2 | 3 | 4;
  title: string;
  description?: string;
  points?: string[];
  /** Primary tiles carry a top accent rule; supporting tiles stay quiet. */
  emphasis?: "primary" | "supporting";
  /** Optional editorial pictogram (>=48px). Decorative, not a UI icon. */
  media?: ReactNode;
  className?: string;
  children?: ReactNode;
};

/**
 * Flat rectangular tile: no radius, no shadow, no hover lift.
 * Structure comes from borders and the top rule, not from elevation.
 */
export function Tile({
  level = 3,
  title,
  description,
  points,
  emphasis = "supporting",
  media,
  className,
  children,
}: TileProps) {
  const Tag = `h${level}` as "h2" | "h3" | "h4";

  return (
    <div
      className={cn(
        "flex h-full flex-col border-t bg-layer-01 p-6 md:p-8",
        emphasis === "primary" ? "border-accent" : "border-border-strong",
        className,
      )}
    >
      {media ? <div className="mb-6">{media}</div> : null}
      <Tag className="text-lg font-semibold leading-snug text-foreground md:text-xl">{title}</Tag>

      {description ? (
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      {points?.length ? (
        <ul className="mt-6 space-y-2 border-t border-border pt-4 text-sm text-muted-foreground">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-border-strong" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {children}
    </div>
  );
}
