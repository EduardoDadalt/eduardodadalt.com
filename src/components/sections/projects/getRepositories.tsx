import { Repository } from "./repository";

export async function getRepositories(): Promise<Repository[]> {
  const response = await fetch(
    "https://api.github.com/users/EduardoDadalt/repos?sort=updated",
    {
      next: {
        revalidate: 604800, // 7 days
      },
    },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  const data = await response.json();
  return data;
}
