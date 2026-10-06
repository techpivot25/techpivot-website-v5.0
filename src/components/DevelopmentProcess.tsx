import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

/**
 * DevelopmentProcess
 * ------------------------------------------------------------------
 * Drop-in replacement for the "Process Timeline" section's inner
 * Desktop/Mobile timeline markup in CustomSoftware.tsx.
 *
 * Takes your existing `process` array as-is — { step, icon, title,
 * description } — no content changes. Adds:
 *   - a horizontal stepper with an ambient auto-cycling active-step
 *     glow and flowing dashed connectors (matches the reference clip)
 *   - a synced tab row
 *   - a detail panel for the active step with a small animated
 *     "flow" diagram built from your own icon
 *
 * Uses your existing design tokens (bg-surface-dark, text-primary,
 * border-primary, etc.) rather than introducing new colors.
 */

export interface ProcessStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

interface DevelopmentProcessProps {
  process: ProcessStep[];
  autoAdvanceMs?: number;
}

export default function DevelopmentProcess({ process, autoAdvanceMs = 3200 }: DevelopmentProcessProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((i) => (i + 1) % process.length), autoAdvanceMs);
    return () => clearInterval(t);
  }, [paused, process.length, autoAdvanceMs]);

  const activeStep = process[active];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Stepper */}
      <div className="border border-surface-dark-foreground/15 rounded-xl bg-surface-dark-foreground/[0.03] p-6 md:p-8 overflow-hidden">
        <div className="flex items-center overflow-x-auto pb-2">
          {process.map((s, i) => (
            <div key={s.step} className="flex items-center">
              {i > 0 && <Connector active={i - 1 < active} />}
              <button onClick={() => setActive(i)} className="flex flex-col items-center shrink-0 group">
                <span
                  className={`text-sm mb-2 whitespace-nowrap transition-colors ${
                    i === active ? "text-surface-dark-foreground font-semibold" : "text-surface-dark-foreground/50 group-hover:text-surface-dark-foreground/80"
                  }`}
                >
                  {s.title}
                </span>
                <span className="relative flex items-center justify-center w-14 h-14">
                  {i === active && (
                    <span className="absolute inset-0 rounded-full border border-primary/60 animate-ping [animation-duration:1.8s]" />
                  )}
                  <span
                    className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      i === active
                        ? "border-primary bg-primary text-surface-dark shadow-[0_0_16px_hsl(var(--primary)/0.45)]"
                        : "border-primary/40 text-primary bg-surface-dark"
                    }`}
                  >
                    <s.icon className="w-5 h-5" />
                  </span>
                </span>
                <span
                  className={`mt-2 text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    i === active ? "text-primary" : "text-surface-dark-foreground/40"
                  }`}
                >
                  STEP {String(s.step).padStart(2, "0")}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Tab row */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-surface-dark-foreground/10 rounded-md overflow-hidden">
          {process.map((s, i) => (
            <button
              key={s.step}
              onClick={() => setActive(i)}
              className={`px-3 py-2.5 text-left text-xs transition-colors bg-surface-dark ${
                i === active ? "ring-1 ring-inset ring-primary/60 bg-primary/5 text-primary" : "text-surface-dark-foreground/60 hover:bg-surface-dark-foreground/[0.04]"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <motion.div
        key={activeStep.step}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-8 grid md:grid-cols-2 gap-6 items-center"
      >
        <div>
          <div className="text-primary/80 text-xs font-mono tracking-widest uppercase mb-2">
            Step {String(activeStep.step).padStart(2, "0")} of {String(process.length).padStart(2, "0")}
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full border border-primary/50 text-primary flex items-center justify-center">
              <activeStep.icon className="w-5 h-5" />
            </span>
            <h3 className="text-2xl font-semibold text-surface-dark-foreground">{activeStep.title}</h3>
          </div>
          <p className="text-surface-dark-foreground/70 leading-relaxed">{activeStep.description}</p>
        </div>

        <FlowDiagram step={activeStep} />
      </motion.div>
    </div>
  );
}

function Connector({ active }: { active: boolean }) {
  return (
    <svg width="40" height="16" viewBox="0 0 40 16" className="shrink-0 mx-1 mb-6 overflow-visible">
      <line
        x1="2"
        y1="8"
        x2="34"
        y2="8"
        stroke={active ? "hsl(var(--primary))" : "hsl(var(--surface-dark-foreground) / 0.15)"}
        strokeWidth="1.5"
        strokeDasharray="4 4"
      >
        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.9s" repeatCount="indefinite" />
      </line>
      <polygon
        points="32,4 39,8 32,12"
        fill={active ? "hsl(var(--primary))" : "hsl(var(--surface-dark-foreground) / 0.15)"}
      />
    </svg>
  );
}

function FlowDiagram({ step }: { step: ProcessStep }) {
  const xs = [30, 130, 230];
  const y = 55;
  const Icon = step.icon;

  return (
    <div className="relative border border-surface-dark-foreground/15 rounded-xl bg-surface-dark-foreground/[0.03] p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-surface-dark-foreground/50 text-xs font-mono tracking-widest uppercase">
          Process Flow
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-primary/90">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          ACTIVE
        </div>
      </div>

      <svg viewBox="0 0 260 110" className="w-full h-auto">
        <line x1={xs[0]} y1={y} x2={xs[1]} y2={y} stroke="hsl(var(--surface-dark-foreground) / 0.15)" strokeWidth="1" />
        <line x1={xs[1]} y1={y} x2={xs[2]} y2={y} stroke="hsl(var(--surface-dark-foreground) / 0.15)" strokeWidth="1" />

        {[0, 1].map((seg) => (
          <circle key={seg} r="3" fill="hsl(var(--primary))">
            <animate
              attributeName="cx"
              values={`${xs[seg]};${xs[seg + 1]}`}
              dur="1.8s"
              begin={`${seg * 0.5}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
              keyTimes="0;1"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.15;0.85;1"
              dur="1.8s"
              begin={`${seg * 0.5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        <circle cx={xs[0]} cy={y} r="8" fill="hsl(var(--surface-dark))" stroke="hsl(var(--surface-dark-foreground) / 0.3)" strokeWidth="1.5" />
        <circle cx={xs[2]} cy={y} r="8" fill="hsl(var(--surface-dark))" stroke="hsl(var(--surface-dark-foreground) / 0.3)" strokeWidth="1.5" />
        <circle cx={xs[1]} cy={y} r="14" fill="hsl(var(--surface-dark))" stroke="hsl(var(--primary))" strokeWidth="1.5">
          <animate attributeName="r" values="12;15;12" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* icon rendered over the center node */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "calc(2.75rem + 3px)" }}>
        <Icon className="w-4 h-4 text-primary" />
      </div>
    </div>
  );
}
