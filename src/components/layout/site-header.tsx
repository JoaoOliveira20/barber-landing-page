import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Wordmark } from "@/components/ui/wordmark";
import { navigationLinks, whatsappUrl } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-tinta">
      <div className="container-hero relative flex h-16 items-center justify-between lg:h-20">
        <Link href="#" aria-label="Barbearia do Kelvin, início">
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          <nav className="flex items-center gap-5">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap font-body text-sm uppercase tracking-wider text-papel/70 transition-colors hover:text-papel"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center whitespace-nowrap border border-papel/20 bg-vermelho px-4 py-3 font-body text-sm font-bold uppercase tracking-wide text-papel"
            style={{ borderRadius: "2px" }}
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
