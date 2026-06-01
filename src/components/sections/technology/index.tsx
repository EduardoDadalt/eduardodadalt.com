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
    <section className="section-shell" id="tecnologias">
      <div className="section-heading">
        <p>{dictionary.header.technologies}</p>
        <h2>{dictionary.homepage.technology.title}</h2>
        <span>{dictionary.homepage.technology.description}</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
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
