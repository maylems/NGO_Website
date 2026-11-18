export type PartnerLogo = {
  id: string;
  name: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  source: string;
};

export const partnerLogos: PartnerLogo[] = [
  {
    id: "fao",
    name: "FAO",
    alt: "Logo de l’Organisation des Nations Unies pour l’alimentation et l’agriculture",
    src: "/images/partners/fao.svg",
    width: 257,
    height: 261,
    source:
      "https://commons.wikimedia.org/wiki/File:FAO_logo.svg",
  },
  {
    id: "pam",
    name: "PAM",
    alt: "Logo du Programme alimentaire mondial",
    src: "/images/partners/wfp.svg",
    width: 633,
    height: 295,
    source:
      "https://commons.wikimedia.org/wiki/File:World_Food_Program_logo.svg",
  },
  {
    id: "pnud",
    name: "PNUD",
    alt: "Logo du Programme des Nations Unies pour le développement",
    src: "/images/partners/undp.svg",
    width: 238,
    height: 482,
    source: "https://commons.wikimedia.org/wiki/File:UNDP_logo.svg",
  },
  {
    id: "unesco",
    name: "UNESCO",
    alt: "Logo de l’UNESCO",
    src: "/images/partners/unesco.svg",
    width: 262,
    height: 56,
    source: "https://commons.wikimedia.org/wiki/File:Logo_UNESCO_new.svg",
  },
  {
    id: "oxfam",
    name: "Oxfam",
    alt: "Logo d’Oxfam",
    src: "/images/partners/oxfam.svg",
    width: 600,
    height: 240,
    source: "https://commons.wikimedia.org/wiki/File:Logo_Oxfam_01.svg",
  },
  {
    id: "giz",
    name: "GIZ",
    alt: "Logo de la Deutsche Gesellschaft für Internationale Zusammenarbeit",
    src: "/images/partners/giz.svg",
    width: 105,
    height: 29,
    source:
      "https://commons.wikimedia.org/wiki/File:Deutsche_Gesellschaft_f%C3%BCr_Internationale_Zusammenarbeit_Logo.svg",
  },
  {
    id: "oim",
    name: "OIM",
    alt: "Logo de l’Organisation internationale pour les migrations",
    src: "/images/partners/iom.jpg",
    width: 180,
    height: 110,
    source:
      "https://commons.wikimedia.org/wiki/File:Logo_der_International_Organization_for_Migration_(IOM).jpg",
  },
];
