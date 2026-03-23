import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Link2, Settings } from "lucide-react";

const TrustSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const items = [
    { Icon: Award, title: "Parceiro oficial Epson", desc: "A Directa é distribuidora autorizada Epson para soluções de impressão na saúde — suporte técnico, treinamento e garantia direta." },
    { Icon: Link2, title: "Integração com seus sistemas", desc: "Tasy, MV, Pixeon e outros ERPs hospitalares. A implementação não exige mudança de sistema — funciona com o que você já usa." },
    { Icon: Settings, title: "Implementação guiada", desc: "Da instalação ao treinamento da equipe. Acompanhamos cada etapa para que o ganho de segurança seja imediato e consistente." },
  ];

  return (
    <section className="py-[60px] lg:py-[100px]" style={{ backgroundColor: "#d2d2d2" }}>
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary block mb-4">Por que a Directa</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl">Tecnologia Epson. Parceria que conhece o mercado de saúde.</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto lg:max-w-none transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] text-center space-y-2.5 transition-all duration-300 hover:shadow-md"
              style={{ padding: "28px 24px", transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: "#EEF2FF" }}>
                <item.Icon size={24} color="#00318e" strokeWidth={2} />
              </div>
              <h3 className="font-satoshi font-semibold text-[15px] text-accent !mb-2.5">{item.title}</h3>
              <p className="font-satoshi text-[13px] text-muted-foreground leading-[1.65] !mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
