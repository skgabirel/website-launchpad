import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { useMemo } from "react";
import { z } from "zod";
import { ActiveFilters, type ActiveChip } from "@/components/catalog/ActiveFilters";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { CatalogToolbar } from "@/components/catalog/CatalogToolbar";
import { CategoryRail } from "@/components/catalog/CategoryRail";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { catalogBrands, catalogCategories, catalogProducts } from "@/data/catalog";
import { queryCatalog, toSortKey, type SortKey } from "@/lib/catalog";

// All optional so default values never get written into the address.
const catalogSearchSchema = z.object({
  q: fallback(z.string(), "").optional(),
  categoria: fallback(z.string(), "").optional(),
  marca: fallback(z.array(z.string()), []).optional(),
  ordem: fallback(z.string(), "relevancia").optional(),
});

const description =
  "Uma seleção de moda, casa & design, tecnologia, beleza e papelaria encontrada na China pela curadoria GUAN.";

type CatalogState = { q: string; categoria: string; marca: string[]; ordem: string };

// Keep the address clean: only non-default filters appear in the URL.
function cleanSearch(s: CatalogState) {
  return {
    ...(s.q ? { q: s.q } : {}),
    ...(s.categoria ? { categoria: s.categoria } : {}),
    ...(s.marca.length > 0 ? { marca: s.marca } : {}),
    ...(s.ordem !== "relevancia" ? { ordem: s.ordem } : {}),
  };
}

export const Route = createFileRoute("/catalogo")({
  validateSearch: zodValidator(catalogSearchSchema),
  head: () => ({
    meta: [
      { title: "Catálogo — GUAN" },
      { name: "description", content: description },
      { property: "og:title", content: "Catálogo — GUAN" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogPage,
});

const brandCounts = catalogProducts.reduce<Record<string, number>>((acc, p) => {
  acc[p.brand] = (acc[p.brand] ?? 0) + 1;
  return acc;
}, {});

function CatalogPage() {
  const raw = Route.useSearch();
  const navigate = useNavigate({ from: "/catalogo" });
  const search: CatalogState = {
    q: raw.q ?? "",
    categoria: raw.categoria ?? "",
    marca: raw.marca ?? [],
    ordem: raw.ordem ?? "relevancia",
  };

  const sort = toSortKey(search.ordem);
  const category = catalogCategories.some((c) => c.slug === search.categoria)
    ? search.categoria
    : "";
  const brands = search.marca.filter((b) => catalogBrands.includes(b));

  const brandsKey = brands.join("|");
  const results = useMemo(
    () => queryCatalog(catalogProducts, { q: search.q, category, brands, sort }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search.q, category, brandsKey, sort],
  );

  const update = (patch: Partial<CatalogState>) =>
    navigate({
      search: cleanSearch({ ...search, ...patch }),
      replace: true,
      resetScroll: false,
    });

  const clearFilters = () => update({ q: "", categoria: "", marca: [] });

  const chips: ActiveChip[] = [
    ...(search.q.trim()
      ? [{ key: "q", label: `“${search.q.trim()}”`, onRemove: () => update({ q: "" }) }]
      : []),
    ...(category
      ? [
          {
            key: "cat",
            label: catalogCategories.find((c) => c.slug === category)?.title ?? category,
            onRemove: () => update({ categoria: "" }),
          },
        ]
      : []),
    ...brands.map((b) => ({
      key: `b-${b}`,
      label: b,
      onRemove: () => update({ marca: brands.filter((x) => x !== b) }),
    })),
  ];

  return (
    <>
      <CatalogHeader
        query={search.q}
        onQueryChange={(q) => update({ q })}
        total={catalogProducts.length}
      />

      <CategoryRail
        categories={catalogCategories}
        active={category}
        onSelect={(slug) => update({ categoria: slug })}
      />

      <CatalogToolbar
        brands={catalogBrands}
        brandCounts={brandCounts}
        selectedBrands={brands}
        onBrandsChange={(marca) => update({ marca })}
        onClear={() => update({ marca: [] })}
        sort={sort}
        onSortChange={(ordem: SortKey) => update({ ordem })}
        resultCount={results.length}
      />

      <section className="frame section-space pt-8 md:pt-12">
        {chips.length > 0 && (
          <div className="mb-8 md:mb-10">
            <ActiveFilters chips={chips} onClear={clearFilters} />
          </div>
        )}
        <ProductGrid products={results} onClear={clearFilters} />
      </section>
    </>
  );
}
