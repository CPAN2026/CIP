"use client";

import { Calendar, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "2022",
    label: "ano de fundação da CIP",
    sublabel: "Nascida em Copacabana, Rio de Janeiro",
  },
  {
    icon: Users,
    value: "+5.000",
    label: "cuidadores cadastrados",
    sublabel: "Profissionais verificados e treinados",
  },
  {
    icon: Clock,
    value: "+4.000",
    label: "plantões realizados",
    sublabel: "Com acompanhamento contínuo da CIP",
  },
];

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
            <div
              key={item.label}
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
                {item.value}
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
          ))}
        </div>

      </div>
    </section>
  );
}
