import Image from "next/image";
import "./style.css";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import Experience from "./experience";

export default function MyInfo() {
  const age =
    new Date().getFullYear() -
    2002 -
    (new Date().getMonth() > 6 && new Date().getDate() >= 10 ? 0 : 1);

  return (
    <section>
      <div className="flex flex-row gap-2">
        <Image
          src="/images/profile.png"
          alt="Imagem do Eduardo Dadalt"
          width={300}
          height={300}
          className="size-24 rounded-full border shadow lg:size-32"
        />
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl">
            Olá, meu nome é{" "}
            <span className="fundo-gradient-texto text-2xl font-bold md:text-4xl">
              Eduardo Dadalt
            </span>
          </h1>
          <p className="text-justify indent-4">
            Sou desenvolvedor <b>Full Stack</b> e tenho {age} anos. Atualmente
            estou estudando Análise e Desenvolvimento de Sistemas na{" "}
            <Link href="https://fiap.com.br/" target="_blank">
              FIAP
            </Link>
            . Estou sempre em busca de novos conhecimentos e desafios.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="flex flex-row gap-2 text-xl font-bold underline">
          <Briefcase /> Experiências
        </h2>

        <Experience
          nomeEmpresa="Voxy"
          cargo="Suporte Técnico"
          dataInicio="Fev de 2021"
          dataFim="Out de 2021"
          descricao="Atendimento ao cliente, suporte técnico e desenvolvia algumas soluções para a equipe, como um sistema de correção do arquivo fiscal que o sistema gerava. Também criei um sistema de KDS integrado com o sistema para gerenciamento de pedidos na cozinha"
        />
        <Experience
          nomeEmpresa="JR Sistemas"
          cargo="Desenvolvedor"
          dataInicio="Out de 2021"
          dataFim="Atualmente"
          descricao="Desenvolvimento de sistemas web e mobile, manutenção de sistemas legados e suporte técnico."
        />
      </div>
    </section>
  );
}
