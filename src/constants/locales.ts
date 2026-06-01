export const LOCALES = ["en", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const isLocale = (locale: string): locale is Locale =>
  LOCALES.some((supportedLocale) => supportedLocale === locale);
