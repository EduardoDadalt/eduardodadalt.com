import CardLevel from "@/components/card-level";
import { LevelType } from "@/components/card-level/level";
import { getDictionary } from "@/dictionaries/dictionaries";

type ProgrammingLanguage = {
  name: string;
  level: LevelType;
};

const programmingLanguages: ProgrammingLanguage[] = [
  {
    name: "TypeScript",
    level: 3,
  },
  {
    name: "Dart",
    level: 3,
  },
  {
    name: "JavaScript",
    level: 3,
  },
  { name: "SQL", level: 3 },

  {
    name: "Python",
    level: 1,
  },
  {
    name: "Java",
    level: 1,
  },
  {
    name: "C",
    level: 1,
  },
  {
    name: "PHP",
    level: 1,
  },
];

export default async function ProgrammingLanguages({
  locale,
}: {
  locale: string;
}) {
  const dictionary = await getDictionary(locale);
  return (
    <section className="section-shell" id="linguagens">
      <div className="section-heading">
        <p>{dictionary.header.languages}</p>
        <h2>{dictionary.homepage.programmingLanguage.title}</h2>
        <span>{dictionary.homepage.programmingLanguage.description}</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 print:grid-cols-4">
        {programmingLanguages.map((language, index) => (
          <CardLevel
            key={index}
            name={language.name}
            level={language.level}
            icon={`/icons/programming-languages/${language.name.toLowerCase()}.svg`}
            iconAlt={`${dictionary.homepage.programmingLanguage.iconOf} ${language.name}`}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
