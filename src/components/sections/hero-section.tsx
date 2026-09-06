import Image from "next/image";

import { Container } from "@/components/layout/container";
import { heroContent } from "@/config/content";

export function HeroSection() {
  return (
    <section className="border-b-[3px] border-papel bg-tinta py-8 text-papel lg:py-16">
      <Container className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="flex flex-col items-start space-y-4 lg:col-span-7">
          <div className="inline-flex items-center gap-2 pb-1">
            <span className="flex h-3.5 w-7 overflow-hidden">
              <span className="w-1/3 bg-vermelho" />
              <span className="w-1/3 bg-papel" />
              <span className="w-1/3 bg-tinta" />
            </span>
            <span className="font-body text-label-lg uppercase tracking-widest text-papel">
              {heroContent.badge}
            </span>
          </div>

          <h1 className="font-display text-display uppercase leading-tight text-papel">
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

          <p className="max-w-xl font-body text-body-lg text-papel/90">
            {heroContent.subtitle}
          </p>

          <div className="flex w-full flex-wrap items-center gap-4 pt-2 sm:w-auto">
            <a
              id="hero-whatsapp-cta"
              href={heroContent.primaryCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="press-2 shadow-hard-4 w-full border-2 border-papel bg-vermelho px-6 py-3 text-center font-body text-headline-sm uppercase text-papel transition-all hover:brightness-110 sm:w-auto"
            >
              {heroContent.primaryCtaLabel}
            </a>
            <a
              href={heroContent.secondaryCtaHref}
              className="press-2 shadow-hard-3 w-full border-2 border-papel bg-transparent px-6 py-3 text-center font-body text-headline-sm uppercase text-papel transition-all hover:bg-papel hover:text-tinta sm:w-auto"
            >
              {heroContent.secondaryCtaLabel}
            </a>
          </div>
        </div>

        <div className="relative mt-4 lg:col-span-5 lg:mt-0">
          <div className="relative h-[360px] overflow-hidden lg:h-[440px]">
            <Image
              src="/images/hero-barbearia.jpg"
              alt="Cliente sendo atendido na Barbearia do Kelvin"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="parallax-photo object-cover contrast-105"
            />
          </div>
          <p className="mt-2 font-body text-label-lg font-bold uppercase tracking-wider text-papel/80">
            {heroContent.photoCaption}
          </p>
        </div>
      </Container>
    </section>
  );
}
