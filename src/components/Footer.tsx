import logo from "@/assets/Logo-Epson-e-Directa.png";

const Footer = () => (
  <footer className="py-6 border-t border-white/[0.07]" style={{ backgroundColor: "#1d1d1b" }}>
    <div className="max-w-7xl mx-auto px-[5%] sm:px-6 flex flex-wrap items-center justify-between gap-4">
      <span className="font-satoshi text-xs text-white/30">
        © {new Date().getFullYear()} Directa. Todos os direitos reservados.
      </span>
      <img src={logo} alt="Directa × Epson" className="h-5 w-auto opacity-50" />
    </div>
  </footer>
);

export default Footer;
