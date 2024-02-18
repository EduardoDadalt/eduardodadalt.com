import { getDictionary } from "@/dictionaries/dictionaries";

type ExperienceProps = {
  company: string;
  dateBegin: string;
  dataEnd: string;
  position: string;
  description: string;
  locale: string;
};

export type Experience = Omit<ExperienceProps, "locale">;

export default async function Experience({
  company: nomeEmpresa,
  position: cargo,
  description: descricao,
  dateBegin: dataInicio,
  dataEnd: dataFim,
  locale,
}: ExperienceProps) {
  const dictionary = await getDictionary(locale);
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-500">
          {nomeEmpresa}
        </h3>
        <span className="text-xs">
          {dataInicio} - {dataFim}
        </span>
      </div>
      <div>
        <span className="font-display font-semibold">
          {dictionary.homepage.myInfo.experience.position}:
        </span>{" "}
        {cargo}
      </div>
      <div>
        <span className="font-display font-semibold">
          {dictionary.homepage.myInfo.experience.description}:
        </span>{" "}
        {descricao}
      </div>
    </div>
  );
}
