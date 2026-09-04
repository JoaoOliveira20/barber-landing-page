import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FactsStrip } from "@/components/sections/facts-strip";
import { HeroSection } from "@/components/sections/hero-section";
import { PriceBoard } from "@/components/sections/price-board";
import { WhyHereSection } from "@/components/sections/why-here-section";
import { BarbersSection } from "@/components/sections/barbers-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LocationSection } from "@/components/sections/location-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FactsStrip />
        <PriceBoard />
        <WhyHereSection />
        <BarbersSection />
        <GallerySection />
        <TestimonialsSection />
        <LocationSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
