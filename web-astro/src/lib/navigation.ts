export const mainNavigation = [
  { href: "/", label: "Home", index: "01" },
  { href: "/metodo-rebel", label: "Metodo", index: "02" },
  { href: "/protocolli-epigenetici", label: "Percorsi", index: "03" },
  { href: "/tecnologie-rebel", label: "Tecnologie", index: "04" },
  { href: "/epilazione-laser-carmagnola", label: "Laser", index: "05" },
  { href: "/listino-estetica-laser", label: "Beauty", index: "06" },
  { href: "/chi-siamo", label: "Studio", index: "07" },
  { href: "/contatti", label: "Prenota", index: "08" },
] as const;

export type NavItem = (typeof mainNavigation)[number];
