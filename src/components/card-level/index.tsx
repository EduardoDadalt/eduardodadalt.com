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
    <Card className=" min-w-[260px] break-inside-avoid ">
      <CardContent className="flex flex-row items-center justify-between gap-2 !p-2">
        <div className="flex items-center justify-center gap-2">
          {!!icon && (
            <Image
              src={icon}
              alt={iconAlt}
              width={24}
              height={24}
              className="size-8 rounded-lg bg-gray-100 p-1 shadow-sm"
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
      </CardContent>
    </Card>
  );
}
