import { useScrollReveal } from "@/hooks/useScrollReveal";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const solutions = [
    { icon: "🖼️", title: "Foto real do paciente", desc: "Pulseiras com foto impressa em alta resolução para identificação visual imediata." },
    { icon: "🎨", title: "Cores de risco e Protocolo Manchester", desc: "Impressão colorida com codificação por cores de alergia, risco de queda e prioridade." },
    { icon: "📱", title: "QR Code + integração total", desc: "Leitura instantânea com qualquer smartphone, integrada ao PEP e sistemas hospitalares." },
    { icon: "🔒", title: "Pulseira única por paciente", desc: "Cada pulseira é impressa sob demanda, eliminando estoque e troca acidental." },
    { icon: "⚡", title: "Sob demanda, em segundos", desc: "Impressão no ponto de atendimento, sem filas nem dependência de TI." },
    { icon: "🌐", title: "Todas as aplicações em uma", desc: "Uma única impressora para pulseiras, etiquetas, tubos de ensaio e medicamentos." },
  ];

  return (
    <section id="solucao" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-[700px] mx-auto mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">A solução</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl">
            Epson ColorWorks — impressão que salva vidas
          </h2>
          <p className="font-satoshi text-muted-foreground leading-relaxed">
            Pulseiras inteligentes, impressas em cores, sob demanda e integradas ao sistema hospitalar.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {solutions.map((s, i) => (
            <div
              key={i}
              className="rounded-[14px] border border-accent/[0.08] p-7 space-y-3 transition-all duration-300 hover:border-secondary hover:shadow-[0_8px_32px_rgba(0,49,142,0.08)] hover:-translate-y-0.5 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[22px]">
                {s.icon}
              </div>
              <h3 className="font-satoshi font-semibold text-[15px] text-accent">{s.title}</h3>
              <p className="font-satoshi text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
