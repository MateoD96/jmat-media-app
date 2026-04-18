"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const points = [
  { x: 0, y: 85 },
  { x: 10, y: 80 },
  { x: 20, y: 72 },
  { x: 30, y: 65 },
  { x: 40, y: 55 },
  { x: 50, y: 42 },
  { x: 60, y: 30 },
  { x: 70, y: 20 },
  { x: 80, y: 10 },
  { x: 90, y: 5 },
  { x: 100, y: 2 },
];

function buildPath(pts: { x: number; y: number }[], w: number, h: number) {
  const mapped = pts.map((p) => ({
    x: (p.x / 100) * w,
    y: (p.y / 100) * h,
  }));

  let d = `M ${mapped[0].x} ${mapped[0].y}`;
  for (let i = 1; i < mapped.length; i++) {
    const prev = mapped[i - 1];
    const curr = mapped[i];
    const cpx = (prev.x + curr.x) / 2;
    d += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

const W = 600;
const H = 220;
const PATH = buildPath(points, W, H);

export default function GrowthChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-12">
          <span className="text-xs text-[#8A51BB] uppercase tracking-widest font-medium">
            Resultados reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EFE5FE] mt-3">
            Curva de crecimiento de ROI
          </h2>
          <p className="text-[#B9A8F6] mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Así escala el retorno de inversión de nuestros clientes en Meta Ads
            durante los primeros 90 días.
          </p>
        </div>

        <div className="relative rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-6 sm:p-10 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 80% 100%, rgba(138,81,187,0.08) 0%, transparent 60%)",
            }}
          />

          <div className="flex justify-between text-xs text-[#5A3793] mb-4">
            {["Día 0", "Día 30", "Día 60", "Día 90"].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="w-full"
              style={{ height: "clamp(140px, 25vw, 220px)" }}
            >
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#5A3793" />
                  <stop offset="100%" stopColor="#8A51BB" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8A51BB" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8A51BB" stopOpacity="0" />
                </linearGradient>
                <clipPath id="chartClip">
                  <rect x="0" y="0" width={W} height={H} />
                </clipPath>
              </defs>

              <path
                d={`${PATH} L ${W} ${H} L 0 ${H} Z`}
                fill="url(#areaGrad)"
                clipPath="url(#chartClip)"
              />

              <path
                ref={pathRef}
                d={PATH}
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={
                  pathLength > 0
                    ? {
                        strokeDasharray: pathLength,
                        strokeDashoffset: inView ? 0 : pathLength,
                        transition: "stroke-dashoffset 2.2s cubic-bezier(0.4,0,0.2,1)",
                      }
                    : {}
                }
              />

              {inView && (
                <motion.circle
                  cx={(points[points.length - 1].x / 100) * W}
                  cy={(points[points.length - 1].y / 100) * H}
                  r="5"
                  fill="#8A51BB"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2, duration: 0.4 }}
                />
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-[rgba(138,81,187,0.15)]">
            {[
              { label: "ROAS inicial", value: "1.2x" },
              { label: "ROAS a 30 días", value: "2.1x" },
              { label: "ROAS a 90 días", value: "3.8x" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold text-[#8A51BB]">{s.value}</div>
                <div className="text-xs text-[#B9A8F6] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
