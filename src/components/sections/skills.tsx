import { getMessages } from "@/i18n";
import { languages, technologies, type SkillLevel } from "@/content/resume";
import { Section, SectionHeading } from "../section";
import Reveal from "../reveal";
import SkillCard from "../skill-card";

export default function Skills({ locale }: { locale: string }) {
  const t = getMessages(locale);

  const label = (level: SkillLevel) =>
    level === 1
      ? t.levels.basic
      : level === 2
        ? t.levels.intermediate
        : t.levels.advanced;

  const groups = [
    {
      title: t.languages.title,
      subtitle: t.languages.subtitle,
      items: languages,
    },
    {
      title: t.technologies.title,
      subtitle: t.technologies.subtitle,
      items: technologies,
    },
  ];

  return (
    <Section id="skills">
      <SectionHeading
        file={t.skills.file}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.title} className="break-avoid">
            <Reveal className="mb-3">
              <h3 className="font-mono text-sm font-semibold text-accent">
                {group.title}
              </h3>
              <p className="text-xs text-muted-foreground">{group.subtitle}</p>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.items.map((skill, index) => (
                <Reveal key={skill.name} delay={(index % 4) * 60}>
                  <SkillCard skill={skill} label={label(skill.level)} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
