import Link from "next/link";
import { LOCALES } from "@/constants/locales";
import { cn } from "@/lib/utils";

/** Minimal EN/PT switcher. The site is a single page, so each locale's root is enough. */
export default function LanguageSwitch({ locale }: { locale: string }) {
  return (
    <div
      className="flex items-center gap-0.5 rounded-md border border-border p-0.5 font-mono text-xs print:hidden"
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          hrefLang={l}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "rounded px-1.5 py-0.5 uppercase transition-colors",
            l === locale
              ? "bg-accent/15 text-accent"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
