import { useScrollReveal } from "@/hooks/useScrollReveal";

const AppsSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const apps = [
  { title: "Pulseira de identificação de pacientes", desc: "Foto + QR Code + nome + tipo sanguíneo + prontuário. Um escaneio acessa tudo." },
  { title: "Identificação de alergias por cor", desc: "Cores de alerta configuráveis — equipe identifica riscos à distância, sem precisar ler." },
  { title: "Protocolo Manchester de triagem", desc: "Níveis de urgência visíveis na pulseira — vermelho, laranja, amarelo, verde, azul." },
  { title: "Etiquetas de medicamentos e soros", desc: "Nome do paciente, foto e dados na bolsa de soro ou frasco — erros de medicação reduzidos drasticamente." },
  { title: "Identificação de bolsas de sangue", desc: "Rastreabilidade total de bolsas de sangue e hemoderivados." },
  { title: "Dietas restritivas personalizadas", desc: "Embalagem da refeição com nome do paciente e restrições alimentares impressos na hora." },
  { title: "Crachás de equipe e visitantes", desc: "Foto, nome, setor e permissões em crachás impressos sob demanda com total personalização." },
  { title: "Pulseiras de acompanhantes", desc: "Acompanhantes identificados com dados do paciente que acompanham — aumenta segurança em pediatria e maternidade." },
  { title: "Etiquetas para centro cirúrgico", desc: "Confirmação de identidade antes de procedimento — reduz o risco de cirurgias em local errado." },
  { title: "Carteira de vacinação personalizada", desc: "Com foto da criança e marca do hospital — o vínculo institucional dura a vida toda do paciente." }];


  return (
    <section className="py-[60px] sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">Aplicações hospitalares
</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl">10 aplicações em uma única impressora</h2>
        </div>

        <div ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
        }>
          
          {apps.map((app, i) =>
          <div
            key={i}
            className="flex items-start gap-4 rounded-xl border border-accent/[0.08] p-5 transition-all duration-300 hover:border-secondary"
            style={{ transitionDelay: `${i * 60}ms` }}>
            
              <div className="w-8 h-8 rounded-lg bg-accent text-white font-satoshi font-bold text-xs flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="font-satoshi font-semibold text-sm text-accent">{app.title}</h3>
                <p className="font-satoshi text-[12.5px] text-muted-foreground mt-1">{app.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AppsSection;