export const mainNavigation = [
  { href: "/", label: "Home", index: "01" },
  { href: "/metodo-rebel", label: "Metodo", index: "02" },
  { href: "/protocolli-epigenetici", label: "Percorsi", index: "03" },
  { href: "/epilazione-laser-carmagnola", label: "Laser", index: "04" },
  { href: "/listino-estetica-laser", label: "Beauty", index: "05" },
  { href: "/chi-siamo", label: "Studio", index: "06" },
  { href: "/contatti", label: "Prenota", index: "07" },
] as const;

export type NavItem = (typeof mainNavigation)[number];
