import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pt-12 md:px-10 md:pt-16 lg:px-12 lg:pt-[68px]">
      <h1 className="text-[clamp(2rem,5.3vw,4.75rem)] font-light uppercase leading-[0.96] tracking-[-0.02em] text-neutral-950">
        <span className="block lg:whitespace-nowrap">
          Agir pour les populations,
        </span>
        <span className="block lg:whitespace-nowrap">
          construire un avenir durable
        </span>
      </h1>

      <div className="mt-10 border-t border-neutral-200 md:mt-14" />

      <div className="flex flex-col items-start gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="#nos-actions"
          className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Découvrir nos actions
        </Link>
        <p className="text-[12px] leading-relaxed text-neutral-500 sm:text-right">
          Notre engagement auprès des communautés au Tchad
        </p>
      </div>

      <div className="relative mt-9 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] md:mt-12 lg:aspect-[2.35/1]">
        <Image
          src="/images/hero-community.jpg"
          alt="Femmes de la communauté d’Abéché, au Tchad"
          fill
          priority
          sizes="(min-width: 1440px) 1344px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
