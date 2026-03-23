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
    <section className="py-[60px] sm:py-16 lg:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="space-y-4">
          <h2 className="font-clash font-bold text-white leading-tight text-[clamp(1.6rem,3vw,2.4rem)]">
            Os hospitais que lideram a acreditação já estão adotando. Os que esperam, pagam o preço depois.

          </h2>
          <p className="font-satoshi text-white/80 leading-relaxed">
            A identificação colorida com foto do paciente não é mais um diferencial de futuro — é um padrão de qualidade assistencial que separa os hospitais que se preparam dos que reagem a crises.
          </p>
          <a href="#contato"
          className="inline-flex w-full sm:w-auto justify-center bg-white text-primary font-satoshi font-bold text-sm px-6 py-3 rounded-lg hover:bg-white/90 active:scale-[0.97] transition-all">
            
            Agendar demonstração gratuíta →
          </a>
        </div>

        {/* Right — counter */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center shrink-0 min-w-[120px]">
            <div className="font-clash font-black text-white text-[3rem] leading-none tabular-nums">{count}</div>
            <span className="font-satoshi text-white/70 text-xs mt-1.5 block">brasileiros morrem por hora</span>
            <span className="font-satoshi text-white/70 text-xs block">por erros médicos evitáveis</span>
          </div>
        </div>
      </div>
    </section>);
};

export default FomoBanner;