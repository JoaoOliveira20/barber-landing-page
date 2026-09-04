"use client";

import { useEffect, useState } from "react";

import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { whatsappUrl } from "@/config/site";

export function FloatingWhatsapp() {
  const [isHeroCtaHidden, setIsHeroCtaHidden] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-whatsapp-cta");
    if (!heroCta) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroCtaHidden(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(heroCta);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className={`fixed bottom-6 right-6 z-40 hidden min-h-11 items-center gap-2 border border-papel/20 bg-vermelho px-5 py-3 font-body text-sm font-bold uppercase tracking-wide text-papel transition-opacity duration-200 lg:flex ${
          isHeroCtaHidden ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ borderRadius: "2px" }}
      >
        <WhatsappIcon />
        Chamar no WhatsApp
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-vermelho font-body text-sm font-bold uppercase tracking-wide text-papel lg:hidden"
        style={{ height: "var(--mobile-whatsapp-bar-height)" }}
      >
        <WhatsappIcon />
        Chamar no WhatsApp
      </a>
    </>
  );
}
