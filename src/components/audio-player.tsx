"use client";

import { useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

type AudioPlayerProps = {
  src: string | null;
  label: string;
  statusLabel?: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "—:—";
  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
}

export function AudioPlayer({ src, label, statusLabel }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isReady = Boolean(src);
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!src || !audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  }

  function seek(event: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!src || !audio || !duration) return;

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  }

  return (
    <div className="mt-6 border-y border-neutral-200 py-4">
      {src && (
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={togglePlayback}
          disabled={!isReady}
          aria-label={
            isReady
              ? isPlaying
                ? `Mettre en pause : ${label}`
                : `Lire : ${label}`
              : "Audio de démonstration, fichier non disponible"
          }
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-accent text-accent transition-colors hover:border-accent-dark hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:border-neutral-300 disabled:text-neutral-400"
        >
          {isPlaying ? (
            <PauseIcon className="h-4 w-4" />
          ) : (
            <PlayIcon className="h-4 w-4" />
          )}
        </button>

        <span className="w-10 shrink-0 text-[10px] tabular-nums text-neutral-500">
          {isReady ? formatTime(currentTime) : "00:00"}
        </span>

        <div className="relative h-[3px] flex-1 bg-neutral-200">
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{ width: `${progress}%` }}
          />
          {isReady && (
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={seek}
              aria-label={`Progression de ${label}`}
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
          )}
        </div>

        <span className="w-10 shrink-0 text-right text-[10px] tabular-nums text-neutral-500">
          {isReady ? formatTime(duration) : "—:—"}
        </span>
      </div>

      {!isReady && statusLabel && (
        <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
          {statusLabel}
        </p>
      )}
    </div>
  );
}
