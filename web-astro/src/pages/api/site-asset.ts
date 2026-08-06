import type { APIRoute } from "astro";
import { resolveAssetUrl } from "@/lib/rebel-r2/assets";
import { headObject } from "@/lib/rebel-r2/client";
import {
  getSiteAssetFallback,
  getSiteAssetR2Key,
} from "@/lib/site-assets";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const slot = new URL(request.url).searchParams.get("slot")?.trim() || "";
  const fallback = getSiteAssetFallback(slot);

  if (!fallback) {
    return new Response("Unknown asset slot", {
      status: 404,
      headers: { "cache-control": "no-store" },
    });
  }

  let target = fallback;
  let cacheControl = "public, max-age=3600, stale-while-revalidate=86400";
  const exactR2Key = getSiteAssetR2Key(slot);

  try {
    if (exactR2Key) {
      // Verify that the canonical object exists before redirecting. No fuzzy
      // resolver is allowed in the public website delivery path.
      await headObject(exactR2Key);
      const remote = await resolveAssetUrl(exactR2Key);
      target = remote.url;
      if (remote.signed) {
        cacheControl = "private, max-age=240";
      }
    }
  } catch {
    // R2 is optional during deploys: verified local fallback remains authoritative.
  }

  const location = new URL(target, request.url).toString();
  return new Response(null, {
    status: 307,
    headers: {
      location,
      "cache-control": cacheControl,
      vary: "Accept",
    },
  });
};
