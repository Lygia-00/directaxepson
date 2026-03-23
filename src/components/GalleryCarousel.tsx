import { useState, useEffect, useCallback, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { supabase } from "@/integrations/supabase/client";

const slides = [
  { file: "familia_produtos.png", type: "image" as const },
  { file: "Impressora de Etiquetas ColorWorks C4000.png", type: "image" as const },
  { file: "Directa_Epson.MOV", type: "video" as const },
].map((s) => ({
  ...s,
  url: supabase.storage.from("images").getPublicUrl(s.file).data.publicUrl,
}));

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  // Pause auto-play on video slide
  useEffect(() => {
    if (slides[current].type === "video") {
      setIsPaused(true);
    }
  }, [current]);

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

        <div
          className="relative max-w-[960px] mx-auto"
          onMouseEnter={() => { if (slides[current].type !== "video") setIsPaused(true); }}
          onMouseLeave={() => { if (slides[current].type !== "video") setIsPaused(false); }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative overflow-hidden rounded-xl">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full transition-opacity duration-[400ms] ease-in-out absolute inset-0"
                style={{ opacity: i === current ? 1 : 0, position: i === current ? "relative" : "absolute", pointerEvents: i === current ? "auto" : "none" }}
              >
                {slide.type === "video" ? (
                  <video
                    src={slide.url}
                    controls
                    muted
                    playsInline
                    className="w-full rounded-xl object-contain h-[300px] sm:h-[500px]"
                    style={{ backgroundColor: "#000000" }}
                  />
                ) : (
                  <img
                    src={slide.url}
                    alt=""
                    className="w-full h-[300px] sm:h-[500px] object-contain rounded-xl"
                    style={{ backgroundColor: "#08123a" }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1 mt-2 font-satoshi text-xs text-white/50">
            {current + 1} / {slides.length}
          </div>

          <button
            onClick={prev}
            className="absolute hidden sm:flex -left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center bg-white/[0.08] hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
            aria-label="Slide anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            onClick={next}
            className="absolute hidden sm:flex -right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full items-center justify-center bg-white/[0.08] hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
            aria-label="Próximo slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18" /></svg>
          </button>

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
