import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries/dictionaries";
import Link from "next/link";

export default async function Contact({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);
  return (
    <section className="bg-primary-600 py-10 text-slate-50">
      <h2 className="text-2xl">{dictionary.homepage.contact.title}</h2>
      <div className="flex items-center gap-2">
        <p>{dictionary.homepage.contact.youCanContactMeVia}</p>
        <Button asChild>
          <Link
            href="mailto:eduardodadalt1@gmail.com"
            className="text-slate-100 hover:text-slate-50"
          >
            Email
          </Link>
        </Button>
      </div>
    </section>
  );
}
