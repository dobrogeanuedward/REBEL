import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const manifest = {
    name: "Rebel Estetica Epigenetica",
    short_name: "Rebel",
    description:
      "Centro estetico a Carmagnola per trattamenti viso, corpo, beauty ed epilazione laser.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0f0a1b",
    theme_color: "#7c3aed",
    lang: "it-IT",
    categories: ["beauty", "lifestyle", "health"],
    shortcuts: [
      {
        name: "Prenota la valutazione",
        short_name: "Prenota",
        url: "/contatti",
      },
      {
        name: "Listino",
        short_name: "Listino",
        url: "/listino-estetica-laser",
      },
    ],
    icons: [
      {
        src: "https://imagedelivery.net/8Z69WIPvPk97iU4IP5m1ig/8e57610c-3a93-48fa-e535-b864967a4e00/public",
        sizes: "1366x577",
        type: "image/png",
        purpose: "any",
      },
    ],
  } as const;

  return new Response(JSON.stringify(manifest), {
    headers: {
      "content-type": "application/manifest+json; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
};
