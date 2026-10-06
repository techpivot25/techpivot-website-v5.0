import { useEffect, useMemo, useState } from "react";

/**
 * DevelopmentProcess
 * ------------------------------------------------------------------
 * "Our Development Process" section — a horizontal end-to-end stepper
 * (INPUT → 01 → 02 → 03 → 04 → OUTPUT) with an ambient auto-cycling
 * highlight and flowing connector lines, a synced tab row, and a
 * detail panel per phase with a small animated "vector flow diagram."
 *
 * Content is fully prop-driven — nothing about your real phases,
 * copy, or timeline is hardcoded. Replace the DEFAULT_PHASES below
 * (or just pass your own `phases` prop) with your actual process.
 *
 * No external animation library — inline SVG + CSS/SMIL only.
 *
 *   <DevelopmentProcess
 *     eyebrow="How we build"
 *     title="Our Development Process"
 *     inputLabel="Requirements"
 *     outputLabel="Production Handoff"
 *     phases={[...]}
 *   />
 */

export interface ProcessPhase {
  id: string; // "01"
  name: string; // "Discover"
  months: string; // "Weeks 1–2"
  eyebrow: string; // shown above the phase title in the detail panel
  description: string;
  vectorBadge: string; // small label on the vector-flow-diagram card
}

interface DevelopmentProcessProps {
  eyebrow?: string;
  title?: string;
  flowLabel?: string;
  inputLabel?: string;
  outputLabel?: string;
  phases?: ProcessPhase[];
  autoAdvanceMs?: number;
}

const DEFAULT_PHASES: ProcessPhase[] = [
  {
    id: "01",
    name: "Discover",
    months: "Weeks 1–2",
    eyebrow: "Scope & Constraint Mapping",
    description:
      "Translate the business problem into concrete technical requirements. Identify data sources, integration points, compliance constraints, and what success actually looks like.",
    vectorBadge: "REQUIREMENTS GRAPH",
  },
  {
    id: "02",
    name: "Architect",
    months: "Weeks 3–5",
    eyebrow: "System & Data Design",
    description:
      "Design the system architecture, data model, and security boundaries before a line of production code is written — so the build phase has no structural surprises.",
    vectorBadge: "ARCHITECTURE SPEC",
  },
  {
    id: "03",
    name: "Build",
    months: "Weeks 6–12",
    eyebrow: "Iterative Implementation",
    description:
      "Ship in short, reviewable increments against the architecture. Every increment is tested, integrated, and demoed rather than batched into one large release.",
    vectorBadge: "BUILD PIPELINE",
  },
  {
    id: "04",
    name: "Deploy",
    months: "Weeks 13–14",
    eyebrow: "Handoff & Hardening",
    description:
      "Load-test, document, and hand off with monitoring and runbooks in place — production-ready, not just feature-complete.",
    vectorBadge: "RELEASE HANDOFF",
  },
];

export default function DevelopmentProcess({
  eyebrow = "Sequential Delivery Architecture",
  title = "Our Development Process",
  flowLabel = "End-to-End Delivery Flow",
  inputLabel = "Requirements",
  outputLabel = "Production Handoff",
  phases = DEFAULT_PHASES,
  autoAdvanceMs = 3400,
}: DevelopmentProcessProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % phases.length);
    }, autoAdvanceMs);
    return () => clearInterval(t);
  }, [paused, phases.length, autoAdvanceMs]);

  const activePhase = phases[active];

  return (
    <section className="bg-[#0a0b0f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow + title */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-3">
          <span aria-hidden>↳</span>
          {eyebrow}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{title}</h2>

        {/* Flow diagram label */}
        <div className="flex items-center gap-2 text-white/50 text-xs font-mono tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
          {flowLabel}
        </div>

        {/* Stepper */}
        <div
          className="border border-white/10 rounded-lg bg-white/[0.02] p-6 md:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Stepper
            phases={phases}
            active={active}
            onSelect={setActive}
            inputLabel={inputLabel}
            outputLabel={outputLabel}
          />

          {/* Tab row */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-md overflow-hidden">
            {phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`flex items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors bg-[#0a0b0f] ${
                  i === active ? "ring-1 ring-inset ring-amber-400/60 bg-amber-400/5" : "hover:bg-white/[0.03]"
                }`}
              >
                <span className={i === active ? "text-amber-300" : "text-white/70"}>
                  <span className="font-mono text-xs mr-2 opacity-70">{p.id}</span>
                  {p.name}
                </span>
                <span className="text-white/40 text-xs font-mono whitespace-nowrap">{p.months}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div className="text-amber-300/80 text-xs font-mono tracking-widest uppercase mb-2">
              Phase {activePhase.id} · {activePhase.eyebrow}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-full border border-amber-400/60 text-amber-300 font-mono text-sm flex items-center justify-center">
                {activePhase.id}
              </span>
              <h3 className="text-2xl font-semibold">{activePhase.name}</h3>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">{activePhase.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/15 text-white/60">
                {activePhase.months}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300/90 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Active Process Stage
              </span>
            </div>
          </div>

          <VectorFlowCard phase={activePhase} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stepper                                                             */
/* ------------------------------------------------------------------ */

function Stepper({
  phases,
  active,
  onSelect,
  inputLabel,
  outputLabel,
}: {
  phases: ProcessPhase[];
  active: number;
  onSelect: (i: number) => void;
  inputLabel: string;
  outputLabel: string;
}) {
  return (
    <div className="flex items-center overflow-x-auto pb-2">
      <EndCap label={inputLabel} kind="input" />

      {phases.map((p, i) => (
        <div key={p.id} className="flex items-center">
          {i > 0 && <Connector active={i - 1 < active} />}
          <button onClick={() => onSelect(i)} className="flex flex-col items-center shrink-0 group">
            <span
              className={`text-sm mb-2 whitespace-nowrap transition-colors ${
                i === active ? "text-white font-semibold" : "text-white/50 group-hover:text-white/80"
              }`}
            >
              {p.name}
            </span>
            <span className="relative flex items-center justify-center w-14 h-14">
              {i === active && (
                <span className="absolute inset-0 rounded-full border border-amber-400/50 animate-ping [animation-duration:1.8s]" />
              )}
              <span
                className={`relative w-12 h-12 rounded-full border flex items-center justify-center font-mono text-sm transition-colors ${
                  i === active
                    ? "border-amber-400 text-amber-300 shadow-[0_0_16px_rgba(227,179,65,0.35)]"
                    : "border-white/20 text-white/50"
                }`}
              >
                {p.id}
              </span>
            </span>
            <span
              className={`mt-2 text-[10px] font-mono px-2 py-0.5 rounded whitespace-nowrap border ${
                i === active ? "border-amber-400/50 text-amber-300" : "border-white/10 text-white/40"
              }`}
            >
              {p.months}
            </span>
          </button>
        </div>
      ))}

      <Connector active={active === phases.length - 1} />
      <EndCap label={outputLabel} kind="output" />
    </div>
  );
}

function EndCap({ label, kind }: { label: string; kind: "input" | "output" }) {
  return (
    <div
      className={`shrink-0 text-[10px] font-mono px-3 py-1.5 rounded border whitespace-nowrap ${
        kind === "input" ? "border-cyan-400/40 text-cyan-300" : "border-amber-400/40 text-amber-300"
      }`}
    >
      {kind === "output" && <div className="opacity-60 text-[9px] mb-0.5">HANDOFF</div>}
      {kind === "input" && <div className="opacity-60 text-[9px] mb-0.5">INPUT</div>}
      {label}
    </div>
  );
}

function Connector({ active }: { active: boolean }) {
  return (
    <svg width="56" height="16" viewBox="0 0 56 16" className="shrink-0 mx-1 mb-6 overflow-visible">
      <line
        x1="2"
        y1="8"
        x2="50"
        y2="8"
        stroke={active ? "#E3B341" : "rgba(255,255,255,0.18)"}
        strokeWidth="1.5"
        strokeDasharray="4 4"
      >
        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="0.9s" repeatCount="indefinite" />
      </line>
      <polygon points="48,4 55,8 48,12" fill={active ? "#E3B341" : "rgba(255,255,255,0.18)"} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Vector flow diagram card (per-phase)                                */
/* ------------------------------------------------------------------ */

function VectorFlowCard({ phase }: { phase: ProcessPhase }) {
  const nodeXs = useMemo(() => [30, 130, 230], []);
  const y = 60;

  return (
    <div className="relative border border-white/10 rounded-lg bg-white/[0.02] p-5">
      <CornerTicks />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-white/50 text-xs font-mono tracking-widest uppercase">
          <span aria-hidden>△</span>
          Vector Flow Diagram · Stage {phase.id}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300/90">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ACTIVE LOGIC
        </div>
      </div>

      <svg viewBox="0 0 260 120" className="w-full h-auto">
        {/* connecting lines */}
        <line x1={nodeXs[0]} y1={y} x2={nodeXs[1]} y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <line x1={nodeXs[1]} y1={y} x2={nodeXs[2]} y2={y} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

        {/* traveling particles */}
        {[0, 1].map((seg) => (
          <circle key={seg} r="3" fill={seg === 0 ? "#38BDF8" : "#E3B341"}>
            <animate
              attributeName="cx"
              values={`${nodeXs[seg]};${nodeXs[seg + 1]}`}
              dur="1.8s"
              begin={`${seg * 0.5}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
              keyTimes="0;1"
            />
            <animate attributeName="cy" values={`${y};${y}`} dur="1.8s" repeatCount="indefinite" />
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

        {/* nodes */}
        <circle cx={nodeXs[0]} cy={y} r="9" fill="#0a0b0f" stroke="#38BDF8" strokeWidth="1.5" />
        <text x={nodeXs[0]} y={y + 24} textAnchor="middle" className="fill-white/50" style={monoStyle}>
          IN
        </text>

        <circle cx={nodeXs[1]} cy={y} r="12" fill="#0a0b0f" stroke="#E3B341" strokeWidth="1.5">
          <animate attributeName="r" values="10;13;10" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx={nodeXs[1]} cy={y} r="3" fill="#F5D889" />
        <text x={nodeXs[1]} y={y + 28} textAnchor="middle" className="fill-amber-300/80" style={monoStyle}>
          {phase.name.toUpperCase()}
        </text>

        <circle cx={nodeXs[2]} cy={y} r="9" fill="#0a0b0f" stroke="#38BDF8" strokeWidth="1.5" />
        <text x={nodeXs[2]} y={y + 24} textAnchor="middle" className="fill-white/50" style={monoStyle}>
          OUT
        </text>
      </svg>

      <div className="mt-3 inline-flex text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded border border-amber-400/30 text-amber-300/90 bg-amber-400/5">
        {phase.vectorBadge}
      </div>
    </div>
  );
}

const monoStyle = {
  font: "500 8px ui-monospace, SFMono-Regular, Menlo, monospace",
  letterSpacing: "0.04em",
};

function CornerTicks() {
  const cls = "absolute w-2 h-2 text-white/20 text-xs leading-none select-none";
  return (
    <>
      <span className={`${cls} top-1.5 left-1.5`}>+</span>
      <span className={`${cls} top-1.5 right-1.5`}>+</span>
      <span className={`${cls} bottom-1.5 left-1.5`}>+</span>
      <span className={`${cls} bottom-1.5 right-1.5`}>+</span>
    </>
  );
}
