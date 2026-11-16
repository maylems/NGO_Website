import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ACHDR — Accueil"
      className={`group inline-flex items-center gap-3 ${className ?? ""}`}
    >
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 shrink-0 place-items-center bg-accent text-white"
      >
        <span className="text-[19px] font-extrabold leading-none tracking-[-0.04em]">
          A
        </span>
        <span className="absolute bottom-1.5 right-1.5 h-1 w-1 bg-white/70" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[21px] font-extrabold leading-none tracking-[-0.03em] text-neutral-950">
          ACHDR
        </span>
        <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
          Tchad
        </span>
      </span>
    </Link>
  );
}
