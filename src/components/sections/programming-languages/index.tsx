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
    <section id="linguagens">
      <h2 className="text-2xl font-bold">
        {dictionary.homepage.programmingLanguage.title}
      </h2>
      <div className="flex flex-row flex-wrap gap-2 *:flex-1 ">
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
