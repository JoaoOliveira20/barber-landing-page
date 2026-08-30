import { Container } from "@/components/layout/container";
import { services, servicesNote } from "@/config/content";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="relative border-t border-white/8 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="border-b border-white/10 pb-8 lg:pb-10">
          <h2
            id="services-title"
            className="font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
          >
            Serviços e preços
          </h2>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="group relative flex flex-col bg-surface p-6 transition-colors duration-300 hover:bg-surface-elevated motion-reduce:transition-none sm:p-7"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {service.name}
              </h3>

              <dl className="mt-6 flex items-end justify-between gap-5 border-t border-white/10 pt-6">
                <div>
                  <dt className="text-[0.65rem] font-bold tracking-[0.18em] text-subtle uppercase">
                    Duração
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {service.duration}
                  </dd>
                </div>

                <dd className="font-display text-2xl font-semibold text-accent-strong">
                  {service.price}
                </dd>
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-accent-strong">
          {servicesNote}
        </p>
      </Container>
    </section>
  );
}
