"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <motion.div
      className={`rounded-lg bg-[rgba(138,81,187,0.1)] ${className}`}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function BookingSection() {
  return (
    <section className="py-24 px-6 bg-[rgba(26,26,31,0.5)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs text-[#8A51BB] uppercase tracking-widest font-medium">
            Sin costo — 30 minutos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EFE5FE] mt-3">
            Reserva tu Auditoría Gratuita
          </h2>
          <p className="text-[#B9A8F6] mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Analizamos tu cuenta de Meta Ads y tu CRM en vivo. Sales con un
            plan de acción claro, lo implementes con nosotros o no.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-6 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[rgba(138,81,187,0.15)] flex items-center justify-center">
                <Calendar size={16} className="text-[#8A51BB]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#EFE5FE]">Google Calendar</p>
                <p className="text-xs text-[#B9A8F6] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A51BB] animate-pulse inline-block" />
                  Cargando disponibilidad...
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              {["Lun", "Mar", "Mié", "Jue", "Vie"].map((d) => (
                <SkeletonBlock key={d} className="flex-1 h-8" />
              ))}
            </div>

            <div className="flex flex-col gap-2">
              {[1, 2, 3, 4].map((i) => (
                <SkeletonBlock key={i} className="h-10 w-full" />
              ))}
            </div>

            <div className="text-center mt-2">
              <p className="text-xs text-[#5A3793] flex items-center justify-center gap-2">
                <Clock size={12} />
                Cargando disponibilidad de Google Calendar...
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-6 flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-[#EFE5FE]">
              ¿Qué incluye la auditoría?
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Revisión completa de estructura de campañas de Meta Ads",
                "Análisis de segmentaciones, creatividades y presupuesto",
                "Evaluación de flujos de CRM y automatizaciones actuales",
                "Hoja de ruta con quick wins para los primeros 30 días",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#8A51BB] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#B9A8F6] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 border-t border-[rgba(138,81,187,0.15)]">
              <p className="text-xs text-[#5A3793] mb-4">
                Disponible en cuanto el calendario cargue →
              </p>
              <button
                disabled
                className="w-full py-3 rounded-xl font-semibold text-sm text-[#5A3793] border border-[rgba(138,81,187,0.15)] bg-[rgba(138,81,187,0.04)] cursor-not-allowed"
              >
                Selecciona un horario
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
