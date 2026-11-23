import type { CatalogProduct } from "@/data/catalog";
import { formatPrice } from "@/lib/catalog";
import { AddToOrderButton } from "./AddToOrderButton";

export function ProductGrid({
  products,
  onClear,
}: {
  products: CatalogProduct[];
  onClear: () => void;
}) {
  if (products.length === 0) {
    return (
      <div className="border-t border-rule py-20 md:py-28">
        <p className="display text-3xl md:text-5xl">Nenhum produto encontrado.</p>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/70">
          Tente outra palavra-chave ou remova alguns filtros para ver mais da seleção.
        </p>
        <button type="button" onClick={onClear} className="link-quiet mt-8 text-foreground">
          Limpar filtros <span aria-hidden>→</span>
        </button>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14 xl:grid-cols-4">
      {products.map((p) => (
        <li key={p.id} className="group animate-in fade-in duration-500">
          <div className="aspect-square overflow-hidden bg-surface">
            <img
              src={p.image}
              alt={p.name}
              width={1024}
              height={1024}
              loading="lazy"
              className="img-editorial group-hover:scale-[1.04]"
            />
          </div>
          <div className="mt-4 space-y-1.5">
            <p className="kicker text-muted-foreground">{p.brand}</p>
            <h3 className="text-[14px] font-medium leading-snug md:text-[15px]">{p.name}</h3>
            <div className="flex items-center justify-between gap-3">
              <p className="min-w-0 text-[13px] text-foreground/60">{formatPrice(p)}</p>
              <AddToOrderButton productName={p.name} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
