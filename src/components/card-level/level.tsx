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
    if (currentLevel < level) return "bg-slate-200 dark:bg-slate-800";
    switch (level) {
      case 1:
        return "bg-sky-400";
      case 2:
        return "bg-primary-500";
      case 3:
        return "bg-violet-600";
    }
  };
  return <div className={cn("h-2 min-w-8 rounded-full", getColor())} />;
}
