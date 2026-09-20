import { siteConfig } from "./site-config";

export const journeyPhotographs = [
  {
    "id": "barrier-consulenza-viso-rebel-carmagnola",
    "src": "/img/shooting-rebel/barrier-consulenza-viso-rebel-carmagnola.webp",
    "preview": "/img/shooting-rebel/barrier-consulenza-viso-rebel-carmagnola-640.webp",
    "width": 1024,
    "height": 1536,
    "journey": "barrier",
    "title": "Ascoltare, prima di scegliere.",
    "alt": "Una professionista osserva la guancia di una cliente durante una consulenza viso.",
    "caption": "Per Barrier partiamo da sensazioni, sensibilità e abitudini di cura.",
    "illustrative": true,
    "newGeneration": true
  },
  {
    "id": "barrier-crema-manualita-rebel-carmagnola",
    "src": "/img/shooting-rebel/barrier-crema-manualita-rebel-carmagnola.webp",
    "preview": "/img/shooting-rebel/barrier-crema-manualita-rebel-carmagnola-640.webp",
    "width": 1600,
    "height": 900,
    "journey": "barrier",
    "title": "Il comfort passa anche dai gesti.",
    "alt": "Applicazione delicata di una crema sulla guancia con i polpastrelli.",
    "caption": "Prodotti e manualità vengono scelti in base alla sensibilità della pelle.",
    "illustrative": true,
    "newGeneration": true
  },
  {
    "id": "skin-reset-pennello-viso-rebel-carmagnola",
    "src": "/img/shooting-rebel/skin-reset-pennello-viso-rebel-carmagnola.webp",
    "preview": "/img/shooting-rebel/skin-reset-pennello-viso-rebel-carmagnola-640.webp",
    "width": 1600,
    "height": 900,
    "journey": "skin-reset",
    "title": "Preparare la pelle.",
    "alt": "Applicazione di un cosmetico viso con un pennello a ventaglio.",
    "caption": "Skin Reset prepara la pelle prima di un percorso dedicato a esigenze più specifiche.",
    "illustrative": true,
    "newGeneration": false
  },
  {
    "id": "skin-reset-preparazione-enzimatica-rebel-carmagnola",
    "src": "/img/shooting-rebel/skin-reset-preparazione-enzimatica-rebel-carmagnola.webp",
    "preview": "/img/shooting-rebel/skin-reset-preparazione-enzimatica-rebel-carmagnola-640.webp",
    "width": 1600,
    "height": 900,
    "journey": "skin-reset",
    "title": "La cura comincia dalla preparazione.",
    "alt": "Preparazione di una miscela cosmetica con polvere e gel in una ciotola.",
    "caption": "Gli attivi del percorso vengono selezionati dopo la valutazione della pelle.",
    "illustrative": true,
    "newGeneration": false
  }
];

export type JourneyPhotograph = (typeof journeyPhotographs)[number];
export const photographSchema = (photo: JourneyPhotograph) => ({
  "@type": "ImageObject",
  "@id": new URL(photo.src, siteConfig.siteUrl).href,
  contentUrl: new URL(photo.src, siteConfig.siteUrl).href,
  thumbnailUrl: new URL(photo.preview, siteConfig.siteUrl).href,
  name: photo.title, description: photo.alt, caption: photo.caption,
  width: photo.width, height: photo.height,
  creditText: "REBEL · Immagine illustrativa del percorso",
  representativeOfPage: false,
  about: { "@type": "Service", "@id": `${siteConfig.siteUrl}/percorsi/${photo.journey}#service`, name: photo.journey === "barrier" ? "Barrier" : "Skin Reset", provider: { "@id": `${siteConfig.siteUrl}/#beauty-salon` }, areaServed: { "@type": "City", name: "Carmagnola" } },
});
