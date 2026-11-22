import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — GUAN" },
      { name: "description", content: "Produtos selecionados da China: moda, casa, tecnologia, beleza e mais." },
      { property: "og:title", content: "Catálogo — GUAN" },
      { property: "og:description", content: "Produtos selecionados da China: moda, casa, tecnologia, beleza e mais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ComingSoon kicker="Catálogo" title="Um catálogo em constante curadoria." />;
}
