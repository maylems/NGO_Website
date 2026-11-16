import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Mentions légales — ACHDR",
  description:
    "Mentions légales et politique de confidentialité de l’Association pour l’Action Humanitaire et le Développement Durable (ACHDR).",
};

export default function LegalPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-20 pt-12 md:px-10 md:pb-24 md:pt-16 lg:px-12">
          <div className="max-w-[760px]">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-600 hover:text-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Retour à l’accueil
            </Link>

            <h1 className="mt-10 text-[clamp(2.2rem,4.5vw,3.6rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-neutral-950">
              Mentions légales
            </h1>

            <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-neutral-500">
              Dernière mise à jour : novembre 2026
            </p>

            <section
              id="mentions-legales"
              className="mt-12 scroll-mt-24 border-t border-neutral-200 pt-8"
            >
              <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-950">
                Éditeur du site
              </h2>
              <div className="mt-5 space-y-4 text-[13px] leading-[1.75] text-neutral-600">
                <p>
                  Le présent site est édité par l’Association pour l’Action
                  Humanitaire et le Développement Durable (ACHDR), organisation
                  non gouvernementale de droit tchadien.
                </p>
                <p>
                  Bureau de coordination : N’Djamena, quartier Walia, 9e
                  arrondissement, Tchad.
                </p>
                <p>
                  Contact :{" "}
                  <a
                    href="mailto:achdr015@gmail.com"
                    className="text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                  >
                    achdr015@gmail.com
                  </a>
                </p>
                <p>
                  Direction de la publication : la coordination de l’ACHDR.
                </p>
              </div>
            </section>

            <section className="mt-10 border-t border-neutral-200 pt-8">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-950">
                Propriété intellectuelle
              </h2>
              <div className="mt-5 space-y-4 text-[13px] leading-[1.75] text-neutral-600">
                <p>
                  Les textes et éléments graphiques présentés sur ce site sont
                  la propriété de l’ACHDR, sauf mention contraire. Les
                  photographies proviennent des archives de l’association ou de
                  banques d’images sous licence libre ; leurs crédits sont
                  indiqués lorsque requis.
                </p>
                <p>
                  Toute reproduction ou réutilisation substantielle nécessite
                  l’accord préalable de l’ACHDR.
                </p>
              </div>
            </section>

            <section
              id="confidentialite"
              className="mt-10 scroll-mt-24 border-t border-neutral-200 pt-8"
            >
              <h2 className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-950">
                Politique de confidentialité
              </h2>
              <div className="mt-5 space-y-4 text-[13px] leading-[1.75] text-neutral-600">
                <p>
                  Ce site ne comporte pas de formulaire de collecte de données
                  personnelles et n’utilise pas d’outil de mesure d’audience ou
                  de suivi publicitaire.
                </p>
                <p>
                  Les informations transmises par courriel à l’adresse de
                  contact sont utilisées uniquement pour répondre aux demandes.
                  Elles ne sont ni vendues ni transmises à des tiers.
                </p>
                <p>
                  Pour toute question relative à vos données, écrivez à{" "}
                  <a
                    href="mailto:achdr015@gmail.com"
                    className="text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                  >
                    achdr015@gmail.com
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
