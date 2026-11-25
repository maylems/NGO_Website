export type StrapiMediaFormat = {
  url: string;
  width?: number;
  height?: number;
};

export type StrapiMedia = {
  id: number;
  documentId?: string;
  name?: string | null;
  alternativeText?: string | null;
  caption?: string | null;
  url: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
    [key: string]: StrapiMediaFormat | undefined;
  } | null;
};

export type StrapiNewsAttributes = {
  Title?: string | null;
  Slug?: string | null;
  Category?: string | null;
  Description?: string | null;
  Posts?: StrapiMedia | null;
  publishedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type StrapiNewsEntity = {
  id: number;
  documentId?: string;
  attributes?: StrapiNewsAttributes;
} & StrapiNewsAttributes;

export type StrapiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiListResponse<T> = {
  data: T[];
  meta?: {
    pagination?: StrapiPagination;
  };
};

export type StrapiSingleResponse<T> = {
  data: T | null;
  meta?: Record<string, unknown>;
};

export type NewsArticle = {
  id: number;
  documentId?: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category?: string;
  imageUrl: string;
  imageAlt: string;
  publishedAt: string;
};

export type NewsFetchResult<T> = {
  data: T;
  error: boolean;
};
