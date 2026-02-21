import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-grid">
          <div className="footer-panel footer-brand">
            <div className="footer-brand-head">
              <span className="logo-glow logo-glow--xl">
                <Image
                  src={siteConfig.assets.logoLight}
                  alt="Rebel Estetica Epigenetica"
                  width={180}
                  height={62}
                  className="footer-logo"
                />
              </span>
              <span className="footer-brand-location">Carmagnola</span>
            </div>
            <h2 className="footer-tagline">La pelle che si ricorda di essere viva.</h2>
            <p className="footer-copy">
              Centro estetico a Carmagnola specializzato in estetica epigenetica,
              trattamenti viso/corpo evoluti ed epilazione laser a Carmagnola.
            </p>
            <div className="footer-brand-socials">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer-brand-social footer-brand-instagram"
                aria-label="Apri il profilo Instagram di Rebel"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.35" cy="6.65" r="1.2" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.social.treatwell}
                target="_blank"
                rel="noreferrer"
                className="footer-brand-social footer-brand-treatwell"
                aria-label="Apri la pagina Treatwell di Rebel"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 6h16" />
                  <path d="M8 6v12" />
                  <path d="M8 12h10" />
                  <path d="M18 12v6" />
                </svg>
                <span>Treatwell</span>
              </a>
            </div>
          </div>

          <div className="footer-panel footer-panel-menu">
            <p className="footer-title">Menu</p>
            <p className="footer-panel-subtitle">Percorsi e pagine principali</p>
            <ul className="list-clean footer-links footer-links-menu">
              <li>
                <Link href="/">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/centro-estetico-carmagnola">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Centro Estetico Carmagnola</span>
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Chi siamo</span>
                </Link>
              </li>
              <li>
                <Link href="/metodo-rebel">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Metodo Rebel</span>
                </Link>
              </li>
              <li>
                <Link href="/protocolli-epigenetici">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Protocolli</span>
                </Link>
              </li>
              <li>
                <Link href="/listino-estetica-laser">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Listino Estetica + Laser</span>
                </Link>
              </li>
              <li>
                <Link href="/epilazione-laser-carmagnola">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Epilazione Laser Carmagnola</span>
                </Link>
              </li>
              <li>
                <Link href="/servizi">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Servizi</span>
                </Link>
              </li>
              <li>
                <Link href="/competenze">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Guide e competenze</span>
                </Link>
              </li>
              <li>
                <Link href="/localita">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Localita servite</span>
                </Link>
              </li>
              <li>
                <Link href="/contatti">
                  <span className="footer-link-bullet" aria-hidden="true">✦</span>
                  <span>Contatti</span>
                </Link>
              </li>
            </ul>
          </div>

          <address className="footer-panel footer-contact footer-panel-contact">
            <p className="footer-title">Contatti rapidi</p>
            <p className="footer-panel-subtitle">Scrivici o chiamaci quando vuoi</p>
            <ul className="list-clean footer-contact-list">
              <li className="footer-contact-row">
                <span className="footer-contact-label">Telefono</span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="footer-contact-value">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="footer-contact-row">
                <span className="footer-contact-label">Email</span>
                <a href={`mailto:${siteConfig.email}`} className="footer-contact-value">
                  {siteConfig.email}
                </a>
              </li>
              <li className="footer-contact-row">
                <span className="footer-contact-label">WhatsApp</span>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="footer-contact-value">
                  WhatsApp
                </a>
              </li>
              <li className="footer-contact-row">
                <span className="footer-contact-label">Indirizzo</span>
                <a href={siteConfig.social.maps} target="_blank" rel="noreferrer" className="footer-contact-value">
                  {siteConfig.address.streetAddress}, {siteConfig.address.locality}
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="logo-glow logo-glow--xs">
              <Image
                src={siteConfig.assets.logoLight}
                alt=""
                width={70}
                height={24}
                className="footer-logo-mini"
              />
            </span>
            <span>
              © {new Date().getFullYear()} {siteConfig.name} · Carmagnola
            </span>
          </div>
          <span className="footer-bottom-note">
            Estetica epigenetica, viso, corpo ed epilazione laser a Carmagnola.
          </span>
        </div>
      </div>
    </footer>
  );
}



