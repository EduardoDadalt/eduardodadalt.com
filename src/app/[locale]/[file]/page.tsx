import Breadcrumbs from "@/components/ide/breadcrumbs";
import CodeView from "@/components/ide/code-view";
import { isLocale, LOCALES } from "@/constants/locales";
import { FILE_SLUGS, FILES, isFileSlug } from "@/content/files";
import { getDictionary } from "@/dictionaries";
import { buildSource } from "@/lib/source";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return FILE_SLUGS.map((file) => ({ file }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/[file]">): Promise<Metadata> {
  const { locale, file } = await params;
  if (!isLocale(locale) || !isFileSlug(file)) return {};
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.files[file],
    alternates: {
      canonical: `/${locale}/${file}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/${file}`])),
    },
  };
}

export default async function FilePage({
  params,
}: PageProps<"/[locale]/[file]">) {
  const { locale, file } = await params;
  if (!isLocale(locale) || !isFileSlug(file)) notFound();
  const dictionary = await getDictionary(locale);
  const name = dictionary.files[file];

  return (
    <>
      <Breadcrumbs id={file} name={name} />
      <h1 className="sr-only">
        {name} — Eduardo Dadalt, {dictionary.profile.role}
      </h1>
      <CodeView source={buildSource(file, dictionary)} language={FILES[file].language} />
    </>
  );
}
