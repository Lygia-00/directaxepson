import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User, Palette, QrCode, Tag, Zap, LayoutGrid } from "lucide-react";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const solutions = [
    { Icon: User, title: "Foto real do paciente", desc: "A identidade visual elimina a margem de erro que o nome escrito jamais consegue garantir. Inédito no mercado mundial de saúde." },
    { Icon: Palette, title: "Cores de risco e Protocolo Manchester", desc: "Alergias, risco de queda, tipo sanguíneo e prioridade de atendimento visíveis à distância — configuráveis por setor." },
    { Icon: QrCode, title: "QR Code + integração total", desc: "Integrado nativamente com Tasy, MV e Pixeon. Um scan acessa o prontuário completo — zero digitação, zero erro humano." },
    { Icon: Tag, title: "Pulseira única por paciente", desc: "Substitui a necessidade de múltiplas pulseiras por condição. Um único item no pulso do paciente carrega todas as informações críticas." },
    { Icon: Zap, title: "Sob demanda, em segundos", desc: "Elimina estoques de pulseiras pré-coloridas, reduz desperdício e permite impressão exatamente quando o paciente chega à recepção." },
    { Icon: LayoutGrid, title: "Todas as aplicações em uma", desc: "Pulseiras, etiquetas de medicamentos, bolsas de sangue, dietas, crachás e carteiras de vacinação — um único equipamento resolve tudo." },
  ];

  return (
    <section id="solucao" className="py-[60px] lg:py-[100px] bg-background">
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center max-w-[700px] mx-auto mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary block mb-4">A solução</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-3xl !mb-5">
            Uma pulseira que vê quem o paciente é — e não deixa dúvidas
          </h2>
          <p className="font-satoshi text-muted-foreground leading-relaxed !mb-0">
            A Epson ColorWorks C4000u é a primeira impressora do mundo que imprime pulseiras hospitalares coloridas, com foto do paciente, QR Code e dados clínicos — em uma única impressão, sob demanda, integrada ao seu sistema de gestão hospitalar.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {solutions.map((s, i) => (
            <div
              key={i}
              className="rounded-[14px] border border-accent/[0.08] space-y-2.5 transition-all duration-300 hover:border-secondary hover:shadow-[0_8px_32px_rgba(0,49,142,0.08)] hover:-translate-y-0.5 group"
              style={{ padding: "28px 24px", transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EEF2FF" }}>
                <s.Icon size={24} color="#00318e" strokeWidth={2} />
              </div>
              <h3 className="font-satoshi font-semibold text-[15px] text-accent !mb-2.5">{s.title}</h3>
              <p className="font-satoshi text-[13px] text-muted-foreground leading-[1.65] !mb-0">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
