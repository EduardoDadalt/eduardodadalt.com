import { cn } from "@/lib/utils";
import { get } from "http";
import { current } from "tailwindcss/colors";

type Level = 1 | 2 | 3;

type ProgrammingLanguage = {
  name: string;
  level: Level;
};

const programmingLanguages: ProgrammingLanguage[] = [
  {
    name: "JavaScript",
    level: 3,
  },
  {
    name: "TypeScript",
    level: 3,
  },
  {
    name: "Dart",
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
        return "bg-green-500";
      case 2:
        return "bg-amber-500";
      case 3:
        return "bg-rose-500";
    }
  };
  return (
    <div>
      <div className={cn("h-2 w-10", getColor())}></div>
    </div>
  );
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
    <section>
      <h2 className="text-2xl font-bold">Linguagens de Programação</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {programmingLanguages.map((language, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-lg border p-1 shadow"
          >
            <div>{language.name}</div>
            <div className="p-1">
              <div className="flex overflow-hidden rounded-lg">
                <Level level={1} currentLevel={language.level} />
                <Level level={2} currentLevel={language.level} />
                <Level level={3} currentLevel={language.level} />
              </div>
              <div>{getLevelLabel(language.level)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
