"use client";

import { useState } from "react";

import { address } from "@/config/site";

export function StaticMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#cfe3d4] sm:aspect-[16/9]">
      {isLoaded ? (
        <iframe
          title="Mapa da Barbearia do Kelvin"
          src={`https://www.google.com/maps?q=${encodeURIComponent(address.street + ", Castanhal - PA")}&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
        />
      ) : (
        <>
          <svg
            className="absolute inset-0 h-full w-full text-carvao/10"
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 400 300"
          >
            <path d="M0 60 H400 M0 140 H400 M0 220 H400" stroke="currentColor" strokeWidth="3" />
            <path d="M70 0 V300 M200 0 V300 M330 0 V300" stroke="currentColor" strokeWidth="3" />
          </svg>

          <div className="absolute left-4 top-4 max-w-xs bg-tinta px-5 py-4">
            <p className="font-body text-xs font-bold uppercase tracking-wider text-papel">
              Ponto de referência
            </p>
            <p className="mt-2 font-body text-sm text-papel/80">{address.landmark}</p>
          </div>

          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Carregar mapa interativo do Google Maps"
          >
            <span
              className="flex min-h-11 items-center border border-carvao/20 bg-papel px-6 py-3 font-body text-sm font-bold uppercase tracking-wide text-carvao"
              style={{ borderRadius: "2px" }}
            >
              Ver mapa interativo
            </span>
          </button>

          <a
            href={address.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="absolute bottom-4 right-4 flex min-h-11 items-center gap-2 bg-tinta px-5 py-3 font-body text-sm font-bold uppercase tracking-wide text-papel"
            style={{ borderRadius: "2px" }}
          >
            Abrir no GPS / Waze
          </a>
        </>
      )}
    </div>
  );
}
