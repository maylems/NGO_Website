import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PublicationsSection } from "@/components/publications-section";
import { NosActions } from "@/components/nos-actions";
import { UnderstandingCommitmentsSection } from "@/components/understanding-commitments-section";
import { CommunityBanner } from "@/components/community-banner";
import { InstitutionalPartnersSection } from "@/components/institutional-partners-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PublicationsSection />
        <NosActions />
        <UnderstandingCommitmentsSection />
        <InstitutionalPartnersSection />
        <CommunityBanner />
      </main>
    </>
  );
}
