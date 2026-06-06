import Image from "next/image";
import type { CSSProperties } from "react";

import type { Skill } from "@/content/resume";

export default function SkillCard({
  skill,
  label,
}: {
  skill: Skill;
  label: string;
}) {
  return (
    <div className="group break-avoid rounded-lg border border-border bg-card p-3 transition-colors hover:border-accent/50">
      <div className="flex items-center gap-2.5">
        <Image
          src={skill.icon}
          alt=""
          width={24}
          height={24}
          className="size-6 shrink-0 rounded bg-white/90 p-0.5 dark:bg-white/95"
        />
        <span className="min-w-0 flex-1 truncate text-sm font-medium">
          {skill.name}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="skill-bar h-full rounded-full bg-linear-to-r from-accent to-term-cyan"
            style={
              { "--skill-level": `${(skill.level / 3) * 100}%` } as CSSProperties
            }
          />
        </div>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}
