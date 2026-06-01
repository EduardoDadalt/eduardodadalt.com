import { type Dictionary } from "./Dictionary";
import getAge from "../lib/get-age";

const age = getAge();

const pt: Dictionary = {
  header: {
    forMoreInfoAccess: "Para mais informações, acesse",
    languages: "Linguagens",
    technologies: "Tecnologias",
    solutions: "Projetos",
    repositories: "Repositórios",
    contact: "Contato",
  },
  homepage: {
    metadata: {
      title: "Eduardo Dadalt - Desenvolvedor Full Stack",
      description:
        "Desenvolvedor Full Stack com experiência em web, mobile, ERP, automações e sistemas internos.",
    },
    pageOnConstruction: "Página em construção",
    myInfo: {
      hiMyNameIs: "Olá, meu nome é",
      role: "Desenvolvedor Full Stack",
      location: "Itapema, SC · Remoto ou híbrido",
      availability: "Aberto a oportunidades em produto, ERP e automação",
      description: `Tenho ${age} anos, estudo Análise e Desenvolvimento de Sistemas na [FIAP](https://fiap.com.br) e atuo criando aplicações web, mobile e automações para resolver problemas reais de operação. Gosto de trabalhar perto do usuário, entender o processo e transformar isso em software simples de manter.`,
      strengthsTitle: "O que levo para o time",
      strengths: [
        "Experiência prática com ERP, atendimento, suporte e rotinas operacionais.",
        "Atuação ponta a ponta: frontend, backend, mobile, integrações e automações.",
        "Perfil de dono: entendo a dor do cliente e acompanho a solução até funcionar bem.",
      ],
      stats: [
        { value: "4+", label: "anos criando software" },
        { value: "6", label: "WhatsApps centralizados em um SAC" },
        { value: "Web + Mobile", label: "entrega em múltiplas plataformas" },
      ],
      experience: {
        title: "Experiência",
        eyebrow: "Trajetória profissional",
        position: "Cargo",
        description: "Resumo",
        highlights: "Destaques",
        jobs: [
          {
            company: "JR Sistemas",
            position: "Desenvolvedor",
            dateBegin: "Out de 2021",
            dateEnd: "Atualmente",
            description:
              "Desenvolvo e mantenho sistemas web e mobile para negócios que dependem de ERP, atendimento e processos internos.",
            highlights: [
              "Participei da migração de módulos legados para Flutter, criando dashboards, relatórios e formulários de cadastro.",
              "Construí automações com Node.js e Puppeteer para reduzir tarefas manuais, como download de NFC-e e consulta de chamados.",
              "Trabalhei em integrações com WhatsApp, bancos de dados e sistemas operacionais usados no dia a dia dos clientes.",
            ],
          },
          {
            company: "Voxy",
            position: "Suporte Técnico",
            dateBegin: "Fev de 2021",
            dateEnd: "Out de 2021",
            description:
              "Atuei no atendimento ao cliente e no suporte técnico, criando pequenas ferramentas para acelerar a rotina da equipe.",
            highlights: [
              "Criei uma solução para corrigir arquivos fiscais gerados pelo sistema.",
              "Desenvolvi um KDS integrado ao sistema TOTVS Chef para acompanhamento de pedidos na cozinha.",
              "Ganhei repertório de operação e suporte que hoje ajuda a desenvolver software mais útil para o usuário final.",
            ],
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
            dateBegin: "Fev de 2018",
            dateEnd: "Fev de 2021",
            description:
              "Curso interrompido durante a pandemia de COVID-19 e mudança para Itapema/SC. Ensino médio concluído em 2022.",
          },
        ],
      },
    },
    programmingLanguage: {
      title: "Linguagens de programação",
      description:
        "Linguagens que uso ou já usei em projetos, integrações, automações e manutenção de sistemas.",
      iconOf: "Ícone do",
    },
    technology: {
      title: "Tecnologias",
      description:
        "Stack com foco em produto digital, sistemas internos, banco de dados e integrações.",
    },
    solution: {
      title: "Projetos e soluções",
      description:
        "Algumas entregas que mostram como transformo necessidade operacional em produto funcional.",
      solutions: [
        {
          title: "ERP mobile para pequenas empresas",
          description: "Flutter · Dashboards · Formulários",
          content:
            "Participei do início da migração do sistema legado para Flutter, criando telas de cadastro, relatórios e dashboards para acelerar a evolução do produto.",
          languagesAndTechnologies: ["/icons/technologies/flutter.svg"],
        },
        {
          title: "Lançamento de pedidos para garçons",
          description: "Flutter · Operação em salão",
          content:
            "Trabalhei em um app para visualizar mesas, lançar pedidos e acompanhar status, reduzindo atrito entre atendimento e cozinha.",
          languagesAndTechnologies: ["/icons/technologies/flutter.svg"],
        },
        {
          title: "Site institucional da JR Sistemas",
          description: "React · Next.js",
          content:
            "Refiz o site da empresa com React e Next.js, melhorando presença digital, clareza de oferta e manutenção técnica.",
          languagesAndTechnologies: [
            "/icons/technologies/react.svg",
            "/icons/technologies/next.js.svg",
          ],
        },
        {
          title: "SAC integrado com WhatsApp",
          description: "Node.js · Flutter · MySQL",
          content:
            "Desenvolvi uma central de atendimento que unificou 6 contas de WhatsApp, permitindo abrir chamados, acompanhar status e conversar com clientes em um fluxo único.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/flutter.svg",
            "/icons/technologies/mysql.svg",
          ],
        },
        {
          title: "KDS mobile",
          description: "Node.js · Electron · React Native · MsSQL",
          content:
            "Criei uma integração com TOTVS Chef para gerenciamento de pedidos na cozinha, permitindo que pedidos fossem visualizados, atualizados e acompanhados em tempo real.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/electron.svg",
            "/icons/technologies/react.svg",
            "/icons/technologies/mssql.svg",
          ],
        },
        {
          title: "Automação de processos",
          description: "Node.js · Puppeteer",
          content:
            "Criei automações para tarefas repetitivas, como baixar NFC-e de Santa Catarina e verificar respostas de chamados.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/puppeteer.svg",
          ],
        },
      ],
    },
    contact: {
      title: "Vamos conversar?",
      description:
        "Se você procura alguém para construir, manter ou modernizar sistemas web/mobile com visão de operação, posso ajudar.",
      youCanContactMeVia: "Você pode entrar em contato por",
      email: "Enviar email",
      linkedin: "LinkedIn",
      github: "GitHub",
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
