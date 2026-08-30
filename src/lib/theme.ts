/**
 * Theme model: explicit user preference or system preference.
 * Stored value is only "light" | "dark"; absence means "follow the system".
 */

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "stp72-theme";

/**
 * Blocking script injected in <head>: applies the correct class before first
 * paint so there is no flash of the wrong theme during hydration.
 */
export const themeInitScript = `(function(){try{var k="${THEME_STORAGE_KEY}";var s=localStorage.getItem(k);var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var e=document.documentElement;e.classList.toggle("dark",d);e.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export function readStoredPreference(): ThemePreference {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "dark" || value === "light" ? value : "system";
  } catch {
    return "system";
  }
}

export function systemTheme(): ResolvedTheme {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(resolved: ResolvedTheme) {
  const el = document.documentElement;
  el.classList.toggle("dark", resolved === "dark");
  el.style.colorScheme = resolved;
}
