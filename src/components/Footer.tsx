const Footer = () => (
  <footer className="py-6 border-t border-white/[0.07]" style={{ backgroundColor: "#1d1d1b" }}>
    <div className="max-w-7xl mx-auto px-[5%] sm:px-6 flex flex-wrap items-center justify-between gap-4">
      <span className="font-satoshi text-xs text-white/30">
        © {new Date().getFullYear()} Directa. Todos os direitos reservados.
      </span>
      <span className="flex items-center gap-1.5">
        <span className="font-satoshi font-[800] text-[13px] text-white/50 tracking-[0.5px] uppercase">
          DIRECTA<span className="text-primary">.</span>
        </span>
        <span className="text-white/20 text-sm font-light">×</span>
        <span className="font-satoshi font-semibold text-[12px] text-white/50 tracking-[1px] uppercase">
          EPSON
        </span>
      </span>
    </div>
  </footer>
);

export default Footer;
