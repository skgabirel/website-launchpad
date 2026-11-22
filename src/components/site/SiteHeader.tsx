import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/discover", label: "Discover" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/90 backdrop-blur-md">
      <div className="frame flex h-14 items-center justify-between md:h-16">
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="font-sans text-[15px] font-semibold tracking-[0.42em] text-foreground"
            aria-label="GUAN — início"
            onClick={() => setOpen(false)}
          >
            GUAN
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] font-medium text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Buscar"
            className="flex h-10 w-10 items-center justify-center text-foreground/80 transition-colors hover:text-foreground"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Pedido"
            className="relative flex h-10 w-10 items-center justify-center text-foreground/80 transition-colors hover:text-foreground"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
            <span className="absolute right-1.5 top-1.5 flex h-3.5 min-w-3.5 items-center justify-center bg-accent px-[3px] text-[9px] font-semibold leading-none text-accent-foreground">
              0
            </span>
          </button>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="-mr-2 flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.4} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="frame animate-in fade-in slide-in-from-top-2 border-t border-rule pb-8 pt-4 md:hidden"
          aria-label="Menu móvel"
        >
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li key={item.to} className="border-b border-rule">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className="display text-3xl">{item.label}</span>
                  <span className="kicker text-muted-foreground">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
