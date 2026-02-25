"use client";

import Image from "next/image";
import { useState } from "react";

type StoreGalleryProps = {
  images: Array<{ src: string; alt: string }>;
};

export function StoreGallery({ images }: StoreGalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  const prev = () => setActive((v) => (v - 1 + images.length) % images.length);
  const next = () => setActive((v) => (v + 1) % images.length);

  return (
    <section
      className="store-gallery"
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    >
      <div className="store-gallery-layout">
        <div className="store-gallery-main">
          <Image
            src={images[active].src}
            alt={images[active].alt}
            width={1600}
            height={900}
            className="store-gallery-main-image"
            priority={active < 2}
            draggable={false}
          />
          <span className="store-gallery-watermark" aria-hidden="true" />
          <div className="store-gallery-overlay">
            <button type="button" onClick={prev} aria-label="Elemento precedente">
              ‹
            </button>
            <span>
              {active + 1} / {images.length}
            </span>
            <button type="button" onClick={next} aria-label="Elemento successivo">
              ›
            </button>
          </div>
        </div>

        <div className="store-gallery-thumbs" role="list">
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              role="listitem"
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Apri elemento ${index + 1}`}
            >
              <Image src={img.src} alt={img.alt} width={520} height={360} draggable={false} />
              <span className="store-gallery-thumb-watermark" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

