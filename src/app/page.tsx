import getRepositories from "@/utils/getRepositories";

export default async function Home() {
  const repos = await getRepositories();
  return (
    <main className="flex flex-wrap gap-2">
      {repos.map((repo) => (
        <div
          key={"Repository:" + repo.id}
          className="border rounded min-w-24 bg-slate-100 shadow-xl p-4"
        >
          <h2 className="text-lg">{repo.name}</h2>
          <p>{repo.description}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {repo.topics.map((topic) => (
              <div
                key={"Repo:" + repo.id + "|Topic:" + topic}
                className="p-2 border rounded-2xl bg-slate-200 shadow-md"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
