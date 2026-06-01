import Link from "next/link";
import ButtonSocialNetwork from "../button-social-network";
import ToggleThemeMode from "../toggle-theme-mode";
import { Button } from "../ui/button";

import Menu from "./menu";
import { getDictionary } from "@/dictionaries/dictionaries";

export type NavItem = {
  name: string;
  href: string;
};

export default async function Header({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);
  const Links: NavItem[] = [
    { name: dictionary.header.languages, href: `/${locale}#linguagens` },
    { name: dictionary.header.technologies, href: `/${locale}#tecnologias` },
    { name: dictionary.header.solutions, href: `/${locale}#solucoes` },
  ];

  return (
    <>
      <div className="hidden bg-slate-950 p-2 text-center text-xs text-slate-50 print:block">
        {dictionary.header.forMoreInfoAccess}{" "}
        <Link href="https://eduardodadalt.com" className="font-bold underline">
          eduardodadalt.com
        </Link>{" "}
        · eduardodadalt1@gmail.com · linkedin.com/in/eduardo-dadalt
      </div>
      <header className="sticky top-0 z-50 flex h-16 flex-row items-center justify-between border-b border-white/40 bg-white/75 px-3 text-slate-900 shadow-sm backdrop-blur-xl md:px-6 dark:border-slate-800/70 dark:bg-slate-950/75 dark:text-slate-100 print:hidden">
        <Menu navItens={Links} locale={locale} />
        <Link
          href={`/${locale}`}
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="from-primary-600 font-display flex size-9 items-center justify-center rounded-full bg-gradient-to-br to-sky-500 text-sm font-black text-white shadow-sm">
            ED
          </span>
          <span className="font-display truncate text-sm font-black tracking-wide lg:text-base">
            Eduardo Dadalt
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-1 md:flex md:flex-1">
          {Links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-row items-center gap-2">
          <div className="hidden flex-row gap-2 md:flex">
            <ButtonSocialNetwork socialNetwork="github" />
            <ButtonSocialNetwork socialNetwork="linkedin" />
          </div>
          <div className="hidden shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs font-bold md:flex dark:border-slate-800 dark:bg-slate-950">
            <Link
              href="/pt"
              className={`inline-flex min-w-8 justify-center rounded-full px-2 py-1 transition ${
                locale === "pt"
                  ? "bg-primary-600 text-white"
                  : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              PT
            </Link>
            <Link
              href="/en"
              className={`inline-flex min-w-8 justify-center rounded-full px-2 py-1 transition ${
                locale === "en"
                  ? "bg-primary-600 text-white"
                  : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>
          <Button
            asChild
            className="hover:bg-primary-700 dark:hover:bg-primary-100 hidden rounded-full bg-slate-950 text-white sm:inline-flex dark:bg-white dark:text-slate-950"
          >
            <Link href={`/${locale}#contato`}>{dictionary.header.contact}</Link>
          </Button>
          <ToggleThemeMode />
        </div>
      </header>
    </>
  );
}
