import { DashDivider } from "@/components/ui/dash-divider";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricePaymentNote, services, type Service } from "@/config/content";

function PriceRow({ service }: { service: Service }) {
  const rowClasses = [
    "group block p-4 border-2 border-tinta transition-all hover:bg-tinta hover:text-papel",
    service.featured ? "bg-papel-destaque shadow-hard-3" : "bg-papel shadow-hard-2",
  ].join(" ");

  return (
    <a href={service.whatsappUrl} target="_blank" rel="noopener noreferrer" className={rowClasses}>
      <div className="flex items-baseline justify-between gap-3">
        <div className="min-w-0 pr-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-body text-title-md uppercase text-carvao group-hover:text-papel">
              {service.name}
            </span>
            {service.featured ? (
              <span className="border border-carvao bg-tinta px-2 py-0.5 font-body text-label-sm uppercase text-papel">
                Mais pedido
              </span>
            ) : null}
          </div>
          <p className="mt-1 font-body text-body-md text-carvao/70 group-hover:text-papel/70">
            {service.description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden font-body text-carvao/50 tracking-widest group-hover:text-papel/50 sm:inline">
            ...............
          </span>
          <span className="font-display text-price-display text-carvao group-hover:text-papel">
            {service.price}
          </span>
        </div>
      </div>
    </a>
  );
}

export function PriceBoard() {
  return (
    <section id="servicos" className="section border-b-[3px] border-tinta bg-papel px-4 text-carvao lg:px-10">
      <div className="mx-auto max-w-[960px]">
        <SectionHeading title="Tabela de preços" className="mb-8" />

        <div className="reveal-panel relative border-[3px] border-tinta bg-papel-cartao p-3 shadow-hard-6 sm:p-6">
          <span className="absolute left-1 top-1 h-3 w-3 border-l-[3px] border-t-[3px] border-tinta" />
          <span className="absolute right-1 top-1 h-3 w-3 border-r-[3px] border-t-[3px] border-tinta" />
          <span className="absolute bottom-1 left-1 h-3 w-3 border-b-[3px] border-l-[3px] border-tinta" />
          <span className="absolute bottom-1 right-1 h-3 w-3 border-b-[3px] border-r-[3px] border-tinta" />

          <div className="mb-4 flex items-center justify-between border-2 border-carvao bg-tinta px-4 py-2">
            <span className="font-display text-headline-sm uppercase tracking-wider text-papel">
              Serviço
            </span>
            <span className="font-display text-headline-sm uppercase tracking-wider text-papel">
              Valor (R$)
            </span>
          </div>

          <div className="space-y-2">
            {services.map((service) => (
              <PriceRow key={service.name} service={service} />
            ))}
          </div>

          <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t-2 border-tinta pt-3 text-center sm:flex-row sm:text-left">
            <DashDivider className="hidden text-tinta sm:flex" />
            <span className="font-body text-label-sm uppercase tracking-wider text-carvao/70">
              {pricePaymentNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
