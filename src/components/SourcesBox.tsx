const SourcesBox = () => {
  const sources = [
    "OMS — Relatório Global de Segurança do Paciente, 2023",
    "Diederich Healthcare — Medical Malpractice Payout Analysis, 2023",
    "Joint Commission — Sentinel Event Statistics, 2022",
    "AHRQ — Patient Safety Indicators, 2021",
    "IBSP — Instituto Brasileiro para Segurança do Paciente, 2022",
    "ANVISA — Boletim de Segurança do Paciente e Qualidade, 2023",
    "CNJ — Judicialização da Saúde no Brasil, 2022",
    "Revista Brasileira de Enfermagem — Erros de Medicação, 2021",
    "Harvard Business Review — The Financial Impact of Medical Errors, 2020",
    "The Lancet — Global Burden of Patient Harm, 2023",
  ];

  return (
    <section className="py-12 border-t border-accent/10" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="max-w-4xl mx-auto px-6">
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
