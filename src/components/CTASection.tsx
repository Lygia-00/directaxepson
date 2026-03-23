import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_REGEX = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

interface FormErrors {
  nome?: string;
  hospital?: string;
  whatsapp?: string;
}

const CTASection = () => {
  const [form, setForm] = useState({ nome: "", hospital: "", whatsapp: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.nome.trim() || form.nome.trim().length < 3)
      e.nome = "Nome deve ter no mínimo 3 caracteres";
    if (!form.hospital.trim() || form.hospital.trim().length < 2)
      e.hospital = "Hospital deve ter no mínimo 2 caracteres";
    if (!form.whatsapp.trim() || !WHATSAPP_REGEX.test(form.whatsapp.trim()))
      e.whatsapp = "WhatsApp inválido — use DDD + número (10 ou 11 dígitos)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    if (!validate()) return;

    setLoading(true);
    try {
      const { error: dbError } = await supabase
        .from("leads")
        .insert({ nome: form.nome.trim(), hospital: form.hospital.trim(), whatsapp: form.whatsapp.trim() });

      if (dbError) throw dbError;

      await supabase.functions.invoke("send-lead-email", {
        body: {
          nome: form.nome.trim(),
          hospital: form.hospital.trim(),
          whatsapp: form.whatsapp.trim(),
          created_at: new Date().toISOString(),
        },
      });

      setForm({ nome: "", hospital: "", whatsapp: "" });
      setErrors({});
      setStatus("success");
    } catch (err) {
      console.error("Lead submission error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const fieldStyle = (field: keyof FormErrors) =>
    `bg-white/[0.07] border ${errors[field] ? "border-[#e70036]" : "border-white/[0.15]"} text-white font-satoshi text-sm px-4 py-3 rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:flex-1 sm:min-w-[200px]`;

  return (
    <section id="contato" className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#08123a" }}>
      <div className="max-w-2xl mx-auto px-[5%] sm:px-6 text-center space-y-6">
        <h2 className="font-clash font-bold text-white text-3xl lg:text-4xl">
          Pronto para eliminar o custo invisível do seu hospital?
        </h2>
        <p className="font-satoshi text-white/60 leading-relaxed">
          Agende uma demonstração gratuita com nosso time. Em 30 minutos, você verá exatamente como a solução funciona na sua realidade.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
            {[
              { key: "nome", placeholder: "Seu nome completo" },
              { key: "hospital", placeholder: "Hospital ou clínica" },
              { key: "whatsapp", placeholder: "WhatsApp (DDD + número)" },
            ].map((field) => (
              <div key={field.key} className="w-full sm:flex-1 sm:min-w-[200px]">
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, [field.key]: e.target.value }));
                    if (errors[field.key as keyof FormErrors]) {
                      setErrors((prev) => ({ ...prev, [field.key]: undefined }));
                    }
                  }}
                  className={fieldStyle(field.key as keyof FormErrors)}
                />
                {errors[field.key as keyof FormErrors] && (
                  <p className="font-satoshi text-[12px] text-[#e70036] text-left mt-1">
                    {errors[field.key as keyof FormErrors]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground font-satoshi font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 active:scale-[0.97] transition-all w-full sm:w-auto sm:mx-auto disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Quero a demonstração →"}
          </button>
        </form>

        {status === "success" && (
          <div
            className="font-satoshi font-medium text-sm mt-4 rounded-lg"
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              padding: "14px 18px",
              color: "#15803d",
            }}
          >
            Recebemos seu contato! Nossa equipe entrará em contato em até 2h úteis.
          </div>
        )}

        {status === "error" && (
          <div
            className="font-satoshi font-medium text-sm mt-4 rounded-lg"
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              padding: "14px 18px",
              color: "#991b1b",
            }}
          >
            Erro ao enviar. Tente novamente ou chame pelo WhatsApp.
          </div>
        )}

        <p className="font-satoshi text-xs text-white/35 mt-4">
          ✓ Agende uma demonstração e receba uma visita de nossas consultoras
        </p>
      </div>
    </section>
  );
};

export default CTASection;
