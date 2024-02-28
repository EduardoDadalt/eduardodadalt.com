import Contact from "@/components/sections/contact";
import MyInfo from "@/components/sections/my-info";
import ProgrammingLanguages from "@/components/sections/programming-languages";
import Solutions from "@/components/sections/solutions";
import Technologies from "@/components/sections/technology";
import { getDictionary } from "@/dictionaries/dictionaries";
import "@/styles/homepage.css";
import { AlertCircle } from "lucide-react";
import { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.homepage.metadata.title,
    description: dictionary.homepage.metadata.description,
    openGraph: {
      siteName: "Eduardo Dadalt",
      images: [
        {
          url: `https://www.eduardodadalt.com/${locale}/opengraph-image`,
          height: 630,
          width: 1200,
          alt: "Hello, I'm Eduardo Dadalt 👋🏻",
        },
      ],
    },
  };
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const dictionary = await getDictionary(locale);
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-2 bg-amber-300 p-16 text-2xl text-amber-950">
        <AlertCircle /> {dictionary.homepage.pageOnConstruction}
      </div>
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
