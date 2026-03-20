import { useScrollReveal } from "@/hooks/useScrollReveal";

const BrazilSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const cards = [
    { number: "55 mil", title: "mortes por ano", desc: "Brasileiros morrem anualmente por erros médicos evitáveis.", featured: true },
    { number: "1,3M", title: "pacientes com efeitos adversos", desc: "Hospitalizações com danos causados por falhas no cuidado." },
    { number: "75%", title: "dos hospitais sem padrão", desc: "Não possuem protocolo formal de identificação do paciente." },
    { number: "+130%", title: "crescimento em ações judiciais", desc: "Aumento de processos por erro médico na última década." },
    { number: "2%", title: "chegam a processar", desc: "A maioria das vítimas sequer entra com ação — o problema é ainda maior." },
    { number: "1 em 10", title: "pacientes sofrem dano", desc: "No ambiente hospitalar, segundo dados da OMS." },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#08123a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">Cenário brasileiro</span>
          <h2 className="font-clash font-bold text-white text-3xl lg:text-4xl">
            A realidade nos hospitais do Brasil
          </h2>
          <p className="font-satoshi text-white/60 leading-relaxed">
            Os números são alarmantes — e a solução é mais simples do que parece.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {cards.map((c, i) => (
            <div
              key={i}
              className={`rounded-[14px] p-6 border transition-all duration-500 ${
                c.featured
                  ? "bg-primary/[0.12] border-primary/30"
                  : "bg-white/[0.05] border-white/10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-clash font-black text-primary text-[2.4rem] leading-none">{c.number}</div>
              <h3 className="font-satoshi font-semibold text-[15px] text-white mt-2">{c.title}</h3>
              <p className="font-satoshi text-[13px] text-white/55 mt-2 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrazilSection;
