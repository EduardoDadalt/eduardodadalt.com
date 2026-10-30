import "server-only";
import type { Locale } from "@/constants/locales";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en").then((module) => module.default),
  pt: () => import("./pt").then((module) => module.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
