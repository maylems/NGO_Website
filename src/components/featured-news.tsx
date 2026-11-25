import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { shouldBypassImageOptimization } from "@/lib/strapi/client";
import { formatNewsDate, getPublishedNews } from "@/lib/strapi/news";
import type { NewsArticle } from "@/lib/strapi/types";

const GRID_CLASSES =
  "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8";

const CARD_CLASSES =
  "group flex h-full w-full flex-col border border-neutral-200 bg-white transition-colors hover:border-accent/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

function NewsStateMessage({ title, description }: { title: string; description: string }) {
  return (
    <div className="col-span-full border border-neutral-200 bg-white px-6 py-12 text-center md:px-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
        {title}
      </p>
      <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-[1.75] text-neutral-600">
        {description}
      </p>
    </div>
  );
}

function NewsCard({ article }: { article: NewsArticle }) {
  const formattedDate = formatNewsDate(article.publishedAt);
  const bypassImageOptimization = shouldBypassImageOptimization(
    article.imageUrl
  );

  return (
    <article className="flex">
      <Link
        href={`/publications/${encodeURIComponent(article.slug)}`}
        className={CARD_CLASSES}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            unoptimized={bypassImageOptimization}
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, calc(100vw - 48px)"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-normal uppercase tracking-[0.16em] text-neutral-400">
            {article.category ? (
              <span className="font-semibold text-accent">{article.category}</span>
            ) : null}
            {formattedDate ? <time dateTime={article.publishedAt}>{formattedDate}</time> : null}
          </div>

          <h3 className="mt-5 text-[15px] font-bold leading-[1.45] text-neutral-950 md:text-[16px]">
            {article.title}
          </h3>

          {article.excerpt ? (
            <p className="mt-4 line-clamp-3 text-[13px] leading-[1.75] text-neutral-600">
              {article.excerpt}
            </p>
          ) : null}

          <span className="mt-auto inline-flex items-center justify-between gap-3 border border-neutral-950 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-950 transition-colors group-hover:border-accent group-hover:text-accent">
            Lire l&apos;article
            <ArrowRightIcon className="h-4 w-4 text-accent" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export async function FeaturedNewsGrid() {
  const { data: articles, error } = await getPublishedNews({ pageSize: 4 });

  if (error) {
    return (
      <div className={GRID_CLASSES}>
        <NewsStateMessage
          title="Actualités momentanément indisponibles"
          description="Le service d’actualités est temporairement inaccessible. Merci de revenir dans quelques instants."
        />
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className={GRID_CLASSES}>
        <NewsStateMessage
          title="Aucune actualité publiée"
          description="Les prochaines actualités de l’ACHDR seront disponibles ici dès leur publication."
        />
      </div>
    );
  }

  return (
    <div className={GRID_CLASSES}>
      {articles.map((article) => (
        <NewsCard key={article.documentId ?? article.id} article={article} />
      ))}
    </div>
  );
}

export function FeaturedNewsSkeleton() {
  return (
    <div className={GRID_CLASSES} aria-hidden="true">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex h-full w-full flex-col border border-neutral-200 bg-white"
        >
          <div className="aspect-[4/3] animate-pulse bg-neutral-100" />
          <div className="flex flex-1 flex-col p-6 md:p-7">
            <div className="h-2.5 w-28 animate-pulse bg-neutral-100" />
            <div className="mt-5 h-4 w-3/4 animate-pulse bg-neutral-100" />
            <div className="mt-4 h-3 w-full animate-pulse bg-neutral-100" />
            <div className="mt-2 h-3 w-5/6 animate-pulse bg-neutral-100" />
            <div className="mt-2 h-3 w-2/3 animate-pulse bg-neutral-100" />
            <div className="mt-8 h-2.5 w-32 animate-pulse bg-neutral-100" />
          </div>
        </div>
      ))}
    </div>
  );
}
