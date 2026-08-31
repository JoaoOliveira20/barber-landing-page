"use client";

import { Container } from "@/components/layout/container";
import { services, servicesNote } from "@/config/content";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { whatsappNumber } from "@/config/site";

function buildServiceWhatsappUrl(serviceName: string) {
  const message = `Oi! Queria marcar um ${serviceName}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function ServicesSection() {
  const { elementRef, hasBeenRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="relative border-t border-foreground/8 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div
          ref={elementRef}
          className={`scroll-reveal ${hasBeenRevealed ? "is-visible" : ""}`}
        >
          <div className="border-b border-foreground/10 pb-8 lg:pb-10">
            <h2
              id="services-title"
              className="font-display text-3xl leading-tight text-foreground uppercase sm:text-4xl lg:text-5xl"
            >
              Serviços e preços
            </h2>
          </div>

          <div className="mt-8 border-2 border-accent/70 bg-surface-sunken shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:mt-10">
            <ul className="divide-y divide-accent/20">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={buildServiceWhatsappUrl(service.name)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Agendar ${service.name} pelo WhatsApp`}
                    className="price-row flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-6 py-5 sm:flex-nowrap sm:gap-x-6 sm:px-10 sm:py-6"
                  >
                    <div className="flex min-w-0 flex-1 items-baseline gap-3">
                      <span className="price-row-name font-bold whitespace-normal text-foreground uppercase sm:whitespace-nowrap sm:text-lg">
                        {service.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="hidden h-px flex-1 border-b border-dotted border-foreground/25 sm:block"
                      />
                      <span className="text-xs whitespace-nowrap text-muted">
                        {service.duration}
                      </span>
                    </div>

                    <span className="text-xl font-bold whitespace-nowrap text-accent sm:text-2xl">
                      {service.price}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm font-semibold text-foreground">
            {servicesNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
