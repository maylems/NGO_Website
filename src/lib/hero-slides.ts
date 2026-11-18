export type HeroSlideMedia = {
  src: string;
  alt: string;
  cloudinaryPublicId?: string;
};

export type HeroSlide = {
  id: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  media: HeroSlideMedia;
};

export const HERO_SLIDE_DURATION = 6500;

export const heroSlides: HeroSlide[] = [
  {
    id: "engagement",
    title: "Agir aujourd'hui pour construire un avenir meilleur",
    description:
      "Ensemble, nous œuvrons pour l'action humanitaire et le développement durable des communautés.",
    cta: {
      label: "Découvrir nos actions",
      href: "#nos-domaines",
    },
    media: {
      src: "/images/image.png",
      alt: "Visuel de l’ACHDR illustrant son engagement auprès des communautés au Tchad",
    },
  },
  {
    id: "action-humanitaire",
    title: "Agir aujourd'hui pour construire un avenir meilleur",
    description:
      "Ensemble, nous œuvrons pour l'action humanitaire et le développement durable des communautés.",
    cta: {
      label: "Découvrir nos actions",
      href: "#nos-domaines",
    },
    media: {
      src: "/images/action-response.jpg",
      alt: "Distribution d’aide humanitaire aux populations affectées par les inondations",
    },
  },
  {
    id: "sante-communautaire",
    title: "Agir aujourd'hui pour construire un avenir meilleur",
    description:
      "Ensemble, nous œuvrons pour l'action humanitaire et le développement durable des communautés.",
    cta: {
      label: "Découvrir nos actions",
      href: "#nos-domaines",
    },
    media: {
      src: "/images/action-health.jpg",
      alt: "Intervention de santé communautaire auprès d’enfants",
    },
  },
  {
    id: "developpement-durable",
    title: "Agir aujourd'hui pour construire un avenir meilleur",
    description:
      "Ensemble, nous œuvrons pour l'action humanitaire et le développement durable des communautés.",
    cta: {
      label: "Découvrir nos actions",
      href: "#nos-domaines",
    },
    media: {
      src: "/images/action-food.jpg",
      alt: "Agriculteur travaillant dans son champ",
    },
  },
];
