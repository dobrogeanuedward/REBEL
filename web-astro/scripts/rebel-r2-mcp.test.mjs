import assert from "node:assert/strict";
import { describe, it } from "node:test";

process.env.R2_BUCKET = process.env.R2_BUCKET || "dogostudio";
process.env.R2_ENDPOINT =
  process.env.R2_ENDPOINT || "https://example.r2.cloudflarestorage.com";
process.env.R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || "test-key";
process.env.R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || "test-secret";
process.env.R2_ALLOWED_PREFIXES =
  process.env.R2_ALLOWED_PREFIXES ||
  "assets/,thory/,photos/,rebel/,assets/rebel/";
process.env.MCP_REBEL_TOKEN =
  process.env.MCP_REBEL_TOKEN || "test-mcp-token-please-rotate";

const keys = await import("../src/lib/rebel-r2/keys.ts");
const auth = await import("../src/lib/rebel-r2/auth.ts");

describe("rebel-r2 keys", () => {
  it("blocks path traversal", () => {
    assert.throws(() => keys.normalizeKey("../secret"), /traversal/i);
  });

  it("blocks unauthorized prefix", () => {
    assert.throws(
      () => keys.assertKeyAllowed("other-brand/hero/cover.webp"),
      /PREFIX_DENIED|outside/i,
    );
  });

  it("allows rebel prefix keys", () => {
    const key = keys.assertKeyAllowed("rebel/home/hero/laser-mobile.webp");
    assert.equal(key, "rebel/home/hero/laser-mobile.webp");
  });

  it("blocks sensitive keys", () => {
    assert.throws(() => keys.assertKeyAllowed("rebel/.env"), /SENSITIVE|blocked/i);
    assert.throws(
      () => keys.assertKeyAllowed("rebel/backup/db.sql"),
      /SENSITIVE|blocked/i,
    );
  });

  it("normalizes prefix listing roots", () => {
    const p = keys.assertPrefixAllowed("rebel/home/");
    assert.equal(p, "rebel/home/");
  });
});

describe("rebel-r2 auth", () => {
  it("rejects missing bearer", () => {
    const result = auth.authorizeMcpRequest(new Request("https://example.com/api/mcp"));
    assert.equal(result.ok, false);
    assert.equal(result.status, 401);
  });

  it("rejects wrong bearer", () => {
    const result = auth.authorizeMcpRequest(
      new Request("https://example.com/api/mcp", {
        headers: { Authorization: "Bearer wrong-token" },
      }),
    );
    assert.equal(result.ok, false);
    assert.equal(result.status, 401);
  });

  it("accepts correct bearer", () => {
    const result = auth.authorizeMcpRequest(
      new Request("https://example.com/api/mcp", {
        headers: { Authorization: `Bearer ${process.env.MCP_REBEL_TOKEN}` },
      }),
    );
    assert.equal(result.ok, true);
  });
});

describe("rebel-r2 live (optional)", () => {
  const live =
    process.env.R2_LIVE_TEST === "1" &&
    Boolean(process.env.R2_ACCOUNT_ID) &&
    Boolean(process.env.R2_ACCESS_KEY_ID) &&
    Boolean(process.env.R2_SECRET_ACCESS_KEY) &&
    Boolean(process.env.R2_BUCKET);

  it("lists and probes when live", async (t) => {
    if (!live) {
      t.skip("Set R2_LIVE_TEST=1 with R2 env to enable");
      return;
    }
    const assets = await import("../src/lib/rebel-r2/assets.ts");
    const client = await import("../src/lib/rebel-r2/client.ts");
    assert.equal(await client.probeBucketAccess(), true);
    const page = await assets.listAssets({ limit: 5 });
    assert.ok(Array.isArray(page.assets));
  });

  it("missing asset errors cleanly", async (t) => {
    if (!live) {
      t.skip("live only");
      return;
    }
    const assets = await import("../src/lib/rebel-r2/assets.ts");
    await assert.rejects(() =>
      assets.getAsset("rebel/__does_not_exist__/nope-xyz.webp"),
    );
  });
});
