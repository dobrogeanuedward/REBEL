export const mainNavigation = [
  { href: "/", label: "Home", index: "01" },
  { href: "/centro-estetico-carmagnola", label: "Centro", index: "02" },
  { href: "/chi-siamo", label: "Chi siamo", index: "03" },
  { href: "/metodo-rebel", label: "Metodo", index: "04" },
  { href: "/epilazione-laser-carmagnola", label: "Laser", index: "05" },
  { href: "/listino-estetica-laser", label: "Trattamenti", index: "06" },
  { href: "/contatti", label: "Contatti", index: "07" },
] as const;

export type NavItem = (typeof mainNavigation)[number];
