import { useEffect, useState } from "react";
import { mainNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

interface Props { pathname: string; }

export default function SiteHeader({ pathname }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    document.addEventListener("astro:before-swap", close);
    return () => document.removeEventListener("astro:before-swap", close);
  }, []);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="site-header rebel-site-header" data-scrolled={scrolled}>
        <div className="site-header__inner">
          <a href="/" className="site-header__brand rebel-site-header__brand" aria-label="Rebel Estetica Epigenetica — Home">
            <img src={siteConfig.assets.logoLight} alt="Rebel Estetica Epigenetica" className="site-header__logo" width={340} height={116} decoding="async" />
            <span className="rebel-site-header__signature">Be Beautiful. Be Rebel.</span>
          </a>

          <nav className="site-header__nav" aria-label="Navigazione principale">
            {mainNavigation.filter((it) => it.href !== "/" && it.href !== "/contatti").map((it) => (
              <a key={it.href} href={it.href} className="site-header__link" data-active={isActive(it.href)}>{it.label}</a>
            ))}
          </nav>

          <a href="/contatti" className="btn btn--primary btn--sm site-header__cta" aria-label="Prenota la valutazione Rebel">Prenota</a>

          <button type="button" className="burger" data-open={open} aria-label={open ? "Chiudi menu" : "Apri menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open ? (
        <div className="drawer rebel-drawer" data-open={open} role="dialog" aria-modal="true">
          <div className="drawer__head">
            <a href="/" className="site-header__brand rebel-site-header__brand" aria-label="Rebel Estetica Epigenetica — Home">
              <img src={siteConfig.assets.logoLight} alt="Rebel Estetica Epigenetica" className="site-header__logo" width={340} height={116} decoding="async" />
              <span className="rebel-site-header__signature">Be Beautiful. Be Rebel.</span>
            </a>
            <button type="button" className="burger" data-open={true} onClick={() => setOpen(false)} aria-label="Chiudi menu"><span /><span /><span /></button>
          </div>
          <p className="rebel-drawer__intro">Metodo, percorsi, tecnologia e beauty essentials. Tutto parte dalla tua Mappa Rebel.</p>
          <nav className="drawer__nav" aria-label="Menu mobile">
            {mainNavigation.map((it) => (
              <a key={it.href} href={it.href} className="drawer__link" data-active={isActive(it.href)}><span>{it.index}</span>{it.label}</a>
            ))}
          </nav>
          <div className="drawer__foot">
            <a href="/contatti" className="btn btn--primary">Prenota la valutazione</a>
            <a href={siteConfig.social.whatsapp} className="btn btn--secondary" target="_blank" rel="noreferrer">WhatsApp</a>
            <small>Be Cool. Be Rebel.</small>
          </div>
        </div>
      ) : null}
    </>
  );
}
