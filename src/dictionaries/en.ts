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
      solutions: [
        {
          title: "ERP App for Small Businesses",
          description: "Using Flutter (Frontend)",
          content:
            "We started migrating the legacy system to Flutter. I took care of the beginning of this migration, creating dashboards, reports, and registration forms.",
          languagesAndTechnologies: ["/icons/technologies/flutter.svg"],
        },
        {
          title: "App for Waiters to Place Orders",
          description: "Using Flutter (Frontend)",
          content:
            "I worked on a system for waiters to place orders, where the waiter can view tables, place orders, and check the status of orders.",
          languagesAndTechnologies: ["/icons/technologies/flutter.svg"],
        },
        {
          title: "JR Sistemas Company Website",
          description: "Using React and NextJS",
          content: "Completely redesigned the website for JR Sistemas company.",
          languagesAndTechnologies: [
            "/icons/technologies/react.svg",
            "/icons/technologies/next.js.svg",
          ],
        },
        {
          title: "Customer Service Integrated with WhatsApp",
          description: "Using Node.js, Flutter, and MySQL",
          content:
            "Developed a complete system for customer service, unifying 6 WhatsApp accounts into a single center, where technicians can open tickets, view ticket status, and converse with customers via WhatsApp.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/flutter.svg",
            "/icons/technologies/mysql.svg",
          ],
        },
        {
          title: "Mobile Kitchen Display System (KDS)",
          description: "Using Node.js, Electron, ReactNative, and MsSQL",
          content:
            "Developed a complete integration with the TOTVS Chef system for managing orders in the kitchen, where cooks can view orders and mark them as ready, and the waiter can view the status of the order and deliver it to the customer.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/electron.svg",
            "/icons/technologies/react.svg",
            "/icons/technologies/mssql.svg",
          ],
        },
        {
          title: "Process Automation",
          description: "Using Node.js, Puppeteer",
          content:
            "Developed automations to optimize processes, such as automatically downloading NFC-e from SC and checking ticket responses.",
          languagesAndTechnologies: [
            "/icons/technologies/node.js.svg",
            "/icons/technologies/puppeteer.svg",
          ],
        },
      ],
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
