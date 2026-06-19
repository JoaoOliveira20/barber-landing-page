import { Container } from "@/components/layout/container";
import {
  address,
  businessHours,
  siteConfig,
  whatsappUrl,
} from "@/config/site";

export function LocationSection() {
  return (
    <section
      id="localizacao"
      aria-labelledby="location-title"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid overflow-hidden border border-white/10 bg-surface shadow-[0_28px_90px_rgba(0,0,0,0.3)] xl:grid-cols-[1.18fr_0.82fr]">
          <div className="relative min-h-72 bg-surface-elevated sm:min-h-96 xl:min-h-[42rem]">
            <iframe
              src={address.mapsEmbedUrl}
              title={`Mapa da localização da ${siteConfig.name}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.9] contrast-[1.08] invert-[0.9] opacity-80"
            />
          </div>

          <div className="p-6 sm:p-10 xl:p-12">
            <p className="text-xs font-bold tracking-[0.24em] text-accent-strong uppercase">
              Localização e horários
            </p>
            <h2
              id="location-title"
              className="mt-4 font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl xl:text-5xl"
            >
              Seu próximo horário começa aqui.
            </h2>

            <address className="mt-7 not-italic">
              <p className="text-base leading-7 text-muted">{address.full}</p>
              <p className="mt-1 text-sm text-subtle">
                CEP {address.postalCode}
              </p>
            </address>

            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir a localização da Prime Barber no Google Maps"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent-strong transition-colors hover:text-foreground"
            >
              Abrir no Google Maps
              <span aria-hidden="true">↗</span>
            </a>

            <div className="mt-9 border-t border-white/10 pt-8">
              <h3 className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">
                Horários de funcionamento
              </h3>

              <dl className="mt-5 divide-y divide-white/8">
                {businessHours.map((schedule) => (
                  <div
                    key={schedule.days}
                    className="flex items-start justify-between gap-5 py-3 first:pt-0"
                  >
                    <dt className="text-sm text-muted">{schedule.days}</dt>
                    <dd className="shrink-0 text-right text-sm font-semibold text-foreground">
                      {schedule.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-cta mt-9 inline-flex min-h-13 w-full items-center justify-center gap-3 whitespace-nowrap bg-accent px-5 text-sm font-bold text-accent-foreground hover:bg-accent-strong sm:px-6"
              aria-label="Agendar um horário na Prime Barber pelo WhatsApp"
            >
              Agendar pelo WhatsApp
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
