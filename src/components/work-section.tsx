"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

const slides = [
  {
    heading: "Accompagner les communautés et renforcer leur résilience",
    image: "/images/action-response.jpg",
    alt: "Distribution d’aide humanitaire aux populations affectées par les inondations",
  },
  {
    heading: "Garantir l’accès aux soins et à la vaccination",
    image: "/images/action-health.jpg",
    alt: "Équipe de vaccination rejoignant des communautés isolées en pirogue au Tchad",
  },
  {
    heading: "Renforcer la sécurité alimentaire et les moyens de subsistance",
    image: "/images/action-food.jpg",
    alt: "Agriculteur travaillant dans son champ",
  },
  {
    heading: "Prévenir les conflits et consolider la paix",
    image: "/images/action-peace.jpg",
    alt: "Rencontre communautaire pour la consolidation de la paix",
  },
];

export function WorkSection() {
  const [index, setIndex] = useState(0);
  const total = String(slides.length).padStart(2, "0");
  const current = String(index + 1).padStart(2, "0");
  const activeSlide = slides[index];

  function goToPrevious() {
    setIndex((value) => (value - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setIndex((value) => (value + 1) % slides.length);
  }

  return (
    <section
      id="nos-domaines"
      className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12"
    >
      <div className="border-t border-neutral-200 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col lg:col-span-5">
            <div className="flex items-start justify-between gap-6">
              <h2 className="max-w-[210px] text-[12px] font-bold uppercase leading-[1.55] tracking-[0.13em] text-neutral-950 lg:text-[13px]">
                Nos domaines d’intervention
              </h2>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Domaine précédent"
                  className="grid h-8 w-8 place-items-center text-neutral-800 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <span
                  aria-live="polite"
                  className="min-w-[46px] text-center text-[11px] font-medium tabular-nums tracking-[0.08em] text-neutral-500"
                >
                  {current}/{total}
                </span>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Domaine suivant"
                  className="grid h-8 w-8 place-items-center text-neutral-800 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-12 min-h-[190px] md:mt-16 md:min-h-[210px] lg:mt-20">
              <h3 className="max-w-[520px] text-[clamp(1.55rem,2.7vw,2.5rem)] font-light uppercase leading-[1.08] tracking-[-0.01em] text-neutral-950">
                {activeSlide.heading}
              </h3>

              <Link
                href="#nos-actions"
                className="mt-8 inline-flex items-center gap-3 text-neutral-950 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-white">
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                  En savoir plus
                </span>
              </Link>
            </div>

            <Link
              href="#nos-actions"
              className="mt-12 inline-flex items-center gap-2 self-start text-[11px] font-semibold uppercase tracking-[0.13em] text-neutral-950 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:mt-auto lg:self-end lg:pt-16"
            >
              Voir toutes nos actions
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              {slides.map((slide, slideIndex) => (
                <Image
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1440px) 784px, (min-width: 1024px) 58vw, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
                  priority={slideIndex === 0}
                  aria-hidden={slideIndex !== index}
                  className={`object-cover object-center transition-opacity duration-500 ${
                    slideIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
