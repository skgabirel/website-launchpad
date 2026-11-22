import type { CatalogProduct } from "@/data/catalog";

export const SORT_OPTIONS = [
  { value: "relevancia", label: "Relevância" },
  { value: "recentes", label: "Mais recentes" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
] as const;

export type SortKey = (typeof SORT_OPTIONS)[number]["value"];

export function toSortKey(value: string): SortKey {
  return SORT_OPTIONS.some((o) => o.value === value) ? (value as SortKey) : "relevancia";
}

/** Lowercase and strip accents so "ceramica" matches "cerâmica". */
export function normalizeText(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

export type CatalogQuery = {
  q: string;
  category: string;
  brands: string[];
  sort: SortKey;
};

export function queryCatalog(products: CatalogProduct[], query: CatalogQuery): CatalogProduct[] {
  const terms = normalizeText(query.q).split(/\s+/).filter(Boolean);

  const filtered = products.filter((p) => {
    if (query.category && p.category !== query.category) return false;
    if (query.brands.length > 0 && !query.brands.includes(p.brand)) return false;
    if (terms.length > 0) {
      const haystack = normalizeText([p.name, p.brand, ...p.keywords].join(" "));
      if (!terms.every((t) => haystack.includes(t))) return false;
    }
    return true;
  });

  const sorted = [...filtered];
  switch (query.sort) {
    case "recentes":
      sorted.sort((a, b) => b.addedAt.localeCompare(a.addedAt));
      break;
    case "menor-preco":
      sorted.sort((a, b) => a.priceMin - b.priceMin);
      break;
    case "maior-preco":
      sorted.sort((a, b) => b.priceMin - a.priceMin);
      break;
    default:
      sorted.sort((a, b) => a.rank - b.rank);
  }
  return sorted;
}

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatPrice(p: Pick<CatalogProduct, "priceMin" | "priceMax">): string {
  const min = brl.format(p.priceMin);
  return p.priceMax ? `${min} – ${brl.format(p.priceMax)}` : min;
}
