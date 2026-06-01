"use client";

import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import type { NavItem } from ".";
import ButtonSocialNetwork from "../button-social-network";
import ToggleThemeMode from "../toggle-theme-mode";
import LanguageSwitch from "../language-switch";
import PrintButton from "../print-button";

type ThemeLabels = {
  label: string;
  light: string;
  dark: string;
  system: string;
};

type MenuProps = {
  nav: NavItem[];
  locale: string;
  downloadLabel: string;
  themeLabels: ThemeLabels;
  openLabel: string;
};

export default function Menu({
  nav,
  locale,
  downloadLabel,
  themeLabels,
  openLabel,
}: MenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        aria-label={openLabel}
        className="rounded-md p-1 text-foreground transition-colors hover:bg-muted md:hidden"
      >
        <MenuIcon className="size-5" />
      </DialogTrigger>
      <DialogContent className="bottom-0 left-0 top-0 h-dvh max-w-72 translate-x-0 translate-y-0 gap-0 rounded-none data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
        <DialogTitle className="font-mono text-sm text-muted-foreground">
          <span className="text-term-green">~/</span>menu
        </DialogTitle>

        <nav className="mt-6 flex flex-col gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span className="text-accent/70">#</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-4 border-t border-border pt-4">
          <PrintButton label={downloadLabel} className="w-full" />
          <div className="flex items-center justify-between">
            <LanguageSwitch locale={locale} />
            <div className="flex items-center gap-1">
              <ButtonSocialNetwork socialNetwork="github" />
              <ButtonSocialNetwork socialNetwork="linkedin" />
              <ToggleThemeMode labels={themeLabels} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
