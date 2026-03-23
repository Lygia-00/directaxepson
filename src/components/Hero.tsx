const Hero = () => {
  const stats = [
    { number: "2,6M", label: "mortes evitáveis por ano — OMS" },
    { number: "US$40Bi", label: "custo de erros de medicação por ano" },
    { number: "55mil", label: "brasileiros morrem/ano por erros médicos" },
  ];

  const cards = [
    { icon: "🩸", number: "1  em  1.500", label: "pacientes recebem transfusão errada", highlight: true, source: "OMS, 2023" },
    { icon: "⚖️", number: "US$34Bi+", label: "pagos em indenizações por erros médicos entre 2013–2023 (EUA). Média por caso: US$348 mil", source: "Fonte: National Practitioner Data Bank, 2023" },
    { icon: "🏥", number: "13%  a  67%", label: "dos erros cirúrgicos e de transfusão são ligados a falhas de identificação de pacientes", source: "Fonte: Ministério da Saúde da Espanha, 2016 / WHO" },
    { icon: "📊", number: "57,5%", label: "de redução nos erros médicos com uso de pulseiras com código de barras e foto", source: "Fonte: Meta-análise — Applied Clinical Informatics, 2015" },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pb-20 lg:pt-32 lg:pb-28 overflow-hidden" style={{ backgroundColor: "#08123a" }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(0,49,142,0.35) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-[5%] sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span
              className="inline-flex items-center gap-2 font-satoshi text-sm px-4 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(231,0,54,0.15)",
                border: "1px solid rgba(231,0,54,0.35)",
                color: "#e70036",
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ backgroundColor: "#e70036" }} />
              Segurança do Paciente · Inovação Hospitalar
            </span>
          </div>

          {/* H1 */}
          <h1
            className="opacity-0 animate-fade-up font-clash font-bold text-white mb-0"
            style={{ animationDelay: "0.25s", fontSize: "clamp(2rem, 4.5vw, 3.8rem)", lineHeight: 1.08 }}
          >
            Seu hospital tem um{" "}
            <span className="text-primary">custo invisível</span>
            <br />— e ele está na pulseira do paciente
          </h1>

          {/* Lead */}
          <p className="opacity-0 animate-fade-up font-satoshi font-light text-white/70 text-lg max-w-xl !mb-0" style={{ animationDelay: "0.4s" }}>
            Enquanto você lê isso, erros de identificação estão gerando vítimas, processos judiciais e prejuízos que nenhum gestor de saúde coloca na planilha. Existe uma solução. E ela é mais simples do que você imagina.
          </p>

          {/* Stats row */}
          <div className="opacity-0 animate-fade-up border-t border-b border-white/[0.08] py-5 flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4" style={{ animationDelay: "0.55s" }}>
            {stats.map((s) => (
              <div key={s.number}>
                <div className="font-clash font-black text-primary text-2xl">{s.number}</div>
                <div className="font-satoshi font-normal text-white/50 text-[11px] uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up flex flex-col sm:flex-row gap-3" style={{ animationDelay: "0.7s" }}>
            <a href="#solucao" className="bg-primary text-primary-foreground font-satoshi font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 active:scale-[0.97] transition-all text-center w-full sm:w-auto">
              Ver a solução →
            </a>
            <a href="#dados" className="border border-white/20 text-white font-satoshi font-medium text-sm px-6 py-3 rounded-lg hover:bg-white/5 active:scale-[0.97] transition-all text-center w-full sm:w-auto">
              Ver os dados completos
            </a>
          </div>
        </div>

        {/* Right Column — stat cards */}
        <div className="space-y-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`opacity-0 animate-fade-up rounded-[14px] flex items-start gap-4 border w-full ${
                card.highlight
                  ? "bg-primary/10 border-primary/25"
                  : "bg-white/[0.05] border-white/10"
              }`}
              style={{ animationDelay: `${0.3 + i * 0.15}s`, padding: "20px 22px" }}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                  card.highlight ? "bg-primary/20" : "bg-secondary/30"
                }`}
              >
                {card.icon}
              </div>
              <div>
                <div className="font-clash font-black text-white text-[1.6rem] leading-none mb-1.5 tracking-[-0.04em]">{card.number}</div>
                <div className="font-satoshi font-normal text-white/55 text-xs leading-[1.55] mb-1">{card.label}</div>
                <div className="font-satoshi font-normal text-white/30 text-[10px] mt-1">{card.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
