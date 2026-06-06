import "server-only";
import { DEFAULT_LOCALE, type Locale } from "@/constants/locales";
import type { Messages } from "./types";
import en from "./en";
import pt from "./pt";

const messages: Record<Locale, Messages> = { en, pt };

/** Synchronous, server-only lookup of the UI messages for a locale. */
export function getMessages(locale: string): Messages {
  return messages[locale as Locale] ?? messages[DEFAULT_LOCALE];
}

export type { Messages, Localized } from "./types";
