import { Container } from "@/components/layout/container";
import { facts } from "@/config/content";

const icons = [
  (
    <svg key="pin" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  ),
  (
    <svg key="clock" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  (
    <svg key="chat" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v10H9l-4 3.5V15H4Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),
];

export function FactsStrip() {
  return (
    <section className="border-b-[3px] border-carvao bg-fumo text-papel">
      <Container className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3 lg:gap-6">
        {facts.map((fact, index) => (
          <div key={fact.label} className="flex items-start gap-3 p-3">
            <span className="text-papel">{icons[index]}</span>
            <div>
              <span className="block font-display text-headline-sm uppercase text-papel">
                {fact.label}
              </span>
              <p className="mt-1 font-body text-body-md text-papel/80">{fact.detail}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
