import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  width?: "narrow" | "default" | "wide";
};

/** 2x-grid aligned max widths; gutters follow the 8px rhythm (16 / 32 / 48px). */
const widths = {
  narrow: "max-w-[42rem]",
  default: "max-w-[66rem]",
  wide: "max-w-[99rem]",
} as const;

export function Container({
  as: Tag = "div",
  width = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-4 md:px-8 xl:px-12", widths[width], className)}
      {...props}
    />
  );
}
