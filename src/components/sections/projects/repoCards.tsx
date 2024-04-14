import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { getRepositories } from "./getRepositories";

export default async function RepoCards() {
  try {
    const repositories = await getRepositories();
    return (
      <>
        {repositories.map((repo) => (
          <Link key={repo.id} href={repo.html_url}>
            <Card className="size-full">
              <CardHeader>
                <CardTitle className="whitespace-nowrap">{repo.name}</CardTitle>
                <CardDescription>{repo.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </>
    );
  } catch (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>Failed to fetch repositories</p>
      </div>
    );
  }
}
