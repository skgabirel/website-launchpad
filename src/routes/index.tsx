import { createFileRoute } from "@tanstack/react-router";
import { EditorialHero } from "@/components/home/EditorialHero";
import { ProductHighlights } from "@/components/home/ProductHighlights";
import { CatalogExplorer } from "@/components/home/CatalogExplorer";
import { AboutIntro } from "@/components/home/AboutIntro";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GUAN — A China em novas perspectivas" },
      {
        name: "description",
        content:
          "Personal shopper e curadoria de produtos da China para viajantes brasileiros. Design, moda, tecnologia e descobertas selecionadas.",
      },
      { property: "og:title", content: "GUAN — A China em novas perspectivas" },
      {
        property: "og:description",
        content:
          "Personal shopper e curadoria de produtos da China para viajantes brasileiros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <EditorialHero />
      <ProductHighlights />
      <CatalogExplorer />
      <AboutIntro />
    </>
  );
}
