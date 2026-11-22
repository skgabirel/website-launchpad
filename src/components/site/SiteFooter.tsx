import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/discover", label: "Discover" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
] as const;

// Contact details are placeholders until the real ones are provided.
const contact = [
  { label: "WhatsApp", value: "+55 (11) 00000-0000", href: "https://wa.me/5511000000000" },
  { label: "Instagram", value: "@guan", href: "https://instagram.com/" },
  { label: "E-mail", value: "contato@guan.com", href: "mailto:contato@guan.com" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="frame pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display max-w-sm text-3xl md:text-4xl">
              Descobertas da China, <em className="italic">escolhidas</em> para você.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="kicker mb-6 text-ink-muted">Navegação</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-quiet text-[15px]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="kicker mb-6 text-ink-muted">Contato</p>
            <ul className="space-y-4">
              {contact.map((c) => (
                <li key={c.label} className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {c.label}
                  </span>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="link-quiet self-start text-[15px]"
                  >
                    {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-24 flex select-none justify-between font-sans text-[26vw] font-semibold leading-[0.78] text-ink-foreground/[0.07] md:mt-32 xl:text-[22vw] 2xl:text-[300px]"
        >
          {"GUAN".split("").map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-[12px] text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GUAN. Todos os direitos reservados.</p>
          <p>Personal shopper & curadoria · China — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
