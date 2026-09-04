import Image from "next/image";

import { Container } from "@/components/layout/container";
import { heroContent } from "@/config/content";

export function HeroSection() {
  return (
    <section className="section pt-12 lg:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-3.5 w-5 flex-col overflow-hidden">
              <span className="h-1/2 bg-vermelho" />
              <span className="h-1/2 bg-papel" />
            </span>
            <p className="font-body text-sm font-bold uppercase tracking-wider text-papel/90">
              {heroContent.badge}
            </p>
          </div>

          <h1 className="mt-6 font-display text-hero uppercase leading-[1.05] text-papel">
            {heroContent.titleLines.map((line) => (
              <span key={line} className="block">
                {line === heroContent.highlightWord ? (
                  <span className="text-mostarda">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-md font-body text-body text-papel/80">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              id="hero-whatsapp-cta"
              href={heroContent.primaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center border border-papel/20 bg-vermelho px-8 py-4 text-center font-body text-sm font-bold uppercase tracking-wide text-papel"
              style={{ borderRadius: "2px" }}
            >
              {heroContent.primaryCtaLabel}
            </a>
            <a
              href={heroContent.secondaryCtaHref}
              className="flex min-h-11 items-center justify-center border border-mostarda px-8 py-4 text-center font-body text-sm font-bold uppercase tracking-wide text-papel"
              style={{ borderRadius: "2px" }}
            >
              {heroContent.secondaryCtaLabel}
            </a>
          </div>
        </div>

        <div>
          <div className="relative aspect-[12/11] w-full">
            <Image
              src="/images/hero-barbearia.png"
              alt="Cliente sendo atendido na Barbearia do Kelvin"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-body text-xs uppercase tracking-wider text-papel/60">
            {heroContent.photoCaption}
          </p>
        </div>
      </Container>
    </section>
  );
}
