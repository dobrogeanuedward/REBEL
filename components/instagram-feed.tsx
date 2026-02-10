import Link from "next/link";
import Script from "next/script";
import { InstagramEmbed } from "@/components/instagram-embed";
import { instagramConfig } from "@/lib/instagram-config";
import { siteConfig } from "@/lib/site-config";

type InstagramFeedProps = {
  showReels?: boolean;
  showPosts?: boolean;
  maxReels?: number;
  maxPosts?: number;
};

/**
 * Componente per mostrare feed Instagram (reel e post)
 */
export function InstagramFeed({
  showReels = true,
  showPosts = true,
  maxReels = 3,
  maxPosts = 3,
}: InstagramFeedProps) {
  const reels = instagramConfig.featuredReels.slice(0, maxReels);
  const posts = instagramConfig.latestPosts.slice(0, maxPosts);

  if (reels.length === 0 && posts.length === 0) {
    return (
      <div className="instagram-empty-state">
        <p style={{ margin: 0 }}>
          Aggiungi i link dei post e reel Instagram in{" "}
          <code>lib/instagram-config.ts</code>
        </p>
        <Link
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="button button-secondary instagram-empty-state-link"
        >
          Vai al profilo Instagram
        </Link>
      </div>
    );
  }

  return (
    <div className="instagram-feed">
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      {showReels && reels.length > 0 && (
        <section className="instagram-group">
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
          <div className="instagram-grid">
            {reels.map((reel, index) => (
              <article key={index} className="instagram-feed-item glow-card">
                <InstagramEmbed urlOrId={reel} />
              </article>
            ))}
          </div>
        </section>
      )}

      {showPosts && posts.length > 0 && (
        <section className="instagram-group">
          <div className="instagram-group-head">
            <h3 className="instagram-group-title">Ultimi {posts.length} post</h3>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="instagram-group-link"
            >
              Vedi tutti <span>→</span>
            </Link>
          </div>
          <div className="instagram-grid">
            {posts.map((post, index) => (
              <article key={index} className="instagram-feed-item glow-card">
                <InstagramEmbed urlOrId={post} />
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

