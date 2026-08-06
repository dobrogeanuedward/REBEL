import { LIMITS } from "./config";
import { assertPrefixAllowed } from "./keys";
import { getAssetIndex, type AssetRecord } from "./assets";
import { loadManifest } from "./manifest";

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .split(/[^a-z0-9àèéìòù]+/i)
    .map((t) => t.trim())
    .filter((t) => t.length >= 2);
}

function fuzzyScore(haystack: string, token: string): number {
  const h = haystack.toLowerCase();
  const t = token.toLowerCase();
  if (!t) return 0;
  if (h.includes(t)) return 10 + Math.min(t.length, 10);
  // simple subsequence score
  let i = 0;
  for (const ch of h) {
    if (ch === t[i]) i++;
    if (i >= t.length) return 4;
  }
  return 0;
}

export type SearchHit = AssetRecord & { matchReason: string; score: number };

export async function searchAssets(input: {
  query: string;
  prefix?: string | null;
  contentType?: string | null;
  limit?: number;
}): Promise<SearchHit[]> {
  const query = (input.query || "").trim();
  if (!query) return [];
  const prefix = assertPrefixAllowed(input.prefix ?? "");
  const limit = Math.min(Math.max(input.limit ?? LIMITS.searchDefault, 1), LIMITS.searchMax);
  const tokens = tokenize(query);
  const ctype = (input.contentType || "").toLowerCase();

  const index = await getAssetIndex();
  const manifest = await loadManifest().catch(() => null);

  const hits: SearchHit[] = [];

  for (const asset of index) {
    if (prefix && !asset.key.startsWith(prefix)) continue;
    if (ctype === "image" && asset.kind !== "image") continue;
    if (ctype === "video" && asset.kind !== "video") continue;
    if (ctype === "text" && asset.kind !== "text") continue;
    if (ctype && !["image", "video", "text"].includes(ctype)) {
      if (!(asset.contentType || "").toLowerCase().includes(ctype) && !asset.key.toLowerCase().includes(ctype)) {
        continue;
      }
    }

    let score = 0;
    const reasons: string[] = [];
    const hay = `${asset.key} ${asset.name} ${asset.folder} ${asset.semanticRole || ""} ${asset.altText || ""}`;

    for (const token of tokens) {
      const s = fuzzyScore(hay, token);
      if (s > 0) {
        score += s;
        reasons.push(`token:${token}`);
      }
    }

    if (manifest?.flatKeys?.has(asset.key)) {
      score += 3;
      reasons.push("manifest");
    }

    // whole-query substring bonus
    if (asset.key.toLowerCase().includes(query.toLowerCase()) || asset.name.toLowerCase().includes(query.toLowerCase())) {
      score += 15;
      reasons.push("exact-substring");
    }

    if (score > 0) {
      hits.push({
        ...asset,
        score,
        matchReason: reasons.slice(0, 4).join(", ") || "match",
      });
    }
  }

  hits.sort((a, b) => b.score - a.score || a.key.localeCompare(b.key));
  return hits.slice(0, limit);
}
