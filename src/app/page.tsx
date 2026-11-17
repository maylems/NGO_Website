import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PublicationsSection } from "@/components/publications-section";
import { WorkSection } from "@/components/work-section";
import { RegionSection } from "@/components/region-section";
import { EngagementSection } from "@/components/engagement-section";
import { CommunityBanner } from "@/components/community-banner";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PublicationsSection />
        <WorkSection />
        <RegionSection />
        <EngagementSection />
        <CommunityBanner />
      </main>
    </>
  );
}
