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
    metadata: {
      title: "Eduardo Dadalt - Desenvolvedor Full Stack",
      description:
        "Desenvolvedor Full Stack, apaixonado por tecnologia e inovação.",
    },
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
            dateEnd: "Atualmente",
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
    solution: {
      title: "Soluções",
      description:
        "Aqui estão algumas das soluções que desenvolvi ou participei ativamente do desenvolvimento.",
      solutions: [
        {
          title: "App de ERP para pequenas empresas",
          description: "Utilizando Flutter (Frontend)",
          content:
            "Começamos a migrar o sistema legado para Flutter. Cuidei do começo dessa migração, fiz dashboards relatórios, formulários de cadastros",
          languagesAndTechnologies: ["/icons/technologies/flutter.svg"],
        },
        {
          title: "App para Garçons lançarem pedidos",
          description: "Utilizando Flutter (Frontend)",
          content:
            "Trabalhei em um sistema para garçons lançarem pedidos, onde o garçom pode visualizar as mesas, lançar pedidos e visualizar o status dos pedidos.",
          languagesAndTechnologies: ["/icons/technologies/flutter.svg"],
        },
        {
          title: "Site da empresa JR Sistemas",
          description: "Utilizando React e NextJS",
          content: "Refiz totalmente o site da empresa JR Sistemas",
          languagesAndTechnologies: [
            "/icons/technologies/react.svg",
            "/icons/technologies/next.js.svg",
          ],
        },
        {
          title: "SAC integrado com WhatsApp",
          description: "Utilizando Node.js, Flutter e MySQL",
          content:
            "Desenvolvi totalmente um sistema de para atendimento de clientes unificando 6 WhatsApp em uma central única, onde os técnicos pode abrir chamados, visualizar o status dos chamados e conversar com os clientes via WhatsApp.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/flutter.svg",
            "/icons/technologies/mysql.svg",
          ],
        },
        {
          title: "KDS mobile",
          description: "Utilizando Node.js, Electron, ReactNative e MsSQL",
          content:
            "Desenvolvi totalmente uma integração com o sistema TOTVS Chef para gerenciamento de pedidos na cozinha, onde os cozinheiros podem visualizar os pedidos e marcar como prontos, e o garçom pode visualizar o status do pedido e entregar ao cliente.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/electron.svg",
            "/icons/technologies/react.svg",
            "/icons/technologies/mssql.svg",
          ],
        },
        {
          title: "Automatização de processos",
          description: "Utilizando Node.js, Puppeteer",
          content:
            "Desenvolvi automações para otimizar processos, como baixar automaticamente NFC-e de SC e verificar respostas de chamados",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/puppeteer.svg",
          ],
        },
      ],
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
