"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Moon, Clock, Stethoscope, Activity, Heart, Phone } from "lucide-react";

const incluso = [
  {
    icon: Sun,
    titulo: "Cuidado Diário",
    descricao:
      "Acompanhamento diurno com suporte à rotina, higiene pessoal, alimentação balanceada e atividades de estimulação cognitiva.",
    id: undefined,
  },
  {
    icon: Moon,
    titulo: "Cuidado Noturno",
    descricao:
      "Monitoramento durante a madrugada para idosos que precisam de supervisão noturna, prevenindo quedas e garantindo segurança.",
    id: undefined,
  },
  {
    icon: Clock,
    titulo: "Cuidado Integral 24h",
    descricao:
      "Presença contínua do cuidador, indicada para idosos com maior grau de dependência ou que moram sozinhos.",
    id: undefined,
  },
  {
    icon: Stethoscope,
    titulo: "Acompanhamento em Consultas",
    descricao:
      "Transporte seguro e suporte completo em consultas médicas, exames, fisioterapia e outros procedimentos de saúde.",
    id: "acompanhamento-consultas",
  },
  {
    icon: Activity,
    titulo: "Cuidados Pós-operatórios",
    descricao:
      "Assistência especializada durante a recuperação após cirurgias, com monitoramento de sinais vitais e suporte à reabilitação.",
    id: "cuidados-pos-operatorios",
  },
  {
    icon: Heart,
    titulo: "Alzheimer e Demências",
    descricao:
      "Cuidadores com formação específica para idosos com Alzheimer, demências e outras condições cognitivas.",
    id: "alzheimer-demencias",
  },
];

export default function Servicos() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-24" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <h2 className="font-extrabold text-4xl mb-4">
            <span style={{ color: "#003696" }}>O que está incluso</span>{" "}
            <span style={{ color: "#1e293b" }}>no atendimento</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Cuidado completo, desde necessidades básicas até acompanhamento técnico
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incluso.map((item, i) => {
            const cardDelay = i * 0.15;
            const iconDelay = cardDelay + 0.3;

            return (
              <motion.div
                key={item.titulo}
                id={item.id}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: cardDelay, duration: 0.5, ease: "easeOut" }}
                /* Hover: sobe + sombra + borda dourada */
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,54,150,0.14)",
                  borderColor: "rgba(253,194,66,0.40)",
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "rgba(226,232,240,1)",
                  boxShadow: "0 1px 6px rgba(0,54,150,0.07)",
                }}
                className="bg-white rounded-2xl p-8 flex flex-col gap-4 cursor-default"
              >
                {/* Ícone com glow e pop */}
                <div className="relative w-14 h-14 flex-shrink-0">

                  {/* Círculo de brilho — expande e some */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ backgroundColor: "rgba(253,194,66,0.30)", transformOrigin: "center" }}
                    animate={
                      inView
                        ? { scale: [0.5, 2], opacity: [0.6, 0] }
                        : { scale: 0.5, opacity: 0 }
                    }
                    transition={{ delay: iconDelay, duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Ícone — pop com spring (overshoot natural ~1.2x) */}
                  <motion.div
                    className="relative w-full h-full rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#003696" }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: iconDelay,
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    }}
                  >
                    <item.icon size={28} style={{ color: "#FDC242" }} />
                  </motion.div>
                </div>

                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-2">{item.titulo}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-slate-600 mb-5 text-lg">
            Não sabe qual serviço é ideal para o seu familiar?
          </p>
          <a
            href="https://wa.me/5521998697530"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-base px-10 py-4 shadow-xl"
          >
            <Phone size={18} />
            Falar com um Especialista
          </a>
        </motion.div>

      </div>
    </section>
  );
}
