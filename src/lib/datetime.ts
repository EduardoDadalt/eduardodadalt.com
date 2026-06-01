import type { Locale } from "@/constants/locales";

const INTL_LOCALE: Record<Locale, string> = {
  en: "en-US",
  pt: "pt-BR",
};

function intlLocale(locale: string): string {
  return INTL_LOCALE[locale as Locale] ?? INTL_LOCALE.en;
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

/** Format an ISO `YYYY-MM` string as a localized "Mon YYYY". */
export function formatMonthYear(iso: string, locale: string): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(year, (month || 1) - 1, 1);
  const formatted = new Intl.DateTimeFormat(intlLocale(locale), {
    month: "short",
    year: "numeric",
  }).format(date);
  // pt-BR yields e.g. "fev. de 2021" → "Fev de 2021"; en-US "Feb 2021".
  return capitalize(formatted.replace(".", ""));
}

/** "Mar 2021 — Present" style range; `end === null` means ongoing. */
export function formatRange(
  start: string,
  end: string | null,
  locale: string,
  presentLabel: string,
): string {
  const from = formatMonthYear(start, locale);
  const to = end ? formatMonthYear(end, locale) : presentLabel;
  return `${from} — ${to}`;
}

/** Whole years elapsed since an ISO date (`YYYY-MM-DD`). */
export function getAge(birthIso: string): number {
  const birth = new Date(birthIso);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age -= 1;
  }
  return age;
}
