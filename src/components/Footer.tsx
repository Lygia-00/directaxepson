const Footer = () => (
  <footer className="py-6 border-t border-white/[0.07]" style={{ backgroundColor: "#1d1d1b" }}>
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
      <span className="font-satoshi text-xs text-white/30">
        © {new Date().getFullYear()} Directa. Todos os direitos reservados.
      </span>
      <span className="font-satoshi text-xs text-white/40">
        DIRECTA<span className="text-primary">.</span> × EPSON
      </span>
    </div>
  </footer>
);

export default Footer;
