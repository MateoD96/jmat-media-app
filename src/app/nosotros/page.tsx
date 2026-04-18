import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Database, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros - JMat Media",
  description:
    "Conoce el stack y metodología detrás de JMat Media: Meta Ads, CRM y Automatización.",
};

const stack = [
  {
    icon: Target,
    title: "Meta Ads",
    subtitle: "Performance a escala",
    color: "#8A51BB",
    description:
      "Diseñamos y gestionamos campañas de Meta Ads con estructuras probadas. Cada peso invertido tiene un objetivo claro: adquisición de leads cualificados o ventas directas con el menor CPA posible.",
    tools: ["Campaña Advantage+", "Retargeting dinámico", "Lookalike Audiences", "Creative Testing"],
    metric: { value: "3.8x", label: "ROAS promedio en 90 días" },
  },
  {
    icon: Database,
    title: "Gestión de CRM",
    subtitle: "Datos que generan dinero",
    color: "#B9A8F6",
    description:
      "Implementamos y optimizamos tu CRM para que ningún lead se pierda. Estructuramos pipelines, segmentaciones y flujos de nurturing que convierten prospectos en clientes de forma sistemática.",
    tools: ["GoHighLevel", "HubSpot", "ActiveCampaign", "Klaviyo"],
    metric: { value: "+200%", label: "Mejora en tasa de conversión" },
  },
  {
    icon: Zap,
    title: "Automatización",
    subtitle: "Escala sin fricción",
    color: "#EFE5FE",
    description:
      "Conectamos tu stack de herramientas para que el negocio funcione en piloto automático. Desde el primer contacto hasta el cierre y retención — sin intervención manual, sin errores humanos.",
    tools: ["Zapier", "Make (Integromat)", "Webhooks", "APIs nativas"],
    metric: { value: "80%", label: "Reducción de tareas manuales" },
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative py-24 px-6 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(138,81,187,0.12) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="text-xs text-[#8A51BB] uppercase tracking-widest font-medium">
              Metodología
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#EFE5FE] mt-4 leading-tight">
              El stack detrás de los resultados
            </h1>
            <p className="text-[#B9A8F6] mt-5 text-lg leading-relaxed">
              No somos una agencia genérica. Somos especialistas en un sistema
              completo: atraer, convertir y retener con datos.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {stack.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-8 flex flex-col gap-6 overflow-hidden group hover:border-[rgba(138,81,187,0.4)] transition-colors"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(to right, transparent, ${item.color}40, transparent)`,
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ color: item.color }}>
                      {item.subtitle}
                    </p>
                    <h2 className="text-2xl font-bold text-[#EFE5FE]">{item.title}</h2>
                  </div>

                  <p className="text-sm text-[#B9A8F6] leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded-full border border-[rgba(138,81,187,0.2)] text-[#B9A8F6] bg-[rgba(138,81,187,0.05)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[rgba(138,81,187,0.15)]">
                    <span className="text-2xl font-bold" style={{ color: item.color }}>
                      {item.metric.value}
                    </span>
                    <span className="text-xs text-[#5A3793] ml-2">{item.metric.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20 px-6 bg-[rgba(26,26,31,0.5)] border-t border-[rgba(138,81,187,0.1)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#EFE5FE]">
              ¿Listo para implementar este sistema en tu negocio?
            </h2>
            <p className="text-[#B9A8F6] mt-4 text-sm max-w-md mx-auto">
              Una auditoría gratuita de 30 minutos es todo lo que necesitas para
              ver el potencial real de tu cuenta.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #8A51BB 0%, #5A3793 100%)",
                boxShadow: "0 0 20px rgba(138,81,187,0.3)",
              }}
            >
              Reservar auditoría <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
