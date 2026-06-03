import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade e LGPD | CIP Cuidadores",
  description: "Política de Privacidade da CIP – Cuidadores de Idosos Profissionais, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).",
};

const sections = [
  {
    title: "1. Identificação do Controlador",
    content: `A CIP – Cuidadores de Idosos Profissionais, inscrita no CNPJ sob o nº 46.586.077/0001-96, com sede na Av. Nossa Sra. de Copacabana, 664, Copacabana, Rio de Janeiro – RJ, é a controladora dos dados pessoais tratados nos termos desta Política, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).

Para entrar em contato com o Encarregado pelo Tratamento de Dados Pessoais (DPO), utilize o e-mail: contato@cipcuidadores.com.br.`,
  },
  {
    title: "2. Dados Pessoais Coletados",
    content: `Coletamos e tratamos as seguintes categorias de dados pessoais:

• Dados de identificação: nome completo, CPF, RG, data de nascimento.
• Dados de contato: endereço residencial, telefone, e-mail.
• Dados do idoso assistido: nome, idade, condição de saúde, necessidades especiais, histórico médico relevante para a prestação dos serviços de cuidado domiciliar.
• Dados contratuais e financeiros: informações necessárias para formalização e execução do contrato de prestação de serviços.
• Dados de navegação: endereço IP, tipo de dispositivo, páginas acessadas e tempo de navegação em nosso site, por meio de cookies e tecnologias similares.

Os dados de saúde do idoso assistido são considerados dados pessoais sensíveis, nos termos do art. 5º, II da LGPD, e recebem proteção reforçada.`,
  },
  {
    title: "3. Finalidades do Tratamento",
    content: `Os dados pessoais são tratados para as seguintes finalidades:

• Prestação de serviços: seleção, contratação e supervisão de cuidadores de idosos, bem como execução do contrato de serviço domiciliar.
• Comunicação: envio de informações, orçamentos, atualizações contratuais e suporte ao cliente.
• Cumprimento de obrigações legais: atendimento a exigências fiscais, trabalhistas e regulatórias aplicáveis.
• Segurança e prevenção de fraudes: verificação de antecedentes dos profissionais e autenticação de usuários.
• Melhoria dos serviços: análise de satisfação e aprimoramento contínuo do atendimento.
• Comunicações comerciais: envio de informações sobre nossos serviços, mediante consentimento prévio.`,
  },
  {
    title: "4. Base Legal para o Tratamento",
    content: `O tratamento dos dados pessoais é realizado com fundamento nas seguintes bases legais previstas na LGPD:

• Art. 7º, I – Consentimento do titular, quando aplicável.
• Art. 7º, V – Execução de contrato ou procedimentos preliminares relacionados ao contrato do qual seja parte o titular.
• Art. 7º, VI – Exercício regular de direitos em processo judicial, administrativo ou arbitral.
• Art. 7º, IX – Legítimo interesse da CIP, observados os direitos e liberdades fundamentais do titular.
• Art. 11, II, f – Para dados de saúde: tutela da saúde, em procedimento realizado por profissionais da área da saúde ou por entidades sanitárias.`,
  },
  {
    title: "5. Compartilhamento de Dados",
    content: `A CIP não vende nem comercializa dados pessoais. Os dados poderão ser compartilhados com:

• Cuidadores contratados: apenas os dados necessários para a execução do serviço domiciliar.
• Prestadores de serviços terceirizados: empresas que auxiliam na operação do negócio (ex.: sistemas de TI, contabilidade, assessoria jurídica), mediante cláusulas contratuais de confidencialidade e proteção de dados.
• Autoridades públicas: quando exigido por lei, decisão judicial ou regulamentação aplicável.

Em nenhuma hipótese os dados serão compartilhados com terceiros para fins comerciais sem o consentimento explícito do titular.`,
  },
  {
    title: "6. Prazo de Retenção dos Dados",
    content: `Os dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta Política, observados os prazos legais aplicáveis:

• Dados contratuais: pelo período mínimo de 5 (cinco) anos após o encerramento do contrato, nos termos do Código Civil.
• Dados fiscais e financeiros: pelo prazo exigido pela legislação tributária vigente.
• Dados de saúde: enquanto houver relação contratual ativa e pelo prazo legalmente exigido após seu encerramento.
• Dados de navegação: por até 12 (doze) meses, salvo necessidade justificada.

Após o término dos prazos de retenção, os dados serão eliminados ou anonimizados de forma segura.`,
  },
  {
    title: "7. Direitos dos Titulares",
    content: `Em conformidade com o art. 18 da LGPD, o titular dos dados tem os seguintes direitos:

• Confirmação da existência de tratamento.
• Acesso aos dados pessoais.
• Correção de dados incompletos, inexatos ou desatualizados.
• Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a LGPD.
• Portabilidade dos dados a outro fornecedor de serviço ou produto.
• Eliminação dos dados tratados com base no consentimento.
• Informação sobre as entidades públicas e privadas com as quais a CIP compartilhou seus dados.
• Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.
• Revogação do consentimento, a qualquer momento, mediante manifestação expressa.

Para exercer seus direitos, entre em contato pelo e-mail: contato@cipcuidadores.com.br. Responderemos em até 15 (quinze) dias úteis.`,
  },
  {
    title: "8. Segurança da Informação",
    content: `A CIP adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acesso não autorizado, destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado, incluindo:

• Controle de acesso restrito a dados sensíveis.
• Uso de conexões seguras (HTTPS/TLS) no site.
• Treinamento de colaboradores sobre proteção de dados.
• Políticas internas de segurança da informação.

Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos titulares, a CIP notificará a Autoridade Nacional de Proteção de Dados (ANPD) e os titulares afetados no prazo legal.`,
  },
  {
    title: "9. Cookies e Tecnologias de Rastreamento",
    content: `Nosso site utiliza cookies e tecnologias similares para melhorar a experiência de navegação e analisar o tráfego. Os cookies utilizados são:

• Cookies essenciais: necessários para o funcionamento básico do site.
• Cookies analíticos: utilizados para entender como os visitantes interagem com o site (ex.: Google Analytics), mediante consentimento.

O titular pode gerenciar ou desativar os cookies por meio das configurações do seu navegador. A desativação de cookies essenciais pode afetar o funcionamento do site.`,
  },
  {
    title: "10. Transferência Internacional de Dados",
    content: `Caso algum dado pessoal seja transferido para países estrangeiros, a CIP assegurará que a transferência ocorra em conformidade com a LGPD, mediante adoção de salvaguardas adequadas, como cláusulas contratuais específicas de proteção de dados ou transferências para países com nível de proteção adequado reconhecido pela ANPD.`,
  },
  {
    title: "11. Contato e Encarregado (DPO)",
    content: `Para exercer seus direitos, sanar dúvidas sobre o tratamento de dados pessoais ou apresentar reclamações, entre em contato com o Encarregado pelo Tratamento de Dados Pessoais da CIP:

E-mail: contato@cipcuidadores.com.br
Endereço: Av. Nossa Sra. de Copacabana, 664, Copacabana, Rio de Janeiro – RJ

Você também pode apresentar reclamação diretamente à Autoridade Nacional de Proteção de Dados (ANPD), acessando o site www.gov.br/anpd.`,
  },
  {
    title: "12. Atualização desta Política",
    content: `Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas de tratamento de dados ou alterações na legislação aplicável. A versão mais recente estará sempre disponível nesta página, com a data da última atualização indicada abaixo.

Última atualização: junho de 2025.`,
  },
];

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho */}
      <div style={{ backgroundColor: "#001a4d" }} className="py-8 px-4 md:py-10">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            ← Voltar ao site
          </Link>
          <h1 className="font-bold text-xl sm:text-3xl text-white mb-2 leading-tight">
            Política de Privacidade e LGPD
          </h1>
          <p className="text-xs md:text-sm leading-relaxed break-words" style={{ color: "rgba(255,255,255,0.55)" }}>
            CIP – Cuidadores de Idosos Profissionais<br className="sm:hidden" /> · CNPJ 46.586.077/0001-96
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <p className="text-slate-600 text-sm leading-relaxed mb-10 p-4 rounded-xl border border-slate-100 bg-slate-50">
          Esta Política de Privacidade descreve como a <strong>CIP – Cuidadores de Idosos Profissionais</strong> coleta, utiliza, armazena e protege os dados pessoais de clientes, familiares de idosos assistidos e visitantes do site, em conformidade com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018)</strong>.
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-bold text-base md:text-lg mb-3" style={{ color: "#003696" }}>
                {section.title}
              </h2>
              <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
              <div className="mt-6 border-t border-slate-100" />
            </section>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-colors text-white"
            style={{ backgroundColor: "#003696" }}
          >
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
}
