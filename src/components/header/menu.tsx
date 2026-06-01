"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { NavItem } from ".";
import { Menu as MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ButtonSocialNetwork from "../button-social-network";
export default function Menu({
  navItens,
  locale,
}: {
  navItens: NavItem[];
  locale: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger className="rounded-full p-2 md:hidden">
        <MenuIcon aria-label="Menu button" />
      </DialogTrigger>
      <DialogContent className="top-0 bottom-0 left-0 max-w-72 translate-x-0 translate-y-0 rounded-l-none">
        <DialogHeader>
          <DialogTitle>Menu</DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 flex-col gap-2">
          {navItens.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="outline"
              className="justify-start"
              onClick={closeModal}
            >
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button
              asChild
              variant={locale === "pt" ? "default" : "outline"}
              onClick={closeModal}
            >
              <Link href="/pt">PT</Link>
            </Button>
            <Button
              asChild
              variant={locale === "en" ? "default" : "outline"}
              onClick={closeModal}
            >
              <Link href="/en">EN</Link>
            </Button>
          </div>
          <div className="flex-1" />
          <div className="flex flex-row justify-end gap-2 pt-6">
            <ButtonSocialNetwork socialNetwork="github" />
            <ButtonSocialNetwork socialNetwork="linkedin" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
