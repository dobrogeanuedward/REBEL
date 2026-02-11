import Link from "next/link";
import { InstagramEmbed } from "@/components/instagram-embed";
import { instagramConfig, isReel } from "@/lib/instagram-config";
import { siteConfig } from "@/lib/site-config";

type InstagramFeedProps = {
  showReels?: boolean;
  showPosts?: boolean;
  maxReels?: number;
  maxPosts?: number;
  hidePostsOnMobile?: boolean;
};

/**
 * Componente per mostrare feed Instagram (reel e post)
 */
export function InstagramFeed({
  showReels = true,
  showPosts = true,
  maxReels = 3,
  maxPosts = 3,
  hidePostsOnMobile = false,
}: InstagramFeedProps) {
  const reels = instagramConfig.featuredReels.filter((item) => isReel(item)).slice(0, maxReels);
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
      {showReels && reels.length > 0 && (
        <section className="instagram-group instagram-group--reels-showcase">
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
          <div className="instagram-grid instagram-grid--reels">
            {reels.map((reel, index) => (
              <article key={index} className="instagram-feed-item glow-card">
                <InstagramEmbed urlOrId={reel} captioned={false} />
              </article>
            ))}
          </div>
        </section>
      )}

      {showPosts && posts.length > 0 && (
        <section
          className={`instagram-group instagram-group--posts-showcase${hidePostsOnMobile ? " instagram-group--mobile-hidden" : ""}`}
        >
          <div className="instagram-group-head">
            <div>
              <h3 className="instagram-group-title">Post in evidenza</h3>
              <p className="instagram-group-subtitle">
                REBEL - CENTRO ESTETICO A CARMAGNOLA
              </p>
            </div>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="instagram-group-link"
            >
              Vedi tutti <span>→</span>
            </Link>
          </div>
          <div className="instagram-grid instagram-grid--posts">
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

