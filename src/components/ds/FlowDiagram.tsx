import { cn } from "@/lib/utils";
import type { DiagramStage } from "@/content/types";

/**
 * Shared STP72 explainer-diagram primitive.
 *
 * One vertical, ordered flow of stages. A stage can hold parallel items
 * (rendered as adjacent cells) and an optional caption. Meaning is carried by
 * order, numbering and the localized `tag` word — never by colour or motion.
 * Flat borders, square geometry, semantic layers only: this is the same visual
 * language as the rest of the site, not a separate illustration style.
 */

const toneCell: Record<NonNullable<DiagramStage["tone"]>, string> = {
  context: "bg-background border-dashed",
  core: "bg-layer-01",
  outcome: "bg-layer-02",
};

const Chevron = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3 w-3 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.25">
    <path d="M8 3v9.5M4.5 9 8 12.5 11.5 9" />
  </svg>
);

export type FlowDiagramProps = {
  /** Ordered stages, top to bottom. */
  stages: DiagramStage[];
  /** Accessible description of the whole flow, for non-visual reading. */
  description: string;
  /** Optional secondary path shown beside the flow (e.g. staged modernization). */
  aside?: { title: string; items: string[] };
  className?: string;
};

export function FlowDiagram({ stages, description, aside, className }: FlowDiagramProps) {
  return (
    <figure className={cn("border border-border bg-background", className)}>
      <div className="grid gap-px bg-border lg:grid-cols-3">
        <div className={cn("bg-background p-5 md:p-8", aside ? "lg:col-span-2" : "lg:col-span-3")}>
          <p className="sr-only">{description}</p>
          <ol className="flex flex-col">
            {stages.map((stage, index) => (
              <li key={stage.key} className="flex flex-col">
                <div className={cn("border border-border-strong p-4 md:p-5", toneCell[stage.tone ?? "core"])}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-foreground md:text-base">{stage.label}</span>
                    {stage.tag ? (
                      <span className="border border-border px-1.5 font-mono text-[0.6875rem] uppercase tracking-wide text-muted-foreground">
                        {stage.tag}
                      </span>
                    ) : null}
                  </div>

                  {stage.detail ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
                  ) : null}

                  {stage.items?.length ? (
                    <ul className="mt-4 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className="bg-background px-3 py-2 text-xs leading-relaxed text-foreground md:text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {stage.note ? (
                    <p className="mt-3 border-l-2 border-border-strong pl-3 text-xs leading-relaxed text-muted-foreground">
                      {stage.note}
                    </p>
                  ) : null}
                </div>

                {index < stages.length - 1 ? (
                  <div aria-hidden="true" className="flex flex-col items-center py-2">
                    <span className="h-4 w-px bg-border-strong" />
                    <Chevron />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        {aside ? (
          <div className="bg-layer-01 p-5 md:p-8">
            <h4 className="text-sm font-semibold text-foreground">{aside.title}</h4>
            <ul className="mt-4 border-t border-border">
              {aside.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-3 text-xs leading-relaxed text-muted-foreground md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </figure>
  );
}
