import Link from "next/link";

// Sem acesso ao locale aqui, então a mensagem é bilíngue.
export default function NotFound() {
  return (
    <div className="px-5 py-12 md:px-14">
      <p className="text-dim">
        <span className="text-accent">❯</span> cat ./404
      </p>
      <p className="mt-2 text-pink">
        cat: ./404: No such file or directory — arquivo não encontrado
      </p>
      <Link href="/" className="mt-6 inline-block text-accent underline underline-offset-4">
        ← README.md
      </Link>
    </div>
  );
}
