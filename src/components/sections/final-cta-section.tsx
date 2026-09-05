import { Container } from "@/components/layout/container";
import { finalCta } from "@/config/content";

export function FinalCtaSection() {
  const notes = finalCta.note.split(" · ");

  return (
    <section className="section bg-tinta text-center text-papel">
      <Container>
        <div className="mx-auto flex max-w-[800px] flex-col items-center py-6">
          <h2 className="section-title text-papel">
            {finalCta.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-3 max-w-lg font-body text-body-lg leading-relaxed text-papel/80">
            {finalCta.subtitle}
          </p>

          <a
            href={finalCta.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center gap-2 bg-vermelho px-8 py-4 text-center font-body text-headline-sm uppercase text-papel transition-all hover:brightness-110 sm:w-auto"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3.5" y="5" width="17" height="15" rx="1" />
              <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
            </svg>
            {finalCta.ctaLabel}
          </a>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-center font-body text-label-sm uppercase tracking-wider text-papel/60">
            {notes.map((note) => (
              <span key={note}>• {note}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
