import { Container } from "@/components/layout/container";
import { footerContent } from "@/config/content";
import { address, businessHours, legalNotice, socialLinks, whatsappUrl } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-papel/20 bg-tinta py-12 pb-[calc(3rem+var(--mobile-whatsapp-bar-height))] text-papel md:pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-b border-papel/10 pb-8 md:grid-cols-3">
          <div className="space-y-2">
            <span className="block font-display text-headline-sm uppercase tracking-wide text-papel">
              Barbearia do Kelvin
            </span>
            <p className="font-body text-body-md text-papel/70">{footerContent.location}</p>
            <p className="font-body text-body-md text-papel/70">{footerContent.tagline}</p>
          </div>

          <div className="space-y-2">
            <span className="block font-body text-label-lg uppercase tracking-wider text-papel">
              Horário de funcionamento
            </span>
            <ul className="space-y-1 font-body text-body-md text-papel/70">
              {businessHours.map((entry) => (
                <li key={entry.days}>
                  {entry.days}: {entry.hours}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <span className="block font-body text-label-lg uppercase tracking-wider text-papel">
              Contato &amp; redes
            </span>
            <div className="flex flex-col space-y-1 font-body text-body-md">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-papel/70 transition-colors hover:text-vermelho"
              >
                WhatsApp Direto
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-papel/70 transition-colors hover:text-vermelho"
              >
                Instagram: @barbeariadokelvin
              </a>
              <span className="text-papel/70">{address.neighborhood}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-4 text-left md:flex-row md:items-center">
          <p className="font-body text-label-sm uppercase tracking-wider text-papel/70">
            {footerContent.copyright}
          </p>
          <p className="font-body text-label-sm uppercase tracking-wider text-papel/70">
            {legalNotice}
          </p>
        </div>
      </Container>
    </footer>
  );
}
