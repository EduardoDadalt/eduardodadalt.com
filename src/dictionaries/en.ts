import { type Dictionary } from "./Dictionary";
import getAge from "../lib/get-age";

const age = getAge();

const en: Dictionary = {
  header: {
    forMoreInfoAccess: "For more information, access",
    languages: "Languages",
    technologies: "Technologies",
    solutions: "Solutions",
    repositories: "Repositories",
    contact: "Contact",
  },
  homepage: {
    metadata: {
      title: "Eduardo Dadalt - Full Stack Developer",
      description:
        "Full Stack Developer, passionate about technology and innovation.",
    },
    pageOnConstruction: "Page under construction",
    myInfo: {
      hiMyNameIs: "Hi, my name is",
      description: `I'm a **Full Stack** developer and I'm ${age} years old. I'm currently studying Systems Analysis and Development at [FIAP](http://fiap.com.br). I'm always looking for new knowledge and challenges`,
      experience: {
        title: "Experiences",
        position: "Position",
        description: "Description",
        jobs: [
          {
            company: "Voxy",
            position: "Technical Support",
            dateBegin: "Feb 2021",
            dataEnd: "Oct 2021",
            description:
              "Customer service, technical support and developed some solutions for the team, such as a correction system for the fiscal file that the system generated. I also created a KDS system integrated with the system for order management in the kitchen",
          },
          {
            company: "JR Sistemas",
            position: "Developer",
            dateBegin: "Oct 2021",
            dataEnd: "Currently",
            description:
              "Development of web and mobile systems, maintenance of legacy systems and technical support.",
          },
        ],
      },
      education: {
        title: "Education",
        institution: "Institution",
        situation: "Situation",
        steps: [
          {
            institution: "FIAP",
            course: "Systems Analysis and Development",
            dateBegin: "Feb 2023",
            dateEnd: "Currently",
            description: "In progress",
          },
          {
            institution: "IFRS - Campus Canoas",
            course: "High School Technical in Systems Analysis and Development",
            dateBegin: "Feb 2023",
            dateEnd: "Currently",
            description:
              "Incomplete due to the COVID-19 pandemic and me moving to Itapema/SC. I completed high school in 2022.",
          },
        ],
      },
    },
    programmingLanguage: {
      title: "Programming Languages",
      iconOf: "Icon of",
    },
    technology: {
      title: "Technologies",
      description:
        "Here are some of the technologies I have experience with and that I can use to develop solutions.",
    },
    contact: {
      title: "Contact",
      youCanContactMeVia: "You can contact me via",
    },
    solution: {
      title: "Solutions",
      description:
        "Here are some of the solutions I have developed or actively participated in the development.",
      solutions: [],
    },
  },
  components: {
    cardLevel: {
      basic: "Basic",
      intermediate: "Intermediate",
      advanced: "Advanced",
    },
  },
};

export default en;
