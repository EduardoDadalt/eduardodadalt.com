import Image from "next/image";

import { getMessages } from "@/i18n";
import { solutions } from "@/content/resume";
import { pick } from "@/lib/localized";
import { Section, SectionHeading } from "../section";
import Reveal from "../reveal";

export default function Work({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <Section id="work">
      <SectionHeading
        file={t.solutions.file}
        title={t.solutions.title}
        subtitle={t.solutions.subtitle}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {solutions.map((solution, index) => (
          <Reveal key={pick(solution.title, "en")} delay={(index % 2) * 80}>
            <article className="group flex h-full break-avoid flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug">
                    {pick(solution.title, locale)}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-accent">
                    {pick(solution.tagline, locale)}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap justify-end gap-1.5">
                  {solution.stack.map((icon) => (
                    <Image
                      key={icon}
                      src={icon}
                      alt=""
                      width={22}
                      height={22}
                      className="size-[22px] rounded bg-white/90 p-0.5 dark:bg-white/95"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pick(solution.description, locale)}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
