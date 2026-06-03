"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Calendar, Users, Clock } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  from: number;
  to: number;
  prefix?: string;
  format: "plain" | "milhar";
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    icon: Calendar,
    from: 2000,
    to: 2022,
    format: "plain",
    label: "ano de fundação da CIP",
    sublabel: "Nascida em Copacabana, Rio de Janeiro",
  },
  {
    icon: Users,
    from: 0,
    to: 5000,
    prefix: "+",
    format: "milhar",
    label: "cuidadores cadastrados",
    sublabel: "Profissionais verificados e treinados",
  },
  {
    icon: Clock,
    from: 0,
    to: 4000,
    prefix: "+",
    format: "milhar",
    label: "plantões realizados",
    sublabel: "Com acompanhamento contínuo da CIP",
  },
];

function formatValue(n: number, format: "plain" | "milhar"): string {
  if (format === "milhar") {
    return n.toLocaleString("pt-BR");
  }
  return String(n);
}

function Counter({ item, active }: { item: StatItem; active: boolean }) {
  const [display, setDisplay] = useState(item.from);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const duration = 2000;
    const startTime = performance.now();
    const range = item.to - item.from;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(item.from + range * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(item.to);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, item.from, item.to]);

  return (
    <span>
      {item.prefix ?? ""}{formatValue(display, item.format)}
    </span>
  );
}

function StatCard({ item }: { item: StatItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="border border-slate-100 shadow-md rounded-2xl p-6"
      style={{ width: "100%", textAlign: "center" }}
    >
      <div style={{ textAlign: "center", width: "100%", marginBottom: "12px" }}>
        <item.icon size={28} style={{ color: "#003696", display: "inline-block" }} />
      </div>

      <p
        className="font-extrabold text-4xl md:text-5xl leading-none"
        style={{ color: "#003696", textAlign: "center", width: "100%", marginBottom: "8px" }}
      >
        <Counter item={item} active={inView} />
      </p>

      <p
        className="text-slate-700 text-sm md:text-base font-semibold"
        style={{ textAlign: "center", width: "100%", marginBottom: "4px" }}
      >
        {item.label}
      </p>

      <p
        className="text-slate-400 text-xs"
        style={{ textAlign: "center", width: "100%", display: "block", lineHeight: "1.4" }}
      >
        {item.sublabel}
      </p>
    </div>
  );
}

export default function Numeros() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        <h2
          className="text-center font-extrabold text-3xl md:text-4xl mb-10 md:mb-14"
          style={{ color: "#003696", width: "100%", textAlign: "center" }}
        >
          Nossos números
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ width: "100%" }}
        >
          {stats.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
