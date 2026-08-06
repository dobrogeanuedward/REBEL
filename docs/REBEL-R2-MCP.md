# Rebel R2 — remote MCP app

Read-only MCP server that lets ChatGPT browse Rebel assets on Cloudflare R2
without ever receiving R2 credentials.

## Integration reused

There was **no in-repo R2 client / Worker binding** on the previous Astro+Vercel
site. Media was consumed as public URLs (`epikey.rebelepigenetica.it`,
Cloudflare Images, local `/public`).

This MCP adds a **single server-side S3-compatible client** that reads the
already-provisioned bucket via existing env names:

| Env (names only) | Role |
|---|---|
| `R2_ACCOUNT_ID` | Account for endpoint derivation |
| `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` | Object Read (server-side) |
| `R2_BUCKET` (or `R2_PUBLIC_BUCKET`) | Bucket name |
| `R2_ENDPOINT` | S3 API endpoint |
| `R2_PUBLIC_BASE_URL` | Public CDN / r2.dev base for stable URLs |
| `R2_ALLOWED_PREFIXES` | Optional allow-list (default Rebel roots) |
| `MCP_REBEL_TOKEN` | Bearer auth for the MCP endpoint **only** |

Code entrypoints:

- `web-astro/src/lib/rebel-r2/*` — client, auth, tools, cache
- `web-astro/src/lib/rebel-r2-slots.ts` — semantic slot conventions (no secrets)
- `web-astro/src/pages/api/mcp.ts` — Streamable HTTP MCP endpoint
- `web-astro/src/pages/health.ts` — health check

Runtime: **Vercel Serverless** (Astro `prerender = false` API routes).

## Endpoints

| Path | Purpose |
|---|---|
| `POST/GET/DELETE /api/mcp` | MCP Streamable HTTP (JSON responses, stateless) |
| `GET /health` | Minimal health: `{ status, service, bucketAccess }` |

Production base: `https://www.rebelepigenetica.it`

MCP URL for ChatGPT custom app:

```text
https://www.rebelepigenetica.it/api/mcp
```

## Authentication

- R2 credentials stay on the server (Vercel env / secrets). ChatGPT never sees them.
- MCP access uses a **separate** bearer token: `MCP_REBEL_TOKEN`.
- Send `Authorization: Bearer <MCP_REBEL_TOKEN>` on every MCP request.
- Missing/invalid token → `401`.
- To revoke ChatGPT access: rotate `MCP_REBEL_TOKEN` only. Do **not** touch R2 keys unless also compromised.

## Tools (all read-only)

| Tool | Purpose |
|---|---|
| `rebel_r2_search_assets` | Fuzzy/key/manifest search |
| `rebel_r2_list_assets` | Paginated listing |
| `rebel_r2_get_asset` | Metadata + public or ≤10m signed URL |
| `rebel_r2_preview_asset` | MCP image content (base64) + metadata |
| `rebel_r2_fetch_text_asset` | JSON/TXT/MD/SVG/CSS ≤1MB |
| `rebel_r2_get_manifest` | Read existing manifest if present |
| `rebel_r2_resolve_asset_slot` | Semantic slot → best asset |
| `rebel_r2_compare_assets` | Compare ≤4 assets + previews |

Annotations: `readOnlyHint`, `destructiveHint: false`, `idempotentHint`, `openWorldHint: false`.

**Not exposed:** upload, put, delete, rename, move, copy, overwrite, metadata writes.

## Limits

- List/search page size ≤ 100 / 50
- Text read ≤ 1 MB
- Image preview resized in-memory (max width 1400); original never written back
- Compare/preview batch ≤ 4 images
- Signed GET TTL ≤ 600 seconds when public base URL is absent
- Index cache TTL ~60s (in-memory, no secrets / no long-lived signed URLs)

## Allowed prefixes

Default:

```text
assets/
thory/
photos/
rebel/
assets/rebel/
```

Override with `R2_ALLOWED_PREFIXES` (comma-separated). Path traversal, the
`private/` tree, other buckets, and sensitive filenames (`.env`, keys,
backups, etc.) are blocked.

Note: the currently configured bucket is named `dogostudio` and primarily uses
an `assets/` layout. The MCP scopes reads to the allow-listed prefixes above.

## Private vs public objects

- If `R2_PUBLIC_BASE_URL` is set → stable public URLs are returned.
- Otherwise → server generates a short-lived signed GET URL (never logged in full).

## Connect to ChatGPT

1. Deploy this branch; set Vercel env vars (R2_* + `MCP_REBEL_TOKEN`).
2. Verify `GET /health` returns `"bucketAccess": true`.
3. In ChatGPT → create a custom MCP app named **Rebel R2**.
4. MCP server URL: `https://www.rebelepigenetica.it/api/mcp`
5. Auth: Bearer token = value of `MCP_REBEL_TOKEN` (paste only in the private app config, never in chat).
6. Enable the eight tools above.

## Local verify

```bash
# from web-astro/
cp ../.env.r2.example ../.env.r2.local   # fill values locally
npm run test:r2-mcp
npm run build
```

Live bucket smoke (optional):

```bash
R2_LIVE_TEST=1 npm run test:r2-mcp
```

## Revoke access

Rotate only `MCP_REBEL_TOKEN` in Vercel. Redeploy or restart so the new secret is
picked up. R2 credentials can remain unchanged.
