"use client";

import Link from "next/link";
import { useEffect } from "react";
import { extractInstagramId } from "@/lib/instagram-config";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

type InstagramReelsShowcaseProps = {
  reels: string[];
};

function toReelPermalink(urlOrId: string): string {
  if (urlOrId.startsWith("http")) {
    const cleaned = urlOrId.split("?")[0];
    if (cleaned.includes("/reel/")) return cleaned.endsWith("/") ? cleaned : `${cleaned}/`;
    return `https://www.instagram.com/reel/${extractInstagramId(urlOrId)}/`;
  }

  return `https://www.instagram.com/reel/${extractInstagramId(urlOrId)}/`;
}

function processInstagramEmbeds() {
  if (typeof window === "undefined") return;
  window.instgrm?.Embeds?.process();
}

export function InstagramReelsShowcase({ reels }: InstagramReelsShowcaseProps) {
  useEffect(() => {
    const existingScript = document.getElementById("instagram-embed-script");

    if (existingScript) {
      processInstagramEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    script.onload = () => processInstagramEmbeds();
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => processInstagramEmbeds(), 80);
    return () => window.clearTimeout(timer);
  }, [reels]);

  return (
    <section className="instagram-group instagram-reels-rebuild">
      <div className="instagram-group-head">
        <h3 className="instagram-group-title">Reel in evidenza</h3>
        <Link
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="instagram-group-link"
        >
          Vedi tutti <span>→</span>
        </Link>
      </div>

      <div className="instagram-reels-grid">
        {reels.map((reel, index) => {
          const permalink = toReelPermalink(reel);
          return (
            <article key={`${permalink}-${index}`} className="instagram-reel-card">
              <blockquote
                className="instagram-media instagram-reel-embed"
                data-instgrm-permalink={permalink}
                data-instgrm-version="14"
                data-instgrm-captioned="false"
              >
                <a href={permalink} target="_blank" rel="noreferrer">
                  Guarda il reel su Instagram
                </a>
              </blockquote>
            </article>
          );
        })}
      </div>
    </section>
  );
}

