import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  width?: "narrow" | "default" | "wide";
  spacing?: "sm" | "md" | "lg";
  /** Flat sectional contrast instead of shadows or cards. */
  surface?: "base" | "layer" | "inverse";
};

const spacings = {
  sm: "py-12",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
} as const;

const surfaces = {
  base: "bg-background",
  layer: "bg-layer-01",
  inverse: "bg-inverse text-inverse-foreground",
} as const;

export function Section({
  width = "wide",
  spacing = "md",
  surface = "base",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacings[spacing], surfaces[surface], className)} {...props}>
      <Container width={width}>{children}</Container>
    </section>
  );
}
