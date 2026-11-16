import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const profileUrl = "https://peacebyafrica.com/achdr-fr/";
const contactEmail = "mailto:achdr015@gmail.com";

const columns: FooterColumn[] = [
  {
    title: "Nos actions",
    links: [
      { label: "Nos domaines d’intervention", href: "/#nos-domaines" },
      { label: "Assistance humanitaire", href: "/#nos-domaines" },
      { label: "Développement durable", href: "/#nos-domaines" },
      { label: "Nos publications", href: "/publications" },
    ],
  },
  {
    title: "À propos de l’ACHDR",
    links: [
      { label: "Qui sommes-nous ?", href: profileUrl },
      { label: "Notre mission", href: profileUrl },
      { label: "Notre organisation", href: profileUrl },
      { label: "Nous contacter", href: contactEmail },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Actualités", href: "/#actualites" },
      { label: "Rapports et publications", href: "/publications" },
      { label: "Nos partenaires", href: profileUrl },
      { label: "Suivez-nous", href: "/#actualites" },
    ],
  },
];

function FooterNavLink({ link }: { link: FooterLink }) {
  const className =
    "text-[12px] leading-[1.6] text-neutral-600 hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

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

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-neutral-100">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12">
        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex h-14 items-start md:h-[70px]">
              <Logo className="origin-top-left scale-125 md:scale-150" />
            </div>

            <a
              href="mailto:achdr015@gmail.com?subject=Devenir%20partenaire%20de%20l%27ACHDR"
              className="group mt-8 flex items-center gap-5 text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:mt-10"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] group-hover:text-accent-dark">
                Devenir partenaire
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-neutral-300" />
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-neutral-500 group-hover:text-accent-dark" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-950">
                  {column.title}
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <FooterNavLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 border-t border-neutral-300 py-6 text-[11px] leading-[1.6] text-neutral-500 md:grid-cols-3 md:items-center">
          <p>© ACHDR — Tous droits réservés.</p>

          <nav
            aria-label="Informations légales"
            className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center"
          >
            <Link
              href="/mentions-legales#confidentialite"
              className="hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/mentions-legales#mentions-legales"
              className="hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Mentions légales
            </Link>
          </nav>

          <a
            href={contactEmail}
            className="hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-right"
          >
            achdr015@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
