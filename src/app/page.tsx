import ProgrammingLanguages from "@/components/sections/programming-languages";
import MyInfo from "@/components/sections/my-info";
import "./homepage.css";
import Technologies from "@/components/sections/technology";

export const revalidate = 86400;

export default function Home() {
  return (
    <div>
      <div className="bg-amber-300 p-16 text-2xl text-amber-950">
        Página em construção
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
