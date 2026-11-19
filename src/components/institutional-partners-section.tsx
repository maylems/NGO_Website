import Image from "next/image";

import { partnerLogos } from "@/lib/partners";

export function InstitutionalPartnersSection() {
  return (
    <section
      id="nos-partenaires"
      aria-labelledby="partners-heading"
      className="w-full bg-white"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 md:py-20">
        <header className="text-center">
          <h2
            id="partners-heading"
            className="text-[30px] leading-[1.15] font-bold tracking-[-0.02em] text-[#3F4144] md:text-[42px]"
          >
            Nos partenaires
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-[14px] block h-[3px] w-[90px] bg-accent"
          />
          <p className="mx-auto mt-[20px] max-w-[760px] text-[16px] leading-[1.6] text-neutral-600 md:text-[17px]">
            Parce que les défis humanitaires et de développement nécessitent
            une mobilisation collective, l&apos;ACHDR accorde une importance
            particulière à la coopération avec les institutions, les
            organisations et les acteurs engagés pour un avenir plus solidaire
            et durable.
          </p>
        </header>

        <div aria-hidden="true" className="mt-12 h-px w-full bg-[#E4EEF5]" />

        <ul className="mt-12 grid grid-cols-7 gap-x-2 sm:gap-x-4 lg:gap-x-8">
          {partnerLogos.map((logo) => (
            <li
              key={logo.id}
              className="flex h-[80px] items-center justify-center sm:h-[100px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto max-h-[48px] w-full max-w-full object-contain opacity-90 transition-opacity duration-200 hover:opacity-100 sm:max-h-[70px] lg:max-h-[80px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
