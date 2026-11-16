import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type ActionProps = {
  number: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  className?: string;
  external?: boolean;
};

function Action({
  number,
  title,
  description,
  cta,
  href,
  className,
  external,
}: ActionProps) {
  const linkClasses =
    "inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

  const linkContent = (
    <>
      {cta}
      <ArrowRightIcon className="h-4 w-4 shrink-0" />
    </>
  );

  return (
    <div className={`flex h-full gap-5 ${className ?? ""}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-300 text-[11px] font-semibold tracking-[0.06em] text-neutral-700">
        {number}
      </span>

      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="max-w-[520px] text-[clamp(1.05rem,1.7vw,1.4rem)] font-bold uppercase leading-[1.35] tracking-[-0.005em] text-neutral-950">
          {title}
        </h3>

        <p className="mt-5 max-w-[430px] text-[13px] leading-[1.7] text-neutral-600">
          {description}
        </p>

        <div className="mt-auto pt-8">
          {external ? (
            <a href={href} className={linkClasses}>
              {linkContent}
            </a>
          ) : (
            <Link href={href} className={linkClasses}>
              {linkContent}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export function ParticipationSection() {
  return (
    <section
      id="participer"
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-6 pb-16 md:px-10 md:pb-20 lg:px-12"
    >
      <div className="pt-6 md:pt-10">
        <h2 className="text-[clamp(2.6rem,5vw,4.25rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-neutral-950">
          Participer
        </h2>

        <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden bg-neutral-100 md:mt-14 md:aspect-[2.1/1]">
          <Image
            src="/images/participation-community.jpg"
            alt="Atelier communautaire organisé par l’ACHDR"
            fill
            sizes="(min-width: 1440px) 1344px, (min-width: 1024px) calc(100vw - 96px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
            className="object-cover object-center"
          />
        </div>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-0 md:divide-x md:divide-neutral-200">
          <Action
            number="01"
            title="Contribuer aux actions humanitaires et au développement des communautés"
            description="Participez aux initiatives de l’ACHDR et contribuez aux actions en faveur des populations et du développement durable."
            cta="En savoir plus"
            href="/#nos-domaines"
            className="md:pr-10 lg:pr-16"
          />

          <Action
            number="02"
            title="Devenir bénévole et s’engager aux côtés de l’ACHDR"
            description="Rejoignez une dynamique de solidarité et mettez vos compétences au service des communautés."
            cta="Nous contacter"
            href="mailto:achdr015@gmail.com?subject=Devenir%20b%C3%A9n%C3%A9vole%20aupr%C3%A8s%20de%20l%27ACHDR"
            className="md:pl-10 lg:pl-16"
            external
          />
        </div>

        <div className="mt-14 border-t border-neutral-200 md:mt-16" />
      </div>
    </section>
  );
}
