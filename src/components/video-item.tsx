"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CloseIcon, PlayIcon } from "@/components/icons";
import type { VideoItem } from "@/lib/media";

type VideoCardProps = {
  item: VideoItem;
  featured?: boolean;
  headingId?: string;
};

function getEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id =
        parsed.searchParams.get("v") ??
        parsed.pathname.split("/").filter(Boolean)[1];
      return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : null;
    }

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : null;
    }

    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const segments = parsed.pathname.split("/").filter(Boolean);
      const id = segments[host === "vimeo.com" ? 0 : 1];
      return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : null;
    }
  } catch {
    return null;
  }

  return null;
}

export function VideoCard({ item, featured = false, headingId }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const embedUrl = item.videoUrl ? getEmbedUrl(item.videoUrl) : null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const playSize = featured
    ? "h-16 w-16 md:h-20 md:w-20"
    : "h-12 w-12 md:h-14 md:w-14";
  const iconSize = featured ? "h-6 w-6 md:h-7 md:w-7" : "h-5 w-5";

  return (
    <article>
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
        <Image
          src={item.poster}
          alt={item.posterAlt}
          fill
          sizes={
            featured
              ? "(min-width: 1440px) 850px, (min-width: 1024px) 62vw, (min-width: 768px) 60vw, calc(100vw - 48px)"
              : "(min-width: 1440px) 420px, (min-width: 1024px) 30vw, (min-width: 768px) 30vw, calc(100vw - 48px)"
          }
          className="object-cover object-center"
        />

        {item.videoUrl ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label={`Lire la vidéo : ${item.title}`}
            className="group absolute inset-0 grid place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-accent"
          >
            <span
              className={`grid place-items-center rounded-full bg-[#e30613] text-white transition-colors group-hover:bg-[#b90510] ${playSize}`}
            >
              <PlayIcon className={iconSize} />
            </span>
          </button>
        ) : (
          <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
            <span
              className={`grid place-items-center rounded-full bg-[#e30613] text-white ${playSize}`}
            >
              <PlayIcon className={iconSize} />
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 md:p-5">
          <span className="bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-950">
            ACHDR
          </span>
          <span className="bg-neutral-950/80 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
            Film
          </span>
        </div>

        {!item.videoUrl && item.statusLabel && (
          <span className="pointer-events-none absolute bottom-4 left-4 max-w-[80%] bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-600 md:bottom-5 md:left-5">
            {item.statusLabel}
          </span>
        )}
      </div>

      {featured ? (
        <h2
          id={headingId}
          className="mt-6 max-w-[760px] text-[clamp(1.5rem,2.4vw,2.25rem)] font-light uppercase leading-[1.12] tracking-[-0.015em] text-neutral-950"
        >
          {item.title}
        </h2>
      ) : (
        <h3 className="mt-5 text-[13px] font-bold uppercase leading-[1.45] tracking-[0.01em] text-neutral-950">
          {item.title}
        </h3>
      )}

      <p
        className={`mt-3 max-w-[680px] text-[12px] leading-[1.75] text-neutral-600 ${
          featured ? "md:text-[13px]" : ""
        }`}
      >
        {item.description}
      </p>

      {isOpen && item.videoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="w-full max-w-5xl bg-white">
            <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-800">
                {item.title}
              </p>
              <button
                type="button"
                autoFocus
                onClick={() => setIsOpen(false)}
                aria-label="Fermer la vidéo"
                className="grid h-8 w-8 place-items-center text-neutral-700 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={item.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : (
                <video
                  src={item.videoUrl}
                  controls
                  autoPlay
                  className="h-full w-full"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
