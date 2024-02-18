import Link from "next/link";

export default async function Contact({ locale }: { locale: string }) {
  return (
    <section className="bg-primary-600 py-10 text-slate-50">
      <h2 className="text-2xl">Contato</h2>
      <div>
        <p>
          Você pode entrar em contato comigo através do meu e-mail{" "}
          <Link
            href="mailto:eduardodadalt1@gmail.com"
            className="text-slate-100 hover:text-slate-50 hover:underline"
          >
            eduardodadalt1@gmail.com
          </Link>
        </p>
      </div>
    </section>
  );
}
