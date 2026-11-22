import { describe, expect, it } from "vitest";
import { catalogProducts } from "@/data/catalog";
import { formatPrice, queryCatalog, toSortKey } from "@/lib/catalog";

const base = { q: "", category: "", brands: [] as string[], sort: "relevancia" as const };

describe("catalog search, filters and sorting", () => {
  it("search matches brand names and ignores accents", () => {
    const ids = queryCatalog(catalogProducts, { ...base, q: "ceramica" }).map((p) => p.id);
    expect(ids).toEqual(["cha-celadon", "vaso-gres"]);
    expect(queryCatalog(catalogProducts, { ...base, q: "hai studio" })).toHaveLength(2);
  });

  it("brand filter accepts multiple brands", () => {
    const result = queryCatalog(catalogProducts, { ...base, brands: ["Mu Linen", "Paper Hutong"] });
    expect(result.map((p) => p.brand).sort()).toEqual(["Mu Linen", "Paper Hutong", "Paper Hutong"]);
  });

  it("category narrows to that group", () => {
    const result = queryCatalog(catalogProducts, { ...base, category: "beleza" });
    expect(result.every((p) => p.category === "beleza")).toBe(true);
    expect(result).toHaveLength(2);
  });

  it("menor preço puts the cheapest first, maior preço the most expensive first", () => {
    const asc = queryCatalog(catalogProducts, { ...base, sort: "menor-preco" });
    expect(asc[0]?.id).toBe("caderno-linho");
    const desc = queryCatalog(catalogProducts, { ...base, sort: "maior-preco" });
    expect(desc[0]?.id).toBe("luminaria-plissada");
  });

  it("mais recentes puts the newest addition first", () => {
    const result = queryCatalog(catalogProducts, { ...base, sort: "recentes" });
    expect(result[0]?.id).toBe("perfume-pedra");
  });

  it("unknown sort values fall back to relevância", () => {
    expect(toSortKey("barato")).toBe("relevancia");
  });

  it("price ranges show both ends", () => {
    expect(formatPrice({ priceMin: 760, priceMax: 980 }).replace(/\s/g, " ")).toBe("R$ 760 – R$ 980");
  });
});
