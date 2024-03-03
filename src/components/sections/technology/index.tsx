import CardLevel from "@/components/card-level";
import { LevelType } from "@/components/card-level/level";
import { getDictionary } from "@/dictionaries/dictionaries";

type Technology = {
  name: string;
  level: LevelType;
};

const technologies: Technology[] = [
  { name: "React", level: 3 },
  { name: "Next.js", level: 3 },
  { name: "Node.js", level: 3 },
  { name: "Flutter", level: 3 },
  { name: "Electron", level: 2 },
  { name: "React Native", level: 2 },
  { name: "Docker", level: 2 },
  { name: "Azure Pipelines", level: 2 },
  { name: "Puppeteer", level: 2 },
  { name: "Firebase", level: 2 },
  { name: "PostgreSQL", level: 1 },
  { name: "MySQL", level: 3 },
  { name: "MsSQL", level: 2 },
  { name: "SQLite", level: 2 },
  { name: "Oracle", level: 1 },
  { name: "GraphQL", level: 1 },
  { name: "REST", level: 3 },
  { name: "OAuth2", level: 2 },
  { name: "JWT", level: 2 },
];

export default async function Technologies({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);
  return (
    <section id="tecnologias">
      <h2 className="text-2xl font-bold">
        {dictionary.homepage.technology.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-300">
        {dictionary.homepage.technology.description}
      </p>
      <div className="flex flex-row flex-wrap gap-2 *:flex-1 ">
        {technologies.map((technology, index) => (
          <CardLevel
            key={index}
            name={technology.name}
            level={technology.level}
            icon={`/icons/technologies/${technology.name.toLowerCase()}.svg`}
            iconAlt={`${dictionary.homepage.programmingLanguage.iconOf} ${technology.name}`}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
