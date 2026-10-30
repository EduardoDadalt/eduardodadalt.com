"use client";

import type { Locale } from "@/constants/locales";
import { FILE_ORDER, fileHref, type FileId } from "@/content/files";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FileIcon from "./file-icon";
import useActiveFile from "./use-active-file";

const tabClass =
  "flex shrink-0 items-center gap-2 border-r border-line px-4 text-[12.5px] whitespace-nowrap";

export default function EditorTabs({
  locale,
  fileNames,
  closeLabel,
}: {
  locale: Locale;
  fileNames: Record<FileId, string>;
  closeLabel: string;
}) {
  const router = useRouter();
  const active = useActiveFile();
  const [open, setOpen] = useState<FileId[]>(() =>
    active === "readme" ? ["readme"] : ["readme", active],
  );
  const [previous, setPrevious] = useState(active);

  // Abre uma aba nova quando a navegação muda o arquivo ativo.
  if (active !== previous) {
    setPrevious(active);
    if (!open.includes(active)) setOpen([...open, active]);
  }

  function close(id: FileId) {
    const remaining = open.filter((tab) => tab !== id);
    const next = remaining.length ? remaining : (["readme"] as FileId[]);
    setOpen(next);
    if (id === active) router.push(fileHref(locale, next[next.length - 1]));
  }

  // Ctrl+P / Cmd+P alterna para o próximo arquivo.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "p") {
        event.preventDefault();
        const next = FILE_ORDER[(FILE_ORDER.indexOf(active) + 1) % FILE_ORDER.length];
        router.push(fileHref(locale, next));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, locale, router]);

  return (
    <nav className="flex overflow-x-auto border-b border-line bg-side [scrollbar-width:none]">
      {/* Desktop: abas abertas */}
      {open.map((id) => (
        <div
          key={id}
          className={clsx(
            tabClass,
            "group hidden md:flex",
            id === active
              ? "bg-editor text-bright shadow-[inset_0_2px_0_var(--color-accent)]"
              : "text-dim",
          )}
        >
          <Link href={fileHref(locale, id)} className="flex h-full items-center gap-2">
            <FileIcon id={id} />
            {fileNames[id]}
          </Link>
          <button
            type="button"
            onClick={() => close(id)}
            aria-label={`${closeLabel}: ${fileNames[id]}`}
            className={clsx(
              "ml-1 cursor-pointer rounded px-1 text-[11px] hover:bg-sel group-hover:opacity-60",
              id === active ? "opacity-60" : "opacity-0",
            )}
          >
            ✕
          </button>
        </div>
      ))}
      {/* Mobile: todos os arquivos */}
      {FILE_ORDER.map((id) => (
        <Link
          key={id}
          href={fileHref(locale, id)}
          className={clsx(
            tabClass,
            "md:hidden",
            id === active
              ? "bg-editor text-bright shadow-[inset_0_2px_0_var(--color-accent)]"
              : "text-dim",
          )}
        >
          <FileIcon id={id} />
          {fileNames[id]}
        </Link>
      ))}
    </nav>
  );
}
