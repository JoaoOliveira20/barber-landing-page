import { Container } from "@/components/layout/container";
import { services } from "@/config/content";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="relative border-t border-white/8 bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-5 border-b border-white/10 pb-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-6 lg:pb-10">
          <div>
            <p className="text-xs font-bold tracking-[0.24em] text-accent-strong uppercase">
              Nossos serviços
            </p>
            <h2
              id="services-title"
              className="mt-4 max-w-xl font-display text-3xl leading-tight font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl"
            >
              Cuidado nos detalhes. Estilo no resultado.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            Serviços essenciais executados com técnica, atenção e o tempo certo
            para entregar um resultado à sua altura.
          </p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.name}
              className="group relative flex min-h-68 flex-col bg-surface p-6 transition-[background-color,box-shadow] duration-300 hover:bg-surface-elevated hover:shadow-[inset_0_1px_0_rgba(224,180,93,0.28)] motion-reduce:transition-none sm:min-h-76 sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
              />

              <span className="font-display text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-8 font-display text-2xl font-semibold text-foreground sm:mt-10">
                {service.name}
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted">
                {service.description}
              </p>

              <dl className="mt-auto flex items-end justify-between gap-5 border-t border-white/10 pt-6">
                <div>
                  <dt className="text-[0.65rem] font-bold tracking-[0.18em] text-subtle uppercase">
                    Duração
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    {service.duration}
                  </dd>
                </div>

                <div className="text-right">
                  <dt className="text-[0.65rem] font-bold tracking-[0.18em] text-subtle uppercase">
                    A partir de
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-accent-strong">
                    {service.price}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
