import type { Locale } from "@/constants/locales";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/content/links";
import Link from "next/link";
import { FilesIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import LocaleSwitch from "./locale-switch";

const itemClass =
  "relative grid size-9 place-items-center rounded-lg text-dim transition-colors hover:bg-sel hover:text-fg";

export default function ActivityBar({
  locale,
  switchLabel,
}: {
  locale: Locale;
  switchLabel: string;
}) {
  return (
    <nav className="hidden flex-col items-center gap-1.5 border-r border-line bg-bg pt-2.5 pb-2 md:flex">
      <Link
        href={`/${locale}`}
        aria-label="Explorer"
        className={`${itemClass} text-accent before:absolute before:top-2 before:bottom-2 before:-left-[7px] before:w-0.5 before:bg-accent`}
      >
        <FilesIcon className="size-[19px]" />
      </Link>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className={itemClass}>
        <GithubIcon className="size-[19px]" />
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={itemClass}>
        <LinkedinIcon className="size-[19px]" />
      </a>
      <a href={`mailto:${EMAIL}`} aria-label="Email" className={itemClass}>
        <MailIcon className="size-[19px]" />
      </a>
      <span className="flex-1" />
      <LocaleSwitch locale={locale} label={switchLabel} className={`${itemClass} text-[11px] font-bold`} />
    </nav>
  );
}
