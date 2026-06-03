import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import PropostaValor from "@/components/PropostaValor";
import ComoFunciona from "@/components/ComoFunciona";
import QuemSomos from "@/components/QuemSomos";
import Diferenciais from "@/components/Diferenciais";
import Servicos from "@/components/Servicos";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Numeros />
        <PropostaValor />
        <ComoFunciona />
        <QuemSomos />
        <Diferenciais />
        <Servicos />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
