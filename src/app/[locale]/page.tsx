import ProgrammingLanguages from "@/components/sections/programming-languages";
import MyInfo from "@/components/sections/my-info";
import "@/styles/homepage.css";
import Technologies from "@/components/sections/technology";
import { AlertCircle } from "lucide-react";
import { Metadata } from "next";
import { getDictionary } from "@/dictionaries/dictionaries";
import Contact from "@/components/sections/contact";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Eduardo Dadalt - Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack, apaixonado por tecnologia e inovação.",
};
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

      {/* Repositorios */}
      <Contact locale={locale} />
      {/* Contato */}
    </div>
  );
}
