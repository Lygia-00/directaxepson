import { useScrollReveal } from "@/hooks/useScrollReveal";

const AppsSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const apps = [
    { title: "Pulseiras de identificação", desc: "Com foto, cores de risco, QR Code e dados completos do paciente." },
    { title: "Etiquetas de medicamento", desc: "Identificação segura de frascos, seringas e soluções com código de barras." },
    { title: "Etiquetas de hemoterapia", desc: "Rastreabilidade total de bolsas de sangue e hemoderivados." },
    { title: "Etiquetas laboratoriais", desc: "Tubos de ensaio e amostras com identificação resistente a álcool e água." },
    { title: "Etiquetas de dieta", desc: "Identificação de bandejas com dados nutricionais e restrições alimentares." },
    { title: "Etiquetas de patrimônio", desc: "Controle de equipamentos hospitalares com código de barras durável." },
    { title: "Sinalização de leito", desc: "Placas coloridas com dados do paciente para cabeceira de leito." },
    { title: "Identificação de recém-nascidos", desc: "Pulseiras mãe-bebê com foto e dados de vínculo seguro." },
    { title: "Etiquetas de esterilização", desc: "Rastreabilidade de instrumentos e kits cirúrgicos." },
    { title: "Crachás e identificação funcional", desc: "Impressão sob demanda para visitantes, acompanhantes e equipe." },
  ];

  return (
    <section className="py-[60px] sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">Aplicações</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl">10 aplicações em uma única impressora</h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {apps.map((app, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-accent/[0.08] p-5 transition-all duration-300 hover:border-secondary"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-accent text-white font-satoshi font-bold text-xs flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="font-satoshi font-semibold text-sm text-accent">{app.title}</h3>
                <p className="font-satoshi text-[12.5px] text-muted-foreground mt-1">{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;
