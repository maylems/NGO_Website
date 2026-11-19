import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ACHDR — Accueil"
      className={`inline-flex shrink-0 items-center ${className ?? ""}`}
    >
      <Image
        src="/images/Logos/Achdr_Logo.png"
        alt=""
        width={256}
        height={256}
        sizes="64px"
        loading="eager"
        className="h-16 w-16 shrink-0 object-contain"
      />
    </Link>
  );
}
