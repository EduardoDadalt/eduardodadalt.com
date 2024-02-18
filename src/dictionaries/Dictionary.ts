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
  };
  components: {
    cardLevel: {
      basic: string;
      intermediate: string;
      advanced: string;
    };
  };
};
