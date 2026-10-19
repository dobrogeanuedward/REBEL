export const mainNavigation = [
  { href: "/", label: "Home", index: "01" },
  { href: "/metodo-rebel", label: "Come lavoriamo", index: "02" },
  { href: "/percorsi", label: "Percorsi Epigenetici REBEL", index: "03" },
  { href: "/servizi", label: "Servizi e trattamenti", index: "04" },
  { href: "/tecnologie-rebel", label: "Tecnologie", index: "05" },
  { href: "/epilazione-laser-carmagnola", label: "Laser", index: "06" },
  { href: "/listino-estetica-laser", label: "Listino", index: "07" },
  { href: "/chi-siamo", label: "Studio", index: "08" },
  { href: "/contatti", label: "Prenota", index: "09" },
] as const;

export type NavItem = (typeof mainNavigation)[number];
