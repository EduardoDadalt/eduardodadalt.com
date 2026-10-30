import getAge from "@/lib/get-age";
import type { Dictionary } from "./types";

const age = getAge();

const pt: Dictionary = {
  metadata: {
    title: "Eduardo Dadalt — Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack que constrói sistemas web e mobile com React, Next.js, Node.js e Flutter.",
  },
  files: {
    readme: "README.md",
    about: "sobre.ts",
    experience: "experiencia.ts",
    projects: "projetos.ts",
    stack: "stack.json",
    contact: "contato.sh",
  },
  ui: {
    explorer: "EXPLORER",
    terminal: "TERMINAL",
    problems: "PROBLEMAS",
    output: "SAÍDA",
    available: "disponível para projetos",
    closeTab: "Fechar aba",
    switchLanguage: "Switch to English",
  },
  profile: {
    role: "Desenvolvedor Full Stack",
    location: "Itapema, SC",
    degree: {
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "FIAP",
      status: "concluído em dez 2024",
    },
    bio: "Estou sempre em busca de novos conhecimentos e desafios.",
  },
  readme: {
    greeting: "olá, mundo — meu nome é",
    intro: `Tenho ${age} anos e construo sistemas **web e mobile** — de ERPs em Flutter a centrais de atendimento integradas ao WhatsApp. Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP e estou sempre em busca de novos conhecimentos e desafios.`,
    badges: {
      status: "status",
      statusValue: "disponível",
      company: "empresa",
      degree: "formação",
      location: "local",
    },
    featured: "Projetos em destaque",
    hint: "explore os arquivos na barra lateral, ou pressione",
    photoAlt: "Foto do Eduardo Dadalt",
  },
  experience: [
    {
      company: "JR Sistemas",
      role: "Desenvolvedor",
      period: ["out 2021", "atualmente"],
      description:
        "Sistemas web e mobile, manutenção de sistemas legados e suporte técnico.",
    },
    {
      company: "Voxy",
      role: "Suporte Técnico",
      period: ["fev 2021", "out 2021"],
      description:
        "Suporte ao cliente; criei um corretor do arquivo fiscal gerado pelo sistema e um KDS integrado para gestão de pedidos na cozinha.",
    },
  ],
  education: [
    {
      institution: "FIAP",
      course: "Análise e Desenvolvimento de Sistemas",
      period: ["fev 2023", "dez 2024"],
    },
    {
      institution: "IFRS Canoas",
      course: "Técnico em Análise e Desenvolvimento de Sistemas",
      period: ["fev 2018", "fev 2021"],
      note: "interrompido pela pandemia e mudança para Itapema/SC",
    },
  ],
  projects: [
    {
      name: "SAC integrado com WhatsApp",
      stack: ["Node.js", "Flutter", "MySQL"],
      summary:
        "Central única unificando 6 números de WhatsApp: técnicos abrem chamados, acompanham o status e conversam com os clientes.",
      featured: true,
    },
    {
      name: "KDS mobile",
      stack: ["Node.js", "Electron", "React Native", "MsSQL"],
      summary:
        "Integração com o TOTVS Chef: a cozinha marca pedidos como prontos e o garçom acompanha o status.",
      featured: true,
    },
    {
      name: "App de ERP para pequenas empresas",
      stack: ["Flutter"],
      summary:
        "Início da migração do sistema legado para Flutter: dashboards, relatórios e formulários de cadastro.",
      featured: true,
    },
    {
      name: "App para garçons",
      stack: ["Flutter"],
      summary:
        "Visualização de mesas, lançamento de pedidos e acompanhamento do status.",
    },
    {
      name: "Site da JR Sistemas",
      stack: ["React", "Next.js"],
      summary: "Site institucional da empresa refeito do zero.",
      featured: true,
    },
    {
      name: "Automação de processos",
      stack: ["Node.js", "Puppeteer"],
      summary:
        "Download automático de NFC-e de SC e verificação de respostas de chamados.",
    },
  ],
  terminal: {
    ready: `${age} anos, codando desde 2018`,
    lastCommit: "feat: desenvolvedor @ JR Sistemas",
  },
  code: {
    keys: {
      name: "nome",
      role: "cargo",
      age: "idade",
      location: "local",
      degree: "formacao",
      course: "curso",
      institution: "instituicao",
      status: "status",
      bio: "bio",
      company: "empresa",
      period: "periodo",
      description: "descricao",
      note: "observacao",
      stack: "stack",
      summary: "resumo",
      advanced: "avancado",
      intermediate: "intermediario",
      basic: "basico",
    },
    vars: {
      experiences: "experiencias",
      education: "educacao",
      projects: "projetos",
    },
    comments: {
      about: "sobre.ts — quem é o Eduardo",
      educationNote: "formação",
      contact: ["Vamos conversar? Escolha um canal e clique no link."],
    },
    contactEcho: "Respondo rápido por email 👋",
  },
};

export default pt;
