"use client";

import { Download } from "lucide-react";
import { Button, type ButtonProps } from "./ui/button";

type PrintButtonProps = ButtonProps & {
  label: string;
};

/**
 * Triggers the browser print dialog. Combined with the print styles in
 * globals.css this turns the page into a clean, downloadable PDF résumé.
 */
export default function PrintButton({ label, ...props }: PrintButtonProps) {
  return (
    <Button onClick={() => window.print()} {...props}>
      <Download className="size-4" />
      {label}
    </Button>
  );
}
