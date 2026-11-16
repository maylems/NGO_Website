export type Publication = {
  isoDate: string;
  date: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const publications: Publication[] = [
  {
    isoDate: "2025-10-21",
    date: "21 octobre 2025",
    title: "Koumra : l’ACHDR renforce les capacités de ses acteurs locaux",
    description:
      "Du 20 au 24 octobre, une session de formation réunit à Koumra les acteurs locaux de la chaîne éducative des zones rurales, dans le cadre du projet ADEM financé par l’Agence française de développement.",
    image: "/images/publication-education.jpg",
    imageAlt:
      "Photographie d’archive de l’ACHDR lors d’une activité communautaire",
    href: "https://tchadinfos.com/2025/10/21/koumra-lachdr-renforce-les-capacites-de-ses-acteurs-locaux/",
  },
  {
    isoDate: "2025-10-20",
    date: "20 octobre 2025",
    title:
      "Ouaddaï : l’ONG ACHDR outille les acteurs locaux pour une meilleure gestion des conflits scolaires",
    description:
      "À Abéché, un atelier de cinq jours outille les responsables communautaires, les chefs d’établissement et les représentants des associations de parents d’élèves sur la gestion des conflits en milieu scolaire.",
    image: "/images/publication-dialogue.jpg",
    imageAlt:
      "Photographie d’archive de l’ACHDR lors d’une rencontre avec des acteurs locaux",
    href: "https://traceinfos.com/ouaddai-long-achdr-outille-les-acteurs-locaux-pour-une-meilleure-gestion-des-conflits-scolaires/",
  },
  {
    isoDate: "2024-03-23",
    date: "23 mars 2024",
    title: "L’ONG ACHDR souffle ses dix bougies",
    description:
      "En prélude à la célébration de ses dix ans, l’ACHDR revient sur son histoire, ses partenaires et ses actions menées dans plusieurs provinces du Tchad.",
    image: "/images/publication-anniversaire.jpg",
    imageAlt: "Photographie d’archive de l’ACHDR sur le terrain",
    href: "https://ndjamenahebdo.net/long-achdr-souffle-ses-dix-bougies/",
  },
  {
    isoDate: "2023-11-06",
    date: "6 novembre 2023",
    title: "L’ONG ACHDR reçoit le prix Africain du mérite et de l’Excellence",
    description:
      "L’ONG a annoncé avoir reçu à Kigali, le 28 octobre, un prix saluant ses actions humanitaires, et le dédie à ses collègues de terrain ainsi qu’aux populations vulnérables.",
    image: "/images/publication-distinction.jpg",
    imageAlt:
      "Photographie d’archive de l’ACHDR auprès des communautés",
    href: "https://bandeinfo.com/articles/long-achdr-recoit-le-prix-africain-du-merite-et-de-lexcellence",
  },
];
