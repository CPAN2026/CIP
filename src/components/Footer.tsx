"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const servicos = [
  { label: "Cuidado Diário",              href: "#servicos" },
  { label: "Cuidado Noturno",             href: "#servicos" },
  { label: "Cuidado Integral 24h",        href: "#servicos" },
  { label: "Acompanhamento em Consultas", href: "#acompanhamento-consultas" },
  { label: "Cuidados Pós-operatórios",    href: "#cuidados-pos-operatorios" },
  { label: "Alzheimer e Demências",       href: "#alzheimer-demencias" },
];

const navLinks = [
  { label: "Início",       href: "#inicio" },
  { label: "Serviços",     href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos",  href: "#depoimentos" },
  { label: "Fale Conosco", href: "#contato" },
];

/* ── Ícones sociais SVG ───────────────────────────────────────── */
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cipcuidadores",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#001a4d" }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Coluna 1 — sobre */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm leading-relaxed mb-6 text-center md:text-left" style={{ color: "rgba(255,255,255,0.60)" }}>
              Oferecemos cuidadores profissionais certificados para atendimento domiciliar de idosos.
            </p>

            {/* Redes sociais */}
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FDC242";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#001a4d";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2 — navegação */}
          <div>
            <h4 className="font-extrabold text-white mb-5 text-xs uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.58)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FDC242"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.58)"; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — serviços */}
          <div>
            <h4 className="font-extrabold text-white mb-5 text-xs uppercase tracking-widest">
              Serviços
            </h4>
            <ul className="space-y-3">
              {servicos.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.58)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FDC242"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.58)"; }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — contato */}
          <div>
            <h4 className="font-extrabold text-white mb-5 text-xs uppercase tracking-widest">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/19209569439" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm group"
                  style={{ color: "rgba(255,255,255,0.58)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FDC242"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.58)"; }}
                >
                  <Phone size={15} className="flex-shrink-0 mt-0.5 text-cip-gold" />
                  Fale agora via WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@cipcuidadores.com.br"
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(255,255,255,0.58)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#FDC242"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.58)"; }}
                >
                  <Mail size={15} className="flex-shrink-0 mt-0.5 text-cip-gold" />
                  <span className="break-all">contato@cipcuidadores.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.58)" }}>
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-cip-gold" />
                <span>Rio de Janeiro</span>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.58)" }}>
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-cip-gold" />
                <span>Av. Nossa Sra. de Copacabana, 664 — Copacabana, RJ</span>
              </li>
              <li className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.45)" }}>
                CNPJ: 46.586.077/0001-96
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl text-center sm:text-left" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}>
              <p className="text-white text-sm font-bold mb-1">Atendimento 24 horas</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
                7 dias por semana, inclusive feriados.<br />
                Fale agora pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória + copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <p className="text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.38)" }}>
            © 2022 CIP – Cuidadores de Idosos Profissionais. Todos os direitos reservados.
          </p>
          <div>
            <a
              href="/privacidade"
              className="text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.38)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.70)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)"; }}
            >
              Política de Privacidade e LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
