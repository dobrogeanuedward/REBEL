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
                  src="https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769422/rebel-logo-light_fvlqgi.webp"
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
          </div>

          <div className="footer-panel">
            <p className="footer-title">Menu</p>
            <ul className="list-clean footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/chi-siamo">Chi siamo</Link>
              </li>
              <li>
                <Link href="/metodo-rebel">Metodo Rebel</Link>
              </li>
              <li>
                <Link href="/protocolli-epigenetici">Protocolli</Link>
              </li>
              <li>
                <Link href="/listino-estetica-laser">Listino Estetica + Laser</Link>
              </li>
              <li>
                <Link href="/servizi">Servizi</Link>
              </li>
              <li>
                <Link href="/competenze">Guide e competenze</Link>
              </li>
              <li>
                <Link href="/tecnologia-thory">Tecnologia</Link>
              </li>
              <li>
                <Link href="/localita">Localita servite</Link>
              </li>
              <li>
                <Link href="/contatti">Contatti</Link>
              </li>
            </ul>
          </div>

          <address className="footer-panel footer-contact">
            <p className="footer-title">Contatti rapidi</p>
            <ul className="list-clean footer-links">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={siteConfig.social.maps} target="_blank" rel="noreferrer">
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
                src="https://res.cloudinary.com/dx8tfq82f/image/upload/v1770769422/rebel-logo-light_fvlqgi.webp"
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



