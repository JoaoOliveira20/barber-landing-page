import Image from "next/image";

import { Container } from "@/components/layout/container";
import { barbers, barbersIntro } from "@/config/content";

export function BarbersSection() {
  return (
    <section id="barbeiros" className="section border-b-[3px] border-tinta bg-papel text-carvao">
      <Container>
        <div className="mb-12 space-y-1">
          <h2 className="section-title">{barbersIntro.title}</h2>
          <p className="max-w-md font-body text-body-md text-carvao/60">
            {barbersIntro.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {barbers.map((barber) => (
            <div key={barber.name} className="flex flex-col">
              <div className="relative mb-4 h-80 overflow-hidden">
                <Image
                  src={barber.photo}
                  alt={`Barbeiro ${barber.name} na Barbearia do Kelvin`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top contrast-105"
                />
              </div>
              <div className="mb-2 flex items-baseline justify-between border-b-2 border-tinta pb-2">
                <h3 className="font-display text-headline-lg uppercase text-carvao">
                  {barber.name}
                </h3>
              </div>
              <p className="mt-3 font-body text-body-lg italic leading-relaxed text-carvao">
                &ldquo;{barber.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-tinta/20 pt-2">
                <a
                  href={barber.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-label-lg font-bold uppercase text-carvao hover:underline"
                >
                  Agendar c/ {barber.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
