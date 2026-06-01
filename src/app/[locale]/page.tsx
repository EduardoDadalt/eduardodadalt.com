import { Metadata } from "next";

import { getMessages } from "@/i18n";
import { profile } from "@/content/resume";
import PrintHeader from "@/components/print-header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";
import Contact from "@/components/sections/contact";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getMessages(locale);
  return {
    metadataBase: new URL(profile.siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", pt: "/pt" },
    },
    title: t.metadata.title,
    description: t.metadata.description,
    openGraph: {
      siteName: profile.name,
      title: t.metadata.title,
      description: t.metadata.description,
      url: `/${locale}`,
      type: "website",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <PrintHeader locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <Education locale={locale} />
      <Skills locale={locale} />
      <Work locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
