/**
 * Configurazione Instagram
 * 
 * Puoi inserire:
 * - Link completi: "https://www.instagram.com/p/ABC123/" o "https://www.instagram.com/reel/XYZ789/"
 * - Solo ID: "ABC123" (per post) o "XYZ789" (per reel)
 * 
 * Il sistema estrae automaticamente l'ID dal link se necessario.
 */

export const instagramConfig = {
  // Reel da mostrare (selezione manuale)
  featuredReels: [
    "https://www.instagram.com/p/DQKKGh8CAUo/",
    "https://www.instagram.com/reel/DQRXLXNCDu8/",
    "https://www.instagram.com/reel/DQjzVYZCE1c/",
    "https://www.instagram.com/reel/DQR2Gg1CBVz/",
  ] as string[],

  // Ultimi 3 post (inserisci i link o gli ID)
  latestPosts: [
    "https://www.instagram.com/p/DTDidTyiMIm/?img_index=1",
    "https://www.instagram.com/p/DR7axePCCHR/?img_index=1",
    "https://www.instagram.com/p/DR5B4_fCH6o/",
    "https://www.instagram.com/p/DQH4Jq9CC0A/?img_index=1",
  ] as string[],
};

/**
 * Estrae l'ID da un link Instagram o restituisce l'ID se già fornito
 */
export function extractInstagramId(urlOrId: string): string {
  // Se è già un ID semplice (solo caratteri alfanumerici e underscore)
  if (/^[A-Za-z0-9_-]+$/.test(urlOrId)) {
    return urlOrId;
  }

  // Estrae ID da link post: /p/{ID}/
  const postMatch = urlOrId.match(/\/p\/([A-Za-z0-9_-]+)/);
  if (postMatch) {
    return postMatch[1];
  }

  // Estrae ID da link reel: /reel/{ID}/
  const reelMatch = urlOrId.match(/\/reel\/([A-Za-z0-9_-]+)/);
  if (reelMatch) {
    return reelMatch[1];
  }

  // Se non trova nulla, restituisce l'input originale
  return urlOrId;
}

/**
 * Determina se un ID è un reel o un post
 */
export function isReel(urlOrId: string): boolean {
  return urlOrId.includes("/reel/") || urlOrId.toLowerCase().includes("reel");
}

