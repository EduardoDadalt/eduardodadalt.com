import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDictionary } from "@/dictionaries/dictionaries";
import Image from "next/image";

export type LanguageOrTechnology = {
  name: string;
  icon: string;
};

export type Solution = {
  title: string;
  description: string;
  content: string;
  languagesAndTechnologies: string[];
};

export default async function Solutions({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);

  return (
    <section>
      <h2 className="text-2xl font-bold">
        {dictionary.homepage.solution.title}
      </h2>
      <p className="text-gray-500">
        {dictionary.homepage.solution.description}
      </p>
      <div className="flex flex-wrap gap-2 *:flex-1">
        {dictionary.homepage.solution.solutions.map(
          (
            { title, content, description, languagesAndTechnologies }: Solution,
            index,
          ) => (
            <Card key={index} className="min-w-72">
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
                <div className="flex flex-row gap-2">
                  {languagesAndTechnologies.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt="Tecnologia utilizada"
                      height={24}
                      width={24}
                      className="size-[24px]"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p>{content}</p>
              </CardContent>
            </Card>
          ),
        )}
      </div>
    </section>
  );
}
