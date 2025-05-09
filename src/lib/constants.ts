export const HEADER_HEIGHT = 96;

export enum Routes {
  home = "/",
  PVC = "/pvc",
  SteelFrame = "/steelframe",
  Solar = "/solar-energy",
  Modular = "/modular",
  About = "/about",
  News = "/news",
  Contact = "/contact-us",
}

export const links = [
  { href: Routes.home, label: "HOME" },
  { href: Routes.PVC, label: "PCV" },
  { href: Routes.SteelFrame, label: "MATERIAL DE PRODUCCIÓN EN SECO" },
  { href: Routes.Solar, label: "ENERGÍA SOLAR" },
  { href: Routes.Modular, label: "ARQUITECTURA MODULAR" },
  { href: Routes.About, label: "AISPLAC" },
  { href: Routes.News, label: "NOVEDADES" },
  { href: Routes.Contact, label: "CONTACT US" },
];