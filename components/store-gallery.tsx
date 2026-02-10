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
    <section className="store-gallery">
      <div className="store-gallery-main">
        <Image
          src={images[active].src}
          alt={images[active].alt}
          width={1400}
          height={980}
          className="store-gallery-main-image"
          priority={active < 2}
        />
        <div className="store-gallery-overlay">
          <button type="button" onClick={prev} aria-label="Foto precedente">
            ‹
          </button>
          <span>
            {active + 1} / {images.length}
          </span>
          <button type="button" onClick={next} aria-label="Foto successiva">
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
            aria-label={`Apri foto ${index + 1}`}
          >
            <Image src={img.src} alt={img.alt} width={260} height={180} />
          </button>
        ))}
      </div>
    </section>
  );
}

