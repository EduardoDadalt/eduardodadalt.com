import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries/dictionaries";
import Link from "next/link";

export default async function Contact({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);
  return (
    <section className="flex min-h-60 flex-col bg-primary-600 py-10 text-slate-50 dark:bg-primary-700">
      <h2 className="text-center text-4xl font-bold">
        {dictionary.homepage.contact.title}
      </h2>
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <p>{dictionary.homepage.contact.youCanContactMeVia}:</p>
        <div className="flex gap-2 text-center *:flex-1">
          <Button asChild className="!inline-block">
            <Link
              href="mailto:eduardodadalt1@gmail.com"
              className="text-slate-100 hover:text-slate-50"
            >
              Email
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
