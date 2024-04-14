import { Suspense } from "react";
import RepoCards from "./repoCards";
import RepoCardsLoading from "./repoCardsLoading";
import Section from "@/components/section";

export default async function Projects({ locale }: { locale: string }) {
  return (
    <Section title="Projects" description="Projects content">
      <div className="flex flex-row flex-wrap gap-2 *:flex-1">
        <Suspense fallback={<RepoCardsLoading />}>
          <RepoCards />
        </Suspense>
      </div>
    </Section>
  );
}
