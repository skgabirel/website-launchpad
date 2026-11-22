import { cn } from "@/lib/utils";
import type { CatalogCategory } from "@/data/catalog";

export function CategoryRail({
  categories,
  active,
  onSelect,
}: {
  categories: CatalogCategory[];
  active: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <section className="mt-14 md:mt-20" aria-label="Categorias">
      <div className="frame flex items-baseline justify-between gap-6 border-t border-rule pt-6">
        <p className="kicker text-accent">Categorias</p>
        {active ? (
          <button
            type="button"
            onClick={() => onSelect("")}
            className="link-quiet text-foreground/80 hover:text-foreground"
          >
            Ver todas
          </button>
        ) : (
          <span className="text-[13px] text-foreground/50">Selecione para filtrar</span>
        )}
      </div>

      <ul className="frame scrollbar-none section-body flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-px-5 md:gap-8 md:scroll-px-10">
        {categories.map((c, i) => {
          const isActive = active === c.slug;
          const dimmed = Boolean(active) && !isActive;
          return (
            <li
              key={c.slug}
              className="w-[58vw] shrink-0 snap-start sm:w-[38vw] md:w-[28vw] lg:w-[calc((100%-8rem)/5)]"
            >
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelect(isActive ? "" : c.slug)}
                className="group block w-full text-left"
              >
                <div className="aspect-[4/5] overflow-hidden bg-surface">
                  <img
                    src={c.image}
                    alt=""
                    width={1024}
                    height={1536}
                    loading="lazy"
                    className={cn(
                      "img-editorial transition-[transform,opacity] duration-700 group-hover:scale-[1.03]",
                      dimmed && "opacity-40 group-hover:opacity-70",
                    )}
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <span
                    className={cn(
                      "display min-w-0 text-2xl transition-colors md:text-[1.6rem]",
                      isActive && "underline decoration-1 underline-offset-[6px]",
                      dimmed && "text-foreground/45",
                    )}
                  >
                    {c.title}
                  </span>
                  <span
                    className={cn(
                      "kicker shrink-0",
                      isActive ? "text-accent" : "text-muted-foreground",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-foreground/60">{c.note}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
