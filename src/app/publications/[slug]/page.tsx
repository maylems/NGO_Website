import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { shouldBypassImageOptimization } from "@/lib/strapi/client";
import { formatNewsDate, getPublishedNewsBySlug } from "@/lib/strapi/news";

export const instant = false;

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data: article } = await getPublishedNewsBySlug(slug);

  if (!article) {
    return { title: "Actualité — ACHDR" };
  }

  return {
    title: `${article.title} — ACHDR`,
    description: article.description.slice(0, 160) || undefined,
  };
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const { data: article, error } = await getPublishedNewsBySlug(slug);

  if (error) {
    return (
      <>
        <SiteHeader />
        <main className="flex-1">
          <section className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:px-12">
            <div className="mx-auto max-w-[900px] border border-neutral-200 bg-white px-6 py-12 text-center md:px-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                Actualité momentanément indisponible
              </p>
              <p className="mx-auto mt-3 max-w-[520px] text-[13px] leading-[1.75] text-neutral-600">
                Le service d’actualités est temporairement inaccessible. Merci de
                revenir dans quelques instants.
              </p>
              <Link
                href="/#publications"
                className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-neutral-950 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <ArrowLeftIcon className="h-3.5 w-3.5" />
                Retour aux actualités
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  if (!article) {
    notFound();
  }

  const formattedDate = formatNewsDate(article.publishedAt);
  const bypassImageOptimization = shouldBypassImageOptimization(
    article.imageUrl
  );

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="pt-14 md:pt-20">
            <Link
              href="/#publications"
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Retour aux actualités
            </Link>

            <article className="mx-auto max-w-[900px] pt-10 md:pt-14">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-normal uppercase tracking-[0.16em] text-neutral-400">
                {article.category ? (
                  <span className="font-semibold text-accent">
                    {article.category}
                  </span>
                ) : null}
                {formattedDate ? (
                  <time dateTime={article.publishedAt}>{formattedDate}</time>
                ) : null}
              </div>

              <h1 className="mt-5 text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.02em] text-neutral-950">
                {article.title}
              </h1>

              <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-neutral-100">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  fill
                  priority
                  unoptimized={bypassImageOptimization}
                  sizes="(min-width: 1024px) 900px, calc(100vw - 48px)"
                  className="object-cover object-center"
                />
              </div>

              {article.description ? (
                <p className="mt-10 whitespace-pre-line text-[14px] leading-[1.9] text-neutral-700 md:text-[15px]">
                  {article.description}
                </p>
              ) : null}
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
