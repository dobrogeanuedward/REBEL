import { useEffect, useRef, useState } from "react";
import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

interface Props { pathname: string; }

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function SiteHeader({ pathname }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = () => setOpen(false);
    const closeAtDesktop = () => {
      if (window.matchMedia("(min-width: 1180px)").matches) close();
    };

    document.addEventListener("astro:before-swap", close);
    window.addEventListener("resize", closeAtDesktop, { passive: true });
    return () => {
      document.removeEventListener("astro:before-swap", close);
      window.removeEventListener("resize", closeAtDesktop);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const drawer = drawerRef.current;
    const previousOverflow = document.documentElement.style.overflow;
    const previousDrawerState = document.body.dataset.rebelDrawerOpen;
    const backgroundState = Array.from(
      document.querySelectorAll<HTMLElement>(".rebel-site-header, #content, .rebel-site-footer, .whatsapp-live"),
    ).map((node) => ({
      node,
      inert: node.inert,
      ariaHidden: node.getAttribute("aria-hidden"),
    }));

    document.documentElement.style.overflow = "hidden";
    document.body.dataset.rebelDrawerOpen = "true";
    backgroundState.forEach(({ node }) => {
      node.inert = true;
      node.setAttribute("aria-hidden", "true");
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawer) return;
      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!active || !drawer.contains(active)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusFrame = window.requestAnimationFrame(() => closeRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = previousOverflow;
      if (previousDrawerState === undefined) delete document.body.dataset.rebelDrawerOpen;
      else document.body.dataset.rebelDrawerOpen = previousDrawerState;
      backgroundState.forEach(({ node, inert, ariaHidden }) => {
        node.inert = inert;
        if (ariaHidden === null) node.removeAttribute("aria-hidden");
        else node.setAttribute("aria-hidden", ariaHidden);
      });
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="site-header rebel-site-header" data-scrolled={scrolled}>
        <div className="site-header__inner">
          <a href="/" className="site-header__brand rebel-site-header__brand" aria-label="Rebel Estetica Epigenetica — Home">
            <img src={siteConfig.assets.logoLight} alt="Rebel Estetica Epigenetica" className="site-header__logo" width={1366} height={577} decoding="async" />
            <span className="rebel-site-header__signature">Be Beautiful. Be Rebel.</span>
          </a>

          <nav className="site-header__nav" aria-label="Navigazione principale">
            {mainNavigation.filter((it) => it.href !== "/" && it.href !== "/contatti").map((it) => (
              <a key={it.href} href={it.href} className="site-header__link" data-active={isActive(it.href)} aria-current={isActive(it.href) ? "page" : undefined}>{it.label}</a>
            ))}
          </nav>

          <a href="/contatti" className="btn btn--primary btn--sm site-header__cta" aria-label="Prenota la valutazione REBEL">Prenota</a>
          <button
            ref={triggerRef}
            type="button"
            className="burger"
            data-open={open}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="rebel-mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open ? (
        <div
          ref={drawerRef}
          id="rebel-mobile-menu"
          className="drawer rebel-drawer"
          data-open={open}
          role="dialog"
          aria-modal="true"
          aria-label="Menu di navigazione"
        >
          <div className="drawer__head">
            <a href="/" className="site-header__brand rebel-site-header__brand" aria-label="Rebel Estetica Epigenetica — Home" onClick={closeMenu}>
              <img src={siteConfig.assets.logoLight} alt="Rebel Estetica Epigenetica" className="site-header__logo" width={1366} height={577} decoding="async" />
              <span className="rebel-site-header__signature">Be Beautiful. Be Rebel.</span>
            </a>
            <button ref={closeRef} type="button" className="burger" data-open={true} onClick={closeMenu} aria-label="Chiudi menu"><span /><span /><span /></button>
          </div>

          <p className="rebel-drawer__intro">Trattamenti viso e corpo, Laser ICE Polar, beauty, tecnologie, prezzi e prenotazione della prima visita.</p>
          <nav className="drawer__nav" aria-label="Menu mobile">
            {mainNavigation.map((it) => (
              <a key={it.href} href={it.href} className="drawer__link" data-active={isActive(it.href)} aria-current={isActive(it.href) ? "page" : undefined} onClick={closeMenu}>
                <span>{it.index}</span>{it.label}
              </a>
            ))}
          </nav>

          <div className="drawer__foot">
            <a href="/contatti" className="btn btn--primary" onClick={closeMenu}>Prenota la prima visita</a>
            <a href={siteConfig.social.whatsapp} className="btn btn--secondary" target="_blank" rel="noreferrer">WhatsApp</a>
            <small>Be Beautiful. Be Rebel.</small>
          </div>
        </div>
      ) : null}
    </>
  );
}
