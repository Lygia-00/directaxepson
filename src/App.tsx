import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const FontDebug = () => {
  const [fonts, setFonts] = useState<Record<string, string>>({});
  useEffect(() => {
    setTimeout(() => {
      const body = getComputedStyle(document.body).fontFamily;
      const h1El = document.querySelector('h1');
      const h2El = document.querySelector('h2');
      const h1 = h1El ? getComputedStyle(h1El).fontFamily : 'N/A';
      const h2 = h2El ? getComputedStyle(h2El).fontFamily : 'N/A';
      setFonts({ body, h1, h2 });
    }, 1000);
  }, []);
  return (
    <div style={{ background: '#FEF08A', color: '#1a1a1a', padding: '12px 20px', fontFamily: 'monospace', fontSize: '13px', position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 101 }}>
      FONT DEBUG | body: {fonts.body} | h1: {fonts.h1} | h2: {fonts.h2}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FontDebug />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
