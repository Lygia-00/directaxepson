import { useEffect, useState } from "react";

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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="font-satoshi font-[800] text-white text-xl tracking-tight uppercase">
          DIRECTA<span className="text-primary">.</span>
        </span>

        {/* Badge */}
        <span className="hidden sm:inline-flex bg-primary text-primary-foreground font-satoshi font-bold text-[11px] uppercase tracking-[0.12em] px-4 py-1.5 rounded-[20px]">
          HOSPEX 2026
        </span>

        {/* CTA */}
        <a
          href="#contato"
          className="bg-primary text-primary-foreground font-satoshi font-semibold text-sm px-5 py-2 rounded-lg hover:brightness-110 active:scale-[0.97] transition-all duration-200"
        >
          Quero uma demonstração →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
