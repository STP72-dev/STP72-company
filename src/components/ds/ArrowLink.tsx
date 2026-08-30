import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Inline text link with a static arrow. No motion, no underline animation. */
export function ArrowLink({
  href,
  className,
  external,
  children,
}: {
  href: string;
  className?: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cn(
        "inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-link hover:border-current",
        className,
      )}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" />
      </svg>
    </a>
  );
}
