import { getDictionary } from "@/dictionaries/dictionaries";
import { CheckCircle2 } from "lucide-react";

type ExperienceProps = {
  company: string;
  dateBegin: string;
  dateEnd: string;
  position: string;
  description: string;
  highlights: string[];
  locale: string;
};

export type Experience = Omit<ExperienceProps, "locale">;

export default async function Experience({
  company: nomeEmpresa,
  position: cargo,
  description: descricao,
  dateBegin: dataInicio,
  dateEnd: dataFim,
  highlights,
  locale,
}: ExperienceProps) {
  const dictionary = await getDictionary(locale);
  return (
    <article className="group hover:border-primary-200 dark:hover:border-primary-700 relative overflow-hidden rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/70 print:break-inside-avoid print:border-slate-300 print:bg-white print:p-3 print:shadow-none">
      <div className="from-primary-500 absolute inset-y-0 left-0 w-1 bg-gradient-to-b to-sky-500 print:bg-slate-400" />
      <div className="flex flex-col gap-2 pl-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
            {nomeEmpresa}
          </h3>
          <p className="text-primary-700 dark:text-primary-300 text-sm font-medium print:text-slate-700">
            {cargo}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300 print:bg-white print:px-0">
          {dataInicio} - {dataFim}
        </span>
      </div>
      <p className="mt-3 pl-2 text-sm leading-6 text-slate-600 dark:text-slate-300 print:mt-2 print:text-slate-700">
        <span className="font-display font-semibold text-slate-900 dark:text-slate-100">
          {dictionary.homepage.myInfo.experience.description}:
        </span>{" "}
        {descricao}
      </p>
      <div className="mt-4 pl-2 print:mt-2">
        <p className="mb-2 text-xs font-bold tracking-[0.18em] text-slate-500 uppercase dark:text-slate-400 print:mb-1">
          {dictionary.homepage.myInfo.experience.highlights}
        </p>
        <ul className="space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300 print:space-y-1 print:leading-5">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <CheckCircle2 className="text-primary-600 dark:text-primary-300 mt-1 size-4 shrink-0 print:hidden" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
