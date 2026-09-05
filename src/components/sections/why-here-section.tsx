import { Container } from "@/components/layout/container";
import { whyHereReasons } from "@/config/content";

const icons = [
  <span key="price" aria-hidden="true" className="font-display text-headline-md text-papel">
    R$
  </span>,
  (
    <svg key="handshake" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 12l4-3 3 2 3-2 2 2h4l4-3" />
      <path d="M6 11l4 6 2-1 2 2 2-1 2-5" />
      <path d="M2 12l3 7 3-2" />
      <path d="M22 9l-3 8-3-2" />
    </svg>
  ),
  (
    <svg key="scissors" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 7.5 20 18M8 16.5 20 6" />
    </svg>
  ),
];

export function WhyHereSection() {
  return (
    <section className="section border-b-[3px] border-papel bg-tinta text-papel">
      <Container>
        <div className="mb-12">
          <h2 className="font-display text-headline-lg uppercase text-papel">Por que aqui?</h2>
          <div className="mt-2 h-1 w-16 bg-papel" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyHereReasons.map((reason, index) => (
            <div key={reason.title} className="flex flex-col justify-between py-3">
              <div>
                <div className="mb-3 flex h-12 w-12 items-center justify-start">
                  {icons[index]}
                </div>
                <h3 className="mb-2 font-display text-headline-sm uppercase text-papel">
                  {reason.title}
                </h3>
                <p className="font-body text-body-md leading-relaxed text-papel/80">
                  {reason.description}
                </p>
              </div>
              <div className="mt-4 font-body text-label-sm uppercase text-papel/80">
                • {reason.tag}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
