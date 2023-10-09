import { Repository } from "@/domain/entity/repository";
import { log } from "console";

export default async function getRepositories(): Promise<Repository[]> {
  log("getRepositories");
  const response = await fetch(
    "https://api.github.com/users/eduardodadalt/repos?sort=updated",
    { next: { revalidate: 60 * 60 * 24 * 7 } }
  );
  const repositories = await response.json();

  return repositories;
}
