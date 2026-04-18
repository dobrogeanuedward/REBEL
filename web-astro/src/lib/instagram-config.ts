/**
 * Instagram media list (manual curation). Stored as URLs *or* IDs; the
 * extractor accepts both shapes.
 */

export const instagramConfig = {
  featuredReels: [
    "https://www.instagram.com/p/DQKKGh8CAUo/",
    "https://www.instagram.com/reel/DQRXLXNCDu8/",
    "https://www.instagram.com/reel/DQjzVYZCE1c/",
    "https://www.instagram.com/reel/DQR2Gg1CBVz/",
  ] as string[],
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
