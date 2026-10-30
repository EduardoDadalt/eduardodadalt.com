import type { Locale } from "@/constants/locales";
import { fileHref } from "@/content/files";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/content/links";
import type { Dictionary } from "@/dictionaries/types";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/** Converte `**texto**` em <strong>. */
function emphasize(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 ? (
      <strong key={index} className="font-medium text-amber">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function Badge({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <span className="inline-flex overflow-hidden rounded border border-line text-[11px]">
      <span className="bg-line px-2 py-0.5 text-fg">{label}</span>
      <span className="px-2 py-0.5 font-bold text-[#052e12]" style={{ background: color }}>
        {value}
      </span>
    </span>
  );
}

const buttonClass =
  "rounded-md border border-accent px-4 py-[7px] text-[13px] transition-colors";

export default function Readme({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const { readme, profile, files } = dictionary;
  const featured = dictionary.projects.filter((project) => project.featured);

  return (
    <article className="max-w-[860px] px-5 py-8 md:px-14 md:py-12">
      <header className="flex flex-col-reverse gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[13px] text-accent">{`// ${readme.greeting}`}</p>
          <h1 className="mt-3 mb-1.5 text-[clamp(34px,6vw,58px)] leading-[1.05] font-extrabold tracking-[-0.03em] text-bright">
            Eduardo <span className="text-accent">Dadalt</span>
          </h1>
          <p className="text-lg">
            {profile.role}{" "}
            <span aria-hidden className="inline-block h-[19px] w-[9px] animate-blink bg-accent align-[-3px]" />
          </p>
        </div>
        <Image
          src="/images/profile.png"
          alt={readme.photoAlt}
          width={112}
          height={112}
          priority
          className="size-24 rounded-xl border border-line object-cover grayscale-[15%] sm:size-28"
        />
      </header>

      <div className="my-[22px] flex flex-wrap gap-1.5">
        <Badge label={readme.badges.status} value={readme.badges.statusValue} color="var(--color-accent)" />
        <Badge label={readme.badges.company} value="JR Sistemas" color="var(--color-cyan)" />
        <Badge
          label={readme.badges.degree}
          value={`ADS @ ${profile.degree.institution}`}
          color="var(--color-amber)"
        />
        <Badge label={readme.badges.location} value={profile.location} color="var(--color-violet)" />
      </div>

      <p className="max-w-[680px]">{emphasize(readme.intro)}</p>

      <div className="mt-[18px] flex flex-wrap gap-2.5">
        <a href={`mailto:${EMAIL}`} className={`${buttonClass} bg-accent font-bold text-[#052e12] hover:bg-accent/85`}>
          ./{files.contact}
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={`${buttonClass} text-accent hover:bg-sel`}>
          github ↗
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={`${buttonClass} text-accent hover:bg-sel`}>
          linkedin ↗
        </a>
      </div>

      <h2 className="mt-10 mb-3.5 border-b border-line pb-2 text-lg font-bold text-bright">
        <span aria-hidden className="text-dim">## </span>
        {readme.featured}
      </h2>
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {featured.map((project) => (
          <li key={project.name}>
            <Link
              href={fileHref(locale, "projects")}
              className="block h-full rounded-lg border border-line p-3.5 transition-colors hover:border-accent hover:bg-sel"
            >
              <p className="text-[11px] text-amber">{project.stack.join(" · ")}</p>
              <h3 className="my-1 text-sm font-bold text-bright">{project.name}</h3>
              <p className="text-xs text-dim">{project.summary}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-[30px] hidden text-xs text-dim md:block">
        → {readme.hint} <kbd className="font-mono text-amber">Ctrl+P</kbd>
      </p>
    </article>
  );
}
