import { Container } from "@/components/layout/container";
import { StaticMap } from "@/components/ui/static-map";
import { address, businessHours } from "@/config/site";

function NearMeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 11 21 3l-8 18-2.5-7.5L3 11Z" />
    </svg>
  );
}

export function LocationSection() {
  return (
    <section id="onde-ficamos" className="section border-b-[3px] border-tinta bg-papel text-carvao">
      <Container>
        <div className="mb-8 space-y-1">
          <h2 className="section-title">Onde ficamos</h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between py-3 lg:col-span-5">
            <div className="space-y-4">
              <div>
                <span className="mb-1 block font-body text-label-lg font-bold uppercase tracking-wider text-carvao">
                  Endereço
                </span>
                <p className="font-display text-headline-sm uppercase text-carvao">
                  {address.street}
                </p>
                <p className="mt-1 font-body text-body-md text-carvao/60">
                  {address.neighborhood} ({address.reference})
                </p>
              </div>

              <div className="h-[2px] w-full bg-tinta/15" />

              <div>
                <span className="mb-1 block font-body text-label-lg font-bold uppercase tracking-wider text-carvao">
                  Horário de atendimento
                </span>
                <ul className="space-y-1 font-body text-body-lg text-carvao">
                  {businessHours.map((entry, index) => (
                    <li
                      key={entry.days}
                      className={
                        index === businessHours.length - 1
                          ? "flex justify-between text-carvao/60"
                          : "flex justify-between border-b border-tinta/10 pb-1"
                      }
                    >
                      <span className="font-bold">{entry.days}:</span>
                      <span className={index === businessHours.length - 1 ? "font-bold uppercase" : ""}>
                        {entry.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 bg-tinta px-4 py-3 text-center font-body text-headline-sm uppercase text-papel transition-all hover:brightness-125"
              >
                <NearMeIcon />
                Como chegar (Google Maps)
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-7">
            <StaticMap />
          </div>
        </div>
      </Container>
    </section>
  );
}
