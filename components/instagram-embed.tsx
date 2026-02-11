"use client";

import { useMemo } from "react";
import { extractInstagramId, isReel } from "@/lib/instagram-config";

type InstagramEmbedProps = {
  urlOrId: string;
  className?: string;
  captioned?: boolean;
};

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
  const permalink = useMemo(() => buildInstagramPermalink(urlOrId), [urlOrId]);
  const reel = useMemo(() => isReel(urlOrId), [urlOrId]);
  const embedUrl = useMemo(() => {
    if (reel) return `${permalink}embed/`;
    if (captioned) return `${permalink}embed/captioned/`;
    return `${permalink}embed/`;
  }, [captioned, permalink, reel]);

  return (
    <div className={`instagram-embed-wrapper ${reel ? "is-reel" : "is-post"} ${className}`.trim()}>
      <iframe
        src={embedUrl}
        title={reel ? "Instagram Reel" : "Instagram Post"}
        className="instagram-embed-iframe"
        loading="lazy"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms allow-top-navigation-by-user-activation"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <noscript>
        <a href={permalink} target="_blank" rel="noreferrer">
          Apri il contenuto su Instagram
        </a>
      </noscript>
    </div>
  );
}

