import photographs from "@/data/catalog-photographs.json";
import assignments from "@/data/treatment-photographs.json";
export { photographs };
export type PhotoKey = keyof typeof photographs;
export const treatmentPhoto = (id: string) =>
  photographs[assignments[id as keyof typeof assignments] as PhotoKey];
export const categoryVisuals: Record<
  string,
  { photo: PhotoKey; description: string }
> = {
  viso: {
    photo: "viso-detersione",
    description: "Detersione, idratazione e trattamenti mirati alla pelle.",
  },
  "laser-treatwell": {
    photo: "laser-gamba",
    description: "Promo diretta REBEL e listino ordinario per zona.",
  },
  mani: {
    photo: "mani-smalto",
    description: "Manicure, colore, semipermanente e rimozione.",
  },
  sguardo: {
    photo: "laminazione-ritratto",
    description:
      "Laminazione di ciglia e sopracciglia, insieme o separatamente.",
  },
  piedi: {
    photo: "pedicure-cura",
    description: "Cura delle unghie, pedicure e scrub.",
  },
  corpo: {
    photo: "scrub-gamba",
    description: "Esfoliazione, cosmetici e tecnologie per il corpo.",
  },
  massaggi: {
    photo: "massaggio-spalle",
    description: "Scegli la zona, il tempo e la manualità.",
  },
  "ceretta-donna": {
    photo: "cera-gamba",
    description: "Epilazione a cera: dal viso alle singole zone del corpo.",
  },
  "ceretta-uomo": {
    photo: "cera-preparazione",
    description:
      "Epilazione a cera per viso, braccia, torace, schiena e gambe.",
  },
  pressoterapia: {
    photo: "bendaggi",
    description: "Pressoterapia e abbinamenti: scopri durata e varianti.",
  },
};
