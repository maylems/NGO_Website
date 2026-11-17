import Image from "next/image";
import Link from "next/link";
import { AudioPlayer } from "@/components/audio-player";
import { ArrowRightIcon, MicrophoneIcon } from "@/components/icons";
import { VideoCard } from "@/components/video-item";
import { featuredVideo, podcasts, secondaryVideos } from "@/lib/media";

export function EngagementSection() {
  return (
    <section
      id="sengager"
      aria-labelledby="engagement-heading"
      className="w-full bg-neutral-50"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid md:grid-cols-[64%_36%] lg:grid-cols-[68%_32%]">
          <div className="px-6 py-14 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:pr-16">
            <VideoCard item={featuredVideo} featured headingId="engagement-heading" />

            <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-6 lg:gap-8">
              {secondaryVideos.map((video) => (
                <VideoCard key={video.id} item={video} />
              ))}
            </div>
          </div>

          <aside
            id="engagement-podcasts"
            aria-label="ACHDR Podcasts"
            className="border-t border-neutral-200 bg-white px-6 py-14 md:border-l md:border-t-0 md:px-8 md:py-16 lg:px-10 lg:py-20"
          >
            <div className="flex items-center gap-3">
              <MicrophoneIcon className="h-6 w-6 shrink-0 text-neutral-400" />
              <h2 className="text-[17px] font-bold uppercase tracking-[0.12em] text-neutral-950">
                ACHDR Podcasts
              </h2>
            </div>

            <div className="mt-7 border-t border-neutral-200" />

            {podcasts.map((podcast, index) => (
              <article
                key={podcast.id}
                className={index > 0 ? "mt-12 border-t border-neutral-200 pt-8" : "mt-8"}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={podcast.cover}
                    alt={podcast.coverAlt}
                    fill
                    sizes="(min-width: 1440px) 340px, (min-width: 1024px) 30vw, (min-width: 768px) 32vw, calc(100vw - 48px)"
                    className="object-cover object-center"
                  />
                </div>

                <h3 className="mt-5 text-[18px] font-semibold leading-[1.3] text-neutral-950">
                  {podcast.title}
                </h3>

                <p className="mt-3 text-[12px] leading-[1.75] text-neutral-600">
                  {podcast.description}
                </p>

                {podcast.topics && (
                  <p className="mt-3 text-[12px] leading-[1.75] text-neutral-600">
                    {podcast.topics}
                  </p>
                )}

                {index === 0 && (
                  <AudioPlayer
                    src={podcast.audioUrl}
                    label={podcast.title}
                    statusLabel={podcast.statusLabel}
                  />
                )}
              </article>
            ))}

            <Link
              href="#engagement-podcasts"
              className="mt-12 inline-flex w-full items-center justify-between gap-4 border border-accent px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-800 transition-colors hover:border-accent-dark hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Découvrir nos contenus audio
              <ArrowRightIcon className="h-4 w-4 shrink-0" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
