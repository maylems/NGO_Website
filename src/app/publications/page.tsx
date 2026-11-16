import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { PublicationsGrid } from "@/components/publications-section";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Publications — ACHDR",
  description:
    "Consultez les publications, rapports et ressources documentaires de l’ACHDR.",
};

export default function PublicationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-12">
          <div className="pt-14 md:pt-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              Retour à l’accueil
            </Link>

            <h1 className="mt-8 text-[clamp(2rem,4.4vw,3.7rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-neutral-950">
              Nos publications
            </h1>

            <p className="mt-6 max-w-[520px] text-[13px] leading-[1.8] text-neutral-700">
              L’ACHDR partage ses publications, rapports et ressources
              documentaires afin de valoriser ses actions et de contribuer à la
              réflexion sur les enjeux humanitaires et le développement durable.
            </p>

            <div className="mt-10 border-t border-neutral-200 md:mt-14" />

            <PublicationsGrid className="pb-20 pt-10 md:pb-24 md:pt-12" />
          </div>
        </section>
      </main>
    </>
  );
}
