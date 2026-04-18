"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

const HeroVisual = dynamic(() => import("./HeroVisual"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border border-[rgba(138,81,187,0.3)] animate-pulse bg-[rgba(138,81,187,0.05)]" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(138,81,187,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(90,55,147,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(138,81,187,0.3)] bg-[rgba(138,81,187,0.08)] w-fit">
            <Zap size={12} className="text-[#8A51BB]" />
            <span className="text-xs text-[#B9A8F6] font-medium">
              Resultados medibles desde el día 1
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#EFE5FE]">
            Paid Media &{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #8A51BB 0%, #B9A8F6 100%)",
              }}
            >
              CRM Automation
            </span>
          </h1>

          <p className="text-lg text-[#B9A8F6] leading-relaxed max-w-lg">
            Escalamos negocios con estrategias de Meta Ads de alto rendimiento y
            automatización de CRM. Sin guías genéricas — resultados reales,
            medibles y repetibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/contacto"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden transition-all"
              style={{
                background: "linear-gradient(135deg, #8A51BB 0%, #5A3793 100%)",
                boxShadow: "0 0 20px rgba(138,81,187,0.4), 0 0 40px rgba(138,81,187,0.15)",
              }}
            >
              <span className="relative z-10">Reserva tu Auditoría</span>
              <ArrowRight
                size={16}
                className="relative z-10 group-hover:translate-x-1 transition-transform"
              />
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, #9B62CC 0%, #6A48A3 100%)",
                }}
              />
            </Link>

            <Link
              href="/nosotros"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-[#B9A8F6] border border-[rgba(138,81,187,0.25)] hover:border-[rgba(138,81,187,0.5)] hover:text-[#EFE5FE] transition-all"
            >
              Ver nuestro stack
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-[rgba(138,81,187,0.15)]">
            {[
              { value: "3.8x", label: "ROAS promedio" },
              { value: "+200%", label: "Crecimiento en leads" },
              { value: "48h", label: "Onboarding" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-xl font-bold text-[#8A51BB]">{stat.value}</span>
                <span className="text-xs text-[#B9A8F6]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[320px] lg:h-[560px] z-10 px-4 lg:px-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
