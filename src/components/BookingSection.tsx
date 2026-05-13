"use client";

import { CheckCircle2, Clock, Shield, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    text: "Revisión completa de estructura de campañas de Meta Ads",
  },
  {
    icon: Zap,
    text: "Análisis de segmentaciones, creatividades y presupuesto",
  },
  {
    icon: Shield,
    text: "Evaluación de flujos de CRM y automatizaciones actuales",
  },
  {
    icon: CheckCircle2,
    text: "Hoja de ruta con quick wins para los primeros 30 días",
  },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3 rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] overflow-hidden">
            <style>{`
              #ghl-booking-TosC99dGRxrGD3lAczgi {
                box-shadow: none !important;
                background: transparent !important;
              }
            `}</style>
            <iframe
              id="ghl-booking-TosC99dGRxrGD3lAczgi"
              src="https://link.jmatmedia.com/widget/booking/TosC99dGRxrGD3lAczgi"
              style={{
                width: "100%",
                height: "660px",
                border: "none",
                display: "block",
                boxShadow: "none",
              }}
              title="Reservar Auditoría Gratuita"
            />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-6">
              <h3 className="text-base font-semibold text-[#EFE5FE] mb-5">
                ¿Qué incluye?
              </h3>
              <ul className="flex flex-col gap-4">
                {benefits.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[rgba(138,81,187,0.12)] border border-[rgba(138,81,187,0.2)] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={13} className="text-[#8A51BB]" />
                    </div>
                    <span className="text-sm text-[#B9A8F6] leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[rgba(138,81,187,0.12)] border border-[rgba(138,81,187,0.2)] flex items-center justify-center shrink-0">
                  <Clock size={13} className="text-[#8A51BB]" />
                </div>
                <p className="text-sm font-medium text-[#EFE5FE]">
                  30 minutos
                </p>
              </div>
              <p className="text-xs text-[#B9A8F6] leading-relaxed">
                Sesión 1:1 por videollamada. Sin compromisos, con resultados
                concretos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
