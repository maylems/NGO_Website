import Image from "next/image";

export function CommunityBanner() {
  return (
    <section id="rejoindre" className="mt-8 scroll-mt-24 md:mt-12 lg:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] lg:grid-cols-[65fr_35fr]">
        <div className="relative min-h-[440px] md:min-h-[640px] lg:min-h-[780px]">
          <Image
            src="/images/cta.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 65vw, (min-width: 768px) 60vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-center bg-accent px-6 py-12 md:px-10 md:py-14 lg:px-12 lg:py-20">
          <div className="w-full">
            <h2 className="max-w-[560px] text-[clamp(1.75rem,2.6vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.01em] text-white">
              Suivez l’actualité de l’ACHDR
            </h2>

            <p className="mt-5 max-w-[540px] text-[14px] leading-[1.75] text-white/95">
              Découvrez nos initiatives, nos réalisations et les avancées de nos
              actions en faveur des communautés.
            </p>

            <a
              href="mailto:achdr015@gmail.com?subject=Suivre%20l%27actualit%C3%A9%20de%20l%27ACHDR"
              className="mt-8 inline-flex min-h-[52px] w-fit items-center justify-center bg-white px-8 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-dark transition-colors duration-200 hover:bg-[#E6F7FD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              S&apos;inscrire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
