import { Search, X } from "lucide-react";

export function CatalogHeader({
  query,
  onQueryChange,
  total,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  total: number;
}) {
  return (
    <section className="frame pt-8 md:pt-14">
      <div className="kicker flex items-center justify-between text-muted-foreground animate-rise">
        <span>GUAN — Catálogo</span>
        <span>{total} peças selecionadas</span>
      </div>

      <div className="mt-8 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
        <h1 className="display text-[3.4rem] md:col-span-6 md:text-[6.5rem] xl:text-[8rem] animate-rise [animation-delay:80ms]">
          Catálogo
        </h1>

        <div className="md:col-span-5 md:col-start-8 md:pb-4 animate-rise [animation-delay:180ms]">
          <p className="text-[15px] leading-relaxed text-foreground/75">
            Moda, objetos e tecnologia encontrados em ateliês, mercados de design e marcas
            independentes da China.
          </p>

          <div className="mt-8 flex items-center gap-3 border-b border-foreground/25 pb-3 transition-colors focus-within:border-foreground">
            <Search className="h-4 w-4 shrink-0 text-foreground/60" strokeWidth={1.4} aria-hidden />
            <label htmlFor="catalog-search" className="sr-only">
              Buscar no catálogo
            </label>
            <input
              id="catalog-search"
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Buscar produtos, marcas ou palavras-chave"
              className="min-w-0 flex-1 bg-transparent text-[14px] text-foreground outline-none placeholder:text-foreground/45 md:text-[15px] [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <button
                type="button"
                aria-label="Limpar busca"
                onClick={() => onQueryChange("")}
                className="-mr-1 flex h-7 w-7 shrink-0 items-center justify-center text-foreground/60 hover:text-foreground"
              >
                <X className="h-4 w-4" strokeWidth={1.4} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
