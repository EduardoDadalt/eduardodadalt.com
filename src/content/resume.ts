import type { Localized } from "@/i18n/types";

export type SkillLevel = 1 | 2 | 3;

export type Skill = {
  name: string;
  level: SkillLevel;
  icon: string;
};

export type Experience = {
  company: string;
  url?: string;
  position: Localized;
  /** ISO `YYYY-MM`. */
  start: string;
  /** ISO `YYYY-MM`, or `null` when ongoing. */
  end: string | null;
  description: Localized;
};

export type EducationItem = {
  institution: string;
  url?: string;
  course: Localized;
  start: string;
  end: string | null;
  status: Localized;
};

export type Solution = {
  title: Localized;
  tagline: Localized;
  description: Localized;
  /** Icon paths under /public. */
  stack: string[];
};

/* ------------------------------------------------------------------ */
/*  Profile                                                           */
/* ------------------------------------------------------------------ */
export const profile = {
  name: "Eduardo Dadalt",
  /** Used to compute the displayed age. Adjust to your real birth date. */
  birthDate: "2002-07-10",
  role: {
    en: "Full Stack Developer",
    pt: "Desenvolvedor Full Stack",
  } satisfies Localized,
  /** Rotating titles for the hero typewriter. */
  titles: {
    en: ["Full Stack Developer", "Web Developer", "Mobile Developer"],
    pt: ["Desenvolvedor Full Stack", "Desenvolvedor Web", "Desenvolvedor Mobile"],
  } satisfies Localized<string[]>,
  tagline: {
    en: "I build web & mobile products end-to-end.",
    pt: "Construo produtos web e mobile de ponta a ponta.",
  } satisfies Localized,
  /** `{age}` is replaced at render time. */
  summary: {
    en: "I'm a Full Stack developer, {age} years old, currently studying Systems Analysis and Development at FIAP. I'm always chasing new knowledge and challenges — and I love turning messy, real-world problems into clean and reliable software.",
    pt: "Sou desenvolvedor Full Stack, {age} anos, atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP. Estou sempre em busca de novos conhecimentos e desafios — e adoro transformar problemas reais e confusos em software limpo e confiável.",
  } satisfies Localized,
  location: {
    en: "Itapema, SC — Brazil",
    pt: "Itapema, SC — Brasil",
  } satisfies Localized,
  email: "eduardodadalt1@gmail.com",
  github: "https://github.com/EduardoDadalt",
  linkedin: "https://www.linkedin.com/in/eduardo-dadalt/",
  repo: "https://github.com/EduardoDadalt/eduardodadalt.com",
  site: "eduardodadalt.com",
  siteUrl: "https://eduardodadalt.com",
};

/* ------------------------------------------------------------------ */
/*  Experience (most recent first)                                    */
/* ------------------------------------------------------------------ */
export const experiences: Experience[] = [
  {
    company: "JR Sistemas",
    position: { en: "Developer", pt: "Desenvolvedor" },
    start: "2021-10",
    end: null,
    description: {
      en: "Development of web and mobile systems, maintenance of legacy systems and technical support.",
      pt: "Desenvolvimento de sistemas web e mobile, manutenção de sistemas legados e suporte técnico.",
    },
  },
  {
    company: "Voxy",
    position: { en: "Technical Support", pt: "Suporte Técnico" },
    start: "2021-02",
    end: "2021-10",
    description: {
      en: "Customer service and technical support, while building solutions for the team — such as a fixer for the fiscal files the system generated and a KDS integrated with the system for managing kitchen orders.",
      pt: "Atendimento ao cliente e suporte técnico, enquanto desenvolvia soluções para a equipe — como um corretor dos arquivos fiscais que o sistema gerava e um KDS integrado ao sistema para gerenciar pedidos na cozinha.",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Education (most recent first)                                     */
/* ------------------------------------------------------------------ */
export const education: EducationItem[] = [
  {
    institution: "FIAP",
    url: "https://www.fiap.com.br",
    course: {
      en: "Systems Analysis and Development",
      pt: "Análise e Desenvolvimento de Sistemas",
    },
    start: "2023-02",
    end: null,
    status: { en: "In progress", pt: "Em andamento" },
  },
  {
    institution: "IFRS — Campus Canoas",
    course: {
      en: "Technical High School in Systems Analysis and Development",
      pt: "Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas",
    },
    start: "2018-02",
    end: "2021-02",
    status: {
      en: "Did not finish the technical track after the COVID-19 pandemic and a move to Itapema/SC; completed high school in 2022.",
      pt: "Não concluí a parte técnica após a pandemia de COVID-19 e a mudança para Itapema/SC; concluí o ensino médio em 2022.",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Skills                                                            */
/* ------------------------------------------------------------------ */
function lang(name: string, level: SkillLevel): Skill {
  return {
    name,
    level,
    icon: `/icons/programming-languages/${name.toLowerCase()}.svg`,
  };
}

function tech(name: string, level: SkillLevel): Skill {
  return {
    name,
    level,
    icon: `/icons/technologies/${name.toLowerCase()}.svg`,
  };
}

export const languages: Skill[] = [
  lang("TypeScript", 3),
  lang("JavaScript", 3),
  lang("Dart", 3),
  lang("SQL", 3),
  lang("Python", 1),
  lang("Java", 1),
  lang("C", 1),
  lang("PHP", 1),
];

export const technologies: Skill[] = [
  tech("React", 3),
  tech("Next.js", 3),
  tech("Node.js", 3),
  tech("Flutter", 3),
  tech("REST", 3),
  tech("MySQL", 3),
  tech("Electron", 2),
  tech("React Native", 2),
  tech("Docker", 2),
  tech("Azure Pipelines", 2),
  tech("Puppeteer", 2),
  tech("Firebase", 2),
  tech("MsSQL", 2),
  tech("SQLite", 2),
  tech("OAuth2", 2),
  tech("JWT", 2),
  tech("PostgreSQL", 1),
  tech("Oracle", 1),
  tech("GraphQL", 1),
];

/* ------------------------------------------------------------------ */
/*  Selected work                                                     */
/* ------------------------------------------------------------------ */
export const solutions: Solution[] = [
  {
    title: {
      en: "Customer service integrated with WhatsApp",
      pt: "SAC integrado com WhatsApp",
    },
    tagline: {
      en: "Node.js · Flutter · MySQL",
      pt: "Node.js · Flutter · MySQL",
    },
    description: {
      en: "Built a complete support system that unified 6 WhatsApp accounts into a single hub, where technicians open tickets, track their status and chat with customers over WhatsApp.",
      pt: "Desenvolvi um sistema completo de atendimento que unificou 6 contas de WhatsApp em uma central única, onde os técnicos abrem chamados, acompanham o status e conversam com os clientes via WhatsApp.",
    },
    stack: [
      "/icons/technologies/node.js.svg",
      "/icons/technologies/flutter.svg",
      "/icons/technologies/mysql.svg",
    ],
  },
  {
    title: {
      en: "Mobile Kitchen Display System (KDS)",
      pt: "KDS mobile",
    },
    tagline: {
      en: "Node.js · Electron · React Native · MsSQL",
      pt: "Node.js · Electron · React Native · MsSQL",
    },
    description: {
      en: "Built a full integration with TOTVS Chef for managing kitchen orders: cooks see incoming orders and mark them ready, while waiters track each order's status and deliver it.",
      pt: "Desenvolvi uma integração completa com o TOTVS Chef para gerenciar pedidos na cozinha: cozinheiros veem os pedidos e marcam como prontos, enquanto garçons acompanham o status e fazem a entrega.",
    },
    stack: [
      "/icons/technologies/node.js.svg",
      "/icons/technologies/electron.svg",
      "/icons/technologies/react.svg",
      "/icons/technologies/mssql.svg",
    ],
  },
  {
    title: {
      en: "ERP app for small businesses",
      pt: "App de ERP para pequenas empresas",
    },
    tagline: { en: "Flutter (Frontend)", pt: "Flutter (Frontend)" },
    description: {
      en: "Kicked off the migration of a legacy system to Flutter, building dashboards, reports and registration forms.",
      pt: "Iniciei a migração de um sistema legado para Flutter, construindo dashboards, relatórios e formulários de cadastro.",
    },
    stack: ["/icons/technologies/flutter.svg"],
  },
  {
    title: {
      en: "Order-taking app for waiters",
      pt: "App para garçons lançarem pedidos",
    },
    tagline: { en: "Flutter (Frontend)", pt: "Flutter (Frontend)" },
    description: {
      en: "Worked on an app where waiters browse tables, place orders and follow each order's status in real time.",
      pt: "Trabalhei em um app onde garçons visualizam as mesas, lançam pedidos e acompanham o status de cada um em tempo real.",
    },
    stack: ["/icons/technologies/flutter.svg"],
  },
  {
    title: {
      en: "JR Sistemas company website",
      pt: "Site da empresa JR Sistemas",
    },
    tagline: { en: "React · Next.js", pt: "React · Next.js" },
    description: {
      en: "Completely redesigned and rebuilt the company website with React and Next.js.",
      pt: "Refiz totalmente o site da empresa com React e Next.js.",
    },
    stack: [
      "/icons/technologies/react.svg",
      "/icons/technologies/next.js.svg",
    ],
  },
  {
    title: {
      en: "Process automation",
      pt: "Automatização de processos",
    },
    tagline: { en: "Node.js · Puppeteer", pt: "Node.js · Puppeteer" },
    description: {
      en: "Built automations to streamline operations, such as auto-downloading NFC-e from SC and checking ticket replies.",
      pt: "Desenvolvi automações para otimizar processos, como baixar automaticamente NFC-e de SC e verificar respostas de chamados.",
    },
    stack: [
      "/icons/technologies/node.js.svg",
      "/icons/technologies/puppeteer.svg",
    ],
  },
];
