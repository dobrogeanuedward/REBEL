import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer
      style={{
        marginTop: 70,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(14,10,24,0.45)",
      }}
    >
      <div className="container" style={{ padding: "2.4rem 0 2.8rem" }}>
        <div className="grid grid-3">
          <div>
            <Image
              src="https://rebelepigenetica.it/assets/rebel/rebel-logo-light.png?v=now"
              alt="Rebel Estetica Epigenetica"
              width={108}
              height={38}
              style={{ marginBottom: "0.65rem", opacity: 0.95 }}
            />
            <p className="eyebrow">Rebel Carmagnola</p>
            <h2 style={{ margin: "0.55rem 0 0.45rem", fontSize: "1.5rem" }}>
              La pelle che si ricorda di essere viva.
            </h2>
            <p className="lead" style={{ marginTop: 0 }}>
              Centro estetico a Carmagnola specializzato in estetica epigenetica,
              trattamenti viso/corpo evoluti e laser Thory.
            </p>
          </div>

          <div>
            <p className="eyebrow">Menu</p>
            <ul className="list-clean" style={{ marginTop: "0.85rem" }}>
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

          <address style={{ fontStyle: "normal" }}>
            <p className="eyebrow">Contatti rapidi</p>
            <ul className="list-clean" style={{ marginTop: "0.85rem" }}>
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

        <p
          style={{
            marginTop: "1.4rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.85rem",
            color: "rgba(248,247,244,0.65)",
          }}
        >
          © {new Date().getFullYear()} {siteConfig.name} · Carmagnola
        </p>
      </div>
    </footer>
  );
}



