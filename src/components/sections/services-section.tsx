import { Container } from "@/components/layout/container";
import { services, servicesNote } from "@/config/content";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="relative border-t border-foreground/8 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="border-b border-foreground/10 pb-8 lg:pb-10">
          <h2
            id="services-title"
            className="font-display text-3xl leading-tight text-foreground uppercase sm:text-4xl lg:text-5xl"
          >
            Serviços e preços
          </h2>
        </div>

        <div className="mt-8 border border-accent/35 bg-background sm:mt-10">
          <ul className="divide-y divide-accent/15">
            {services.map((service) => (
              <li
                key={service.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4 sm:flex-nowrap sm:gap-x-5 sm:px-8 sm:py-5"
              >
                <div className="flex min-w-0 flex-1 items-baseline gap-3">
                  <span className="font-display text-lg whitespace-nowrap text-foreground uppercase sm:text-xl">
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

                <span className="font-display text-xl whitespace-nowrap text-accent sm:text-2xl">
                  {service.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm font-semibold text-accent-strong">
          {servicesNote}
        </p>
      </Container>
    </section>
  );
}
