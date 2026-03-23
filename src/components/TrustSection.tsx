import { useScrollReveal } from "@/hooks/useScrollReveal";

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const items = [
  { icon: "🏆", title: "Parceiro oficial Epson", desc: "Distribuidor autorizado com suporte técnico especializado e garantia de fábrica." },
  { icon: "🔗", title: "Integração com seus sistemas", desc: "API aberta compatível com os principais HIS, PEP e sistemas de gestão hospitalar." },
  { icon: "⚙️", title: "Implementação guiada", desc: "Acompanhamento completo desde a instalação até o treinamento da equipe assistencial." }];


  return (
    <section className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#d2d2d2" }}>
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">Por que a Directa
</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl">Por que escolher a Directa</h2>
        </div>

        <div ref={ref}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto lg:max-w-none transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
        }>
          
          {items.map((item, i) =>
          <div
            key={i}
            className="bg-white rounded-[14px] p-7 text-center space-y-3 transition-all duration-300 hover:shadow-md"
            style={{ transitionDelay: `${i * 100}ms` }}>
            
              <span className="text-4xl block">{item.icon}</span>
              <h3 className="font-satoshi font-semibold text-[15px] text-accent">{item.title}</h3>
              <p className="font-satoshi text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TrustSection;