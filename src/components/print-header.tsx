import { profile } from "@/content/resume";
import { pick } from "@/lib/localized";

/** Clean résumé header shown only when printing (replaces the on-screen hero). */
export default function PrintHeader({ locale }: { locale: string }) {
  const contacts = [
    pick(profile.location, locale),
    profile.email,
    profile.site,
    "github.com/EduardoDadalt",
    "linkedin.com/in/eduardo-dadalt",
  ];

  return (
    <header className="mx-auto hidden w-full max-w-4xl px-8 pt-2 print:block">
      <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-0.5 text-lg font-medium text-accent">
        {pick(profile.role, locale)}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">{contacts.join("  ·  ")}</p>
    </header>
  );
}
