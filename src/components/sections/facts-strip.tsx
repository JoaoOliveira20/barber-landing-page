import { Container } from "@/components/layout/container";
import { facts } from "@/config/content";

const icons = [
  (
    <svg key="pin" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  ),
  (
    <svg key="clock" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  (
    <svg key="chat" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5h16v10H9l-4 3.5V15H4Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),
];

export function FactsStrip() {
  return (
    <section className="border-y border-papel/10 bg-fumo">
      <Container className="grid gap-8 py-8 sm:grid-cols-3">
        {facts.map((fact, index) => (
          <div key={fact.label} className="flex items-start gap-3">
            <span className="mt-0.5 text-papel">{icons[index]}</span>
            <div>
              <p className="font-body text-base font-bold uppercase tracking-wide text-papel">
                {fact.label}
              </p>
              <p className="mt-1 font-body text-sm text-papel/70">{fact.detail}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
