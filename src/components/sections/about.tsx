import { Code2, GraduationCap, Languages, MapPin } from "lucide-react";

import { getMessages } from "@/i18n";
import { profile } from "@/content/resume";
import { pick } from "@/lib/localized";
import { getAge } from "@/lib/datetime";
import { Section, SectionHeading } from "../section";
import TerminalWindow from "../terminal-window";
import Reveal from "../reveal";

export default function About({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const age = getAge(profile.birthDate);
  const summary = pick(profile.summary, locale).replace("{age}", String(age));

  const facts = [
    { icon: MapPin, value: pick(profile.location, locale) },
    { icon: Code2, value: pick(profile.role, locale) },
    { icon: GraduationCap, value: "FIAP" },
    { icon: Languages, value: "Português · English" },
  ];

  return (
    <Section id="about">
      <SectionHeading file={t.about.file} title={t.about.title} />
      <Reveal>
        <TerminalWindow title={t.about.file}>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-term-purple">cat</span> {t.about.file}
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-foreground/90">
            {summary}
          </p>
          <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {facts.map(({ icon: Icon, value }) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-3 py-2"
              >
                <Icon className="size-4 shrink-0 text-accent" />
                <dd className="text-sm text-foreground/90">{value}</dd>
              </div>
            ))}
          </dl>
        </TerminalWindow>
      </Reveal>
    </Section>
  );
}
