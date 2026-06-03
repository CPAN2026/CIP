"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const depoimentos = [
  {
    texto:
      "Quando meu pai teve um AVC, ficamos completamente perdidos. A CIP nos atendeu em menos de 24 horas com uma cuidadora experiente e atenciosa. Hoje ele está se recuperando muito bem, com toda a atenção que merece em casa.",
    nome: "Ana Beatriz Santos",
    info: "Tijuca, RJ · Cliente há 8 meses",
  },
  {
    texto:
      "Minha mãe tem Alzheimer e precisávamos de alguém com experiência e muita paciência. A cuidadora indicada pela CIP é simplesmente incrível — dedicada, carinhosa e altamente capacitada. Hoje ela já é parte da nossa família.",
    nome: "Roberto Carvalho",
    info: "Botafogo, RJ · Cliente há 2 anos",
  },
  {
    texto:
      "Minha avó fez uma cirurgia no quadril e precisava de acompanhamento diário. A CIP cuidou de tudo — desde a seleção da cuidadora até o acompanhamento. Não precisei me preocupar com nada.",
    nome: "Cristina Mendonça",
    info: "Barra da Tijuca, RJ · Cliente há 3 anos",
  },
  {
    texto:
      "Passamos por um momento muito difícil com meu pai. A CIP nos apoiou com uma cuidadora sensível e preparada. O cuidado e a humanidade dela fizeram toda a diferença nos últimos meses.",
    nome: "Marcos Vieira",
    info: "Flamengo, RJ · Cliente há 4 meses",
  },
];

interface TrustStat {
  icon: React.ElementType;
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const trustStats: TrustStat[] = [
  {
    icon: Heart,
    target: 90,
    decimals: 0,
    suffix: "%",
    label: "de famílias satisfeitas",
    sublabel: "baseado em pesquisas com famílias atendidas",
  },
  {
    icon: Star,
    target: 4.8,
    decimals: 1,
    suffix: " ★",
    label: "avaliação média dos cuidadores",
    sublabel: "média de avaliações dos últimos 12 meses",
  },
];

function StatCounter({ stat, active }: { stat: TrustStat; active: boolean }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * stat.target);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setVal(stat.target);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, stat.target]);

  const formatted =
    stat.decimals > 0
      ? val.toFixed(stat.decimals).replace(".", ",")
      : Math.round(val).toString();

  return <>{formatted}{stat.suffix}</>;
}

function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-10 md:mt-14 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
      style={{ background: "linear-gradient(135deg, #003696 0%, #001a4d 100%)", width: '100%' }}
    >
      {/* Mobile: empilhado | Desktop: lado a lado */}
      <div className="hidden md:grid md:grid-cols-2 gap-0 py-20 px-12" style={{ width: '100%' }}>
        {trustStats.map((stat, i) => (
          <div key={stat.label} className="flex items-center">
            <div className="flex flex-col items-center text-center flex-1 px-8 py-4">
              <stat.icon size={24} className="mb-4" style={{ color: "#FDC242" }} />
              <div className="relative flex items-center justify-center mb-3">
                <div className="absolute w-20 h-20 rounded-full bg-yellow-400/10 blur-2xl animate-pulse" />
                <span className="relative font-extrabold leading-none" style={{ color: "#FDC242", fontSize: "clamp(2rem, 6vw, 3.75rem)" }}>
                  <StatCounter stat={stat} active={inView} />
                </span>
              </div>
              <span className="text-xs uppercase tracking-widest leading-snug mb-2" style={{ color: "rgba(255,255,255,0.70)" }}>
                {stat.label}
              </span>
              <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)", textAlign: 'center', width: '100%', display: 'block' }}>
                {stat.sublabel}
              </span>
            </div>
            {i < trustStats.length - 1 && (
              <div className="self-stretch flex-shrink-0 my-8" style={{ width: "1px", backgroundColor: "#FDC242", opacity: 0.35 }} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile apenas: empilhado, sem sublabel */}
      <div className="flex flex-col items-center gap-6 py-8 px-6 md:hidden" style={{ width: '100%' }}>
        {trustStats.map((stat) => (
          <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
            <stat.icon size={20} style={{ color: "#FDC242", marginBottom: '8px' }} />
            <span style={{ color: "#FDC242", fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>
              <StatCounter stat={stat} active={inView} />
            </span>
            <span style={{ color: "rgba(255,255,255,0.70)", fontSize: "0.7rem", textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '6px', textAlign: 'center', width: '100%' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 260 : -260, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -260 : 260, opacity: 0 }),
};

function Carrossel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % depoimentos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  function goTo(index: number) {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }

  function prev() {
    setDirection(-1);
    setCurrent((p) => (p - 1 + depoimentos.length) % depoimentos.length);
  }

  function next() {
    setDirection(1);
    setCurrent((p) => (p + 1) % depoimentos.length);
  }

  const d = depoimentos[current];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="relative max-w-2xl mx-auto">
        {/* Seta esquerda */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 bg-white shadow-md flex items-center justify-center text-slate-500 hover:text-cip-blue hover:border-cip-blue transition-colors"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Card com slide */}
        <div className="overflow-hidden rounded-2xl">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="bg-white border border-slate-100 shadow-md rounded-2xl p-6 md:p-8 flex flex-col gap-4 md:gap-5"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="#FDC242" style={{ color: "#FDC242" }} />
                ))}
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic flex-1">
                &ldquo;{d.texto}&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-100">
                <p className="font-bold text-slate-800 text-sm">{d.nome}</p>
                <p className="text-slate-400 text-xs mt-0.5">{d.info}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Seta direita */}
        <button
          onClick={next}
          aria-label="Próximo"
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 bg-white shadow-md flex items-center justify-center text-slate-500 hover:text-cip-blue hover:border-cip-blue transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Indicadores de ponto */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para depoimento ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              backgroundColor: i === current ? "#003696" : "#cbd5e1",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-14 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 md:mb-14"
        >
          <Quote size={48} className="mx-auto mb-5" style={{ color: "rgba(0,54,150,0.20)" }} />
          <h2 className="font-extrabold text-2xl md:text-4xl mb-3">
            <span style={{ color: "#003696" }}>Avaliações</span>{" "}
            <span style={{ color: "#1e293b" }}>de quem já confia no nosso atendimento</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            Histórias reais de famílias que contam com nosso cuidado
          </p>
        </motion.div>

        <Carrossel />

        <TrustBar />

      </div>
    </section>
  );
}
