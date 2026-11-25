import { heroSlides } from "@/lib/hero-slides";

const MEDIA_API_BASE_URL =
  process.env.MEDIA_API_BASE_URL ?? "http://127.0.0.1:3001";

type MediaResponse = {
  original_url?: string;
  optimized_url?: string;
  url?: string;
  error?: string;
};

async function getCloudinaryUrls(publicId: string) {
  const response = await fetch(
    `${MEDIA_API_BASE_URL}/api/media/url?public_id=${encodeURIComponent(publicId)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(`Media API failed for ${publicId}: ${response.status}`);
  }

  const data = (await response.json()) as MediaResponse;
  if (!data.original_url || !data.optimized_url || !data.url) {
    throw new Error(`Media API returned no URL for ${publicId}`);
  }

  return {
    imageUrl: data.optimized_url,
    optimizedUrl: data.url,
    originalUrl: data.original_url,
  };
}

export async function GET() {
  const slides = await Promise.all(
    heroSlides.map(async (slide) => {
      const publicId = slide.media.cloudinaryPublicId;

      if (!publicId) {
        return {
          ...slide,
          imageUrl: slide.media.src,
          optimizedUrl: slide.media.src,
        };
      }

      const urls = await getCloudinaryUrls(publicId);
      return { ...slide, ...urls };
    }),
  );

  return Response.json({ slides });
}
