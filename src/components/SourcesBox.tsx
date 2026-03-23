const SourcesBox = () => {
  const sources = [
    "OMS — Patient Safety: Global Action on Patient Safety, 2019. Dados sobre 2,6 milhões de mortes evitáveis/ano.",
    "UFMG / Instituto de Estudos de Saúde Suplementar (IESS) — Levantamento em 182 hospitais brasileiros, 2017–2018. Publicado pela Revista Pesquisa FAPESP.",
    "National Practitioner Data Bank (EUA) — Relatório de pagamentos por negligência médica 2013–2023. US$34 bilhões; média de US$348.065/caso.",
    "Ministério da Saúde da Espanha — Estratégia de Segurança do Paciente, 2016. 13% dos erros cirúrgicos e 67% dos erros de transfusão relacionados à identificação.",
    "Khammarnia, M. et al. \"The Efficacy of patients' wristband bar-code on prevention of medical errors: a meta-analysis study.\" Applied Clinical Informatics, 2015 — redução de 57,5% em erros com pulseiras com código de barras.",
    "JAMA / Journal of the American Medical Association, 2020 — Estimativa de que apenas 2% das vítimas de erros médicos abrem processos formais.",
    "Conselho Nacional de Justiça (CNJ), 2017 — Crescimento de 130% em ações judiciais na saúde entre 2008 e 2017.",
    "Brito, M.F.P. et al. \"Processo de identificação do paciente em serviços de saúde.\" Brazilian Journal of Health Review, 2021 — 75% dos hospitais sem padronização de pulseiras.",
    "MDLinx, 2024 — Maiores indenizações por negligência médica nos EUA em 2024, incluindo US$261 milhões (Johns Hopkins) e US$120 milhões (Henry Ford Health System).",
    "The Joint Commission, 2024 — Aumento de 13% nos Sentinel Events em 2024 vs. 2023. 1.575 eventos graves registrados.",
  ];

  return (
    <section className="py-12 border-t border-accent/10" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="max-w-4xl mx-auto px-[5%] sm:px-6">
        <h3 className="font-satoshi font-semibold text-[13px] text-accent uppercase tracking-[1px] mb-5">
          Fontes e Referências
        </h3>
        <ol className="space-y-2">
          {sources.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="font-satoshi text-[11.5px] text-muted-foreground">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SourcesBox;
