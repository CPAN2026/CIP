"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Início",         href: "#inicio" },
  { label: "Serviços",       href: "#servicos" },
  { label: "Diferenciais",   href: "#diferenciais" },
  { label: "Nossa História", href: "#quem-somos" },
  { label: "Depoimentos",    href: "#depoimentos" },
  { label: "Contato",        href: "#contato" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">

      {/* ── MOBILE (< md): logo + nav em linha abaixo ── */}
      <div className="flex md:hidden flex-col items-center pt-3 pb-2 px-4">
        <motion.a
          href="#inicio"
          className="flex items-center select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div style={{ width: 110, height: 58, flexShrink: 0 }}>
            <img
              src="/cip-logo.png"
              alt="CIP Cuidadores"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </motion.a>

      </div>

      {/* ── DESKTOP (md+): logo | nav centralizada | CTA ── */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 h-20 items-center">
        <motion.a
          href="#inicio"
          className="flex items-center gap-2 select-none flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div style={{ width: 120, height: 64, flexShrink: 0 }}>
            <img
              src="/cip-logo.png"
              alt="CIP Cuidadores"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </motion.a>

        <nav className="flex items-center gap-7 mx-auto">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-cip-blue transition-colors duration-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.1, ease: "easeOut" }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="https://wa.me/5521998697530"
          target="_blank"
          rel="noopener noreferrer"
          className="flex btn btn-primary py-2.5 px-5 text-sm shadow-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Phone size={14} />
          Fale Conosco
        </motion.a>
      </div>

    </header>
  );
}
