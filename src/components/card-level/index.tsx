import Image from "next/image";
import Level, { LevelType } from "./level";

export default function CardLevel({
  name,
  level,
  icon,
  iconAlt,
}:
  | {
      name: string;
      level: LevelType;
      icon?: undefined;
      iconAlt?: string;
    }
  | {
      name: string;
      level: LevelType;
      icon: string;
      iconAlt: string;
    }) {
  const getLevelLabel = (level: LevelType): string => {
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
    <div className="flex min-w-[260px] flex-row items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-100 p-2 shadow dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-center gap-2">
        {!!icon && (
          <Image
            src={icon}
            alt={iconAlt}
            width={24}
            height={24}
            className="size-6"
          />
        )}

        <div>{name}</div>
      </div>
      <div className="flex flex-col">
        <div className="mt-3 flex overflow-hidden rounded-lg">
          <Level level={1} currentLevel={level} />
          <Level level={2} currentLevel={level} />
          <Level level={3} currentLevel={level} />
        </div>
        <div className="text-xs">{getLevelLabel(level)}</div>
      </div>
    </div>
  );
}
