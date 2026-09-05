"use client";

import { useState } from "react";

import { address } from "@/config/site";

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 16v-3l2-4h12l2 4v3" />
      <path d="M4 16h16v3H4z" />
      <circle cx="7.5" cy="19" r="1.3" />
      <circle cx="16.5" cy="19" r="1.3" />
    </svg>
  );
}

export function StaticMap() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-80 min-h-[300px] overflow-hidden bg-[#cfe3d4] lg:h-auto lg:flex-1">
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

          <div className="absolute left-4 top-4 max-w-[240px] bg-tinta/90 p-3 text-papel">
            <span className="block font-body text-label-lg font-bold uppercase text-papel">
              Ponto de referência
            </span>
            <p className="mt-1 font-body text-body-md text-papel">{address.landmark}</p>
          </div>

          <button
            type="button"
            onClick={() => setIsLoaded(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Carregar mapa interativo do Google Maps"
          >
            <span className="press-2 shadow-hard-2 flex min-h-11 items-center border-2 border-tinta bg-papel px-6 py-3 font-body text-label-lg font-bold uppercase text-tinta">
              Ver mapa interativo
            </span>
          </button>

          <a
            href={address.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="absolute bottom-4 right-4 flex min-h-11 items-center gap-2 bg-tinta px-4 py-2 font-body text-label-lg font-bold uppercase text-papel transition-all hover:brightness-125"
          >
            <CarIcon />
            Abrir no GPS / Waze
          </a>
        </>
      )}
    </div>
  );
}
