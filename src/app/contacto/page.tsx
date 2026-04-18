import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, AtSign, Link2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - JMat Media",
  description: "Ponte en contacto con JMat Media. Agencia de Paid Media y CRM Automation.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@jmatmedia.com",
    href: "mailto:hola@jmatmedia.com",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+54 9 11 0000-0000",
    href: "https://wa.me/549110000000",
  },
];

const socialLinks = [
  { icon: AtSign, label: "Instagram", handle: "@jmatmedia", href: "#" },
  { icon: Link2, label: "LinkedIn", handle: "JMat Media", href: "#" },
  { icon: Globe, label: "Web", handle: "jmatmedia.com", href: "#" },
];

export default function ContactoPage() {
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
              Trabajemos juntos
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#EFE5FE] mt-4 leading-tight">
              Hablemos
            </h1>
            <p className="text-[#B9A8F6] mt-5 text-lg leading-relaxed">
              ¿Querés escalar tus campañas o automatizar tu CRM? Estamos a un
              mensaje de distancia.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-8">
                <h2 className="text-lg font-semibold text-[#EFE5FE] mb-6">
                  Información de contacto
                </h2>
                <div className="flex flex-col gap-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[rgba(138,81,187,0.12)] border border-[rgba(138,81,187,0.2)] flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-[#8A51BB]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#5A3793] uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-[#EFE5FE] group-hover:text-[#B9A8F6] transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-8">
                <h2 className="text-lg font-semibold text-[#EFE5FE] mb-6">
                  Redes sociales
                </h2>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[rgba(138,81,187,0.12)] border border-[rgba(138,81,187,0.2)] flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-[#8A51BB]" />
                        </div>
                        <div>
                          <p className="text-xs text-[#5A3793] uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-[#EFE5FE] group-hover:text-[#B9A8F6] transition-colors">
                            {item.handle}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(138,81,187,0.2)] bg-[rgba(26,26,31,0.8)] p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#8A51BB] animate-pulse" />
                <h2 className="text-lg font-semibold text-[#EFE5FE]">
                  Formulario de contacto
                </h2>
              </div>

              <div className="flex-1 rounded-xl border border-dashed border-[rgba(138,81,187,0.25)] bg-[rgba(138,81,187,0.03)] flex flex-col items-center justify-center gap-4 p-10 text-center min-h-[320px]">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(138,81,187,0.12)] border border-[rgba(138,81,187,0.2)] flex items-center justify-center">
                  <MessageSquare size={22} className="text-[#8A51BB]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#EFE5FE]">
                    Formulario GoHighLevel
                  </p>
                  <p className="text-xs text-[#5A3793] mt-1 leading-relaxed max-w-xs">
                    El formulario de contacto se integrará aquí vía GoHighLevel
                    embed. Espacio reservado para el widget.
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-xs opacity-30 pointer-events-none select-none">
                  {["Nombre", "Email", "Mensaje"].map((p) => (
                    <div
                      key={p}
                      className="h-10 rounded-lg bg-[rgba(138,81,187,0.15)] border border-[rgba(138,81,187,0.2)]"
                    />
                  ))}
                  <div className="h-10 rounded-lg bg-[#8A51BB] opacity-50" />
                </div>
              </div>

              <p className="text-xs text-[#5A3793] text-center mt-4">
                Tiempo de respuesta: menos de 24 horas hábiles
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
