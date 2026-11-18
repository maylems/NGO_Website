import Image from "next/image";

import { partnerLogos } from "@/lib/partners";

export function PartnersSection() {
  return (
    <section
      id="partenaires"
      className="w-full bg-white px-6 pt-24 pb-24 lg:px-12 lg:pt-32 lg:pb-32"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="max-w-[860px]">
          <p className="text-[12px] font-bold tracking-[0.18em] text-[#00A9E0] uppercase">
            NOS PARTENAIRES
          </p>
          <h2 className="mt-6 text-[32px] leading-[1.12] font-bold tracking-[-0.035em] text-neutral-900 sm:text-[40px] lg:text-[52px]">
            Construire ensemble des solutions durables.
          </h2>
          <p className="mt-6 max-w-[780px] text-[16px] leading-[1.7] text-neutral-600 sm:text-[18px] lg:text-[20px] lg:leading-[1.6]">
            Nos partenaires contribuent à renforcer nos capacités d’action et à
            soutenir des initiatives humanitaires et de développement durable
            au bénéfice des communautés.
          </p>
        </div>

        <div className="mt-16 h-px w-full bg-[#F2F2F2] lg:mt-20" />

        <ul
          aria-label="Logos des partenaires de l’ACHDR"
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-10 lg:mt-20 lg:grid-cols-4 lg:gap-x-14 lg:gap-y-16"
        >
          {partnerLogos.map((logo) => (
            <li
              key={logo.id}
              className="relative h-[112px] bg-white sm:h-[124px] lg:h-[136px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                unoptimized
                className="object-contain p-1 sm:p-2"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
