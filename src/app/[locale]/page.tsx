import Contact from "@/components/sections/contact";
import MyInfo from "@/components/sections/my-info";
import ProgrammingLanguages from "@/components/sections/programming-languages";
import Solutions from "@/components/sections/solutions";
import Technologies from "@/components/sections/technology";
import { getDictionary } from "@/dictionaries/dictionaries";
import "@/styles/homepage.css";
import { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return {
    metadataBase: new URL("https://eduardodadalt.com"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        pt: "/pt",
      },
    },
    title: dictionary.homepage.metadata.title,
    description: dictionary.homepage.metadata.description,
    openGraph: {
      siteName: "Eduardo Dadalt",
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
    <div className="homepage">
      <MyInfo locale={locale} />
      {/* Linguagens de Programação */}
      <ProgrammingLanguages locale={locale} />
      {/* Tecnologias que utilizo */}
      <Technologies locale={locale} />
      {/* Soluções */}
      <Solutions locale={locale} />
      {/* Repositorios */}
      <Contact locale={locale} />
      {/* Contato */}
    </div>
  );
}
