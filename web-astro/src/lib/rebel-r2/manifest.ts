import { REBEL_MANIFEST_CANDIDATES, getSlotRule } from "@/lib/rebel-r2-slots";
import { getAssetIndex, fetchTextAsset, type AssetRecord } from "./assets";
import { cacheGet, cacheSet } from "./cache";
import { assertKeyAllowed } from "./keys";

export type ManifestLoadResult = {
  key: string | null;
  found: boolean;
  structure: unknown;
  flatKeys: Set<string>;
  missingReferenced: string[];
  note: string;
};

function collectKeys(value: unknown, out: Set<string>): void {
  if (typeof value === "string") {
    if (value.includes("/") || /\.(webp|jpg|jpeg|png|avif|gif|mp4|webm|svg)$/i.test(value)) {
      out.add(value.replace(/^\//, ""));
    }
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectKeys(item, out);
    return;
  }
  if (value && typeof value === "object") {
    for (const v of Object.values(value as Record<string, unknown>)) collectKeys(v, out);
  }
}

export async function loadManifest(): Promise<ManifestLoadResult> {
  const cached = cacheGet<ManifestLoadResult>("manifest:v1");
  if (cached) return cached;

  for (const candidate of REBEL_MANIFEST_CANDIDATES) {
    try {
      assertKeyAllowed(candidate);
      const file = await fetchTextAsset(candidate);
      let structure: unknown;
      try {
        structure = JSON.parse(file.text);
      } catch {
        structure = { raw: file.text };
      }
      const flatKeys = new Set<string>();
      collectKeys(structure, flatKeys);
      const index = await getAssetIndex();
      const present = new Set(index.map((a) => a.key));
      const missingReferenced = [...flatKeys].filter((k) => {
        try {
          assertKeyAllowed(k);
          return !present.has(k);
        } catch {
          return false;
        }
      });
      const result: ManifestLoadResult = {
        key: candidate,
        found: true,
        structure,
        flatKeys,
        missingReferenced,
        note: "Authoritative manifest loaded read-only; nothing was modified.",
      };
      cacheSet("manifest:v1", result);
      return result;
    } catch {
      // try next candidate
    }
  }

  const empty: ManifestLoadResult = {
    key: null,
    found: false,
    structure: null,
    flatKeys: new Set(),
    missingReferenced: [],
    note: "No manifest found at known Rebel locations. Runtime index will be used instead.",
  };
  cacheSet("manifest:v1", empty, 30_000);
  return empty;
}

function getByPath(obj: unknown, path: string): unknown {
  if (!obj || typeof obj !== "object") return undefined;
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (!cur || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

export async function resolveSlot(slot: string): Promise<{
  slot: string;
  selected: AssetRecord | null;
  alternatives: AssetRecord[];
  reason: string;
  source: "manifest" | "metadata" | "naming" | "none";
}> {
  const rule = getSlotRule(slot);
  const index = await getAssetIndex();
  const manifest = await loadManifest();

  // 1) Manifest path
  if (manifest.found && manifest.structure) {
    const node = getByPath(manifest.structure, slot);
    if (typeof node === "string") {
      const hit = index.find((a) => a.key === node.replace(/^\//, ""));
      if (hit) {
        return {
          slot,
          selected: hit,
          alternatives: [],
          reason: `Resolved from manifest key ${manifest.key}`,
          source: "manifest",
        };
      }
    }
    if (node && typeof node === "object") {
      const rec = node as Record<string, unknown>;
      const preferred =
        (typeof rec.mobile === "string" && rule?.variant === "mobile" && rec.mobile) ||
        (typeof rec.desktop === "string" && rule?.variant === "desktop" && rec.desktop) ||
        (typeof rec.src === "string" && rec.src) ||
        (typeof rec.key === "string" && rec.key) ||
        null;
      if (preferred) {
        const hit = index.find((a) => a.key === String(preferred).replace(/^\//, ""));
        if (hit) {
          return {
            slot,
            selected: hit,
            alternatives: [],
            reason: `Resolved nested manifest value for ${slot}`,
            source: "manifest",
          };
        }
      }
    }
  }

  // 2) Metadata role/slot
  const metaHits = index.filter(
    (a) =>
      a.semanticRole === slot ||
      a.metadata?.slot === slot ||
      a.metadata?.role === slot,
  );
  if (metaHits.length) {
    return {
      slot,
      selected: metaHits[0],
      alternatives: metaHits.slice(1, 5),
      reason: "Matched custom metadata role/slot",
      source: "metadata",
    };
  }

  // 3) Naming conventions via slot rules
  if (rule) {
    const scored = index
      .map((asset) => {
        let score = 0;
        if (rule.prefixes.some((p) => asset.key.startsWith(p))) score += 8;
        for (const kw of rule.keywords) {
          if (asset.key.toLowerCase().includes(kw.toLowerCase())) score += 6;
        }
        if (rule.variant !== "any" && asset.variant === rule.variant) score += 5;
        if (rule.variant !== "any" && asset.variant !== "any" && asset.variant !== rule.variant) {
          score -= 3;
        }
        return { asset, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score);

    if (scored.length) {
      return {
        slot,
        selected: scored[0].asset,
        alternatives: scored.slice(1, 5).map((s) => s.asset),
        reason: `Naming/prefix conventions for ${rule.label}`,
        source: "naming",
      };
    }
  }

  // Fallback: treat slot tokens as search keywords
  const tokens = slot.toLowerCase().split(".").filter(Boolean);
  const loose = index
    .map((asset) => {
      const hay = asset.key.toLowerCase();
      const score = tokens.reduce((acc, t) => acc + (hay.includes(t) ? 3 : 0), 0);
      return { asset, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (loose.length) {
    return {
      slot,
      selected: loose[0].asset,
      alternatives: loose.slice(1, 5).map((s) => s.asset),
      reason: "Fallback token match on key path",
      source: "naming",
    };
  }

  return {
    slot,
    selected: null,
    alternatives: [],
    reason: "No matching asset found for slot",
    source: "none",
  };
}
