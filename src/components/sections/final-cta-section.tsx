import { Container } from "@/components/layout/container";
import { finalCta } from "@/config/content";

export function FinalCtaSection() {
  const notes = finalCta.note.split(" · ");

  return (
    <section className="section bg-tinta text-center">
      <Container>
        <h2 className="font-display text-hero uppercase leading-[1.05] text-papel">
          {finalCta.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-6 max-w-lg font-body text-body text-papel/80">
          {finalCta.subtitle}
        </p>

        <a
          href={finalCta.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 flex min-h-11 max-w-md items-center justify-center gap-2 border border-papel/20 bg-vermelho px-8 py-4 text-center font-body text-sm font-bold uppercase tracking-wide text-papel"
          style={{ borderRadius: "2px" }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3.5" y="5" width="17" height="15" rx="1" />
            <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
          </svg>
          {finalCta.ctaLabel}
        </a>

        <p className="mt-4 font-body text-xs font-bold uppercase tracking-wider text-papel/50">
          {notes.map((note, index) => (
            <span key={note}>
              {index > 0 ? <span className="mx-3">•</span> : "• "}
              {note}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
