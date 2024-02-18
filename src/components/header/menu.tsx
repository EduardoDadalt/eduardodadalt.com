"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { NavItem } from ".";
import { Menu as MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ButtonSocialNetwork from "../button-social-network";
export default function Menu({ navItens }: { navItens: NavItem[] }) {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger className="md:hidden">
        <MenuIcon aria-label="Menu button" />
      </DialogTrigger>
      <DialogContent className="!max-w-2/3 bottom-0 left-0 top-0 translate-x-0 translate-y-0 sm:!rounded-l-none">
        <DialogHeader>
          <DialogTitle>Menu</DialogTitle>
          <DialogDescription className="flex flex-1 flex-col gap-2">
            {navItens.map((link) => (
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
  );
}
