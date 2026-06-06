import Link from "next/link";
import { Mail } from "lucide-react";

import { getMessages } from "@/i18n";
import { profile } from "@/content/resume";
import { Section, SectionHeading } from "../section";
import TerminalWindow from "../terminal-window";
import Reveal from "../reveal";
import CopyButton from "../copy-button";
import { Button } from "../ui/button";
import { GithubIcon, LinkedinIcon } from "../icons/brand";

export default function Contact({ locale }: { locale: string }) {
  const t = getMessages(locale);

  const channels = [
    {
      icon: <Mail className="size-4 text-accent" />,
      label: profile.email,
      href: `mailto:${profile.email}`,
      copy: profile.email,
    },
    {
      icon: <GithubIcon className="size-4 text-accent" />,
      label: "github.com/EduardoDadalt",
      href: profile.github,
    },
    {
      icon: <LinkedinIcon className="size-4 text-accent" />,
      label: "linkedin.com/in/eduardo-dadalt",
      href: profile.linkedin,
    },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        file={t.contact.file}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />
      <Reveal>
        <TerminalWindow title={t.contact.file}>
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-term-green">$</span> ./{t.contact.file}
          </p>

          <ul className="mt-4 space-y-2.5">
            {channels.map((channel) => (
              <li
                key={channel.href}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3"
              >
                <Link
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex min-w-0 items-center gap-3 font-mono text-sm hover:text-accent"
                >
                  {channel.icon}
                  <span className="truncate">{channel.label}</span>
                </Link>
                {channel.copy ? (
                  <CopyButton
                    value={channel.copy}
                    copyLabel={t.actions.copyEmail}
                    copiedLabel={t.actions.copied}
                    className="shrink-0 print:hidden"
                  />
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Button asChild className="print:hidden">
              <Link href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                {t.actions.getInTouch}
              </Link>
            </Button>
          </div>
        </TerminalWindow>
      </Reveal>
    </Section>
  );
}
