import type { Locale } from "@/constants/locales";

/** A value translated into every supported locale. */
export type Localized<T = string> = Record<Locale, T>;

/** UI chrome strings — everything that is *not* résumé data. */
export type Messages = {
  nav: {
    about: string;
    experience: string;
    skills: string;
    work: string;
    contact: string;
  };
  actions: {
    downloadCv: string;
    viewWork: string;
    getInTouch: string;
    copyEmail: string;
    copied: string;
    backToTop: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    greeting: string;
    availableForWork: string;
    scrollHint: string;
  };
  about: {
    title: string;
    file: string;
  };
  experience: {
    title: string;
    file: string;
    role: string;
    present: string;
  };
  education: {
    title: string;
    file: string;
    institution: string;
    status: string;
  };
  skills: {
    title: string;
    subtitle: string;
    file: string;
  };
  languages: {
    title: string;
    subtitle: string;
    file: string;
  };
  technologies: {
    title: string;
    subtitle: string;
    file: string;
  };
  solutions: {
    title: string;
    subtitle: string;
    file: string;
  };
  contact: {
    title: string;
    subtitle: string;
    file: string;
  };
  levels: {
    basic: string;
    intermediate: string;
    advanced: string;
  };
  theme: {
    label: string;
    light: string;
    dark: string;
    system: string;
  };
  footer: {
    builtWith: string;
    viewSource: string;
    rights: string;
  };
  print: {
    moreInfoAt: string;
  };
  metadata: {
    title: string;
    description: string;
  };
};
