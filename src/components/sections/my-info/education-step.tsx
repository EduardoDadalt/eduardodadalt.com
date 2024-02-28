import { getDictionary } from "@/dictionaries/dictionaries";

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
    <div>
      <div className="flex flex-row items-center justify-between gap-4">
        <h3 className="text-lg font-bold">{course}</h3>
        <p className="text-xs *:whitespace-nowrap">
          <span>{dateBegin}</span> - <span>{dateEnd}</span>
        </p>
      </div>
      <p>
        <strong>{dictionary.homepage.myInfo.education.institution}:</strong>{" "}
        {institution}
      </p>
      <p>
        <strong>{dictionary.homepage.myInfo.education.situation}:</strong>{" "}
        {situation}
      </p>
    </div>
  );
}
