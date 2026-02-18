"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type SliderImage = {
  src: string;
  alt: string;
};

type HeroPhotoSliderProps = {
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

    // Safari < 14 uses addListener/removeListener.
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

export function HeroPhotoSlider({ images, intervalMs = 6200, className }: HeroPhotoSliderProps) {
  const safeImages = useMemo(() => images.filter((img) => Boolean(img?.src)), [images]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);
  const [rendered, setRendered] = useState<number[]>(() => [0]);

  const goTo = (nextIndex: number) => {
    if (safeImages.length === 0) return;
    const normalized = ((nextIndex % safeImages.length) + safeImages.length) % safeImages.length;
    setActive(normalized);
  };

  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  const nextIndex = safeImages.length > 0 ? (active + 1) % safeImages.length : 0;
  const prevIndex =
    safeImages.length > 0 ? (active - 1 + safeImages.length) % safeImages.length : 0;
  const renderedSet = useMemo(() => new Set(rendered), [rendered]);

  useEffect(() => {
    if (safeImages.length === 0) return;
    setRendered((current) => {
      const next = new Set(current);
      next.add(active);
      next.add(nextIndex);
      next.add(prevIndex);
      return Array.from(next);
    });
  }, [active, nextIndex, prevIndex, safeImages.length]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (paused) return;
    if (safeImages.length <= 1) return;

    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((value) => (value + 1) % safeImages.length);
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
      aria-label="Foto del centro"
    >
      <div className="hero-photo-slider-stage">
        {safeImages.map((img, index) => {
          const isActive = index === active;
          const shouldRenderImage = renderedSet.has(index);
          return (
            <div
              key={`${img.src}-${index}`}
              className={`hero-photo-slider-slide${isActive ? " is-active" : ""}`}
              aria-hidden={isActive ? "false" : "true"}
            >
              {shouldRenderImage ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="hero-photo-slider-image"
                />
              ) : null}
            </div>
          );
        })}
      </div>

      {safeImages.length > 1 ? (
        <div className="hero-photo-slider-ui" aria-label="Controlli slider">
          <button
            type="button"
            className="hero-photo-slider-arrow"
            onClick={prev}
            aria-label="Foto precedente"
          >
            ‹
          </button>
          <div className="hero-photo-slider-dots" role="tablist" aria-label="Seleziona foto">
            {safeImages.map((img, index) => {
              const isActive = index === active;
              return (
                <button
                  key={`${img.src}-dot-${index}`}
                  type="button"
                  className={`hero-photo-slider-dot${isActive ? " is-active" : ""}`}
                  onClick={() => goTo(index)}
                  aria-label={`Vai alla foto ${index + 1}`}
                  aria-current={isActive ? "true" : "false"}
                />
              );
            })}
          </div>
          <button
            type="button"
            className="hero-photo-slider-arrow"
            onClick={next}
            aria-label="Foto successiva"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}

