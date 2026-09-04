import { Container } from "@/components/layout/container";
import { footerContent } from "@/config/content";
import { address, businessHours, legalNotice, socialLinks, whatsappUrl } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-papel/15 bg-tinta pt-12 pb-[calc(3rem+var(--mobile-whatsapp-bar-height))] text-papel sm:pb-12">
      <Container className="grid gap-10 sm:grid-cols-3 sm:gap-8">
        <div>
          <p className="font-display text-lg uppercase text-papel">
            Barbearia do Kelvin
          </p>
          <p className="mt-3 font-body text-sm text-papel/70">{footerContent.location}</p>
          <p className="mt-1 font-body text-sm text-papel/70">{footerContent.tagline}</p>
        </div>

        <div>
          <p className="font-body text-sm font-bold uppercase tracking-wide text-papel">
            Horário de funcionamento
          </p>
          <div className="mt-3 space-y-1">
            {businessHours.map((entry) => (
              <p key={entry.days} className="font-body text-sm text-papel/70">
                {entry.days}: {entry.hours}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-sm font-bold uppercase tracking-wide text-papel">
            Contato &amp; redes
          </p>
          <div className="mt-3 space-y-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-sm text-papel/70"
            >
              WhatsApp Direto
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-body text-sm text-papel/70"
            >
              Instagram: @barbeariadokelvin
            </a>
            <p className="font-body text-sm text-papel/70">{address.neighborhood}</p>
          </div>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-2 border-t border-papel/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-xs text-papel/50">{footerContent.copyright}</p>
        <p className="font-body text-xs uppercase tracking-wider text-papel/50">
          {legalNotice}
        </p>
      </Container>
    </footer>
  );
}
