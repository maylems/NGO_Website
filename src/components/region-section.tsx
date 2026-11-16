import Image from "next/image";

export function RegionSection() {
  return (
    <section
      id="actualites"
      className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12"
    >
      <div className="border-t border-neutral-200 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(1.9rem,3.3vw,3rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-neutral-950">
              Au cœur des communautés
            </h2>

            <div className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Reportage
              </p>
              <span
                aria-hidden="true"
                className="mt-2 block w-10 border-t border-neutral-300"
              />
            </div>

            <h3 className="mt-6 max-w-[540px] text-[clamp(1.45rem,2.4vw,2.15rem)] uppercase leading-[1.12] tracking-[-0.005em] text-neutral-950">
              <span className="block font-bold">Des actions concrètes</span>
              <span className="block font-light">pour un développement</span>
              <span className="block font-bold">durable au Tchad</span>
            </h3>

            <p className="mt-7 max-w-[460px] text-[14px] leading-[1.75] text-neutral-600">
              Au quotidien, nos équipes travaillent aux côtés des communautés
              pour renforcer les capacités locales, faciliter l’accès aux
              services essentiels et soutenir les initiatives portées par les
              habitants. Ce reportage revient sur les dynamiques de solidarité
              qui accompagnent un développement durable au Tchad.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src="/images/region-community.jpg"
                alt="Remise d’un point d’eau à une communauté locale"
                fill
                sizes="(min-width: 1440px) 784px, (min-width: 1024px) 58vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
