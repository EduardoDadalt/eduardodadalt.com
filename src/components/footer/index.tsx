import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";

import { getMessages } from "@/i18n";
import { profile } from "@/content/resume";
import { GithubIcon, LinkedinIcon } from "../icons/brand";

export default function Footer({ locale }: { locale: string }) {
  const t = getMessages(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold">
            <span className="text-term-green">~/</span>eduardo-dadalt
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t.footer.builtWith}
          </p>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            © {year} {profile.name}. {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={profile.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Code2 className="size-4" />
            {t.footer.viewSource}
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </Link>
          <Link
            href="#top"
            aria-label={t.actions.backToTop}
            className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground"
          >
            <ArrowUp className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
