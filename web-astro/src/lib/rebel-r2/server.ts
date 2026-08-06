import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { MCP_SERVER_VERSION, MCP_SERVICE_NAME, LIMITS } from "./config";
import { listAssets, getAsset, fetchTextAsset, getAssetIndex } from "./assets";
import { searchAssets } from "./search";
import { previewAsset } from "./preview";
import { loadManifest, resolveSlot } from "./manifest";
import { logTool, sanitizeError } from "./logging";
import { RebelR2AccessError } from "./keys";

const toolHints = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
} as const;

function textResult(data: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
  };
}

function errorResult(err: unknown) {
  const s = sanitizeError(err);
  const code = err instanceof RebelR2AccessError ? err.code : s.code;
  return {
    isError: true,
    content: [
      {
        type: "text" as const,
        text: JSON.stringify({ error: true, code, message: s.message }),
      },
    ],
  };
}

async function timed<T>(
  tool: string,
  fn: () => Promise<T>,
  count: (v: T) => number = () => 1,
): Promise<T> {
  const start = Date.now();
  try {
    const value = await fn();
    logTool({
      tool,
      durationMs: Date.now() - start,
      resultCount: count(value),
      status: "ok",
    });
    return value;
  } catch (err) {
    const s = sanitizeError(err);
    logTool({
      tool,
      durationMs: Date.now() - start,
      status: "error",
      errorCode: err instanceof RebelR2AccessError ? err.code : s.code,
    });
    throw err;
  }
}

export function createRebelR2McpServer(): McpServer {
  const server = new McpServer({
    name: "Rebel R2",
    version: MCP_SERVER_VERSION,
  });

  server.registerTool(
    "rebel_r2_search_assets",
    {
      title: "Search Rebel R2 assets",
      description:
        "Search Rebel R2 assets by filename, key, folder, metadata, manifest and simple fuzzy match. Read-only.",
      inputSchema: {
        query: z.string().min(1),
        prefix: z.string().optional(),
        contentType: z.string().optional(),
        limit: z.number().int().min(1).max(LIMITS.searchMax).optional(),
      },
      annotations: toolHints,
    },
    async (args) => {
      try {
        const hits = await timed(
          "rebel_r2_search_assets",
          () =>
            searchAssets({
              query: args.query,
              prefix: args.prefix,
              contentType: args.contentType,
              limit: args.limit,
            }),
          (v) => v.length,
        );
        return textResult({
          count: hits.length,
          results: hits.map((h) => ({
            id: h.id,
            key: h.key,
            name: h.name,
            folder: h.folder,
            url: h.url,
            contentType: h.contentType,
            size: h.size,
            lastModified: h.lastModified,
            etag: h.etag,
            width: h.width,
            height: h.height,
            semanticRole: h.semanticRole,
            variant: h.variant,
            focalPoint: h.focalPoint,
            matchReason: h.matchReason,
            score: h.score,
          })),
        });
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    "rebel_r2_list_assets",
    {
      title: "List Rebel R2 assets",
      description: "Paginated listing under an allowed Rebel prefix. Read-only.",
      inputSchema: {
        prefix: z.string().optional(),
        cursor: z.string().nullable().optional(),
        limit: z.number().int().min(1).max(LIMITS.listMax).optional(),
      },
      annotations: toolHints,
    },
    async (args) => {
      try {
        const page = await timed(
          "rebel_r2_list_assets",
          () =>
            listAssets({
              prefix: args.prefix,
              cursor: args.cursor,
              limit: args.limit,
            }),
          (v) => v.assets.length,
        );
        return textResult(page);
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    "rebel_r2_get_asset",
    {
      title: "Get Rebel R2 asset",
      description:
        "Return metadata and public or short-lived signed URL for one asset. Read-only.",
      inputSchema: {
        key: z.string().min(1),
      },
      annotations: toolHints,
    },
    async (args) => {
      try {
        const asset = await timed("rebel_r2_get_asset", () => getAsset(args.key));
        const related = (await getAssetIndex())
          .filter(
            (a) =>
              a.key !== asset.key &&
              (a.folder === asset.folder ||
                a.name.replace(/\.[^.]+$/, "") === asset.name.replace(/\.[^.]+$/, "")),
          )
          .slice(0, 6)
          .map((a) => ({ key: a.key, name: a.name, variant: a.variant, url: a.url }));
        return textResult({
          key: asset.key,
          url: asset.url,
          signed: asset.urlInfo.signed,
          expiresInSeconds: asset.urlInfo.expiresInSeconds,
          contentType: asset.contentType,
          size: asset.size,
          lastModified: asset.lastModified,
          etag: asset.etag,
          metadata: asset.metadata,
          width: asset.width,
          height: asset.height,
          aspectRatio: asset.aspectRatio,
          variant: asset.variant,
          altText: asset.altText,
          semanticRole: asset.semanticRole,
          focalPoint: asset.focalPoint,
          related,
        });
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    "rebel_r2_preview_asset",
    {
      title: "Preview Rebel R2 asset",
      description:
        "Fetch an image from R2 server-side and return an MCP image content block (base64) plus metadata. Videos/PDFs return URL + metadata only. Read-only; never writes to the bucket.",
      inputSchema: {
        key: z.string().min(1),
        maxWidth: z.number().int().min(64).max(LIMITS.previewMaxWidth).optional(),
      },
      annotations: toolHints,
    },
    async (args) => {
      try {
        const preview = await timed("rebel_r2_preview_asset", () =>
          previewAsset({ key: args.key, maxWidth: args.maxWidth }),
        );
        const metaText = JSON.stringify(
          {
            key: preview.key,
            kind: preview.kind,
            contentType: preview.contentType,
            url: preview.signed ? "[signed-url-omitted-from-text]" : preview.url,
            signed: preview.signed,
            width: preview.width,
            height: preview.height,
            size: preview.size,
            note: preview.note,
            posterKey: preview.posterKey ?? null,
          },
          null,
          2,
        );
        const content: Array<
          | { type: "text"; text: string }
          | { type: "image"; data: string; mimeType: string }
        > = [{ type: "text", text: metaText }];
        if (preview.image) {
          content.push({
            type: "image",
            data: preview.image.base64,
            mimeType: preview.image.mimeType,
          });
        }
        if (preview.svgText) {
          content.push({ type: "text", text: preview.svgText });
        }
        // If signed, still expose URL only inside structured meta for the model to open when needed;
        // ChatGPT image block is preferred for vision.
        if (preview.signed && preview.url) {
          content.push({
            type: "text",
            text: JSON.stringify({ temporaryUrl: preview.url, expiresHint: "<=10m" }),
          });
        }
        return { content };
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    "rebel_r2_fetch_text_asset",
    {
      title: "Fetch text asset from Rebel R2",
      description:
        "Read JSON/TXT/Markdown/SVG/CSS text assets under allowed prefixes (max 1MB). Blocks sensitive keys. Read-only.",
      inputSchema: {
        key: z.string().min(1),
      },
      annotations: toolHints,
    },
    async (args) => {
      try {
        const file = await timed("rebel_r2_fetch_text_asset", () => fetchTextAsset(args.key));
        return textResult(file);
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    "rebel_r2_get_manifest",
    {
      title: "Get Rebel asset manifest",
      description:
        "Locate and read the authoritative Rebel asset manifest if present. Never regenerates or writes. Read-only.",
      inputSchema: {},
      annotations: toolHints,
    },
    async () => {
      try {
        const manifest = await timed("rebel_r2_get_manifest", () => loadManifest());
        return textResult({
          found: manifest.found,
          key: manifest.key,
          note: manifest.note,
          missingReferenced: manifest.missingReferenced,
          structure: manifest.structure,
        });
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    "rebel_r2_resolve_asset_slot",
    {
      title: "Resolve semantic asset slot",
      description:
        "Resolve a semantic slot (e.g. home.hero.laser.mobile) via manifest, metadata, then naming conventions. Read-only.",
      inputSchema: {
        slot: z.string().min(1),
      },
      annotations: toolHints,
    },
    async (args) => {
      try {
        const resolved = await timed("rebel_r2_resolve_asset_slot", () =>
          resolveSlot(args.slot),
        );
        return textResult(resolved);
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  server.registerTool(
    "rebel_r2_compare_assets",
    {
      title: "Compare Rebel R2 assets",
      description:
        "Compare metadata for up to 4 assets and include image previews when safe. Read-only.",
      inputSchema: {
        keys: z.array(z.string().min(1)).min(1).max(LIMITS.previewBatchMax),
      },
      annotations: toolHints,
    },
    async (args) => {
      try {
        const keys = args.keys.slice(0, LIMITS.previewBatchMax);
        const compared = await timed(
          "rebel_r2_compare_assets",
          async () => {
            const rows = [];
            for (const key of keys) {
              const asset = await getAsset(key);
              rows.push({
                key: asset.key,
                contentType: asset.contentType,
                size: asset.size,
                width: asset.width,
                height: asset.height,
                aspectRatio: asset.aspectRatio,
                lastModified: asset.lastModified,
                etag: asset.etag,
                variant: asset.variant,
                url: asset.urlInfo.signed ? null : asset.url,
                signed: asset.urlInfo.signed,
              });
            }
            const etagGroups = new Map<string, string[]>();
            for (const row of rows) {
              if (!row.etag) continue;
              const list = etagGroups.get(row.etag) || [];
              list.push(row.key);
              etagGroups.set(row.etag, list);
            }
            const duplicates = [...etagGroups.values()].filter((g) => g.length > 1);
            return { rows, duplicates };
          },
          (v) => v.rows.length,
        );

        const content: Array<
          | { type: "text"; text: string }
          | { type: "image"; data: string; mimeType: string }
        > = [
          {
            type: "text",
            text: JSON.stringify(
              {
                compared: compared.rows,
                duplicateEtags: compared.duplicates,
                note: "No aesthetic ranking applied; evaluate visually from previews.",
              },
              null,
              2,
            ),
          },
        ];

        for (const key of keys) {
          try {
            const preview = await previewAsset({ key, maxWidth: 900 });
            if (preview.image) {
              content.push({
                type: "image",
                data: preview.image.base64,
                mimeType: preview.image.mimeType,
              });
              content.push({
                type: "text",
                text: `preview_of=${key}`,
              });
            }
          } catch {
            content.push({
              type: "text",
              text: JSON.stringify({ key, preview: "skipped" }),
            });
          }
        }

        return { content };
      } catch (err) {
        return errorResult(err);
      }
    },
  );

  return server;
}

export { MCP_SERVICE_NAME };
