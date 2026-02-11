import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rebel Estetica Epigenetica",
    short_name: "Rebel",
    description:
      "Centro estetico avanzato a Carmagnola specializzato in estetica epigenetica ed epilazione laser a Carmagnola.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0a1b",
    theme_color: "#7c3aed",
    lang: "it-IT",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}

