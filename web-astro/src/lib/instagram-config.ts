/**
 * Instagram media list (manual curation). Stored as URLs *or* IDs; the
 * extractor accepts both shapes.
 */

export type InstagramFeaturedItem = {
  url: string;
  title: string;
  eyebrow: string;
  posterSlot: string;
  ariaLabel: string;
};

export const instagramConfig = {
  featuredReels: [
    {
      url: "https://www.instagram.com/reel/DQRXLXNCDu8/",
      title: "Vita in studio",
      eyebrow: "REBEL · Carmagnola",
      posterSlot: "studio.real.overview.mobile",
      ariaLabel: "Carica il Reel Instagram Vita in studio",
    },
    {
      url: "https://www.instagram.com/reel/DQjzVYZCE1c/",
      title: "Il Metodo REBEL",
      eyebrow: "Valutazione · Mappa · percorso",
      posterSlot: "services.method.consultation.mobile",
      ariaLabel: "Carica il Reel Instagram dedicato al Metodo REBEL",
    },
    {
      url: "https://www.instagram.com/reel/DQR2Gg1CBVz/",
      title: "Tecnologie in cabina",
      eyebrow: "Strumenti dentro il metodo",
      posterSlot: "technologies.studio.thory.mobile",
      ariaLabel: "Carica il Reel Instagram dedicato alle tecnologie REBEL",
    },
  ] satisfies InstagramFeaturedItem[],
  latestPosts: [
    "https://www.instagram.com/p/DUWIpwvCBIy/?img_index=1",
    "https://www.instagram.com/p/DTA_62KCBDH/?img_index=1",
    "https://www.instagram.com/p/DTDidTyiMIm/?img_index=1",
    "https://www.instagram.com/p/DR7axePCCHR/?img_index=1",
    "https://www.instagram.com/p/DR5B4_fCH6o/",
    "https://www.instagram.com/p/DQH4Jq9CC0A/?img_index=1",
  ] as string[],
};

export function extractInstagramId(urlOrId: string): string {
  if (/^[A-Za-z0-9_-]+$/.test(urlOrId)) return urlOrId;
  const post = urlOrId.match(/\/p\/([A-Za-z0-9_-]+)/);
  if (post) return post[1];
  const reel = urlOrId.match(/\/reel\/([A-Za-z0-9_-]+)/);
  if (reel) return reel[1];
  return urlOrId;
}

export function isReel(urlOrId: string): boolean {
  return urlOrId.includes("/reel/") || urlOrId.toLowerCase().includes("reel");
}
