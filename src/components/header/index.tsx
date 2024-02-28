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
    { name: dictionary.header.languages, href: "/#linguagens" },
    { name: dictionary.header.technologies, href: "/#tecnologias" },
    { name: dictionary.header.solutions, href: "/#solucoes" },
    { name: dictionary.header.repositories, href: "/#repositorios" },
  ];

  return (
    <>
      <div className="hidden bg-primary-500 p-2 text-center text-slate-50 print:block">
        {dictionary.header.forMoreInfoAccess}{" "}
        <Link href="https://eduardodadalt.com" className="font-bold underline">
          eduardodadalt.com
        </Link>
      </div>
      <header className="flex h-12 flex-row items-center justify-between bg-opacity-50 bg-gradient-to-br from-primary-700 to-blue-500 p-2 text-gray-100 dark:from-primary-900 dark:to-blue-800 md:p-4 print:hidden">
        <Menu navItens={Links} />
        <Link href="/">
          <h1 className="font-display lg:text-lg">Eduardo Dadalt</h1>
        </Link>
        <nav className="hidden items-center justify-evenly gap-2 hover:*:underline md:flex md:flex-1">
          {Links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className=" flex flex-row items-center gap-2">
          <div className="hidden flex-row gap-2 md:flex">
            <ButtonSocialNetwork socialNetwork="github" />
            <ButtonSocialNetwork socialNetwork="linkedin" />
          </div>
          <Button asChild>
            <Link href="/#contato">{dictionary.header.contact}</Link>
          </Button>
          <ToggleThemeMode />
        </div>
      </header>
    </>
  );
}
