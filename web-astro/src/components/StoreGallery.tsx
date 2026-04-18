import { useState } from "react";

type Props = {
  images: Array<{ src: string; alt: string }>;
};

export default function StoreGallery({ images }: Props) {
  const [active, setActive] = useState(0);
  if (images.length === 0) return null;

  const prev = () => setActive((v) => (v - 1 + images.length) % images.length);
  const next = () => setActive((v) => (v + 1) % images.length);

  return (
    <section
      className="store-gallery"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="store-gallery__layout">
        <div className="store-gallery__main">
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="store-gallery__main-image"
            loading={active < 2 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
          <span className="store-gallery__watermark" aria-hidden="true" />
          <div className="store-gallery__overlay">
            <button type="button" onClick={prev} aria-label="Precedente">‹</button>
            <span>
              {active + 1} / {images.length}
            </span>
            <button type="button" onClick={next} aria-label="Successivo">›</button>
          </div>
        </div>

        <div className="store-gallery__thumbs" role="list">
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              role="listitem"
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Apri ${index + 1}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" draggable={false} />
              <span className="store-gallery__thumb-watermark" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
