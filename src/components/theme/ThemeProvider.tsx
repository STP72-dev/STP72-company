import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  readStoredPreference,
  systemTheme,
  type ResolvedTheme,
  type ThemePreference,
} from "@/lib/theme";

type ThemeContextValue = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  setPreference: (next: ThemePreference) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Light/dark theme provider.
 * First visit follows prefers-color-scheme; an explicit choice is persisted.
 * The pre-paint class is set by the head script in __root, so this only syncs state.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [resolved, setResolved] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const stored = readStoredPreference();
    setPreferenceState(stored);
    setResolved(stored === "system" ? systemTheme() : stored);
  }, []);

  useEffect(() => {
    if (preference !== "system" || typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next: ResolvedTheme = media.matches ? "dark" : "light";
      setResolved(next);
      applyTheme(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    const effective: ResolvedTheme = next === "system" ? systemTheme() : next;
    setResolved(effective);
    applyTheme(effective);
    try {
      if (next === "system") localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      preference,
      resolved,
      setPreference,
      toggle: () => setPreference(resolved === "dark" ? "light" : "dark"),
    }),
    [preference, resolved, setPreference],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
