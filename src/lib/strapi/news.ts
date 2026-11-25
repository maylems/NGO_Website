import {
  resolveStrapiMediaUrl,
  strapiListFetch,
} from "./client";
import type {
  NewsArticle,
  NewsFetchResult,
  StrapiNewsEntity,
} from "./types";

const CONTENT_TYPE = "achdr-events";
const TAGS = ["strapi", "strapi:achdr-events"];

const ARTICLE_FIELDS = [
  "Title",
  "Slug",
  "Category",
  "Description",
  "publishedAt",
] as const;

const MEDIA_FIELDS = ["url", "alternativeText", "formats"] as const;

function buildArticleParams() {
  const params: Record<string, string | number | boolean> = {};

  ARTICLE_FIELDS.forEach((field, index) => {
    params[`fields[${index}]`] = field;
  });

  MEDIA_FIELDS.forEach((field, index) => {
    params[`populate[Posts][fields][${index}]`] = field;
  });

  params["filters[publishedAt][$notNull]"] = true;
  params["sort[0]"] = "publishedAt:desc";

  return params;
}

function reportError(context: string, error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";
  console.error(`[strapi] ${context}: ${message}`);
}

function createExcerpt(description: string, maxLength = 150): string {
  const clean = description.replace(/\s+/g, " ").trim();

  if (!clean) {
    return "";
  }

  const firstSentence = clean.split(/(?<=[.!?])\s/)[0] ?? clean;

  if (firstSentence.length <= maxLength) {
    return firstSentence;
  }

  const truncated = firstSentence.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return `${(lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated).trimEnd()}…`;
}

function toNewsArticle(entity: StrapiNewsEntity): NewsArticle | null {
  const attributes = entity.attributes ?? entity;
  const title = attributes.Title?.trim();
  const slug = attributes.Slug?.trim();
  const publishedAt = attributes.publishedAt;

  if (!title || !slug || !publishedAt) {
    return null;
  }

  const media = attributes.Posts ?? null;
  const description = attributes.Description?.trim() ?? "";
  const imagePath =
    media?.formats?.medium?.url ??
    media?.formats?.small?.url ??
    media?.url ??
    null;

  return {
    id: entity.id,
    documentId: entity.documentId,
    slug,
    title,
    description,
    excerpt: createExcerpt(description),
    category: attributes.Category?.trim() || undefined,
    imageUrl: resolveStrapiMediaUrl(imagePath),
    imageAlt: media?.alternativeText?.trim() || title,
    publishedAt,
  };
}

export type GetPublishedNewsOptions = {
  page?: number;
  pageSize?: number;
  sort?: string;
};

export async function getPublishedNews({
  page = 1,
  pageSize = 4,
  sort = "publishedAt:desc",
}: GetPublishedNewsOptions = {}): Promise<NewsFetchResult<NewsArticle[]>> {
  try {
    const response = await strapiListFetch<StrapiNewsEntity>({
      path: CONTENT_TYPE,
      params: {
        ...buildArticleParams(),
        "sort[0]": sort,
        "pagination[page]": page,
        "pagination[pageSize]": pageSize,
      },
      tags: TAGS,
    });

    return {
      data: response.data
        .map(toNewsArticle)
        .filter((article): article is NewsArticle => article !== null),
      error: false,
    };
  } catch (error) {
    reportError("failed to fetch published news", error);
    return { data: [], error: true };
  }
}

export async function getPublishedNewsBySlug(
  slug: string
): Promise<NewsFetchResult<NewsArticle | null>> {
  if (!slug) {
    return { data: null, error: false };
  }

  try {
    const response = await strapiListFetch<StrapiNewsEntity>({
      path: CONTENT_TYPE,
      params: {
        ...buildArticleParams(),
        "filters[Slug][$eq]": slug,
        "pagination[page]": 1,
        "pagination[pageSize]": 1,
      },
      tags: [...TAGS, `strapi:achdr-events:${slug}`],
    });

    return {
      data: response.data.map(toNewsArticle)[0] ?? null,
      error: false,
    };
  } catch (error) {
    reportError(`failed to fetch news article "${slug}"`, error);
    return { data: null, error: true };
  }
}

export async function getPublishedNewsSlugs(): Promise<string[]> {
  try {
    const response = await strapiListFetch<StrapiNewsEntity>({
      path: CONTENT_TYPE,
      params: {
        "fields[0]": "Slug",
        "filters[publishedAt][$notNull]": true,
        "sort[0]": "publishedAt:desc",
        "pagination[page]": 1,
        "pagination[pageSize]": 100,
      },
      tags: TAGS,
    });

    return response.data
      .map((entity) => (entity.attributes ?? entity).Slug?.trim())
      .filter((slug): slug is string => Boolean(slug));
  } catch (error) {
    reportError("failed to fetch news slugs", error);
    return [];
  }
}

export function formatNewsDate(isoDate: string): string {
  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
