import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(138,81,187,0.2)] bg-[#1A1A1F] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-semibold text-[#EFE5FE]">
            JMat<span className="text-[#8A51BB]">Media</span>
          </span>
          <p className="text-sm text-[#B9A8F6] mt-1">
            Paid Media & CRM Automation
          </p>
        </div>
        <div className="flex gap-6 text-sm text-[#B9A8F6]">
          <Link href="/" className="hover:text-[#EFE5FE] transition-colors">Inicio</Link>
          <Link href="/nosotros" className="hover:text-[#EFE5FE] transition-colors">Nosotros</Link>
          <Link href="/contacto" className="hover:text-[#EFE5FE] transition-colors">Contacto</Link>
        </div>
        <p className="text-xs text-[#5A3793]">
          © {new Date().getFullYear()} JMat Media. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
