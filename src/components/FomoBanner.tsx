import { useEffect, useState } from "react";

const FomoBanner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 6) return;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 6) {
          clearInterval(timer);
          return 6;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="space-y-4">
          <h2 className="font-clash font-bold text-white leading-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Vagas para demonstração ao vivo na HOSPEX estão acabando
          </h2>
          <p className="font-satoshi text-white/80 leading-relaxed">
            Garanta agora a demonstração presencial com a equipe Directa. Agenda limitada — apenas para gestores e diretores hospitalares.
          </p>
          <a
            href="#contato"
            className="inline-flex bg-white text-primary font-satoshi font-bold text-sm px-6 py-3 rounded-lg hover:bg-white/90 active:scale-[0.97] transition-all"
          >
            Garantir minha vaga →
          </a>
        </div>

        {/* Right — counter */}
        <div className="flex justify-center lg:justify-end">
          <div className="text-center">
            <div className="font-clash font-black text-white text-6xl tabular-nums">{count}</div>
            <div className="font-satoshi text-white/70 text-xs uppercase tracking-wide mt-2">vagas restantes<br />para demonstração</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FomoBanner;
