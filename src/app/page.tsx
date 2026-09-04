import { SiteHeader } from "@/components/layout/site-header";
import { FactsStrip } from "@/components/sections/facts-strip";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FactsStrip />
      </main>
    </>
  );
}
