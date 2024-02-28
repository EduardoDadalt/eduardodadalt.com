import { getDictionary } from "@/dictionaries/dictionaries";
import { Briefcase, GraduationCap } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Experience from "./experience";
import "./style.css";
import EducationStep from "./education-step";
import { Card, CardContent } from "@/components/ui/card";

export default async function MyInfo({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);

  return (
    <>
      <section>
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-4 text-center sm:flex-row">
            <Image
              src="/images/profile.png"
              alt="Imagem do Eduardo Dadalt"
              width={300}
              height={300}
              className="size-44 rounded-3xl shadow-lg"
            />

            <div className="mx-auto space-y-2 *:max-w-md">
              <h1 className="text-xl">
                {dictionary.homepage.myInfo.hiMyNameIs}{" "}
                <span className="fundo-gradient-texto whitespace-nowrap text-2xl font-bold">
                  Eduardo Dadalt
                </span>
              </h1>
              <div className="text-justify indent-4">
                <MDXRemote source={dictionary.homepage.myInfo.description} />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="space-y-4">
        <h2 className="flex flex-row gap-2 text-xl font-bold underline">
          <Briefcase /> {dictionary.homepage.myInfo.experience.title}
        </h2>

        {dictionary.homepage.myInfo.experience.jobs.map((job, index) => (
          <Experience key={index} {...job} locale={locale} />
        ))}
      </section>
      <section className="space-y-4">
        <h2 className="flex flex-row gap-2 text-xl font-bold underline">
          <GraduationCap /> {dictionary.homepage.myInfo.education.title}
        </h2>
        <div className="space-y-4">
          {dictionary.homepage.myInfo.education.steps.map((step, index) => (
            <EducationStep key={index} {...step} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}
