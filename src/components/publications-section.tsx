import Image from "next/image";
import Link from "next/link";
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
  return (
    <section
      id="publications"
      className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12"
    >
      <div className="pt-16 md:pt-20 lg:pt-[88px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2rem,4.4vw,3.7rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-neutral-950">
              <span className="block">Nos dernières</span>
              <span className="block">publications</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <p className="max-w-[390px] text-[13px] leading-[1.8] text-neutral-700 lg:pt-1">
              L’ACHDR partage ses publications, rapports et ressources
              documentaires afin de valoriser ses actions et de contribuer à la
              réflexion sur les enjeux humanitaires et le développement durable.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 md:mt-14" />

        <PublicationsGrid className="pt-10 md:pt-12" />

        <div className="mt-12 border-t border-neutral-200 md:mt-16" />

        <div className="pb-10 pt-6 md:pb-14">
          <Link
            href="/publications"
            className="inline-flex text-[11px] font-bold uppercase tracking-[0.13em] text-neutral-950 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Voir toutes nos publications
          </Link>
        </div>
      </div>
    </section>
  );
}
