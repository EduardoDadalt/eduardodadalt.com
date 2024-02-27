import { EducationStepType } from "@/components/sections/my-info/education-step";
import { Experience } from "@/components/sections/my-info/experience";

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
      siteName: string;
    };
    pageOnConstruction: string;
    myInfo: {
      hiMyNameIs: string;
      description: string;
      experience: {
        title: string;
        position: string;
        description: string;
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
      iconOf: string;
    };
    technology: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      youCanContactMeVia: string;
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
