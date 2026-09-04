"use client";

import { useState } from "react";

import { navigationLinks, whatsappUrl } from "@/config/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-0.5 w-6 bg-papel transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`h-0.5 w-6 bg-papel transition-opacity ${isOpen ? "opacity-0" : ""}`} />
        <span
          className={`h-0.5 w-6 bg-papel transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full border-t border-papel/10 bg-tinta"
        >
          <nav className="container flex flex-col py-4">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-11 items-center border-b border-papel/10 font-body text-sm font-semibold uppercase tracking-wide text-papel last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex min-h-11 items-center justify-center bg-vermelho px-6 font-body text-sm font-bold uppercase tracking-wide text-papel"
              style={{ borderRadius: "2px" }}
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
