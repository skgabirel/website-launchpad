import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { categories } from "@/data/home";
import { SectionHeading } from "./SectionHeading";

export function CatalogExplorer() {
  const track = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const item = el.querySelector("li");
    const step = item ? item.getBoundingClientRect().width + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="pb-24 md:pb-36">
      <div className="frame">
        <SectionHeading
          index="02"
          title="Explore o catálogo"
          action={
            <div className="flex items-center gap-6">
              <div className="hidden items-center gap-1 md:flex">
                <button
                  type="button"
                  aria-label="Categorias anteriores"
                  onClick={() => scrollBy(-1)}
                  className="flex h-9 w-9 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.4} />
                </button>
                <button
                  type="button"
                  aria-label="Próximas categorias"
                  onClick={() => scrollBy(1)}
                  className="flex h-9 w-9 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.4} />
                </button>
              </div>
              <Link to="/catalogo" className="link-quiet text-foreground/80 hover:text-foreground">
                Ver tudo <span aria-hidden>→</span>
              </Link>
            </div>
          }
        />
      </div>

      <ul
        ref={track}
        className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 md:mt-14 md:gap-8 md:scroll-px-10 md:px-10 xl:scroll-px-14 xl:px-14"
      >
        {categories.map((c, i) => (
          <li
            key={c.title}
            className="group w-[72vw] shrink-0 snap-start sm:w-[44vw] md:w-[30vw] xl:w-[24vw]"
          >
            <Link to="/catalogo" className="block">
              <div className="aspect-[3/4] overflow-hidden bg-surface">
                <img
                  src={c.image}
                  alt={c.title}
                  width={1024}
                  height={1536}
                  loading="lazy"
                  className="img-editorial group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="display text-2xl md:text-[1.75rem]">{c.title}</h3>
                <span className="kicker text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-foreground/60">{c.note}</p>
            </Link>
          </li>
        ))}
        <li aria-hidden className="w-1 shrink-0" />
      </ul>
    </section>
  );
}
