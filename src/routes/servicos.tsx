import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — GUAN" },
      { name: "description", content: "Como funciona o serviço de personal shopper da GUAN na China." },
      { property: "og:title", content: "Serviços — GUAN" },
      { property: "og:description", content: "Como funciona o serviço de personal shopper da GUAN na China." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ComingSoon kicker="Serviços" title="Personal shopping sob medida." />;
}
