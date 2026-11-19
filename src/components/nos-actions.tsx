"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const actionAreas = [
  "Apporter une assistance humanitaire aux populations vulnérables.",
  "Renforcer la sécurité alimentaire et nutritionnelle.",
  "Promouvoir l'accès aux soins de santé et à la vaccination.",
  "Soutenir la résilience communautaire et le développement local.",
  "Prévenir les conflits et consolider la paix.",
  "Promouvoir la gestion durable des ressources naturelles.",
];

const actionSlides = [
  {
    id: "assistance",
    title: "Assistance humanitaire aux populations vulnérables",
    src: "/images/about-achdr.jpg",
    alt: "Distribution de denrées alimentaires aux communautés par l’ACHDR au Tchad",
  },
  {
    id: "deplaces",
    title: "Intervention auprès des populations déplacées",
    src: "/images/action-response.jpg",
    alt: "Intervention humanitaire auprès de populations touchées par les inondations",
  },
  {
    id: "sante",
    title: "Accès aux soins de santé et à la vaccination",
    src: "/images/action-health.jpg",
    alt: "Vaccination d’enfants lors d’une intervention de santé communautaire",
  },
  {
    id: "paix",
    title: "Cohésion sociale et prévention des conflits",
    src: "/images/action-peace.jpg",
    alt: "Rencontre communautaire pour la paix et la cohésion sociale",
  },
];

const SLIDE_DURATION = 6000;

export function NosActions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = actionSlides[activeIndex];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setIsPaused(motionQuery.matches);

    syncMotionPreference();
    motionQuery.addEventListener("change", syncMotionPreference);

    return () => motionQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % actionSlides.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, isPaused]);

  return (
    <section
      id="nos-actions-carousel"
      aria-label="Nos actions"
      className="w-full bg-[#E5F0FF]"
    >
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-12 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[40fr_60fr] lg:gap-16 lg:px-[10%] lg:py-12 lg:pr-[4%] xl:gap-20 xl:pl-[11%]">
        <div className="max-w-[600px]">
          <h2 className="text-[clamp(2.25rem,3.4vw,2.875rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#414141]">
            Nos actions
          </h2>

          <span
            aria-hidden="true"
            className="mt-2.5 block h-1 w-[120px] bg-[#00A9E0]"
          />

          <p className="mt-7 text-[15px] leading-[24px] text-[#2E2E2E] md:text-[16px]">
            À travers ses interventions humanitaires et ses initiatives de
            développement, l’ACHDR œuvre pour améliorer les conditions de vie
            des populations vulnérables, renforcer la résilience des
            communautés et promouvoir une société pacifique et solidaire au
            Tchad.
          </p>

          <ul className="mt-9 space-y-3 text-[18px] leading-[1.5] text-[#111111]">
            {actionAreas.map((area) => (
              <li key={area} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[#C9C9C9]"
                />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          role="region"
          aria-roledescription="carrousel"
          aria-label="Actions de l’ACHDR"
          data-paused={isPaused}
          className="w-full"
        >
          <div className="relative h-[260px] w-full sm:h-[360px] md:h-[440px] lg:h-[570px]">
            {actionSlides.map((slide, index) => (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} sur ${actionSlides.length}`}
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={index === activeIndex ? slide.alt : ""}
                  fill
                  sizes="(min-width: 1024px) 800px, (min-width: 768px) 60vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>

          <h3
            key={activeSlide.id}
            className="mt-4 text-[23px] font-bold leading-tight text-black md:text-[24px]"
          >
            {activeSlide.title}
          </h3>

          <span
            aria-hidden="true"
            className="mt-3 block h-[3px] w-[60px] bg-[#B7B7B7]"
          />

          <div className="mt-8 flex items-center justify-center gap-3">
            {actionSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Diapositive ${index + 1} : ${slide.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A9B96] ${
                  index === activeIndex
                    ? "bg-[#8A9B96]"
                    : "bg-[#D1D1D1]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
