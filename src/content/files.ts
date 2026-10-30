import type { Locale } from "@/constants/locales";

export const FILE_SLUGS = [
  "about",
  "experience",
  "projects",
  "stack",
  "contact",
] as const;

export type FileSlug = (typeof FILE_SLUGS)[number];
export type FileId = "readme" | FileSlug;
export type FileLanguage = "markdown" | "typescript" | "json" | "shell";

export const FILE_ORDER: FileId[] = ["readme", ...FILE_SLUGS];

export const FILES: Record<
  FileId,
  { language: FileLanguage; icon: string; color: string }
> = {
  readme: { language: "markdown", icon: "M↓", color: "var(--color-cyan)" },
  about: { language: "typescript", icon: "TS", color: "#60a5fa" },
  experience: { language: "typescript", icon: "TS", color: "#60a5fa" },
  projects: { language: "typescript", icon: "TS", color: "#60a5fa" },
  stack: { language: "json", icon: "{}", color: "var(--color-amber)" },
  contact: { language: "shell", icon: "$_", color: "var(--color-accent)" },
};

export const LANGUAGE_LABELS: Record<FileLanguage, string> = {
  markdown: "Markdown",
  typescript: "TypeScript",
  json: "JSON",
  shell: "Shell Script",
};

export function isFileSlug(value: string): value is FileSlug {
  return (FILE_SLUGS as readonly string[]).includes(value);
}

export function fileHref(locale: Locale, id: FileId) {
  return id === "readme" ? `/${locale}` : `/${locale}/${id}`;
}

/** Resolve o arquivo aberto a partir de um pathname como `/pt/stack`. */
export function fileFromPathname(pathname: string): FileId {
  const slug = pathname.split("/").filter(Boolean)[1] ?? "";
  return isFileSlug(slug) ? slug : "readme";
}
