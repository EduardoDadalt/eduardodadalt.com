import getRepositories from "@/utils/getRepositories";
import getRepository from "@/utils/getRepository";

export default async function Repository({
  params: { repository: repositoryName },
}: {
  params: { repository: string };
}) {
  const repository = await getRepository(repositoryName);

  return <div>{JSON.stringify(repository)}</div>;
}

export async function generateStaticParams() {
  const repositories = await getRepositories();

  return repositories.map((post) => ({
    repository: post.name,
  }));
}
