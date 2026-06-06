import Link from "next/link";
import { getMessages } from "@/i18n";
import ButtonSocialNetwork from "../button-social-network";
import ToggleThemeMode from "../toggle-theme-mode";
import LanguageSwitch from "../language-switch";
import PrintButton from "../print-button";
import Menu from "./menu";

export type NavItem = {
  label: string;
  href: string;
};

export default function Header({ locale }: { locale: string }) {
  const t = getMessages(locale);

  const nav: NavItem[] = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md print:hidden"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4 sm:px-6">
        <Menu
          nav={nav}
          locale={locale}
          downloadLabel={t.actions.downloadCv}
          themeLabels={t.theme}
          openLabel={t.actions.openMenu}
        />

        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight transition-colors hover:text-accent"
        >
          <span className="text-term-green">~/</span>eduardo-dadalt
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-accent/70 group-hover:text-accent">#</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <LanguageSwitch locale={locale} />
          <div className="hidden items-center gap-1 sm:flex">
            <ButtonSocialNetwork socialNetwork="github" />
            <ButtonSocialNetwork socialNetwork="linkedin" />
          </div>
          <ToggleThemeMode labels={t.theme} />
          <PrintButton
            label={t.actions.downloadCv}
            size="sm"
            className="hidden lg:inline-flex"
          />
        </div>
      </div>
    </header>
  );
}
