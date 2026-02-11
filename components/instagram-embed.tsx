"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { extractInstagramId, isReel } from "@/lib/instagram-config";

type InstagramEmbedProps = {
  urlOrId: string;
  className?: string;
  captioned?: boolean;
};

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

function buildInstagramPermalink(urlOrId: string) {
  if (urlOrId.startsWith("http")) {
    const cleaned = urlOrId.split("?")[0];
    return cleaned.endsWith("/") ? cleaned : `${cleaned}/`;
  }

  const id = extractInstagramId(urlOrId);
  return isReel(urlOrId)
    ? `https://www.instagram.com/reel/${id}/`
    : `https://www.instagram.com/p/${id}/`;
}

export function InstagramEmbed({
  urlOrId,
  className = "",
  captioned = true,
}: InstagramEmbedProps) {
  const [timedOut, setTimedOut] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const permalink = useMemo(() => buildInstagramPermalink(urlOrId), [urlOrId]);
  const reel = useMemo(() => isReel(urlOrId), [urlOrId]);
  const fallbackUrl = useMemo(() => {
    if (urlOrId.startsWith("http")) return urlOrId;
    return buildInstagramPermalink(urlOrId);
  }, [urlOrId]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setTimedOut(false);

    let attempts = 0;
    const maxAttempts = 40;

    const interval = window.setInterval(() => {
      attempts += 1;
      window.instgrm?.Embeds?.process();

      const hasIframe = !!wrapperRef.current?.querySelector("iframe");
      if (hasIframe || attempts >= maxAttempts) {
        if (!hasIframe && attempts >= maxAttempts) {
          setTimedOut(true);
        }
        window.clearInterval(interval);
      }
    }, 300);

    return () => window.clearInterval(interval);
  }, [permalink]);

  if (timedOut) {
    return (
      <div className={`instagram-embed-fallback ${className}`}>
        <p style={{ margin: 0 }}>Non riusciamo a caricare questo contenuto Instagram.</p>
        <a
          href={fallbackUrl}
          target="_blank"
          rel="noreferrer"
        >
          Apri su Instagram
        </a>
      </div>
    );
  }

  return (
    <div className={`instagram-embed-wrapper ${className}`} ref={wrapperRef}>
      <blockquote
        className="instagram-media"
        {...(captioned && !reel ? { "data-instgrm-captioned": "" } : {})}
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
      />
      <noscript>
        <a href={fallbackUrl} target="_blank" rel="noreferrer">
          Apri il contenuto su Instagram
        </a>
      </noscript>
    </div>
  );
}

