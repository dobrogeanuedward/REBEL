export type LocalAreaPage = {
  slug: string;
  city: string;
  cluster: "asse-carmagnola" | "torino-sud" | "cuneo";
  directions: {
    mapsUrl: string;
    embedUrl: string;
  };
};

export const localAreaPages: LocalAreaPage[] = [
  {
    slug: "carmagnola",
    city: "Carmagnola",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Viale+Barbaroux+20,+10022+Carmagnola+TO",
      embedUrl: "https://www.google.com/maps?q=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "lombriasco",
    city: "Lombriasco",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Lombriasco&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Lombriasco&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "caramagna-piemonte",
    city: "Caramagna Piemonte",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Caramagna+Piemonte&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Caramagna+Piemonte&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "osasio",
    city: "Osasio",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Osasio&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Osasio&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "casalgrasso",
    city: "Casalgrasso",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Casalgrasso&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Casalgrasso&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "carignano",
    city: "Carignano",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Carignano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Carignano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "racconigi",
    city: "Racconigi",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Racconigi&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Racconigi&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "sommariva-del-bosco",
    city: "Sommariva del Bosco",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Sommariva+del+Bosco&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Sommariva+del+Bosco&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "poirino",
    city: "Poirino",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Poirino&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Poirino&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "villastellone",
    city: "Villastellone",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Villastellone&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Villastellone&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "pancalieri",
    city: "Pancalieri",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Pancalieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Pancalieri&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "virle-piemonte",
    city: "Virle Piemonte",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Virle+Piemonte&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Virle+Piemonte&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "pralormo",
    city: "Pralormo",
    cluster: "asse-carmagnola",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Pralormo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Pralormo&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "torino-sud",
    city: "Torino Sud",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Viale+Barbaroux+20,+10022+Carmagnola+TO",
      embedUrl: "https://www.google.com/maps?q=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "moncalieri",
    city: "Moncalieri",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Moncalieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Moncalieri&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "nichelino",
    city: "Nichelino",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Nichelino&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Nichelino&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "vinovo",
    city: "Vinovo",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Vinovo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Vinovo&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "la-loggia",
    city: "La Loggia",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=La+Loggia&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=La+Loggia&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "trofarello",
    city: "Trofarello",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Trofarello&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Trofarello&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "chieri",
    city: "Chieri",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Chieri&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Chieri&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "orbassano",
    city: "Orbassano",
    cluster: "torino-sud",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Orbassano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Orbassano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "polonghera",
    city: "Polonghera",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Polonghera&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Polonghera&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "ceresole-d-alba",
    city: "Ceresole d'Alba",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Ceresole+d%27Alba&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Ceresole+d%27Alba&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "canale",
    city: "Canale",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Canale+CN&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Canale+CN&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "alba",
    city: "Alba",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Alba&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Alba&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "bra",
    city: "Bra",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bra&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Bra&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "savigliano",
    city: "Savigliano",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Savigliano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Savigliano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "fossano",
    city: "Fossano",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Fossano&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Fossano&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
  {
    slug: "saluzzo",
    city: "Saluzzo",
    cluster: "cuneo",
    directions: {
      mapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Saluzzo&destination=Viale+Barbaroux+20,+10022+Carmagnola+TO&travelmode=driving",
      embedUrl: "https://www.google.com/maps?f=d&source=s_d&saddr=Saluzzo&daddr=Viale+Barbaroux+20,+10022+Carmagnola+TO&output=embed",
    },
  },
];

export function getLocalAreaPage(slug: string) {
  return localAreaPages.find((item) => item.slug === slug);
}
