import { ReactNode, useEffect, useId, useRef, useState } from "react";

/** Presentation-only helpers. They never contain copy — you wrap your existing text. */

/** Yellow-bar style underline (now in your primary color) that draws in on scroll. */
export function Highlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <span ref={ref} className={`pm-highlight ${seen ? "pm-in" : ""}`}>{children}</span>;
}

/** Floating liquid orb in the primary color. Pass "absolute ..." or "relative ..." + size classes. */
export function AbstractOrb({ className = "relative" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <div className={`aspect-square pointer-events-none ${className}`} aria-hidden>
      <div className="absolute inset-[10%] rounded-full bg-primary/30 blur-3xl" />
      <svg viewBox="0 0 400 400" className="pm-float relative w-full h-full">
        <defs>
          <radialGradient id={`o${id}`} cx="35%" cy="28%" r="80%">
            <stop offset="0" style={{ stopColor: "hsl(197 100% 88%)" }} />
            <stop offset="0.45" style={{ stopColor: "hsl(var(--primary))" }} />
            <stop offset="1" style={{ stopColor: "hsl(220 60% 25%)" }} />
          </radialGradient>
          <linearGradient id={`h${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.85" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M200 40c90 0 150 70 150 150s-50 170-150 170S50 280 50 190 110 40 200 40Z" fill={`url(#o${id})`}>
          <animate attributeName="d" dur="9s" repeatCount="indefinite"
            values="M200 40c90 0 150 70 150 150s-50 170-150 170S50 280 50 190 110 40 200 40Z;M210 50c80 10 145 60 140 145s-60 165-150 160S45 270 55 185 130 40 210 50Z;M200 40c90 0 150 70 150 150s-50 170-150 170S50 280 50 190 110 40 200 40Z" />
        </path>
        <ellipse cx="150" cy="120" rx="60" ry="34" fill={`url(#h${id})`} transform="rotate(-25 150 120)" />
      </svg>
    </div>
  );
}

/** Slow flowing liquid ribbons for dark sections. Place as the first child of a `relative overflow-hidden` section. */
export function RibbonBackdrop() {
  const id = useId().replace(/:/g, "");
  const waves = [
    ["M0 300 C240 180 480 420 720 300 S1200 180 1440 300", "M0 320 C240 440 480 200 720 320 S1200 440 1440 320", 0.55, 70],
    ["M0 380 C300 280 520 480 800 360 S1240 300 1440 400", "M0 360 C300 470 520 260 800 380 S1240 470 1440 360", 0.35, 46],
    ["M0 230 C200 300 520 140 780 240 S1260 320 1440 220", "M0 250 C200 160 520 320 780 220 S1260 140 1440 250", 0.25, 30],
  ] as const;
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
      <defs>
        <filter id={`b${id}`}><feGaussianBlur stdDeviation="26" /></filter>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: "hsl(197 100% 80%)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      {waves.map(([a, b, o, w], i) => (
        <path key={i} d={a} fill="none" stroke={`url(#g${id})`} strokeWidth={w} opacity={o} filter={`url(#b${id})`}>
          <animate attributeName="d" dur={`${14 + i * 4}s`} repeatCount="indefinite" values={`${a};${b};${a}`} />
        </path>
      ))}
    </svg>
  );
}
