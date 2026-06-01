export type Experience = {
  company: string;
  dateBegin: string;
  dateEnd: string;
  position: string;
  description: string;
  highlights: string[];
};

export type EducationStepType = {
  institution: string;
  course: string;
  description: string;
  dateBegin: string;
  dateEnd: string;
};

export type Solution = {
  title: string;
  description: string;
  content: string;
  languagesAndTechnologies: string[];
};

export type Dictionary = {
  header: {
    forMoreInfoAccess: string;
    languages: string;
    technologies: string;
    solutions: string;
    repositories: string;
    contact: string;
  };

  homepage: {
    metadata: {
      title: string;
      description: string;
    };
    pageOnConstruction: string;
    myInfo: {
      hiMyNameIs: string;
      role: string;
      location: string;
      availability: string;
      description: string;
      strengthsTitle: string;
      strengths: string[];
      stats: {
        value: string;
        label: string;
      }[];
      experience: {
        title: string;
        eyebrow: string;
        position: string;
        description: string;
        highlights: string;
        jobs: Experience[];
      };
      education: {
        title: string;
        institution: string;
        situation: string;
        steps: EducationStepType[];
      };
    };
    programmingLanguage: {
      title: string;
      description: string;
      iconOf: string;
    };
    technology: {
      title: string;
      description: string;
    };
    solution: {
      title: string;
      description: string;
      solutions: Solution[];
    };
    contact: {
      title: string;
      description: string;
      youCanContactMeVia: string;
      email: string;
      linkedin: string;
      github: string;
    };
  };
  components: {
    cardLevel: {
      basic: string;
      intermediate: string;
      advanced: string;
    };
  };
};
