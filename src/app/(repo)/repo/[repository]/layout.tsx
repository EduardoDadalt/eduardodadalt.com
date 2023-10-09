import getRepositories from "@/utils/getRepositories";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const repositories = await getRepositories();
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex flex-col">
        {repositories.map((repo) => (
          <Link key={repo.id} href={"/repo/" + repo.name}>
            {repo.name}
          </Link>
        ))}
      </div>
      <div className="flex-[9]">{children}</div>
    </div>
  );
}
