import { useScrollReveal } from "@/hooks/useScrollReveal";

const CompareSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const rows = [
  ["Identificação visual", "Texto preto e branco, sem foto", "Foto colorida do paciente"],
  ["Cores de risco", "Adesivos manuais, sujeitos a erro", "Impressão automática por protocolo"],
  ["Código de barras/QR", "Sem padronização, erros de leitura", "QR Code integrado ao PEP"],
  ["Impressão", "Centralizada, lenta, com estoque", "Sob demanda, no ponto de atendimento"],
  ["Integração", "Limitada ou inexistente", "API aberta, compatível com HIS"],
  ["Custo por erro", "Alto: processos, reinternações", "Redução de até 57% nos erros"],
  ["Personalização", "Pulseira genérica", "Dados completos + alergias + foto"]];


  return (
    <section className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">Antes × Depois
</span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl">Antes e depois da ColorWorks</h2>
        </div>

        <div ref={ref}
        className={`max-w-[800px] mx-auto overflow-x-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`
        }>
          
          <table className="w-full border-separate min-w-[600px]" style={{ borderSpacing: "0 4px" }}>
            <thead>
              <tr>
                <th className="text-left font-satoshi font-semibold text-sm text-accent p-4 bg-white rounded-tl-xl rounded-bl-xl">Feature</th>
                <th className="font-satoshi font-semibold text-sm p-4 rounded-t-[10px]" style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}>Método Tradicional</th>
                <th className="font-satoshi font-semibold text-sm text-white p-4 rounded-t-[10px]" style={{ backgroundColor: "#08123a" }}>Com ColorWorks</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) =>
              <tr key={i}>
                  <td className="font-satoshi font-semibold text-sm text-accent p-4 bg-white">{row[0]}</td>
                  <td className="font-satoshi text-sm p-4" style={{ backgroundColor: "#fff5f5", color: "#b91c1c" }}>
                    <span className="mr-1">✗</span> {row[1]}
                  </td>
                  <td className="font-satoshi font-medium text-sm p-4" style={{ backgroundColor: "#f0fdf4", color: "#15803d" }}>
                    <span className="mr-1">✓</span> {row[2]}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>);

};

export default CompareSection;