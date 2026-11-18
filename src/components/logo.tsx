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
        width={1254}
        height={1254}
        sizes="56px"
        loading="eager"
        className="h-14 w-14 shrink-0 object-contain"
      />
    </Link>
  );
}
