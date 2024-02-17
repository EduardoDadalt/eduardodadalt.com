import ProgrammingLanguages from "@/components/sections/programming-languages";
import MyInfo from "@/components/sections/my-info";
import "./homepage.css";
import Technologies from "@/components/sections/technology";
import { AlertCircle } from "lucide-react";

export const revalidate = 86400;

export default function Home() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-2 bg-amber-300 p-16 text-2xl text-amber-950">
        <AlertCircle /> Página em construção
      </div>
      <MyInfo />
      {/* Linguagens de Programação */}
      <ProgrammingLanguages />
      {/* Tecnologias que utilizo */}
      <Technologies />
      {/* Soluções */}

      {/* Repositorios */}

      {/* Contato */}
    </div>
  );
}
