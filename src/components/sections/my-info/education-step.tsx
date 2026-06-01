import { getDictionary } from "@/dictionaries/dictionaries";
import { GraduationCap } from "lucide-react";

type EducationStepProps = {
  institution: string;
  course: string;
  description: string;
  dateBegin: string;
  dateEnd: string;
  locale: string;
};

export type EducationStepType = Omit<EducationStepProps, "locale">;

export default async function EducationStep({
  institution,
  course,
  dateBegin,
  dateEnd,
  locale,
  description: situation,
}: EducationStepProps) {
  const dictionary = await getDictionary(locale);
  return (
    <article className="rounded-lg border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/60 print:break-inside-avoid print:border-slate-300 print:bg-white print:p-3 print:shadow-none">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <span className="bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300 flex size-9 shrink-0 items-center justify-center rounded-full print:hidden">
            <GraduationCap className="size-5" />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-slate-950 dark:text-slate-50">
              {course}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong>
                {dictionary.homepage.myInfo.education.institution}:
              </strong>{" "}
              {institution}
            </p>
          </div>
        </div>
        <p className="text-xs font-semibold text-slate-500 *:whitespace-nowrap dark:text-slate-400">
          <span>{dateBegin}</span> - <span>{dateEnd}</span>
        </p>
      </div>
      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 print:mt-2">
        <strong>{dictionary.homepage.myInfo.education.situation}:</strong>{" "}
        {situation}
      </p>
    </article>
  );
}
