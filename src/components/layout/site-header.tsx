import Link from "next/link";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Wordmark } from "@/components/ui/wordmark";
import { navigationLinks, whatsappUrl } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-tinta">
      <Container className="relative flex h-16 items-center justify-between lg:h-20">
        <Link href="#" aria-label="Barbearia do Kelvin, início">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm uppercase tracking-wider text-papel/70 transition-colors hover:text-papel"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center border border-papel/20 bg-vermelho px-6 py-3 font-body text-sm font-bold uppercase tracking-wide text-papel lg:inline-flex"
          style={{ borderRadius: "2px" }}
        >
          Agendar pelo WhatsApp
        </a>

        <MobileNav />
      </Container>
    </header>
  );
}
