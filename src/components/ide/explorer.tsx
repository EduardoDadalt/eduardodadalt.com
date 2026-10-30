"use client";

import type { Locale } from "@/constants/locales";
import { FILE_ORDER, fileHref, type FileId } from "@/content/files";
import clsx from "clsx";
import Link from "next/link";
import FileIcon from "./file-icon";
import useActiveFile from "./use-active-file";

export default function Explorer({
  locale,
  fileNames,
  title,
  role,
  location,
  available,
}: {
  locale: Locale;
  fileNames: Record<FileId, string>;
  title: string;
  role: string;
  location: string;
  available: string;
}) {
  const active = useActiveFile();

  return (
    <aside className="hidden overflow-y-auto border-r border-line bg-side select-none md:block">
      <h2 className="px-[18px] pt-3 pb-2 text-[11px] font-medium tracking-widest text-dim">
        {title}
      </h2>
      <p className="flex items-center gap-1.5 px-2.5 py-0.5 font-medium">
        <span aria-hidden className="w-4 text-center text-dim">⌄</span>
        eduardo-dadalt
      </p>
      <ul>
        {FILE_ORDER.map((id) => (
          <li key={id}>
            <Link
              href={fileHref(locale, id)}
              aria-current={id === active ? "page" : undefined}
              className={clsx(
                "flex items-center gap-[7px] border-l-2 py-0.5 pr-2.5 pl-[26px] whitespace-nowrap hover:bg-sel",
                id === active
                  ? "border-accent bg-sel text-bright"
                  : "border-transparent",
              )}
            >
              <FileIcon id={id} />
              {fileNames[id]}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mx-3.5 my-[18px] rounded-lg border border-line p-3.5 text-xs text-dim">
        <p className="mb-1 text-fg">eduardo@dadalt</p>
        <p>
          {role} · {location}
        </p>
        <p className="text-accent">● {available}</p>
      </div>
    </aside>
  );
}
