import { useState } from "react";

const LOW_FETCH_PRIORITY = { fetchpriority: "low" } as const;

type Props = {
  images: Array<{ src: string; alt: string; width?: number; height?: number }>;
};

export default function StoreGallery({ images }: Props) {
  const [active, setActive] = useState(0);
  if (images.length === 0) return null;

  const prev = () => setActive((v) => (v - 1 + images.length) % images.length);
  const next = () => setActive((v) => (v + 1) % images.length);
  const selectThumb = (index: number, list: Element | null) => {
    const normalized = (index + images.length) % images.length;
    setActive(normalized);
    list?.querySelectorAll<HTMLButtonElement>("button")[normalized]?.focus();
  };

  return (
    <section className="store-gallery" aria-label="Gli spazi dello studio REBEL">
      <div className="store-gallery__layout">
        <div className="store-gallery__main">
          <img
            {...LOW_FETCH_PRIORITY}
            src={images[active].src}
            alt={images[active].alt}
            className="store-gallery__main-image"
            width={images[active].width}
            height={images[active].height}
            loading="lazy"
            decoding="async"
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

        <ul className="store-gallery__thumbs" aria-label="Seleziona una fotografia dello studio">
          {images.map((img, index) => (
            <li key={img.src}>
              <button
                type="button"
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  const list = event.currentTarget.closest("ul");
                  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault();
                    selectThumb(index + 1, list);
                  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault();
                    selectThumb(index - 1, list);
                  } else if (event.key === "Home") {
                    event.preventDefault();
                    selectThumb(0, list);
                  } else if (event.key === "End") {
                    event.preventDefault();
                    selectThumb(images.length - 1, list);
                  }
                }}
                aria-label={`Mostra fotografia ${index + 1}: ${img.alt}`}
                aria-pressed={index === active}
                tabIndex={index === active ? 0 : -1}
              >
                <img src={img.src} alt="" width={img.width} height={img.height} loading="lazy" decoding="async" />
                <span className="store-gallery__thumb-watermark" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
