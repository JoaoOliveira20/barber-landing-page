import { Container } from "@/components/layout/container";
import { DashDivider } from "@/components/ui/dash-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricePaymentNote, services } from "@/config/content";

export function PriceBoard() {
  return (
    <section id="servicos" className="section bg-papel text-carvao">
      <Container>
        <SectionHeading title="Tabela de preços" />

        <div className="reveal-panel relative mt-10">
          <span className="absolute -left-1 -top-1 h-6 w-6 border-l-2 border-t-2 border-carvao" />
          <span className="absolute -right-1 -top-1 h-6 w-6 border-r-2 border-t-2 border-carvao" />
          <span className="absolute -bottom-1 -left-1 h-6 w-6 border-b-2 border-l-2 border-carvao" />
          <span className="absolute -bottom-1 -right-1 h-6 w-6 border-b-2 border-r-2 border-carvao" />

          <div className="border border-carvao">
            <div className="flex items-center justify-between bg-tinta px-6 py-4">
              <p className="font-body text-sm font-bold uppercase tracking-wider text-papel">
                Serviço
              </p>
              <p className="font-body text-sm font-bold uppercase tracking-wider text-papel">
                Valor (R$)
              </p>
            </div>

            {services.map((service) => (
              <div
                key={service.name}
                className="border-t border-carvao px-6 py-5"
              >
                <div className="flex items-baseline gap-3">
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                    <p className="font-body text-base font-bold uppercase text-carvao">
                      {service.name}
                    </p>
                    {service.featured ? (
                      <span className="whitespace-nowrap bg-tinta px-2 py-0.5 font-body text-[11px] font-bold uppercase tracking-wide text-papel">
                        Mais pedido
                      </span>
                    ) : null}
                  </div>
                  <span className="h-px min-w-4 flex-1 border-t border-dotted border-carvao/50" />
                  <p className="shrink-0 whitespace-nowrap font-display text-xl text-carvao">
                    {service.price}
                  </p>
                </div>
                <p className="mt-1 font-body text-sm text-carvao/70">
                  {service.description}
                </p>
              </div>
            ))}

            <div className="flex items-center justify-end gap-4 border-t border-carvao px-6 py-4 sm:justify-between">
              <DashDivider className="hidden sm:flex" />
              <p className="text-right font-body text-xs uppercase tracking-wider text-carvao/60">
                {pricePaymentNote}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
