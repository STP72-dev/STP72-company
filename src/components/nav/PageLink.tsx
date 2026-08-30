import { Link, useNavigate, type LinkComponentProps } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { pagePath, routeSlugs, type PageKey } from "@/config/routes";
import {
  parentPageOfSolution,
  solutionPath,
  solutionSlugs,
  type SolutionKey,
} from "@/config/solutions";
import type { Locale } from "@/config/site";

type PageLinkProps = {
  page: PageKey;
  locale: Locale;
  hash?: string;
  children: ReactNode;
} & Omit<LinkComponentProps<"a">, "to" | "params" | "children" | "hash">;

/**
 * The only place that turns a route-registry key into router props.
 * Components never hard-code localized paths.
 */
export function PageLink({ page, locale, hash, children, ...rest }: PageLinkProps) {
  // exactOptionalPropertyTypes: only pass `hash` when there actually is one.
  const hashProp = hash ? { hash } : {};

  if (page === "home") {
    return (
      <Link to="/$locale" params={{ locale }} {...hashProp} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      to="/$locale/$slug"
      params={{ locale, slug: routeSlugs[page][locale] }}
      {...hashProp}
      {...rest}
    >
      {children}
    </Link>
  );
}

type SolutionLinkProps = {
  solution: SolutionKey;
  locale: Locale;
  children: ReactNode;
} & Omit<LinkComponentProps<"a">, "to" | "params" | "children">;

/** Counterpart of PageLink for the nested solution detail routes. */
export function SolutionLink({ solution, locale, children, ...rest }: SolutionLinkProps) {
  return (
    <Link
      to="/$locale/$slug/$child"
      params={{
        locale,
        slug: routeSlugs[parentPageOfSolution(solution)][locale],
        child: solutionSlugs[solution][locale],
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** Imperative counterpart of PageLink (search result selection, redirects). */
export function useNavigateToPage() {
  const navigate = useNavigate();

  return (page: PageKey, locale: Locale, hash?: string, solution?: SolutionKey) => {
    const hashProp = hash ? { hash } : {};
    if (solution) {
      return navigate({
        to: "/$locale/$slug/$child",
        params: {
          locale,
          slug: routeSlugs[parentPageOfSolution(solution)][locale],
          child: solutionSlugs[solution][locale],
        },
        ...hashProp,
      });
    }
    if (page === "home") {
      return navigate({ to: "/$locale", params: { locale }, ...hashProp });
    }
    return navigate({
      to: "/$locale/$slug",
      params: { locale, slug: routeSlugs[page][locale] },
      ...hashProp,
    });
  };
}

export { pagePath, solutionPath };
