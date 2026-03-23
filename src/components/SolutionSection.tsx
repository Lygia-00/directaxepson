import { useScrollReveal } from "@/hooks/useScrollReveal";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const solutions = [
  { icon: "🖼️", title: "Foto real do paciente", desc: "A identidade visual elimina a margem de erro que o nome escrito jamais consegue garantir. Inédito no mercado mundial de saúde." },
  { icon: "🎨", title: "Cores de risco e Protocolo Manchester", desc: "Alergias, risco de queda, tipo sanguíneo e prioridade de atendimento visíveis à distância — configuráveis por setor." },
  { icon: "📱", title: "QR Code + integração total", desc: "Integrado nativamente com Tasy, MV e Pixeon. Um scan acessa o prontuário completo — zero digitação, zero erro humano." },
  { icon: "🔒", title: "Pulseira única por paciente", desc: "Substitui a necessidade de múltiplas pulseiras por condição. Um único item no pulso do paciente carrega todas as informações críticas." },
  { icon: "⚡", title: "Sob demanda, em segundos", desc: "Elimina estoques de pulseiras pré-coloridas, reduz desperdício e permite impressão exatamente quando o paciente chega à recepção." },
  { icon: "🌐", title: "Todas as aplicações em uma", desc: "Pulseiras, etiquetas de medicamentos, bolsas de sangue, dietas, crachás e carteiras de vacinação — um único equipamento resolve tudo." }];


  return (
    <section id="solucao" className="py-[60px] sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center max-w-[700px] mx-auto mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">A solução</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-3xl">
            Uma pulseira que vê quem o paciente é — e não deixa dúvidas

          </h2>
          <p className="font-satoshi text-muted-foreground leading-relaxed">
            A Epson ColorWorks C4000u é a primeira impressora do mundo que imprime pulseiras hospitalares coloridas, com foto do paciente, QR Code e dados clínicos — em uma única impressão, sob demanda, integrada ao seu sistema de gestão hospitalar.
          </p>
        </div>

        <div ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
        }>
          
          {solutions.map((s, i) =>
          <div
            key={i}
            className="rounded-[14px] border border-accent/[0.08] p-7 space-y-3 transition-all duration-300 hover:border-secondary hover:shadow-[0_8px_32px_rgba(0,49,142,0.08)] hover:-translate-y-0.5 group"
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[22px]">
                {s.icon}
              </div>
              <h3 className="font-satoshi font-semibold text-[15px] text-accent">{s.title}</h3>
              <p className="font-satoshi text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default SolutionSection;