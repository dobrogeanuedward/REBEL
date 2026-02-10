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
        <Link
          href="/"
          style={{ fontWeight: 700, letterSpacing: "0.04em" }}
          className="header-logo desktop-logo"
          aria-label="Rebel Home"
        >
          <Image
            src="https://rebelepigenetica.it/assets/rebel/rebel-logo-light.png?v=now"
            alt="Rebel Estetica Epigenetica"
            width={108}
            height={38}
            className="header-logo-image"
            priority
          />
        </Link>

        <nav aria-label="Navigazione principale desktop" className="desktop-nav desktop-nav-shell">
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
        </nav>

        <div className="desktop-cta">
          <Link href="/contatti" className="button button-primary">
            Prenota ora
          </Link>
        </div>

        <div className="mobile-header-shell">
          <Link href="/" className="header-logo mobile-logo" aria-label="Rebel Home">
            <Image
              src="https://rebelepigenetica.it/assets/rebel/rebel-logo-light.png?v=now"
              alt="Rebel Estetica Epigenetica"
              width={156}
              height={56}
              className="mobile-logo-image"
              priority
            />
          </Link>
          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-dropdown"
            onClick={() => setOpen((v) => !v)}
            className={`mobile-pill-toggle${open ? " is-open" : ""}`}
          >
            Naviga
            <span className="mobile-pill-chevron" aria-hidden="true">
              v
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav-dropdown" className={`mobile-nav-dropdown${open ? " is-open" : ""}`}>
        <div className="container mobile-nav-inner">
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
          </div>
        </div>
      </div>
    </header>
  );
}



