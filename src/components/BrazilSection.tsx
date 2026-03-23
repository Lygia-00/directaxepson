import { useScrollReveal } from "@/hooks/useScrollReveal";

const BrazilSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const cards = [
  { number: "55 mil", title: "mortes por ano", desc: "Brasileiros que morrem anualmente por erros médicos evitáveis — equivalente a 6 mortes por hora. UFMG / IESS, 2018.", featured: true },
  { number: "1,3M", title: "pacientes com efeitos adversos", desc: "Estimativa anual de pacientes que sofrem algum dano durante internação hospitalar no Brasil. UFMG, 2018." },
  { number: "75%", title: "dos hospitais sem padrão", desc: "Pesquisa brasileira revelou que 75% dos hospitais não padronizam o uso de pulseiras — e 33% colocam múltiplas pulseiras no mesmo paciente. BJHR, 2021." },
  { number: "+130%", title: "crescimento em ações judiciais", desc: "Aumento de ações judiciais na saúde entre 2008 e 2017. A tendência de judicialização está acelerando. CNJ, 2017." },
  { number: "2%", title: "chegam a processar", desc: "Estima-se que apenas 2% das vítimas de erros médicos abrem processos no Brasil — o que sugere que o problema real é muito maior. JAMA, 2020." },
  { number: "1  em  10", title: "pacientes sofrem dano", desc: "Em países de alta renda, 1 em cada 10 hospitalizados sofre algum dano durante o cuidado — metade evitável. OMS, 2019." }];


  return (
    <section className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#08123a" }}>
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">Cenário brasileiro</span>
          <h2 className="font-clash font-bold text-white text-3xl lg:text-2xl">
            O problema mora aqui também — e está subestimado

          </h2>
          <p className="font-satoshi text-white/60 leading-relaxed">
            Os dados brasileiros sobre erros de identificação são escassos justamente porque, culturalmente, ainda se tende a esconder o erro ao invés de medi-lo. Mas o que existe é contundente.
          </p>
        </div>

        <div ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
        }>
          
          {cards.map((c, i) =>
          <div
            key={i}
            className={`rounded-[14px] py-7 px-6 border transition-all duration-500 ${
            c.featured ?
            "bg-primary/[0.12] border-primary/30" :
            "bg-white/[0.05] border-white/10"}`
            }
            style={{ transitionDelay: `${i * 80}ms` }}>
            
              <div className="font-clash font-black text-primary text-[2.4rem] leading-none mb-1.5 tracking-[-0.04em]">{c.number}</div>
              <h3 className="font-satoshi font-semibold text-[15px] text-white mb-2">{c.title}</h3>
              <p className="font-satoshi text-[13px] text-white/55 leading-[1.65]">{c.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default BrazilSection;