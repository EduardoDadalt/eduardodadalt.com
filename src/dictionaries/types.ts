import type { FileId } from "@/content/files";

export type Period = [start: string, end: string];

export type Experience = {
  company: string;
  role: string;
  period: Period;
  description: string;
};

export type Education = {
  institution: string;
  course: string;
  period: Period;
  note?: string;
};

export type Project = {
  name: string;
  stack: string[];
  summary: string;
  featured?: boolean;
};

export type Dictionary = {
  metadata: { title: string; description: string };
  /** Nome exibido de cada arquivo no explorer e nas abas. */
  files: Record<FileId, string>;
  ui: {
    explorer: string;
    terminal: string;
    problems: string;
    output: string;
    available: string;
    closeTab: string;
    switchLanguage: string;
  };
  profile: {
    role: string;
    location: string;
    degree: { course: string; institution: string; status: string };
    bio: string;
  };
  readme: {
    greeting: string;
    /** Aceita **negrito**. */
    intro: string;
    badges: {
      status: string;
      statusValue: string;
      company: string;
      degree: string;
      location: string;
    };
    featured: string;
    hint: string;
    photoAlt: string;
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  terminal: { ready: string; lastCommit: string };
  code: {
    /** Tradução das chaves dos objetos exibidos no código. */
    keys: Record<string, string>;
    vars: {
      experiences: string;
      education: string;
      projects: string;
    };
    comments: {
      about: string;
      educationNote: string;
      contact: string[];
    };
    contactEcho: string;
  };
};
