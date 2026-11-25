import Image from "next/image";
import { Suspense } from "react";
import {
  FeaturedNewsGrid,
  FeaturedNewsSkeleton,
} from "@/components/featured-news";
import { ArrowRightIcon } from "@/components/icons";
import { publications } from "@/lib/publications";

type PublicationsGridProps = {
  className?: string;
};

export function PublicationsGrid({ className }: PublicationsGridProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 ${
        className ?? ""
      }`}
    >
      {publications.map((publication) => (
        <article key={publication.href} className="flex">
          <a
            href={publication.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full w-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <time
              dateTime={publication.isoDate}
              className="text-[10px] font-normal uppercase tracking-[0.16em] text-neutral-400"
            >
              {publication.date}
            </time>

            <span
              aria-hidden="true"
              className="mt-3 block border-t border-neutral-200"
            />

            <div className="relative mt-5 aspect-square w-full overflow-hidden bg-neutral-100">
              <Image
                src={publication.image}
                alt={publication.imageAlt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, calc(100vw - 48px)"
                className="object-cover object-center"
              />
            </div>

            <h3 className="mt-5 text-[12px] font-bold uppercase leading-[1.45] tracking-[0.01em] text-neutral-950">
              {publication.title}
            </h3>

            <p className="mt-3 text-[12px] leading-[1.65] text-neutral-600">
              {publication.description}
            </p>

            <span className="mt-auto flex items-center justify-between gap-4 pt-6">
              <span className="text-[10px] font-semibold uppercase leading-none tracking-[0.13em] text-accent group-hover:text-accent-dark lg:tracking-[0.06em] xl:tracking-[0.13em]">
                Consulter la publication
              </span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-accent group-hover:text-accent-dark" />
            </span>
          </a>
        </article>
      ))}
    </div>
  );
}

export function PublicationsSection() {
  const historyHref = publications[2]?.href ?? "/publications";

  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="bg-[#f2f2f2] text-neutral-950"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[900px] text-center">
          <h2
            id="publications-heading"
            className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-950"
          >
            10 ans d’engagement humanitaire et de développement au Tchad
          </h2>

          <p className="mt-6 text-[14px] leading-[1.85] text-neutral-600 md:text-[15px]">
            L’Association pour l’Action Humanitaire et le Développement Durable
            (ACHDR) œuvre pour un Tchad où les hommes et les femmes vivent en
            harmonie, à l’abri des conflits et des catastrophes. Depuis une
            décennie, notre organisation se mobilise sur le terrain pour apporter
            une assistance humanitaire de qualité, renforcer la résilience des
            communautés vulnérables et promouvoir le développement local à
            travers la sécurité alimentaire, la santé, l’éducation et la
            consolidation de la paix.
          </p>

          <a
            href={historyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-950 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            En savoir plus
            <ArrowRightIcon className="h-4 w-4 text-accent" />
          </a>
        </div>

        <div className="mt-14 lg:mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
            À la une
          </p>
          <span
            aria-hidden="true"
            className="mt-2 block w-12 border-t border-neutral-300"
          />
        </div>

        <div className="mt-8">
          <Suspense fallback={<FeaturedNewsSkeleton />}>
            <FeaturedNewsGrid />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
