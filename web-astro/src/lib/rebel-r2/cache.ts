import { LIMITS } from "./config";

type Entry<T> = { value: T; expiresAt: number };

const store = new Map<string, Entry<unknown>>();

export function cacheGet<T>(key: string): T | undefined {
  const hit = store.get(key);
  if (!hit) return undefined;
  if (Date.now() > hit.expiresAt) {
    store.delete(key);
    return undefined;
  }
  return hit.value as T;
}

export function cacheSet<T>(key: string, value: T, ttlMs: number = LIMITS.cacheTtlMs): void {
  store.set(key, { value, expiresAt: Date.now() + ttlMs });
}

export function cacheInvalidate(prefix?: string): void {
  if (!prefix) {
    store.clear();
    return;
  }
  for (const k of store.keys()) {
    if (k.startsWith(prefix)) store.delete(k);
  }
}

/** Never cache signed URLs — helpers should not put them here. */
export function cacheKeyList(prefix: string): string {
  return `list:${prefix}`;
}

export function cacheKeyIndex(): string {
  return "index:v1";
}
