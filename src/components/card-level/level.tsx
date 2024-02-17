import { cn } from "@/lib/utils";

export type LevelType = 1 | 2 | 3;

export default function Level({
  currentLevel,
  level,
}: {
  level: LevelType;
  currentLevel: LevelType;
}) {
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
