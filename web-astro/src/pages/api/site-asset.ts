import type { APIRoute } from "astro";
import { resolveAssetUrl } from "@/lib/rebel-r2/assets";
import { resolveSlot } from "@/lib/rebel-r2/manifest";
import { getSiteAssetFallback } from "@/lib/site-assets";

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

  try {
    const resolved = await resolveSlot(slot);
    if (resolved.selected) {
      const remote = await resolveAssetUrl(resolved.selected.key);
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

