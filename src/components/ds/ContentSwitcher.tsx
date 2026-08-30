import { useId, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SwitcherOption = { value: string; label: string };

type ContentSwitcherProps = {
  /** Accessible group label — describes what the related views have in common. */
  label: string;
  options: SwitcherOption[];
  value: string;
  onChange: (value: string) => void;
  /** High contrast at page level, low contrast inside contained panels. */
  contrast?: "high" | "low";
  className?: string;
};

/**
 * Carbon-inspired content switcher: two or three RELATED views of one content region.
 * Not for navigation, not for binary settings. Exactly one segment is always selected.
 * Grid-aware equal columns, left aligned, full keyboard support (tablist semantics).
 */
export function ContentSwitcher({
  label,
  options,
  value,
  onChange,
  contrast = "high",
  className,
}: ContentSwitcherProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = options.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    const option = options[next];
    if (!option) return;
    onChange(option.value);
    refs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "grid w-full max-w-xl border",
        contrast === "high" ? "border-border-strong" : "border-border",
        className,
      )}
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((option, index) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(node) => {
              refs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`switch-${option.value}`}
            aria-selected={selected}
            aria-controls={`panel-${option.value}`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn(
              "flex h-10 min-w-0 items-center justify-center px-4 text-sm transition-colors duration-150 ease-system",
              index > 0 && "border-l",
              contrast === "high" ? "border-border-strong" : "border-border",
              selected
                ? "bg-inverse font-medium text-inverse-foreground"
                : "bg-transparent text-muted-foreground hover:bg-layer-02 hover:text-foreground",
            )}
          >
            <span className="truncate">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/** Panel wired to a switcher segment. Only the selected panel is rendered. */
export function SwitcherPanel({
  value,
  selected,
  children,
}: {
  value: string;
  selected: boolean;
  children: ReactNode;
}) {
  const key = useId();
  if (!selected) return null;
  return (
    <div
      key={key}
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`switch-${value}`}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
