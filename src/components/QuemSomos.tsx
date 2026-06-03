"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Award } from "lucide-react";
import Image from "next/image";

const destaques = [
  { icon: Users,  label: "Rede consolidada de cuidadores qualificados no Rio de Janeiro" },
  { icon: Award,  label: "Foco em custo-benefício real para as famílias cariocas" },
  { icon: MapPin, label: "Nascida em Copacabana, Rio de Janeiro, em 2022" },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Coluna da imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/cuidadora.jpg"
                alt="Cuidadora profissional CIP"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex justify-center md:justify-start mb-4">
              <span className="badge-gold flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-2 w-full md:w-auto text-center md:text-left">
                <MapPin size={13} className="flex-shrink-0" />
                <span className="whitespace-nowrap">Fundada em 2022 • Rio de Janeiro</span>
              </span>
            </div>

            <h2 className="font-extrabold text-2xl md:text-4xl leading-tight mt-3 mb-5 md:mb-6 text-center md:text-left" style={{ color: "#003696" }}>
              Nossa História
            </h2>

            <div className="space-y-3 md:space-y-4 text-slate-600 leading-relaxed text-sm md:text-[1.0625rem]">
              <p>
                A <strong className="font-bold" style={{ color: "#003696" }}>CIP — Cuidadores de Idosos Profissionais</strong> foi
                criada em 2022, em Copacabana, na cidade do Rio de Janeiro, com o propósito de oferecer
                às famílias um serviço de cuidado ao idoso com qualidade, segurança e melhor custo-benefício.
              </p>
              <p>
                A empresa faz parte de um grupo com{" "}
                <strong className="font-bold" style={{ color: "#003696" }}>mais de 15 anos de experiência</strong> no
                segmento de cuidadores de idosos, reunindo conhecimento prático, estrutura operacional
                e compromisso com o atendimento humanizado.
              </p>
              <p>
                Desde sua criação, a CIP nasceu para atender uma necessidade clara do mercado:
                proporcionar uma alternativa mais acessível, organizada e confiável para famílias que
                buscam cuidadores profissionais, sem abrir mão da segurança do assistido, da seleção
                criteriosa dos profissionais e do acompanhamento da rotina de cuidados.
              </p>
              <p>
                Com essa proposta, a CIP carrega a experiência do grupo ao qual pertence e se posiciona
                como uma <strong className="font-bold" style={{ color: "#003696" }}>solução eficiente</strong> para
                quem procura cuidado profissional, próximo e compatível com a realidade das famílias cariocas.
              </p>
            </div>

            <ul className="mt-6 md:mt-8 space-y-3">
              {destaques.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(0,54,150,0.08)" }}>
                    <Icon size={13} style={{ color: "#003696" }} />
                  </div>
                  <span className="text-slate-600 text-xs md:text-sm leading-relaxed">{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
