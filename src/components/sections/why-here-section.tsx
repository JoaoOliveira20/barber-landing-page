import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyHereReasons } from "@/config/content";

const icons = [
  <span key="price" aria-hidden="true" className="font-body text-2xl font-black text-papel">
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
    <section className="section bg-tinta">
      <Container>
        <SectionHeading title="Por que aqui?" />

        <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {whyHereReasons.map((reason, index) => (
            <div key={reason.title}>
              <div className="flex h-9 items-center">{icons[index]}</div>
              <h3 className="mt-4 font-display text-xl uppercase text-papel">
                {reason.title}
              </h3>
              <p className="mt-3 font-body text-sm text-papel/70">
                {reason.description}
              </p>
              <p className="mt-3 font-body text-xs font-bold uppercase tracking-wide text-papel/50">
                • {reason.tag}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
