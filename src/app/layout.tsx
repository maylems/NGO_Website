import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACHDR — Agir pour les populations, construire un avenir durable",
  description:
    "L’ACHDR accompagne les communautés au Tchad à travers l’aide humanitaire, la résilience locale, la santé communautaire, la sécurité alimentaire, la prévention des conflits et la gestion durable des ressources naturelles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-neutral-950">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
