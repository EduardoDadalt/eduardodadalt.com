import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";

import { getMessages } from "@/i18n";
import { profile } from "@/content/resume";
import { pick } from "@/lib/localized";
import TerminalWindow from "../terminal-window";
import Typing from "../typing";
import Reveal from "../reveal";
import PrintButton from "../print-button";
import ButtonSocialNetwork from "../button-social-network";
import { Button } from "../ui/button";

export default function Hero({ locale }: { locale: string }) {
  const t = getMessages(locale);

  return (
    <section className="relative px-5 pt-10 sm:px-8 sm:pt-16 print:hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" aria-hidden="true" />

      <Reveal className="mx-auto w-full max-w-4xl">
        <TerminalWindow title="eduardo@portfolio: ~">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-term-green">visitor@web</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-term-blue">~</span>${" "}
            <span className="text-foreground">whoami</span>
          </p>

          <div className="mt-6 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex-1 space-y-4">
              <p className="font-mono text-sm text-muted-foreground">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="gradient-text">{profile.name}</span>
              </h1>
              <p className="flex items-center gap-2 font-mono text-lg text-foreground sm:text-xl">
                <span className="text-accent">&gt;</span>
                <Typing words={pick(profile.titles, locale)} />
              </p>
              <p className="max-w-xl leading-relaxed text-muted-foreground">
                {pick(profile.tagline, locale)}
              </p>

              <div className="flex items-center gap-2 pt-1">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-term-green opacity-60" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-term-green" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {t.hero.availableForWork}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <PrintButton label={t.actions.downloadCv} />
                <Button asChild variant="outline">
                  <Link href="#contact">
                    <Mail className="size-4" />
                    {t.actions.getInTouch}
                  </Link>
                </Button>
                <div className="flex gap-1">
                  <ButtonSocialNetwork socialNetwork="github" />
                  <ButtonSocialNetwork socialNetwork="linkedin" />
                </div>
              </div>
            </div>

            <div className="relative shrink-0">
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-linear-to-tr from-accent/20 to-term-cyan/20 blur-xl" />
              <Image
                src="/images/profile.png"
                alt={profile.name}
                width={300}
                height={300}
                priority
                className="size-32 rounded-2xl object-cover ring-1 ring-border sm:size-44"
              />
            </div>
          </div>
        </TerminalWindow>
      </Reveal>

      <div className="mt-10 flex justify-center">
        <Link
          href="#about"
          className="flex flex-col items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          {t.hero.scrollHint}
          <ArrowDown className="size-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
