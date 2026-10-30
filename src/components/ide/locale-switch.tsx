"use client";

import type { Locale } from "@/constants/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitch({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const target: Locale = locale === "pt" ? "en" : "pt";
  const href = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${target}`);

  return (
    <Link href={href} hrefLang={target} aria-label={label} title={label} className={className}>
      {target.toUpperCase()}
    </Link>
  );
}
