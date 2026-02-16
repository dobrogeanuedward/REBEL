import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function NotFoundPage() {
  return (
    <main className="page-hero">
      <div className="container">
        <p className="eyebrow">Pagina non trovata</p>
        <h1 className="page-title" style={{ marginTop: "0.6rem" }}>
          Questa pagina non è disponibile.
        </h1>
        <p className="lead">
          Puoi tornare alla home oppure navigare i servizi principali di Rebel.
        </p>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
          <Link href="/" className="button button-primary">
            Torna alla home
          </Link>
          <Link href="/servizi" className="button button-secondary">
            Vai ai servizi
          </Link>
        </div>
      </div>
    </main>
  );
}

