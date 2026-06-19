import { whatsappUrl } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar a Prime Barber no WhatsApp"
      className="whatsapp-cta fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex size-13 items-center justify-center rounded-full border border-accent-strong/40 bg-accent font-bold text-accent-foreground shadow-[0_16px_45px_rgba(0,0,0,0.45)] hover:bg-accent-strong sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:h-13 sm:w-auto sm:gap-3 sm:px-5"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 8.5c.5 2.5 2 4 4.5 5l1.5-1.5 2 1c-.5 2-2 3-3.5 2.5-3.5-1-6-3.5-7-7C6 7 7 5.5 9 5l1 2-1 1.5Z" />
      </svg>
      <span className="hidden whitespace-nowrap text-sm sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
