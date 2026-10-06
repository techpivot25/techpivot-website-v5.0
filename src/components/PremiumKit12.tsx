import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * PremiumKit — presentation-only building blocks.
 * None of these contain copy; you wrap your EXISTING text (or t("...") calls).
 */

/** Wrap a word/phrase in your existing heading to get the yellow underline draw-in. */
export function Highlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <span ref={ref} className={`pm-highlight ${seen ? "pm-in" : ""}`}>
      {children}
    </span>
  );
}

/** Floating abstract liquid-gold orb (SVG, no assets). Use in hero right column. */
export function AbstractOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`} aria-hidden>
      <div className="absolute inset-[8%] rounded-full bg-[#ffc400]/30 blur-3xl" />
      <svg viewBox="0 0 400 400" className="pm-float relative w-full h-full">
        <defs>
          <radialGradient id="pmOrbA" cx="35%" cy="28%" r="80%">
            <stop offset="0" stopColor="#fff3b0" />
            <stop offset="0.45" stopColor="#ffc400" />
            <stop offset="1" stopColor="#b57a00" />
          </radialGradient>
          <linearGradient id="pmOrbB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M200 40c90 0 150 70 150 150s-50 170-150 170S50 280 50 190 110 40 200 40Z" fill="url(#pmOrbA)">
          <animate
            attributeName="d"
            dur="9s"
            repeatCount="indefinite"
            values="M200 40c90 0 150 70 150 150s-50 170-150 170S50 280 50 190 110 40 200 40Z;
                    M210 50c80 10 145 60 140 145s-60 165-150 160S45 270 55 185 130 40 210 50Z;
                    M200 40c90 0 150 70 150 150s-50 170-150 170S50 280 50 190 110 40 200 40Z"
          />
        </path>
        <ellipse cx="150" cy="120" rx="60" ry="34" fill="url(#pmOrbB)" transform="rotate(-25 150 120)" />
      </svg>
    </div>
  );
}

/** Infinite horizontal keyword strip. Pass your existing keywords as children/array. */
export function KeywordMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="pm-marquee gap-10 text-lg font-medium text-[var(--pm-muted)]">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {w}
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--pm-yellow)]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/** BUILD — LEARN — IMPROVE style loop grid. Pass 6–9 of your existing words. */
export function LoopWords({ words }: { words: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-y-10 gap-x-4 items-center">
      {words.map((w, i) => (
        <div key={w} className="flex items-center gap-4 text-2xl md:text-5xl font-light tracking-wide">
          <span>{w}</span>
          {(i + 1) % 3 !== 0 && (
            <span className="relative hidden md:block h-0.5 flex-1 bg-[var(--pm-yellow)]/40 overflow-hidden">
              <span
                className="absolute inset-y-0 w-8 bg-[var(--pm-yellow)]"
                style={{ animation: `pm-slide 2.4s ${i * 0.25}s linear infinite` }}
              />
            </span>
          )}
        </div>
      ))}
      <style>{`@keyframes pm-slide{from{left:-2rem}to{left:100%}}`}</style>
    </div>
  );
}

/** Image tile with dark overlay + yellow label, for industries/case studies. */
export function ImageTile({ src, label, title }: { src: string; label?: string; title?: string }) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
      <img src={src} alt={title ?? label ?? ""} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        {label && <div className="text-xs font-semibold tracking-wide text-[var(--pm-yellow)] uppercase">{label}</div>}
        {title && <div className="text-white text-lg font-semibold leading-snug">{title}</div>}
      </div>
    </div>
  );
}

/** Section shells: alternate these to get the light/dark rhythm. */
export const DarkBand = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`pm-dark py-24 lg:py-32 ${className}`}>
    <div className="mx-auto max-w-[1240px] px-6 lg:px-10">{children}</div>
  </section>
);
export const LightBand = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <section className={`pm-light py-24 lg:py-32 ${className}`}>
    <div className="mx-auto max-w-[1240px] px-6 lg:px-10">{children}</div>
  </section>
);
