import catModa from "@/assets/cat-moda.jpg";
import catCasa from "@/assets/cat-casa.jpg";
import catTech from "@/assets/cat-tech.jpg";
import catBeleza from "@/assets/cat-beleza.jpg";
import catPapelaria from "@/assets/cat-papelaria.jpg";
import productTeaset from "@/assets/product-teaset.jpg";
import productTote from "@/assets/product-tote.jpg";
import productAudio from "@/assets/product-audio.jpg";
import productLinen from "@/assets/product-linen.jpg";
import productScarf from "@/assets/product-scarf.jpg";
import productVase from "@/assets/product-vase.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productKeyboard from "@/assets/product-keyboard.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productPerfume from "@/assets/product-perfume.jpg";
import productNotebook from "@/assets/product-notebook.jpg";
import productPens from "@/assets/product-pens.jpg";

// Placeholder catalog data — replaced by a real source in a later phase.

export type CatalogCategory = {
  slug: string;
  title: string;
  note: string;
  image: string;
};

export const catalogCategories: CatalogCategory[] = [
  { slug: "moda", title: "Moda", note: "Marcas independentes", image: catModa },
  { slug: "casa-design", title: "Casa & Design", note: "Objetos para viver", image: catCasa },
  { slug: "tecnologia", title: "Tecnologia", note: "Do lançamento ao essencial", image: catTech },
  { slug: "beleza", title: "Beleza", note: "Cuidados e rituais", image: catBeleza },
  { slug: "papelaria", title: "Papelaria", note: "Papel, livros, escrita", image: catPapelaria },
];

export type CatalogProduct = {
  id: string;
  brand: string;
  name: string;
  category: string;
  /** Lowest price in BRL; also used for sorting. */
  priceMin: number;
  /** Set when the product has a price range. */
  priceMax?: number;
  /** ISO date the product entered the catalog. */
  addedAt: string;
  /** Curator ranking; lower = more relevant. */
  rank: number;
  keywords: string[];
  image: string;
};

export const catalogProducts: CatalogProduct[] = [
  { id: "cha-celadon", brand: "Atelier Qing", name: "Conjunto de chá em celadon", category: "casa-design", priceMin: 640, addedAt: "2026-09-12", rank: 1, keywords: ["chá", "cerâmica", "bule", "xícara"], image: productTeaset },
  { id: "tote-taupe", brand: "Hai Studio", name: "Bolsa tote em couro taupe", category: "moda", priceMin: 1180, addedAt: "2026-10-03", rank: 2, keywords: ["bolsa", "couro", "acessório"], image: productTote },
  { id: "som-portatil", brand: "Lumen Audio", name: "Caixa de som portátil + fones", category: "tecnologia", priceMin: 890, priceMax: 1240, addedAt: "2026-08-21", rank: 3, keywords: ["áudio", "fone", "bluetooth", "som"], image: productAudio },
  { id: "camisa-linho", brand: "Mu Linen", name: "Camisa oversized em linho", category: "moda", priceMin: 520, addedAt: "2026-10-28", rank: 4, keywords: ["camisa", "linho", "roupa"], image: productLinen },
  { id: "luminaria-plissada", brand: "Fold & Light", name: "Luminária de mesa plissada", category: "casa-design", priceMin: 1350, addedAt: "2026-11-09", rank: 5, keywords: ["luminária", "abajur", "luz", "latão"], image: productLamp },
  { id: "serum-creme", brand: "Yun Botanics", name: "Sérum facial e creme hidratante", category: "beleza", priceMin: 410, addedAt: "2026-09-30", rank: 6, keywords: ["skincare", "sérum", "creme", "rosto"], image: productSerum },
  { id: "lenco-seda", brand: "Hai Studio", name: "Lenço de seda estampado", category: "moda", priceMin: 360, addedAt: "2026-11-15", rank: 7, keywords: ["seda", "lenço", "acessório"], image: productScarf },
  { id: "teclado-compacto", brand: "Lumen Audio", name: "Teclado mecânico compacto", category: "tecnologia", priceMin: 760, priceMax: 980, addedAt: "2026-10-17", rank: 8, keywords: ["teclado", "computador", "escritório"], image: productKeyboard },
  { id: "caderno-linho", brand: "Paper Hutong", name: "Caderno em linho oliva", category: "papelaria", priceMin: 140, addedAt: "2026-07-14", rank: 9, keywords: ["caderno", "papel", "anotações"], image: productNotebook },
  { id: "vaso-gres", brand: "Atelier Qing", name: "Vaso alto em grés", category: "casa-design", priceMin: 480, addedAt: "2026-08-02", rank: 10, keywords: ["vaso", "cerâmica", "decoração"], image: productVase },
  { id: "perfume-pedra", brand: "Yun Botanics", name: "Perfume Pedra, 50 ml", category: "beleza", priceMin: 690, addedAt: "2026-11-20", rank: 11, keywords: ["perfume", "fragrância"], image: productPerfume },
  { id: "canetas-tinteiro", brand: "Paper Hutong", name: "Conjunto de canetas-tinteiro", category: "papelaria", priceMin: 520, priceMax: 780, addedAt: "2026-06-25", rank: 12, keywords: ["caneta", "tinteiro", "escrita", "latão"], image: productPens },
];

export const catalogBrands: string[] = Array.from(
  new Set(catalogProducts.map((p) => p.brand)),
).sort((a, b) => a.localeCompare(b, "pt-BR"));
