import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DollarSign, TrendingDown, RotateCcw, Users } from "lucide-react";

const CostSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const costs = [
    { Icon: DollarSign, title: "Indenizações e processos judiciais", desc: "A média de indenização por caso de negligência médica nos EUA é de US$348 mil. No Brasil, o volume de ações está crescendo 130% em 10 anos (CNJ, 2017)." },
    { Icon: TrendingDown, title: "Perda de acreditação e reputação", desc: "Hospitais com erros documentados de identificação perdem pontos em processos de acreditação (JCI, ONA), afetando contratos com operadoras e planos de saúde." },
    { Icon: RotateCcw, title: "Reinternações e retrabalho", desc: "Erros de identificação geram procedimentos repetidos, exames refeitos e reinternações — todos não reembolsáveis, consumindo recursos invisíveis do hospital." },
    { Icon: Users, title: "Turnover e clima organizacional", desc: "Profissionais envolvidos em erros graves desenvolvem burnout, culpa e depressão — aumentando a rotatividade e o custo de reposição de equipe." },
  ];

  return (
    <section id="dados" className="py-[60px] lg:py-[100px] !pb-[60px] lg:!pb-[100px]" style={{ backgroundColor: "#d2d2d2" }}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-[5%] sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Left */}
        <div className="space-y-6">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary block mb-4">O custo escondido</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl leading-tight">
            Cada erro de identificação carrega um preço que não aparece no orçamento
          </h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
          <p className="font-satoshi text-gray-600 leading-relaxed !mb-0">
            Gestores hospitalares monitoram custos de insumos, energia, pessoal. Mas existe uma categoria de despesa que a maioria nunca mensura com precisão: o custo jurídico, reputacional e operacional gerado por falhas de identificação de pacientes.
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
              className="bg-white rounded-xl border border-accent/10 space-y-2.5 transition-all duration-300 hover:shadow-md"
              style={{ padding: "28px 24px" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EEF2FF" }}>
                <c.Icon size={24} color="#00318e" strokeWidth={2} />
              </div>
              <h3 className="font-satoshi font-semibold text-sm text-accent !mb-2.5">{c.title}</h3>
              <p className="font-satoshi text-[13px] text-muted-foreground leading-[1.65] !mb-0">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostSection;
