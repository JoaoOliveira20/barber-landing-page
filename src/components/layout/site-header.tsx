import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Wordmark } from "@/components/ui/wordmark";
import { navigationLinks, whatsappUrl } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-papel/10 bg-tinta">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="#" aria-label="Barbearia do Kelvin, início">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-body text-label-lg uppercase tracking-wider text-papel/70 transition-colors hover:text-papel"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="press-2 shadow-hard-3 hidden items-center whitespace-nowrap border-2 border-papel-destaque bg-vermelho px-4 py-2 font-body text-label-lg uppercase tracking-wider text-papel transition-all hover:brightness-110 sm:inline-flex"
            style={{ borderRadius: "4px" }}
          >
            Agendar pelo WhatsApp
          </a>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
