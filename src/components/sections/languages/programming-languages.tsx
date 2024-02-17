import { cn } from "@/lib/utils";
import { get } from "http";
import Image from "next/image";
import { current } from "tailwindcss/colors";

type Level = 1 | 2 | 3;

type ProgrammingLanguage = {
  name: string;
  level: Level;
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

function Level({ currentLevel, level }: { level: Level; currentLevel: Level }) {
  const getColor = (): string => {
    if (currentLevel < level) return "bg-gray-300";
    switch (level) {
      case 1:
        return "bg-green-500 dark:bg-green-600";
      case 2:
        return "bg-amber-500 dark:bg-amber-600";
      case 3:
        return "bg-rose-500 dark:bg-rose-600";
    }
  };
  return <div className={cn("h-2 min-w-10", getColor())} />;
}

export default function ProgrammingLanguages() {
  const getLevelLabel = (level: Level): string => {
    switch (level) {
      case 1:
        return "Básico";
      case 2:
        return "Intermediário";
      case 3:
        return "Avançado";
    }
  };

  return (
    <section id="#linguagens">
      <h2 className="text-2xl font-bold">Linguagens de Programação</h2>
      <div className="flex flex-row flex-wrap gap-2 *:flex-1 ">
        {programmingLanguages.map((language, index) => (
          <div
            key={index}
            className="flex min-w-[260px] flex-row items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-100 p-2 shadow dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex items-center justify-center gap-2">
              <Image
                src={`/icons/programming-languages/${language.name.toLowerCase()}.svg`}
                alt={`Ícone do ${language.name}`}
                width={24}
                height={24}
                className="size-6"
              />

              <div>{language.name}</div>
            </div>
            <div className="flex flex-col">
              <div className="mt-3 flex overflow-hidden rounded-lg">
                <Level level={1} currentLevel={language.level} />
                <Level level={2} currentLevel={language.level} />
                <Level level={3} currentLevel={language.level} />
              </div>
              <div className="text-xs">{getLevelLabel(language.level)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
