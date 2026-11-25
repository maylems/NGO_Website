"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { heroSlides } from "@/lib/hero-slides";

type HeroSlideWithUrls = (typeof heroSlides)[number] & {
  imageUrl?: string;
};

export function Hero() {
  const activeIndex = 0;
  const [isPaused, setIsPaused] = useState(false);
  const [cloudinaryImages, setCloudinaryImages] = useState<Record<string, string>>({});
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setIsPaused(motionQuery.matches);

    syncMotionPreference();
    motionQuery.addEventListener("change", syncMotionPreference);

    return () => motionQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/hero-slides")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Hero slides request failed: ${response.status}`);
        }
        return response.json() as Promise<{ slides: HeroSlideWithUrls[] }>;
      })
      .then((data) => {
        if (cancelled) return;
        const nextImages: Record<string, string> = {};
        for (const slide of data.slides) {
          if (slide.imageUrl) nextImages[slide.id] = slide.imageUrl;
        }
        setCloudinaryImages(nextImages);
      })
      .catch(() => {
        if (!cancelled) setCloudinaryImages({});
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      role="region"
      aria-roledescription="carrousel"
      aria-label="Actions de l’ACHDR"
      data-paused={isPaused}
      className="hero-shell relative isolate flex w-full flex-col overflow-hidden bg-neutral-950 text-white"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            data-active={index === activeIndex}
            aria-hidden={index !== activeIndex}
            className="hero-slide absolute inset-0"
          >
            <Image
              src={cloudinaryImages[slide.id] ?? slide.media.src}
              alt={index === activeIndex ? slide.media.alt : ""}
              fill
              sizes="100vw"
              loading="eager"
              decoding="async"
              fetchPriority={index === 0 ? "high" : undefined}
              className="hero-image object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pt-24 pb-40 sm:pb-28 md:px-10 lg:px-12 lg:pb-24">
        <div
          key={activeSlide.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} sur ${heroSlides.length}`}
          className="flex min-h-[340px] max-w-[1280px] flex-col justify-end lg:min-h-[370px]"
        >
          <h1
            className="hero-reveal mt-5 w-fit text-[clamp(1.9rem,3.8vw,3.5rem)] leading-[1.03] font-bold tracking-[-0.035em] text-white"
            style={{ animationDelay: "160ms" }}
          >
            <span className="box-decoration-clone bg-black px-4 py-1.5 sm:whitespace-nowrap sm:px-5 sm:py-2">
              {activeSlide.title}
            </span>
          </h1>

          <p
            className="hero-reveal mt-3 w-fit text-[16px] leading-[1.65] text-white sm:text-[13px] lg:text-[18px]"
            style={{ animationDelay: "260ms" }}
          >
            <span className="box-decoration-clone bg-black px-3 py-1 sm:whitespace-nowrap">
              {activeSlide.description}
            </span>
          </p>

          <Link
            href={activeSlide.cta.href}
            className="hero-reveal mt-8 inline-flex w-fit items-center justify-center bg-accent px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            style={{ animationDelay: "360ms" }}
          >
            {activeSlide.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
