export type VideoItem = {
  id: string;
  title: string;
  description: string;
  poster: string;
  posterAlt: string;
  videoUrl: string | null;
  statusLabel?: string;
};

export type PodcastItem = {
  id: string;
  title: string;
  description: string;
  topics?: string;
  cover: string;
  coverAlt: string;
  audioUrl: string | null;
  statusLabel?: string;
};

export const featuredVideo: VideoItem = {
  id: "engagements-communautes",
  title: "Nos engagements pour les communautés et le développement durable",
  description:
    "L’ACHDR agit aux côtés des populations afin de soutenir des réponses humanitaires de proximité et des initiatives qui renforcent la résilience locale. Cette vidéo de démonstration présente nos engagements auprès des communautés et nos priorités en faveur d’un développement durable.",
  poster: "/images/hero-community.jpg",
  posterAlt: "Femmes de la communauté d’Abéché, au Tchad",
  videoUrl: null,
  statusLabel: "Vidéo de démonstration — bientôt disponible",
};

export const secondaryVideos: VideoItem[] = [
  {
    id: "agir-aupres-communautes",
    title: "Agir auprès des communautés",
    description:
      "Présentation d’initiatives humanitaires et d’actions de proximité.",
    poster: "/images/action-response.jpg",
    posterAlt:
      "Distribution d’aide humanitaire aux populations affectées par les inondations",
    videoUrl: null,
    statusLabel: "Vidéo de démonstration",
  },
  {
    id: "developpement-durable",
    title: "Construire un développement durable",
    description:
      "Découverte d’initiatives en faveur du développement durable.",
    poster: "/images/action-food.jpg",
    posterAlt: "Agriculteur travaillant dans son champ",
    videoUrl: null,
    statusLabel: "Vidéo de démonstration",
  },
];

export const podcasts: PodcastItem[] = [
  {
    id: "paroles-de-terrain",
    title: "Paroles de terrain : agir pour les communautés",
    description:
      "Dans cet épisode de démonstration, l’ACHDR donne à voir le travail mené avec les communautés et les acteurs locaux.",
    topics:
      "Sujets abordés : action humanitaire, solidarité de proximité, résilience des communautés et pratiques de développement durable.",
    cover: "/images/participation-community.jpg",
    coverAlt: "Atelier communautaire organisé par l’ACHDR",
    audioUrl: null,
    statusLabel: "Démonstration — fichier audio à venir",
  },
  {
    id: "engagement-communautaire",
    title: "L’engagement communautaire au cœur du changement",
    description:
      "Une présentation provisoire des dynamiques collectives qui soutiennent des réponses locales et durables.",
    cover: "/images/publication-dialogue.jpg",
    coverAlt: "Rencontre de dialogue communautaire organisée par l’ACHDR",
    audioUrl: null,
    statusLabel: "Démonstration — fichier audio à venir",
  },
];
