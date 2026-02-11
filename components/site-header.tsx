"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/lib/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="container site-header-inner">
        <Link href="/" className="header-logo desktop-logo" aria-label="Rebel Home">
          <span className="logo-glow logo-glow--lg">
            <Image
              src="https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769422/rebel-logo-light_fvlqgi.webp"
              alt="Rebel Estetica Epigenetica"
              width={132}
              height={46}
              className="header-logo-image"
              priority
            />
          </span>
        </Link>

        <nav aria-label="Navigazione principale desktop" className="desktop-nav">
          <div className="desktop-nav-shell">
            {mainNavigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`header-nav-link${active ? " is-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="header-actions">
          <Link href="/contatti" className="button button-primary">
            Prenota ora
          </Link>
        </div>

        <div className="mobile-header-shell">
          <Link href="/" className="mobile-brand" aria-label="Rebel Home">
            <span className="logo-glow logo-glow--sm">
              <Image
                src="https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769422/rebel-logo-light_fvlqgi.webp"
                alt="Rebel Estetica Epigenetica"
                width={140}
                height={46}
                className="mobile-brand-logo"
                priority
              />
            </span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-dropdown"
            onClick={() => setOpen((v) => !v)}
            className={`mobile-menu-toggle${open ? " is-open" : ""}`}
          >
            Menu
            <span className="mobile-menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav-dropdown" className={`mobile-nav-dropdown${open ? " is-open" : ""}`}>
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />
        <div className="mobile-nav-sheet" role="dialog" aria-modal="true" aria-label="Menu principale">
          <div className="mobile-nav-head">
            <div className="mobile-nav-brand">
              <span className="logo-glow logo-glow--sm">
                <Image
                  src="https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769422/rebel-logo-light_fvlqgi.webp"
                  alt="Rebel Estetica Epigenetica"
                  width={132}
                  height={44}
                  className="mobile-nav-logo"
                />
              </span>
              <div className="mobile-nav-brand-text">
                <strong>Rebel</strong>
                <span>Estetica Epigenetica</span>
              </div>
            </div>
            <button type="button" className="mobile-nav-close" onClick={() => setOpen(false)}>
              Chiudi
            </button>
          </div>
          <p className="mobile-nav-title">Navigazione</p>
          <nav aria-label="Navigazione principale mobile" className="mobile-nav-grid">
            {mainNavigation.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link${active ? " is-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mobile-nav-cta">
            <Link href="/contatti" className="button button-primary">
              Prenota ora
            </Link>
            <p className="mobile-nav-note">Risposta rapida via WhatsApp o telefono.</p>
          </div>
        </div>
      </div>
    </header>
  );
}



