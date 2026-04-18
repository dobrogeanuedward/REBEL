import { useEffect, useMemo, useRef, useState } from "react";

type SliderImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type Props = {
  images: SliderImage[];
  intervalMs?: number;
  className?: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(Boolean(mq.matches));
    update();
    try {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } catch {
      const legacy = mq as unknown as {
        addListener: (cb: () => void) => void;
        removeListener: (cb: () => void) => void;
      };
      legacy.addListener(update);
      return () => legacy.removeListener(update);
    }
  }, []);
  return reduced;
}

export default function HeroPhotoSlider({ images, intervalMs = 6200, className }: Props) {
  const safeImages = useMemo(() => images.filter((img) => Boolean(img?.src)), [images]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [rendered, setRendered] = useState<number[]>(() => [0]);

  const goTo = (i: number) => {
    if (safeImages.length === 0) return;
    const n = ((i % safeImages.length) + safeImages.length) % safeImages.length;
    setActive(n);
  };
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const nextIndex = safeImages.length > 0 ? (active + 1) % safeImages.length : 0;
  const prevIndex =
    safeImages.length > 0 ? (active - 1 + safeImages.length) % safeImages.length : 0;
  const renderedSet = useMemo(() => new Set(rendered), [rendered]);

  useEffect(() => {
    if (safeImages.length === 0) return;
    setRendered((curr) => {
      const s = new Set(curr);
      s.add(active);
      s.add(nextIndex);
      s.add(prevIndex);
      return Array.from(s);
    });
  }, [active, nextIndex, prevIndex, safeImages.length]);

  useEffect(() => {
    if (prefersReducedMotion || paused || safeImages.length <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((v) => (v + 1) % safeImages.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [intervalMs, paused, prefersReducedMotion, safeImages.length]);

  if (safeImages.length === 0) return null;

  return (
    <div
      className={["hero-photo-slider", className].filter(Boolean).join(" ")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galleria del centro"
    >
      <div className="hero-photo-slider__stage">
        {safeImages.map((img, index) => {
          const isActive = index === active;
          const shouldRender = renderedSet.has(index);
          return (
            <div
              key={`${img.src}-${index}`}
              className={`hero-photo-slider__slide${isActive ? " is-active" : ""}`}
              aria-hidden={isActive ? "false" : "true"}
            >
              {shouldRender ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="hero-photo-slider__image"
                  style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                />
              ) : null}
            </div>
          );
        })}
        <div className="hero-photo-slider__veil" aria-hidden="true" />
      </div>

      {safeImages.length > 1 ? (
        <div className="hero-photo-slider__ui" aria-label="Controlli slider">
          <button type="button" className="hero-photo-slider__arrow" onClick={prev} aria-label="Precedente">
            ‹
          </button>
          <div className="hero-photo-slider__dots" role="tablist" aria-label="Seleziona elemento">
            {safeImages.map((img, index) => {
              const isActive = index === active;
              return (
                <button
                  key={`${img.src}-dot-${index}`}
                  type="button"
                  className={`hero-photo-slider__dot${isActive ? " is-active" : ""}`}
                  onClick={() => goTo(index)}
                  aria-label={`Vai a ${index + 1}`}
                  aria-current={isActive ? "true" : "false"}
                />
              );
            })}
          </div>
          <button type="button" className="hero-photo-slider__arrow" onClick={next} aria-label="Successivo">
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
