import { cloudinaryAssets, cloudinaryImageUrl } from "@/lib/cloudinary-assets";

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

const sharedCopy = {
  title: "Agir aujourd'hui pour construire un avenir meilleur",
  description:
    "Ensemble, nous œuvrons pour l'action humanitaire et le développement durable des communautés.",
  cta: {
    label: "Découvrir nos actions",
    href: "#actualites",
  },
};

export const heroSlides: HeroSlide[] = [
  {
    id: "engagement",
    ...sharedCopy,
    media: {
      src: cloudinaryImageUrl(cloudinaryAssets.hero),
      cloudinaryPublicId: cloudinaryAssets.hero,
      alt: "Visuel de l’ACHDR illustrant son engagement auprès des communautés au Tchad",
    },
  },
  {
    id: "action-humanitaire",
    ...sharedCopy,
    media: {
      src: cloudinaryImageUrl(cloudinaryAssets.humanitarian),
      cloudinaryPublicId: cloudinaryAssets.humanitarian,
      alt: "Distribution d’aide humanitaire aux populations affectées par les inondations",
    },
  },
  {
    id: "sante-communautaire",
    ...sharedCopy,
    media: {
      src: cloudinaryImageUrl(cloudinaryAssets.health),
      cloudinaryPublicId: cloudinaryAssets.health,
      alt: "Intervention de santé communautaire auprès d’enfants",
    },
  },
  {
    id: "developpement-durable",
    ...sharedCopy,
    media: {
      src: cloudinaryImageUrl(cloudinaryAssets.food),
      cloudinaryPublicId: cloudinaryAssets.food,
      alt: "Agriculteur travaillant dans son champ",
    },
  },
  {
    id: "mobilisation-communautaire",
    ...sharedCopy,
    media: {
      src: cloudinaryImageUrl(cloudinaryAssets.community),
      cloudinaryPublicId: cloudinaryAssets.community,
      alt: "Mobilisation communautaire pour l’action humanitaire",
    },
  },
  {
    id: "partenariats",
    ...sharedCopy,
    media: {
      src: cloudinaryImageUrl(cloudinaryAssets.highlight),
      cloudinaryPublicId: cloudinaryAssets.highlight,
      alt: "Partenaires et acteurs de terrain réunis autour de l’ACHDR",
    },
  },
  {
    id: "terrain",
    ...sharedCopy,
    media: {
      src: cloudinaryImageUrl(cloudinaryAssets.communityAlt),
      cloudinaryPublicId: cloudinaryAssets.communityAlt,
      alt: "Intervention de l’ACHDR auprès des communautés",
    },
  },
];
