"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Início",        href: "#inicio" },
  { label: "Serviços",      href: "#servicos" },
  { label: "Diferenciais",  href: "#diferenciais" },
  { label: "Nossa História", href: "#quem-somos" },
  { label: "Depoimentos",   href: "#depoimentos" },
  { label: "Contato",       href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* Espaçador de balanceamento — mantém logo centrado no mobile */}
        <div className="w-10 flex-shrink-0 md:hidden" />

        {/* Logo — centrado absoluto no mobile, estático no desktop */}
        <motion.a
          href="#inicio"
          className="flex items-center select-none absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src="/cip-logo.png" alt="CIP Cuidadores" className="w-[110px] sm:w-[140px]" style={{ height: "auto" }} />
        </motion.a>

        {/* Navegação desktop — stagger de cima para baixo */}
        <nav className="hidden md:flex items-center gap-7">
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

        {/* CTA + hambúrguer */}
        <div className="flex items-center gap-3">
          <motion.a
            href="https://wa.me/5521998697530"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex btn btn-primary py-2.5 px-5 text-sm shadow-xl"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Phone size={14} />
            Fale Conosco
          </motion.a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-cip-blue transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base font-semibold text-slate-700 hover:text-cip-blue transition-colors border-b border-slate-100 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5521998697530"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary w-full justify-center mt-3"
              >
                <Phone size={16} /> Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
