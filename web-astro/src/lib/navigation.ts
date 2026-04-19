export const mainNavigation = [
  { href: "/", label: "Home", index: "01" },
  { href: "/centro-estetico-carmagnola", label: "Carmagnola", index: "02" },
  { href: "/listino-estetica-laser", label: "Trattamenti", index: "03" },
  { href: "/epilazione-laser-carmagnola", label: "Laser", index: "04" },
  { href: "/protocolli-epigenetici", label: "Protocolli", index: "05" },
  { href: "/chi-siamo", label: "Chi siamo", index: "06" },
  { href: "/contatti", label: "Contatti", index: "07" },
] as const;

export type NavItem = (typeof mainNavigation)[number];
