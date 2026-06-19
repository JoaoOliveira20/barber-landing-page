import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DifferentialsSection } from "@/components/sections/differentials-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocationSection } from "@/components/sections/location-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="fixed top-3 left-3 z-[60] -translate-y-20 bg-accent px-4 py-3 text-sm font-bold text-accent-foreground transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader />

      <main id="conteudo-principal" className="page-enter">
        <HeroSection />
        <ServicesSection />
        <DifferentialsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <GallerySection />
        <LocationSection />
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
