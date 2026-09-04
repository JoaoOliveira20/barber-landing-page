import { Container } from "@/components/layout/container";
import { StaticMap } from "@/components/ui/static-map";
import { address, businessHours } from "@/config/site";

export function LocationSection() {
  return (
    <section id="onde-ficamos" className="section bg-papel text-carvao">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="section-title">Onde ficamos</h2>

          <div className="mt-8">
            <p className="font-body text-xs font-bold uppercase tracking-wider text-carvao/60">
              Endereço
            </p>
            <p className="mt-2 font-display text-lg uppercase text-carvao">
              {address.street}
            </p>
            <p className="mt-1 font-body text-sm text-carvao/70">
              {address.neighborhood} ({address.reference})
            </p>
          </div>

          <div className="mt-6 border-t border-carvao/20 pt-6">
            <p className="font-body text-xs font-bold uppercase tracking-wider text-carvao/60">
              Horário de atendimento
            </p>
            <dl className="mt-3 space-y-2">
              {businessHours.map((entry) => (
                <div key={entry.days} className="flex items-baseline justify-between gap-3">
                  <dt className="font-body text-sm font-bold text-carvao">{entry.days}:</dt>
                  <dd className="font-body text-sm font-bold text-carvao">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex min-h-11 items-center justify-center gap-2 bg-tinta px-6 py-4 font-body text-sm font-bold uppercase tracking-wide text-papel"
            style={{ borderRadius: "2px" }}
          >
            ↗ Como chegar (Google Maps)
          </a>
        </div>

        <StaticMap />
      </Container>
    </section>
  );
}
