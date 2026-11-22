import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — GUAN" },
      { name: "description", content: "Conheça a GUAN, curadoria e personal shopping na China para brasileiros." },
      { property: "og:title", content: "Sobre — GUAN" },
      { property: "og:description", content: "Conheça a GUAN, curadoria e personal shopping na China para brasileiros." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ComingSoon kicker="Sobre" title="Um olhar atento, na China." />;
}
