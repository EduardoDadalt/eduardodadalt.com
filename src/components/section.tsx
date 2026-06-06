import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "./reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-4xl scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16",
        className,
      )}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  file: string;
  title: string;
  subtitle?: string;
};

/**
 * Terminal-flavoured section header. The `~/file` tag is screen-only; the
 * printed résumé shows just the clean title.
 */
export function SectionHeading({ file, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-8 space-y-2">
      <div className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground print:hidden">
        <span className="text-term-green">~/</span>
        <span>{file}</span>
      </div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        <span className="text-accent">#</span> {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
