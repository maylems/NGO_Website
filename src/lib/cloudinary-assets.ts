export const CLOUDINARY_CLOUD_NAME = "copwzymj";

export const cloudinaryAssets = {
  hero: "img2",
  humanitarian: "img2",
  health: "img2",
  food: "img2",
  community: "img2",
  highlight: "img2",
  communityAlt: "img2",
} as const;

export function cloudinaryImageUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto/q_auto/${publicId}`;
}
