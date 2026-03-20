import { useScrollReveal } from "@/hooks/useScrollReveal";

const CostSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const costs = [
    { emoji: "💸", title: "Indenizações e processos judiciais", desc: "Processos por erro médico podem ultrapassar milhões em indenizações, além de custos judiciais prolongados." },
    { emoji: "📉", title: "Perda de acreditação e reputação", desc: "Falhas de identificação comprometem selos de qualidade e a confiança da comunidade médica." },
    { emoji: "🔁", title: "Reinternações e retrabalho", desc: "Erros geram tratamentos desnecessários, prolongam internações e sobrecarregam equipes." },
    { emoji: "👥", title: "Turnover e clima organizacional", desc: "Profissionais expostos a erros recorrentes sofrem burnout e pedem demissão." },
  ];

  return (
    <section id="dados" className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#d2d2d2" }}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-[5%] sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Left */}
        <div className="space-y-6">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">O problema</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl leading-tight">
            O custo que ninguém contabiliza
          </h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
          <p className="font-satoshi text-gray-600 leading-relaxed">
            A cada ano, milhões de pacientes são vítimas de erros evitáveis ligados à identificação incorreta. Esses erros custam vidas, dinheiro e reputação — e a maioria dos hospitais nem sabe que está pagando por eles.
          </p>
          <blockquote className="border-l-4 border-primary bg-white rounded-r-lg p-5 font-satoshi italic text-accent text-sm leading-relaxed">
            "A identificação incorreta do paciente é a causa-raiz da maioria dos eventos adversos evitáveis no ambiente hospitalar."
            <span className="block mt-2 not-italic text-xs text-muted-foreground">— Organização Mundial da Saúde (OMS)</span>
          </blockquote>
        </div>

        {/* Right — cost cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {costs.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-accent/10 p-5 space-y-2 transition-all duration-300 hover:shadow-md"
            >
              <span className="text-2xl">{c.emoji}</span>
              <h3 className="font-satoshi font-semibold text-sm text-accent">{c.title}</h3>
              <p className="font-satoshi text-[13px] text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostSection;
