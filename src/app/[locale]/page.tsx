import Breadcrumbs from "@/components/ide/breadcrumbs";
import Readme from "@/components/ide/readme";
import { isLocale, LOCALES } from "@/constants/locales";
import { getDictionary } from "@/dictionaries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// A idade é calculada no build; revalida uma vez por dia.
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function ReadmePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Breadcrumbs id="readme" name={dictionary.files.readme} />
      <Readme locale={locale} dictionary={dictionary} />
    </>
  );
}
