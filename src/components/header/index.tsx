"use client";

import Link from "next/link";
import ButtonSocialNetwork from "../button-social-network";
import { Button } from "../ui/button";
import ToggleThemeMode from "../toggle-theme-mode";
import { Menu } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";

const Links: { name: string; href: string }[] = [
  { name: "Linguagens", href: "/#linguagens" },
  { name: "Tecnologias", href: "/#tecnologias" },
  { name: "Soluções", href: "/#solucoes" },
  { name: "Repositórios", href: "/#repositorios" },
];

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="hidden print:block">teste</div>
      <header className="flex h-12 flex-row items-center  justify-between bg-opacity-50 bg-gradient-to-br from-primary-700 to-blue-500 p-2 text-gray-100 md:p-4 print:hidden">
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogTrigger className="md:hidden">
            <Menu />
          </DialogTrigger>
          <DialogContent className="!max-w-2/3 bottom-0 left-0 top-0 translate-x-0 translate-y-0 sm:!rounded-l-none">
            <DialogHeader>
              <DialogTitle>Menu</DialogTitle>
              <DialogDescription className="flex flex-1 flex-col gap-2">
                {Links.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    className="justify-start"
                    onClick={closeModal}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                ))}
                <div className="flex-1" />
                <div className="flex flex-row justify-end gap-2">
                  <ButtonSocialNetwork socialNetwork="github" />
                  <ButtonSocialNetwork socialNetwork="linkedin" />
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Link href="/">
          <h1 className="font-display text-lg">Eduardo Dadalt</h1>
        </Link>
        <nav className="hidden items-center justify-evenly hover:*:underline md:flex md:flex-1">
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
            <Link href="/#contato">Contato</Link>
          </Button>
          <ToggleThemeMode />
        </div>
      </header>
    </>
  );
}
