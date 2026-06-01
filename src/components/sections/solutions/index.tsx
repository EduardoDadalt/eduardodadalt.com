import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Solution } from "@/dictionaries/Dictionary";
import { getDictionary } from "@/dictionaries/dictionaries";
import Image from "next/image";

export type LanguageOrTechnology = {
  name: string;
  icon: string;
};

export default async function Solutions({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);

  return (
    <section className="section-shell" id="solucoes">
      <div className="section-heading">
        <p>{dictionary.header.solutions}</p>
        <h2>{dictionary.homepage.solution.title}</h2>
        <span>{dictionary.homepage.solution.description}</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 print:grid-cols-2">
        {dictionary.homepage.solution.solutions.map(
          (
            { title, content, description, languagesAndTechnologies }: Solution,
            index,
          ) => (
            <Card
              key={index}
              className="group hover:border-primary-200 dark:hover:border-primary-700 break-inside-avoid rounded-lg border-slate-200/80 bg-white/80 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/70 print:border-slate-300 print:bg-white print:shadow-none"
            >
              <CardHeader className="flex flex-row justify-between gap-4 p-5 print:p-3">
                <div className="space-y-2">
                  <CardTitle className="text-base leading-6 text-slate-950 dark:text-slate-50">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-primary-700 dark:text-primary-300 font-medium print:text-slate-600">
                    {description}
                  </CardDescription>
                </div>
                <div className="!mt-0 flex flex-row flex-wrap justify-end gap-2">
                  {languagesAndTechnologies.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt="Tecnologia utilizada"
                      height={24}
                      width={24}
                      className="size-8 rounded-lg bg-slate-100 p-1.5 shadow-sm dark:bg-slate-900 print:size-6"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-0 print:p-3 print:pt-0">
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300 print:leading-5">
                  {content}
                </p>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
}
