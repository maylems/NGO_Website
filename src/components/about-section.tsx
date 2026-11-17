import Image from "next/image";
import Link from "next/link";

const aboutMedia = {
  src: "/images/about-achdr.jpg",
  alt: "Distribution de denrées alimentaires organisée par l’ACHDR auprès des communautés au Tchad",
  sizes: "(min-width: 1024px) 52vw, calc(100vw - 48px)",
};

export function AboutSection() {
  return (
    <section
      id="qui-sommes-nous"
      aria-labelledby="about-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-10 md:py-24 lg:px-12 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[58fr_42fr] lg:gap-14 xl:gap-20">
          <div className="relative order-2 aspect-[4/3] w-full overflow-hidden bg-neutral-100 lg:order-1">
            <Image
              src={aboutMedia.src}
              alt={aboutMedia.alt}
              fill
              sizes={aboutMedia.sizes}
              className="object-cover object-center"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Qui sommes-nous
            </p>

            <h2
              id="about-heading"
              className="mt-6 text-balance text-[clamp(2.2rem,4.2vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.035em] text-neutral-950"
            >
              Agir aujourd’hui pour construire un avenir durable.
            </h2>

            <p className="mt-8 text-[14px] leading-[1.9] text-neutral-700 md:text-[15px]">
              L’Association pour l’Action Humanitaire et le Développement Durable
              (ACHDR) est une organisation tchadienne fondée en 2014. Elle agit
              aux côtés des populations pour répondre aux besoins humanitaires
              et soutenir des initiatives de développement durable.
            </p>

            <p className="mt-6 text-[13px] leading-[1.85] text-neutral-600">
              L’ACHDR accompagne les communautés dans le renforcement de leur
              résilience et met en œuvre des réponses adaptées, de proximité et
              durables face aux défis humanitaires et sociaux.
            </p>

            <Link
              href="/qui-sommes-nous"
              className="mt-10 inline-flex items-center justify-center bg-accent-dark px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-dark"
            >
              Découvrir notre organisation →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
