import { getMessages } from "@/i18n";
import { experiences } from "@/content/resume";
import { pick } from "@/lib/localized";
import { formatRange } from "@/lib/datetime";
import { Section, SectionHeading } from "../section";
import Reveal from "../reveal";

export default function Experience({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <Section id="experience">
      <SectionHeading file={t.experience.file} title={t.experience.title} />
      <ol className="space-y-5">
        {experiences.map((job, index) => (
          <Reveal key={job.company} delay={index * 80} className="relative pl-8">
            <span
              className="absolute bottom-0 left-[5px] top-2 w-px bg-border"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-accent bg-background"
              aria-hidden="true"
            />
            <article className="break-avoid rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {formatRange(job.start, job.end, locale, t.experience.present)}
                </span>
              </div>
              <p className="text-sm font-medium text-accent">
                {pick(job.position, locale)}
              </p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {pick(job.description, locale)}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
