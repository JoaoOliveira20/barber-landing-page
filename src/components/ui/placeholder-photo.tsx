export function PlaceholderPhoto({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-fumo ${className ?? ""}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, color-mix(in srgb, var(--papel) 6%, transparent) 0 2px, transparent 2px 14px)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-papel/30"
      >
        <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    </div>
  );
}
