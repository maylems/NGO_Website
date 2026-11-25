import { revalidatePath, revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

function isAuthorized(provided: string | null): boolean {
  if (!REVALIDATE_SECRET || !provided) {
    return false;
  }

  const providedBuffer = Buffer.from(provided);
  const secretBuffer = Buffer.from(REVALIDATE_SECRET);

  return (
    providedBuffer.length === secretBuffer.length &&
    timingSafeEqual(providedBuffer, secretBuffer)
  );
}

export async function POST(request: Request) {
  if (!REVALIDATE_SECRET) {
    return Response.json(
      { error: "REVALIDATE_SECRET is not configured" },
      { status: 503 }
    );
  }

  if (!isAuthorized(request.headers.get("x-revalidate-secret"))) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as {
    entry?: { Slug?: string; slug?: string };
  } | null;

  const slug = body?.entry?.Slug ?? body?.entry?.slug;

  revalidateTag("strapi", { expire: 0 });
  revalidateTag("strapi:achdr-events", { expire: 0 });

  if (slug) {
    revalidateTag(`strapi:achdr-events:${slug}`, { expire: 0 });
    revalidatePath(`/publications/${slug}`);
  }

  revalidatePath("/");

  return Response.json({ revalidated: true, slug: slug ?? null });
}
