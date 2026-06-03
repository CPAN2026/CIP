"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PropostaValor() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-5 border border-slate-100 shadow-md rounded-2xl p-6 md:p-8"
        >
          <div
            className="flex-shrink-0 p-4 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#003696" }}
          >
            <Shield size={28} color="white" />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="font-extrabold text-lg md:text-xl text-slate-800 mb-2">
              Você não precisa se preocupar com nada
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Nós cuidamos de todo o processo, desde a seleção até o acompanhamento,
              garantindo responsabilidade, controle e qualidade em cada detalhe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
