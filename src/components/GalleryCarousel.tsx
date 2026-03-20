import { useState, useEffect, useCallback, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const slides = [
  { src: "/images/familia-produtos.jpg", caption: "Família ColorWorks — C4000u, C6000, C6500 e C7500" },
  { src: "/images/c4000-angulo.jpg", caption: "Epson ColorWorks C4000u — impressão de etiquetas coloridas sob demanda" },
  { src: "/images/c4000-frontal.jpg", caption: "Painel de controle touchscreen com interface intuitiva" },
  { src: "/images/c4000-etiqueta.jpg", caption: "Impressão de etiqueta com alta resolução de cor em segundos" },
  { src: "/images/c4000-aberto.jpg", caption: "Acesso fácil ao mecanismo de impressão para manutenção rápida" },
  { src: "/images/c4000-tinta.jpg", caption: "Cartucho de tinta matte black — longa duração e qualidade consistente" },
];

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isPaused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
  };

  return (
    <section className="py-[60px] sm:py-20 lg:py-28" style={{ backgroundColor: "#08123a" }}>
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-12 space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="font-satoshi font-semibold text-[11px] uppercase tracking-[2px] text-primary">Na prática</span>
          <h2 className="font-clash font-bold text-white text-3xl lg:text-4xl">Veja a solução funcionando</h2>
          <p className="font-satoshi text-white/60 leading-relaxed">
            Impressoras Epson ColorWorks — tecnologia de impressão colorida sob demanda para identificação hospitalar com precisão e velocidade.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-[900px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl">
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={slide.caption}
                className="w-full h-[240px] sm:h-[480px] object-cover rounded-xl absolute inset-0 transition-opacity duration-[400ms] ease-in-out"
                style={{ opacity: i === current ? 1 : 0, position: i === current ? "relative" : "absolute" }}
              />
            ))}

            {/* Counter badge */}
            <div className="absolute top-4 right-4 font-satoshi text-xs text-white/50 bg-black/40 px-2.5 py-1 rounded-[20px]">
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* Caption */}
          <p className="font-satoshi font-medium text-sm text-white text-center mt-4 min-h-[24px]">
            {slides[current].caption}
          </p>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 sm:-left-5 top-[120px] sm:top-[240px] -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center bg-black/50 sm:bg-white/[0.08] hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
            aria-label="Slide anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:-right-5 top-[120px] sm:top-[240px] -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center bg-black/50 sm:bg-white/[0.08] hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
            aria-label="Próximo slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
                  i === current ? "bg-primary" : "bg-white/25"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
