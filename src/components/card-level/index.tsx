import Image from "next/image";
import Level, { LevelType } from "./level";
import { getDictionary } from "@/dictionaries/dictionaries";
import { Card, CardContent } from "../ui/card";

export default async function CardLevel({
  name,
  level,
  icon,
  iconAlt,
  locale,
}: { name: string; level: LevelType; locale: string } & (
  | {
      icon?: undefined;
      iconAlt?: string;
    }
  | {
      icon: string;
      iconAlt: string;
    }
)) {
  const dictionary = await getDictionary(locale);
  const getLevelLabel = (level: LevelType): string => {
    switch (level) {
      case 1:
        return dictionary.components.cardLevel.basic;
      case 2:
        return dictionary.components.cardLevel.intermediate;
      case 3:
        return dictionary.components.cardLevel.advanced;
    }
  };

  return (
    <Card className="hover:border-primary-200 dark:hover:border-primary-700 min-w-[220px] flex-1 break-inside-avoid rounded-lg border-slate-200/80 bg-white/80 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/70 print:min-w-0 print:border-slate-300 print:bg-white print:shadow-none">
      <CardContent className="flex flex-row items-center justify-between gap-4 !p-3">
        <div className="flex min-w-0 items-center justify-center gap-3">
          {!!icon && (
            <Image
              src={icon}
              alt={iconAlt}
              width={24}
              height={24}
              className="size-9 rounded-lg bg-slate-100 p-1.5 shadow-sm dark:bg-slate-900 print:size-7"
            />
          )}

          <div className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
            {name}
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1">
          <div className="flex gap-1 overflow-hidden rounded-lg">
            <Level level={1} currentLevel={level} />
            <Level level={2} currentLevel={level} />
            <Level level={3} currentLevel={level} />
          </div>
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {getLevelLabel(level)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
