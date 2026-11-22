import { Link } from "@tanstack/react-router";

export function ComingSoon({ kicker, title }: { kicker: string; title: string }) {
  return (
    <section className="frame flex min-h-[70vh] flex-col justify-center py-24">
      <p className="kicker text-accent">{kicker}</p>
      <h1 className="display mt-6 max-w-3xl text-5xl md:text-7xl">{title}</h1>
      <p className="mt-8 max-w-md text-[15px] leading-relaxed text-foreground/70">
        Esta página está sendo preparada com o mesmo cuidado da nossa curadoria. Volte em breve.
      </p>
      <Link to="/" className="link-quiet mt-10 self-start text-foreground">
        <span aria-hidden>←</span> Voltar ao início
      </Link>
    </section>
  );
}
