import { useState } from "react";

const CTASection = () => {
  const [form, setForm] = useState({ nome: "", hospital: "", whatsapp: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Sou ${form.nome} do(a) ${form.hospital}. Gostaria de agendar uma demonstração da ColorWorks.`
    );
    window.open(`https://wa.me/5511999999999?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#08123a" }}>
      <div className="max-w-2xl mx-auto px-[5%] sm:px-6 text-center space-y-6">
        <h2 className="font-clash font-bold text-white text-3xl lg:text-4xl">
          Pronto para eliminar o custo invisível do seu hospital?

        </h2>
        <p className="font-satoshi text-white/60 leading-relaxed">
          Preencha o formulário e nossa equipe entrará em contato em até 2 horas úteis.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-8">
          {[{ key: "nome", placeholder: "Seu nome completo" },
          { key: "hospital", placeholder: "Hospital ou clínica" },
          { key: "whatsapp", placeholder: "WhatsApp" }].
          map((field) =>
          <input
            key={field.key}
            type="text"
            placeholder={field.placeholder}
            required
            value={form[field.key as keyof typeof form]}
            onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
            className="bg-white/[0.07] border border-white/[0.15] text-white font-satoshi text-sm px-4 py-3 rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:flex-1 sm:min-w-[200px]" />

          )}
          <button
            type="submit"
            className="bg-primary text-primary-foreground font-satoshi font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 active:scale-[0.97] transition-all w-full sm:w-auto">
            
            Quero a demonstração →
          </button>
        </form>

        <p className="font-satoshi text-xs text-white/35 mt-4">
          ✓ Agende uma demonstração e receba uma visita de nossas consultoras
        </p>
      </div>
    </section>);

};

export default CTASection;