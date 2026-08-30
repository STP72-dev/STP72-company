import { createFileRoute, redirect } from "@tanstack/react-router";
import { DEFAULT_LOCALE } from "@/config/site";

/** Root entry: forwards to the default locale home (/hu). */
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$locale", params: { locale: DEFAULT_LOCALE }, replace: true });
  },
  component: () => null,
});
