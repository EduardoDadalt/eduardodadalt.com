import "server-only";
import { type Dictionary } from "./Dictionary.ts";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/constants/locales";

export const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en.ts").then((module) => module.default),
  pt: () => import("./pt.ts").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> =>
  dictionaries[isLocale(locale) ? locale : DEFAULT_LOCALE]();
