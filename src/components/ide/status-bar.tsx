"use client";

import { FILES, LANGUAGE_LABELS } from "@/content/files";
import useActiveFile from "./use-active-file";

export default function StatusBar({
  available,
  localeLabel,
}: {
  available: string;
  localeLabel: string;
}) {
  const active = useActiveFile();

  return (
    <footer className="col-span-full flex items-center gap-[18px] overflow-hidden border-t border-[#1d4a2d] bg-status px-3 text-[11.5px] whitespace-nowrap text-[#b9f5cd]">
      <span>⎇ main</span>
      <span className="hidden sm:inline">✓ 0 ⚠ 0</span>
      <span>
        <span className="mr-1.5 text-accent">●</span>
        {available}
      </span>
      <div className="ml-auto flex gap-[18px]">
        <span className="hidden sm:inline">UTF-8</span>
        <span>{LANGUAGE_LABELS[FILES[active].language]}</span>
        <span className="hidden sm:inline">{localeLabel}</span>
      </div>
    </footer>
  );
}
