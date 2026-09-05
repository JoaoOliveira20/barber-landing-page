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
        className={`fixed bottom-6 right-6 z-40 hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-vermelho text-papel transition-all duration-200 hover:bg-vermelho-escuro md:flex ${
          isHeroCtaHidden ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <WhatsappIcon />
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-vermelho font-body text-label-lg uppercase text-papel transition-colors duration-200 hover:bg-vermelho-escuro md:hidden"
        style={{ height: "var(--mobile-whatsapp-bar-height)" }}
      >
        <WhatsappIcon />
        Chamar no WhatsApp
      </a>
    </>
  );
}
