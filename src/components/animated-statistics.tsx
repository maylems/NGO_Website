"use client";

import { useEffect, useRef, useState } from "react";
import type { Statistic } from "@/lib/statistics";

type AnimatedStatisticsProps = {
  statistics: Statistic[];
};

function formatValue(value: number) {
  return value.toLocaleString("fr-FR");
}

export function AnimatedStatistics({ statistics }: AnimatedStatisticsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started) return;

        started = true;
        observer.disconnect();
        setProgress(0);

        const start = performance.now();
        const duration = 1500;

        const tick = (now: number) => {
          const elapsed = Math.min((now - start) / duration, 1);
          setProgress(1 - Math.pow(1 - elapsed, 3));

          if (elapsed < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const eased = 1 - Math.pow(1 - progress, 3);

  return (
    <div ref={containerRef} className="grid gap-0 sm:grid-cols-3 lg:col-span-9">
      {statistics.map((statistic, index) => (
        <div
          key={statistic.label}
          className={`border-t border-accent/30 py-6 sm:border-l sm:border-t-0 sm:py-0 sm:pl-6 md:pl-8 lg:pl-10 ${
            index === 0 ? "sm:border-l-0 sm:pl-0" : ""
          }`}
        >
          <p className="text-[clamp(2.75rem,5vw,4.75rem)] font-light leading-none tracking-[-0.04em] text-neutral-950">
            <span className="sr-only">{formatValue(statistic.value)}</span>
            <span aria-hidden="true">
              {formatValue(Math.round(statistic.value * eased))}
            </span>
          </p>
          <p className="mt-4 max-w-[180px] text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-neutral-600">
            {statistic.label}
          </p>
        </div>
      ))}
    </div>
  );
}
