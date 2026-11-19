import Image from "next/image";
import Link from "next/link";
import { FacebookLogoIcon } from "@phosphor-icons/react/ssr";

type FooterLink = {
  label: string;
  href?: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const profileUrl = "https://peacebyafrica.com/achdr-fr/";
const contactEmail = "mailto:achdr015@gmail.com";
const currentYear = new Date().getFullYear();

const footerColumns: FooterColumn[] = [
  {
    title: "L'organisation",
    links: [
      { label: "Qui sommes-nous ?", href: profileUrl },
      { label: "Notre mission et notre vision", href: profileUrl },
      { label: "Notre histoire", href: profileUrl },
      { label: "Notre gouvernance" },
      { label: "Notre équipe" },
      { label: "Nos valeurs", href: profileUrl },
      { label: "Nos partenaires institutionnels", href: "/#nos-partenaires" },
      { label: "Notre présence géographique" },
    ],
  },
  {
    title: "Nos domaines d'intervention",
    links: [
      { label: "Action humanitaire", href: "/#nos-actions-carousel" },
      { label: "Santé et nutrition", href: "/#nos-actions-carousel" },
      { label: "Éducation et formation" },
      { label: "Eau, hygiène et assainissement" },
      { label: "Protection des populations", href: "/#nos-actions-carousel" },
      { label: "Autonomisation des communautés", href: "/#nos-actions-carousel" },
      { label: "Développement durable", href: "/#nos-actions-carousel" },
      { label: "Environnement et résilience", href: "/#nos-actions-carousel" },
    ],
  },
  {
    title: "Nos actions et ressources",
    links: [
      { label: "Nos projets", href: profileUrl },
      { label: "Nos réalisations", href: profileUrl },
      { label: "Actualités", href: profileUrl },
      { label: "Publications", href: "/publications" },
      { label: "Rapports d'activités", href: profileUrl },
      { label: "Galerie photos", href: profileUrl },
      { label: "Galerie vidéos" },
      { label: "Communiqués", href: profileUrl },
    ],
  },
  {
    title: "Nous rejoindre",
    links: [
      {
        label: "Devenir partenaire",
        href: "mailto:achdr015@gmail.com?subject=Devenir%20partenaire%20de%20l%27ACHDR",
      },
      {
        label: "Soutenir nos actions",
        href: "mailto:achdr015@gmail.com?subject=Soutenir%20l%27ACHDR",
      },
      { label: "Faire un don" },
      {
        label: "Devenir bénévole",
        href: "mailto:achdr015@gmail.com?subject=Devenir%20b%C3%A9n%C3%A9vole",
      },
      { label: "Nous contacter", href: contactEmail },
      { label: "Opportunités et carrières" },
      { label: "FAQ" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: "Conditions d'utilisation" },
  { label: "Politique de confidentialité", href: "/mentions-legales#confidentialite" },
  { label: "Mentions légales", href: "/mentions-legales#mentions-legales" },
  { label: "Politique relative aux cookies" },
  { label: "FAQ" },
  { label: "Contactez-nous", href: contactEmail },
];

const columnLinkBaseClassName =
  "text-[13px] leading-[1.55] lg:text-[14px]";
const columnLinkInteractiveClassName =
  "text-[#4B4B4B] transition-colors duration-200 hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function ColumnLinkItem({ link }: { link: FooterLink }) {
  if (!link.href) {
    return (
      <span
        className={`${columnLinkBaseClassName} cursor-default text-[#6A6A6A]`}
        aria-disabled="true"
      >
        {link.label}
      </span>
    );
  }

  const className = `${columnLinkBaseClassName} ${columnLinkInteractiveClassName}`;

  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      className={className}
      {...(link.href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {link.label}
    </a>
  );
}

const legalLinkBaseClassName =
  "text-[11px] font-semibold uppercase tracking-[0.08em]";
const legalLinkInteractiveClassName =
  "text-neutral-300 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function LegalLinkItem({ link }: { link: FooterLink }) {
  if (!link.href) {
    return (
      <span
        className={`${legalLinkBaseClassName} cursor-default text-neutral-400`}
        aria-disabled="true"
      >
        {link.label}
      </span>
    );
  }

  const className = `${legalLinkBaseClassName} ${legalLinkInteractiveClassName}`;

  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[#F1F1F1]">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-14 md:px-8 md:py-16 lg:px-10 lg:py-[72px]">
        <nav aria-label="Navigation institutionnelle du pied de page">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {footerColumns.map((column, index) => (
              <section
                key={column.title}
                className="min-w-0"
                aria-labelledby={`footer-column-${index}`}
              >
                <h2
                  id={`footer-column-${index}`}
                  className="text-[15px] font-bold uppercase leading-[1.3] tracking-[0.01em] text-[#2E2E2E] lg:text-[17px]"
                >
                  {column.title}
                </h2>
                <span aria-hidden="true" className="mt-3 block h-[3px] w-[44px] bg-accent" />
                <ul className="mt-5 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`} className="flex min-w-0 items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-neutral-400"
                      />
                      <ColumnLinkItem link={link} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </nav>
      </div>

      <div className="border-t-4 border-accent bg-[#303030]">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-8 md:px-8 lg:px-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Image
                src="/images/Logos/Achdr_Logo.png"
                alt="Logo ACHDR"
                width={1254}
                height={1254}
                sizes="(min-width: 1024px) 96px, 80px"
                className="h-20 w-20 shrink-0 object-contain lg:h-24 lg:w-24"
              />
              <p className="max-w-[300px] text-[12px] font-semibold uppercase leading-[1.45] tracking-[0.08em] text-white">
                Association pour l’Action Humanitaire et le Développement Durable (ACHDR)
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 md:justify-end">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="inline-flex h-[22px] w-[22px] items-center justify-center text-neutral-300"
                >
                  <FacebookLogoIcon size={22} weight="fill" />
                </span>
              </div>

              <span aria-hidden="true" className="hidden h-7 w-px bg-white/25 sm:block" />

              <button
                type="button"
                disabled
                className="inline-flex h-9 items-center justify-center rounded-[3px] border border-accent bg-white px-4 text-[11px] font-bold uppercase tracking-[0.1em] text-[#303030] transition-colors duration-200 hover:bg-[#E6F7FD] disabled:cursor-not-allowed disabled:opacity-100"
              >
                Faire un don
              </button>
            </div>
          </div>

          <div className="mt-7 border-t border-white/20 pt-5">
            <nav aria-label="Liens institutionnels et légaux">
              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {legalLinks.map((link, index) => (
                  <li key={link.label} className="flex items-center gap-4">
                    <LegalLinkItem link={link} />
                    {index < legalLinks.length - 1 && (
                      <span aria-hidden="true" className="hidden h-3 w-px bg-white/25 sm:block" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.1em] text-neutral-400">
              © {currentYear} ACHDR — Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
