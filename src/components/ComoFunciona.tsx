"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, ClipboardList, UserCheck, Handshake, HeartHandshake } from "lucide-react";

const passos = [
  {
    numero: 1,
    icon: Phone,
    titulo: "Entre em Contato",
    descricao: "Fale com nossa equipe pelo WhatsApp ou telefone e nos conte a situação do seu familiar.",
  },
  {
    numero: 2,
    icon: ClipboardList,
    titulo: "Análise do Perfil",
    descricao: "Avaliamos as necessidades do idoso e buscamos em nosso banco de cuidadores o profissional com melhor experiência e compatibilidade para o caso.",
  },
  {
    numero: 3,
    icon: UserCheck,
    titulo: "Contratação pela CIP",
    descricao: "O cuidador é contratado diretamente pela CIP. O cliente assina contrato com nossa empresa — sem nenhum vínculo empregatício com o profissional.",
  },
  {
    numero: 4,
    icon: Handshake,
    titulo: "Preparação e Início",
    descricao: "Preparamos o cuidador com orientações específicas para o caso e iniciamos o atendimento na residência do cliente.",
  },
  {
    numero: 5,
    icon: HeartHandshake,
    titulo: "Supervisão 24 horas",
    descricao: "Nossa equipe acompanha, supervisiona e gerencia tudo continuamente. O cliente não precisa se preocupar com nada.",
  },
];

const BALL_DELAYS = [0, 0.35, 0.7, 1.05, 1.4];

export default function ComoFunciona() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="py-14 md:py-24" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="font-extrabold text-2xl md:text-4xl mb-3 md:mb-4">
            <span style={{ color: "#003696" }}>Como funciona</span>{" "}
            <span style={{ color: "#1e293b" }}>o atendimento</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            Um processo simples, rápido e seguro para você ter o cuidado certo
          </p>
        </motion.div>

        <div
          ref={ref}
          className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-0"
        >
          {/* Linha conectora animada — apenas desktop */}
          <motion.div
            className="hidden md:block absolute h-px"
            style={{
              top: "40px",
              left: "calc(10% + 40px)",
              right: "calc(10% + 40px)",
              backgroundColor: "#003696",
              transformOrigin: "left",
              opacity: 0.25,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />

          {passos.map((passo, i) => (
            <div
              key={passo.numero}
              className="relative flex flex-row md:flex-col items-start md:items-center md:text-center md:flex-1 gap-4 md:gap-0 md:px-4"
            >
              {/* Círculo */}
              <motion.div
                className="relative z-10 flex-shrink-0 md:mb-5"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: BALL_DELAYS[i], type: "spring", stiffness: 200, damping: 15 }}
              >
                <div
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-md border-4 border-white"
                  style={{ backgroundColor: "#003696" }}
                >
                  <passo.icon size={22} color="white" />
                </div>
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs font-extrabold shadow"
                  style={{ backgroundColor: "#FDC242", color: "#003696" }}
                >
                  {passo.numero}
                </span>
              </motion.div>

              {/* Texto */}
              <div className="flex-1 md:flex-none">
                <motion.h3
                  className="font-extrabold text-sm md:text-base mb-1 md:mb-2 leading-snug"
                  style={{ color: "#003696" }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                  transition={{ delay: BALL_DELAYS[i] + 0.2, duration: 0.4, ease: "easeOut" }}
                >
                  {passo.titulo}
                </motion.h3>
                <motion.p
                  className="text-slate-500 text-xs md:text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: BALL_DELAYS[i] + 0.3, duration: 0.4, ease: "easeOut" }}
                >
                  {passo.descricao}
                </motion.p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 md:mt-14"
        >
          <a
            href="https://wa.me/5521998697530"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm md:text-base w-full sm:w-auto justify-center px-8 py-3.5 md:px-10 md:py-4 shadow-xl"
          >
            <Phone size={16} />
            Iniciar agora pelo WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
