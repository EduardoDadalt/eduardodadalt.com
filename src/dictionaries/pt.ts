import { type Dictionary } from "./Dictionary";
import getAge from "../lib/get-age";

const age = getAge();

const pt: Dictionary = {
  header: {
    forMoreInfoAccess: "Para mais informações, acesse",
    languages: "Linguagens",
    technologies: "Tecnologias",
    solutions: "Soluções",
    repositories: "Repositórios",
    contact: "Contato",
  },
  homepage: {
    pageOnConstruction: "Página em construção",
    myInfo: {
      hiMyNameIs: "Olá, meu nome é",
      description: `Sou desenvolvedor **Full Stack** e tenho ${age} anos. Atualmente estou estudando Análise e Desenvolvimento de Sistemas na [FIAP](http://fiap.com.br). Estou sempre em busca de novos conhecimentos e desafios`,
      experience: {
        title: "Experiências",
        position: "Cargo",
        description: "Descrição",
        jobs: [
          {
            company: "Voxy",
            position: "Suporte Técnico",
            dateBegin: "Fev de 2021",
            dataEnd: "Out de 2021",
            description:
              "Atendimento ao cliente, suporte técnico e desenvolvia algumas soluções para a equipe, como um sistema de correção do arquivo fiscal que o sistema gerava. Também criei um sistema de KDS integrado com o sistema para gerenciamento de pedidos na cozinha",
          },
          {
            company: "JR Sistemas",
            position: "Desenvolvedor",
            dateBegin: "Out de 2021",
            dataEnd: "Atualmente",
            description:
              "Desenvolvimento de sistemas web e mobile, manutenção de sistemas legados e suporte técnico.",
          },
        ],
      },
      education: {
        title: "Educação",
        institution: "Instituição",
        situation: "Situação",
        steps: [
          {
            institution: "FIAP",
            course: "Análise e Desenvolvimento de Sistemas",
            dateBegin: "Fev de 2023",
            dateEnd: "Até o momento",
            description: "Em andamento",
          },
          {
            institution: "IFRS - Campus Canoas",
            course:
              "Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas",
            dateBegin: "Fev 2018",
            dateEnd: "Fev de 2021",
            description:
              "Incompleto por conta da pandemia do COVID-19 e eu ter me mudado para Itapema/SC. Concluí o ensino médio em 2022.",
          },
        ],
      },
    },
    programmingLanguage: {
      title: "Linguagens de Programação",
      iconOf: "Ícone do",
    },
    technology: {
      title: "Tecnologias",
      description:
        "Aqui estão algumas das tecnologias que tenho experiência e que posso utilizar para desenvolver soluções.",
    },
    contact: {
      title: "Contato",
      youCanContactMeVia: "Você pode entrar em contato comigo via",
    },
  },
  components: {
    cardLevel: {
      basic: "Básico",
      intermediate: "Intermediário",
      advanced: "Avançado",
    },
  },
};

export default pt;
