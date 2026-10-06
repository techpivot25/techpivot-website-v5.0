import { useId } from "react";

/**
 * SystemHubDiagram
 * ------------------------------------------------------------------
 * A small "hub & spoke" vector animation for a capability/positioning
 * card — a central node pulses while colored particles continuously
 * travel inward along each spoke, implying "one core method, applied
 * outward across different systems."
 *
 * Pure inline SVG + SMIL animation. No external animation library,
 * no images. Drop this into an existing card — it does not render
 * any card chrome, title, or copy itself, so it won't touch content
 * you already have. Just place it where the visual should sit:
 *
 *   <SystemHubDiagram
 *     nodes={[
 *       { label: "Healthcare" },
 *       { label: "Finance" },
 *       { label: "Manufacturing" },
 *       { label: "Government" },
 *     ]}
 *     centerLabel="One Core Model"
 *   />
 */

type HubNode = {
  label: string;
  /** "amber" | "cyan" — defaults alternate automatically if omitted */
  accent?: "amber" | "cyan";
};

interface SystemHubDiagramProps {
  nodes: HubNode[];
  centerLabel?: string;
  className?: string;
}

const ACCENT_HEX: Record<"amber" | "cyan", string> = {
  amber: "#E3B341",
  cyan: "#38BDF8",
};

export default function SystemHubDiagram({
  nodes,
  centerLabel,
  className = "",
}: SystemHubDiagramProps) {
  const uid = useId().replace(/[:]/g, "");
  const width = 320;
  const height = 260;
  const cx = width / 2;
  const cy = height / 2 - 6;
  const outerR = 92;
  const nodeR = 6;

  // Always lay out 6 spoke slots (hexagon) so the diagram reads the
  // same way as the reference: unlabeled spokes at left/right (pure
  // geometry), labeled spokes at the four diagonals. If fewer than
  // four nodes are supplied, only that many diagonal slots are used;
  // if more than four are supplied, they fill left/right too.
  const slotAngles = [300, 0, 60, 120, 180, 240]; // deg, 0 = right, clockwise
  const labeledOrder = [240, 300, 120, 60, 180, 0]; // fill diagonals first

  const angles = labeledOrder.slice(0, Math.min(nodes.length, 6));

  const toXY = (angleDeg: number, r: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const labelAnchor = (angleDeg: number) => {
    if (angleDeg === 0) return "start" as const;
    if (angleDeg === 180) return "end" as const;
    return angleDeg > 90 && angleDeg < 270 ? ("end" as const) : ("start" as const);
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label={`Diagram: a single core method applied across ${nodes
        .map((n) => n.label)
        .join(", ")}`}
    >
      <defs>
        <radialGradient id={`glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5D889" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F5D889" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* faint concentric rings behind the hub */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR * 0.62}
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth={1}
      />
      <circle
        cx={cx}
        cy={cy}
        r={outerR * 0.62}
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth={1}
        strokeDasharray="1 5"
      />

      {/* spokes + traveling pulses + outer nodes */}
      {angles.map((angle, i) => {
        const node = nodes[i];
        if (!node) return null;
        const accent = node.accent ?? (i % 2 === 0 ? "amber" : "cyan");
        const color = ACCENT_HEX[accent];
        const outer = toXY(angle, outerR);
        const anchor = labelAnchor(angle);
        const labelOffset = toXY(angle, outerR + 14);

        return (
          <g key={angle}>
            <line
              x1={outer.x}
              y1={outer.y}
              x2={cx}
              y2={cy}
              stroke="rgba(255,255,255,0.14)"
              strokeWidth={1}
            />

            {/* particle traveling from outer node to hub, staggered */}
            <circle r={2.4} fill={color}>
              <animate
                attributeName="cx"
                values={`${outer.x};${cx}`}
                dur="2.4s"
                begin={`${-i * 0.35}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
              />
              <animate
                attributeName="cy"
                values={`${outer.y};${cy}`}
                dur="2.4s"
                begin={`${-i * 0.35}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.8;1"
                dur="2.4s"
                begin={`${-i * 0.35}s`}
                repeatCount="indefinite"
              />
            </circle>

            <circle cx={outer.x} cy={outer.y} r={nodeR} fill="#0a0b0f" stroke={color} strokeWidth={1.5} />
            <circle cx={outer.x} cy={outer.y} r={2} fill={color} />

            <text
              x={labelOffset.x}
              y={labelOffset.y}
              textAnchor={anchor}
              dominantBaseline="middle"
              className="fill-white/60"
              style={{ font: "500 10px ui-monospace, SFMono-Regular, Menlo, monospace", letterSpacing: "0.04em" }}
            >
              {node.label.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* hub glow + core */}
      <circle cx={cx} cy={cy} r={20} fill={`url(#glow-${uid})`}>
        <animate attributeName="r" values="16;22;16" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r={6} fill="#0a0b0f" stroke="#E3B341" strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={2.4} fill="#F5D889" />

      {centerLabel && (
        <text
          x={cx}
          y={cy + outerR * 0.62 + 22}
          textAnchor="middle"
          className="fill-amber-300/90"
          style={{ font: "600 10px ui-monospace, SFMono-Regular, Menlo, monospace", letterSpacing: "0.08em" }}
        >
          {centerLabel.toUpperCase()}
        </text>
      )}
    </svg>
  );
}
