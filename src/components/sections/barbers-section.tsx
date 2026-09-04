import Image from "next/image";

import { Container } from "@/components/layout/container";
import { barbers, barbersIntro } from "@/config/content";

export function BarbersSection() {
  return (
    <section id="barbeiros" className="section bg-papel text-carvao">
      <Container>
        <h2 className="section-title">{barbersIntro.title}</h2>
        <p className="mt-4 max-w-xl font-body text-body text-carvao/70">
          {barbersIntro.subtitle}
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8">
          {barbers.map((barber) => (
            <div key={barber.name}>
              <div className="relative aspect-[16/9]">
                <Image
                  src={barber.photo}
                  alt={`Barbeiro ${barber.name} na Barbearia do Kelvin`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 border-b-2 border-carvao pb-4 font-display text-xl uppercase text-carvao">
                {barber.name}
              </h3>
              <p className="mt-5 font-body italic text-body text-carvao/80">
                &ldquo;{barber.quote}&rdquo;
              </p>
              <a
                href={barber.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center border-t border-carvao/20 pt-5 font-body text-sm font-bold uppercase tracking-wide text-carvao"
              >
                Agendar c/ {barber.name} →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
