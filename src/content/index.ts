import { DEFAULT_LOCALE, type Locale } from "@/config/site";
import { en } from "./en";
import { hu } from "./hu";
import type { LocaleContent } from "./types";

export const content: Record<Locale, LocaleContent> = { hu, en };

export const getContent = (locale: Locale): LocaleContent =>
  content[locale] ?? content[DEFAULT_LOCALE];

export type { LocaleContent, ServiceContent, SeoContent } from "./types";
