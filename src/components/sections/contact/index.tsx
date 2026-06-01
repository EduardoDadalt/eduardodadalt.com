import { Button } from "@/components/ui/button";
import { getDictionary } from "@/dictionaries/dictionaries";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export default async function Contact({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);
  return (
    <section
      id="contato"
      className="contact-band mt-12 flex flex-col px-6 py-14 text-slate-50 sm:px-8 md:px-12 print:hidden"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 rounded-lg border border-white/15 bg-slate-950/30 p-8 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between print:border-slate-300 print:bg-white print:p-0 print:shadow-none">
        <div className="max-w-2xl space-y-3">
          <p className="font-display text-primary-100 text-sm font-bold tracking-[0.25em] uppercase print:hidden">
            {dictionary.header.contact}
          </p>
          <h2 className="text-3xl font-black sm:text-4xl print:text-xl">
            {dictionary.homepage.contact.title}
          </h2>
          <p className="text-primary-50/90 leading-7 print:text-sm print:leading-5 print:text-slate-700">
            {dictionary.homepage.contact.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 print:gap-2">
          <Button
            asChild
            className="text-primary-800 hover:bg-primary-50 rounded-full bg-white px-5 print:border print:border-slate-300 print:bg-white print:text-slate-900"
          >
            <Link
              href="mailto:eduardodadalt1@gmail.com"
              className="text-primary-800 hover:text-primary-900 print:text-slate-900"
            >
              <Mail className="mr-2 size-4 print:hidden" />
              {dictionary.homepage.contact.email}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/30 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white print:border-slate-300 print:bg-white print:text-slate-900"
          >
            <Link
              href="https://www.linkedin.com/in/eduardo-dadalt/"
              target="_blank"
            >
              {dictionary.homepage.contact.linkedin}
              <ArrowUpRight className="ml-2 size-4 print:hidden" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/30 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white print:hidden"
          >
            <Link href="https://github.com/EduardoDadalt" target="_blank">
              {dictionary.homepage.contact.github}
              <ArrowUpRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
