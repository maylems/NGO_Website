import Image from "next/image";

const points = [
  "Découvrez les actions de l’ACHDR en faveur des populations et des communautés.",
  "Suivez nos actualités, initiatives et opportunités de participation.",
  "Partagez nos engagements pour promouvoir la solidarité et le développement durable.",
];

export function CommunityBanner() {
  return (
    <section
      id="rejoindre"
      className="relative scroll-mt-24 overflow-hidden bg-accent"
    >
      <Image
        src="/images/community-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-accent/90" />
      <div aria-hidden="true" className="absolute inset-0 bg-neutral-950/25" />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-10 md:px-10 md:py-14 lg:px-12">
        <div className="border-y border-white/60 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_auto] lg:gap-12">
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="max-w-[560px] text-[clamp(1.9rem,3.6vw,3.4rem)] font-bold uppercase leading-[1.05] tracking-[-0.01em] text-white">
                Rejoignez notre communauté et agissons ensemble
              </h2>
            </div>

            <div className="lg:pt-2">
              <ul className="space-y-6">
                {points.map((point) => (
                  <li key={point} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                    />
                    <p className="text-[13px] leading-[1.7] text-white/95">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:justify-self-end lg:col-span-1 lg:pt-2">
              <a
                href="mailto:achdr015@gmail.com?subject=Rejoindre%20la%20communaut%C3%A9%20ACHDR"
                className="inline-flex min-h-[52px] items-center justify-center bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#062F49] transition-colors duration-200 hover:bg-[#E6F7FD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Nous rejoindre
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
