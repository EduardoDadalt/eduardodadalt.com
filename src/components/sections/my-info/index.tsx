import { getDictionary } from "@/dictionaries/dictionaries";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Experience from "./experience";
import "./style.css";
import EducationStep from "./education-step";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function MyInfo({ locale }: { locale: string }) {
  const dictionary = await getDictionary(locale);

  return (
    <>
      <section className="hero-section relative mt-0 px-6 py-14 sm:px-8 md:px-12 lg:px-16 print:py-5">
        <div className="aurora-field print:hidden" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="animate-rise min-w-0 space-y-6">
            <div className="border-primary-200 text-primary-800 dark:border-primary-800 dark:text-primary-200 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border bg-white/75 px-3 py-1 text-sm leading-5 font-semibold shadow-sm backdrop-blur dark:bg-slate-950/60 print:border-slate-300 print:bg-white print:text-slate-700">
              <Sparkles className="size-4 print:hidden" />
              <span className="min-w-0 break-words">
                {dictionary.homepage.myInfo.availability}
              </span>
            </div>

            <div className="space-y-3">
              <p className="font-display text-sm font-bold tracking-[0.28em] text-slate-500 uppercase dark:text-slate-400 print:text-slate-600">
                {dictionary.homepage.myInfo.role}
              </p>
              <p className="text-lg font-semibold break-words text-slate-700 dark:text-slate-200 print:text-sm">
                {dictionary.homepage.myInfo.hiMyNameIs}
              </p>
              <h1 className="max-w-4xl text-4xl leading-none font-black text-slate-950 sm:text-6xl dark:text-white print:text-3xl">
                <span className="fundo-gradient-texto block sm:inline">
                  Eduardo
                </span>{" "}
                <span className="fundo-gradient-texto block sm:inline">
                  Dadalt
                </span>
              </h1>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 print:text-slate-700">
                <MapPin className="size-4 print:hidden" />
                {dictionary.homepage.myInfo.location}
              </div>
            </div>

            <div className="max-w-3xl text-base leading-8 break-words text-slate-700 dark:text-slate-200 print:text-sm print:leading-6">
              <MDXRemote source={dictionary.homepage.myInfo.description} />
            </div>

            <div className="flex flex-wrap gap-3 print:hidden">
              <Button
                asChild
                className="bg-primary-700 hover:bg-primary-800 rounded-full px-5"
              >
                <Link href="mailto:eduardodadalt1@gmail.com">
                  <Mail className="mr-2 size-4" />
                  {dictionary.homepage.contact.email}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-200 text-primary-800 hover:bg-primary-50 dark:border-primary-800 dark:text-primary-200 dark:hover:bg-primary-950 rounded-full bg-white/80 px-5 dark:bg-slate-950/60"
              >
                <Link
                  href="https://www.linkedin.com/in/eduardo-dadalt/"
                  target="_blank"
                >
                  {dictionary.homepage.contact.linkedin}
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full px-5 text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <Link href="https://github.com/EduardoDadalt" target="_blank">
                  {dictionary.homepage.contact.github}
                  <ArrowUpRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 print:grid-cols-3">
              {dictionary.homepage.myInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/60 print:border-slate-300 print:bg-white print:p-2 print:shadow-none"
                >
                  <div className="font-display text-xl font-black text-slate-950 dark:text-white print:text-base">
                    {stat.value}
                  </div>
                  <p className="text-sm leading-5 text-slate-600 dark:text-slate-300 print:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="animate-rise animation-delay-150 relative mx-auto hidden w-full max-w-sm lg:block print:hidden">
            <div className="profile-halo absolute inset-4 rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-3 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
              <Image
                src="/images/profile.png"
                alt="Eduardo Dadalt"
                width={420}
                height={420}
                priority
                className="aspect-square w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell print:hidden" id="perfil">
        <div className="section-heading">
          <p>{dictionary.homepage.myInfo.role}</p>
          <h2>{dictionary.homepage.myInfo.strengthsTitle}</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {dictionary.homepage.myInfo.strengths.map((strength) => (
            <div
              key={strength}
              className="border-primary-100 bg-primary-50/70 hover:border-primary-200 dark:border-primary-900 dark:bg-primary-950/40 dark:hover:border-primary-700 rounded-lg border p-4 text-sm leading-6 text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-950"
            >
              {strength}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="experiencia">
        <div className="section-heading">
          <p>{dictionary.homepage.myInfo.experience.eyebrow}</p>
          <h2>
            <BriefcaseBusiness className="text-primary-600 dark:text-primary-300 size-6 print:hidden" />
            {dictionary.homepage.myInfo.experience.title}
          </h2>
        </div>

        {dictionary.homepage.myInfo.experience.jobs.map((job, index) => (
          <Experience key={index} {...job} locale={locale} />
        ))}
      </section>
      <section className="section-shell" id="educacao">
        <div className="section-heading">
          <h2>{dictionary.homepage.myInfo.education.title}</h2>
        </div>

        <div className="space-y-4 print:space-y-2">
          {dictionary.homepage.myInfo.education.steps.map((step, index) => (
            <EducationStep key={index} {...step} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}
