import { useScrollReveal } from "@/hooks/useScrollReveal";

const CompareSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const rows = [
    ["Identificação visual do paciente", "Só nome impresso, sem foto", "Foto + nome + dados em 1 pulseira"],
    ["Número de pulseiras por paciente", "Múltiplas (1 por condição)", "Uma única pulseira completa"],
    ["Processo de emissão", "Manual, múltiplas etapas", "Automatizado, uma impressão"],
    ["Estoque necessário", "Alto (várias cores pré-prontas)", "Só pulseira branca — sob demanda"],
    ["Risco de erro humano", "Alto — colagem manual, etiquetas", "Minimizado — sistema integrado"],
    ["Rastreabilidade do paciente", "Limitada — sem QR Code padrão", "Total — QR Code + prontuário"],
    ["Conforto do paciente", "Desconforto com múltiplas pulseiras", "Uma pulseira durável e confortável"],
  ];

  return (
    <section className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#f2f2f2" }}>
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div className="text-center mb-14 space-y-4">
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[0.08em] text-primary">
            Antes × Depois
          </span>
          <h2 className="font-clash font-bold text-accent text-3xl lg:text-4xl">
            O que muda no dia a dia do seu hospital
          </h2>
        </div>

        <div
          ref={ref}
          className={`max-w-[860px] mx-auto overflow-x-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <table
            className="w-full min-w-[600px] border-collapse"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(8,18,58,0.08)",
            }}
          >
            <thead>
              <tr>
                <th className="bg-white p-3.5" />
                <th
                  className="font-satoshi font-semibold text-[13px] p-3.5 text-center"
                  style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}
                >
                  Método Tradicional
                </th>
                <th
                  className="font-satoshi font-semibold text-[13px] text-white p-3.5 text-center"
                  style={{ backgroundColor: "#08123a" }}
                >
                  Com ColorWorks
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const isOdd = i % 2 === 1;
                return (
                  <tr key={i}>
                    <td
                      className="font-satoshi font-medium text-[13px] p-3.5"
                      style={{
                        backgroundColor: isOdd ? "#f9f9f9" : "#ffffff",
                        color: "#08123a",
                      }}
                    >
                      {row[0]}
                    </td>
                    <td
                      className="font-satoshi text-[13px] p-3.5"
                      style={{
                        backgroundColor: isOdd ? "#fff0f0" : "#fff5f5",
                        color: "#b91c1c",
                      }}
                    >
                      ✗ {row[1]}
                    </td>
                    <td
                      className="font-satoshi font-medium text-[13px] p-3.5"
                      style={{
                        backgroundColor: isOdd ? "#e8faf0" : "#f0fdf4",
                        color: "#15803d",
                      }}
                    >
                      ✓ {row[2]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
