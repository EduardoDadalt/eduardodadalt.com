export default async function getRepository(name: string): Promise<any> {
  const response = await fetch(
    `https://api.github.com/repos/eduardodadalt/${name}`,
    { next: { revalidate: 60 * 60 * 24 * 7 } }
  );
  const repository = await response.json();

  return repository;
}
