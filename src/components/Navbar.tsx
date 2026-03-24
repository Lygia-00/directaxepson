import { useEffect, useState } from "react";
import logo from "@/assets/Logo-Epson-e-Directa.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-shadow duration-300 border-b border-white/[0.07] backdrop-blur-md ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
      style={{ backgroundColor: "rgba(8,18,58,0.97)" }}
    >
      <div className="max-w-7xl mx-auto px-[5%] sm:px-6 h-16 flex items-center justify-between">
        {/* Logo — DIRECTA × EPSON */}
        <div className="flex items-center gap-2.5">
          <span className="font-satoshi font-[800] text-white text-lg tracking-[0.5px] uppercase">
            DIRECTA<span className="text-primary">.</span>
          </span>
          <span className="text-white/25 text-base font-light">×</span>
          <span className="font-satoshi font-semibold text-[15px] text-white/75 tracking-[1px] uppercase">
            EPSON
          </span>
        </div>

        {/* Badge — hidden on mobile */}
        <span className="hidden sm:inline-flex bg-primary text-primary-foreground font-satoshi font-bold text-[11px] uppercase tracking-[0.12em] px-4 py-1.5 rounded-[20px]">
          HOSPEX 2026
        </span>

        {/* CTA */}
        <a
          href="#contato"
          className="bg-primary text-primary-foreground font-satoshi font-semibold text-xs sm:text-sm px-3.5 py-2 sm:px-5 sm:py-2 rounded-lg hover:brightness-110 active:scale-[0.97] transition-all duration-200"
        >
          Quero uma demonstração →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
