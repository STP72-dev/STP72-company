import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors duration-150 ease-system focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-40 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "justify-center bg-primary text-primary-foreground hover:bg-interactive-hover",
        destructive:
          "justify-center bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "justify-center border border-input bg-transparent hover:bg-layer-01",
        secondary: "justify-center bg-secondary text-secondary-foreground hover:bg-layer-02",
        ghost: "justify-center hover:bg-layer-01 hover:text-foreground",
        link: "justify-center text-link underline-offset-4 hover:underline",
        /** Emphasis 1 — the single dominant action in a context. Solid accent. */
        cta: "bg-accent text-accent-foreground hover:bg-interactive-hover",
        /** Emphasis 2 — secondary action. 1px outline, no fill. */
        technical:
          "border border-accent bg-transparent text-link hover:bg-accent/8 dark:hover:bg-accent/15",
        /** Emphasis 3 — tertiary/text action. No border, no fill. */
        tertiary: "px-0 text-link hover:underline",
      },
      size: {
        default: "h-10 justify-center px-4",
        sm: "h-8 justify-center px-3 text-xs",
        /** 48px tall, label left-aligned, action icon right — Carbon-style. */
        lg: "h-12 pl-4 pr-12 justify-between min-w-[13rem]",
        icon: "h-10 w-10 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
