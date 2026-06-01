import { DEFAULT_LOCALE, type Locale } from "@/constants/locales";
import type { Localized } from "@/i18n/types";

/** Read a localized value with a safe fallback to the default locale. */
export function pick<T>(value: Localized<T>, locale: string): T {
  return value[locale as Locale] ?? value[DEFAULT_LOCALE];
}
