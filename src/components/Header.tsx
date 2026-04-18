"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(138,81,187,0.2)] bg-[rgba(46,46,52,0.7)] backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-semibold tracking-tight text-[#EFE5FE] group-hover:text-[#B9A8F6] transition-colors">
            JMat<span className="text-[#8A51BB]">Media</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#B9A8F6] hover:text-[#EFE5FE] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contacto"
            className="text-sm px-4 py-2 rounded-lg border border-[rgba(138,81,187,0.4)] text-[#B9A8F6] hover:border-[#8A51BB] hover:text-[#EFE5FE] transition-all"
          >
            Hablar con un experto
          </Link>
        </div>

        <button
          className="md:hidden text-[#B9A8F6] hover:text-[#EFE5FE] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgba(138,81,187,0.2)] bg-[rgba(46,46,52,0.95)] backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#B9A8F6] hover:text-[#EFE5FE] transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="text-sm px-4 py-2 rounded-lg border border-[rgba(138,81,187,0.4)] text-[#B9A8F6] text-center hover:border-[#8A51BB] transition-all"
            onClick={() => setOpen(false)}
          >
            Hablar con un experto
          </Link>
        </div>
      )}
    </header>
  );
}
