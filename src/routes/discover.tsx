import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/site/ComingSoon";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover — GUAN" },
      { name: "description", content: "Histórias editoriais sobre cidades, design e lifestyle na China contemporânea." },
      { property: "og:title", content: "Discover — GUAN" },
      { property: "og:description", content: "Histórias editoriais sobre cidades, design e lifestyle na China contemporânea." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <ComingSoon kicker="Discover" title="Histórias e descobertas da China contemporânea." />;
}
