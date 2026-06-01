import Link from "next/link";

import { getMessages } from "@/i18n";
import { education } from "@/content/resume";
import { pick } from "@/lib/localized";
import { formatRange } from "@/lib/datetime";
import { Section, SectionHeading } from "../section";
import Reveal from "../reveal";

export default function Education({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <Section id="education">
      <SectionHeading file={t.education.file} title={t.education.title} />
      <ol className="space-y-5">
        {education.map((item, index) => (
          <Reveal
            key={item.institution}
            delay={index * 80}
            className="relative pl-8"
          >
            <span
              className="absolute bottom-0 left-[5px] top-2 w-px bg-border"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-term-green bg-background"
              aria-hidden="true"
            />
            <article className="break-avoid rounded-xl border border-border bg-card p-5 transition-colors hover:border-term-green/50">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {pick(item.course, locale)}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {formatRange(item.start, item.end, locale, t.experience.present)}
                </span>
              </div>
              <p className="text-sm font-medium text-term-green">
                {item.url ? (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.institution}
                  </Link>
                ) : (
                  item.institution
                )}
              </p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {pick(item.status, locale)}
              </p>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
