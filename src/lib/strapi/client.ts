import type { StrapiListResponse, StrapiSingleResponse } from "./types";

export const FALLBACK_NEWS_IMAGE = "/images/action-response.jpg";

const DEFAULT_REVALIDATE_SECONDS = 300;
const RAW_API_URL = process.env.STRAPI_API_URL ?? "http://localhost:1337";
const API_URL = RAW_API_URL.replace(/\/+$/, "");
const API_TOKEN = process.env.STRAPI_API_TOKEN;

export class StrapiRequestError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "StrapiRequestError";
    this.status = status;
  }
}

type StrapiFetchOptions = {
  path: string;
  params?: Record<string, string | number | boolean | undefined>;
  revalidate?: number;
  tags?: string[];
};

export async function strapiFetch<T>(
  options: StrapiFetchOptions
): Promise<T> {
  if (!API_TOKEN) {
    throw new StrapiRequestError("STRAPI_API_TOKEN is not configured");
  }

  const endpoint = options.path.replace(/^\/+|\/+$/g, "");
  const url = new URL(`${API_URL}/api/${endpoint}`);

  for (const [key, value] of Object.entries(options.params ?? {})) {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    next: {
      revalidate: options.revalidate ?? DEFAULT_REVALIDATE_SECONDS,
      tags: options.tags ?? ["strapi"],
    },
  });

  if (!response.ok) {
    throw new StrapiRequestError(
      `Strapi request failed with status ${response.status}`,
      response.status
    );
  }

  return (await response.json()) as T;
}

export function strapiListFetch<T>(
  options: StrapiFetchOptions
): Promise<StrapiListResponse<T>> {
  return strapiFetch<StrapiListResponse<T>>(options);
}

export function strapiSingleFetch<T>(
  options: StrapiFetchOptions
): Promise<StrapiSingleResponse<T>> {
  return strapiFetch<StrapiSingleResponse<T>>(options);
}

export function resolveStrapiMediaUrl(url?: string | null): string {
  if (!url) {
    return FALLBACK_NEWS_IMAGE;
  }

  const trimmed = url.trim();

  if (!trimmed) {
    return FALLBACK_NEWS_IMAGE;
  }

  if (/^(https?:)?\/\//i.test(trimmed)) {
    return trimmed;
  }

  const path = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;

  return `${API_URL}${path}`;
}

export function shouldBypassImageOptimization(url: string): boolean {
  try {
    const hostname = new URL(url, API_URL).hostname.replace(/^\[|\]$/g, "");

    return (
      hostname === "localhost" ||
      hostname.endsWith(".localhost") ||
      hostname === "::1" ||
      /^127\./.test(hostname) ||
      /^10\./.test(hostname) ||
      /^192\.168\./.test(hostname) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(hostname)
    );
  } catch {
    return false;
  }
}
