import { useEffect, useState } from 'react';
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 80px)');

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 80; // 80px
      const calculatedHeight = window.innerHeight - headerHeight;
      setIframeHeight(`${calculatedHeight}px`);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    // Oculta todos os badges do Montesite nesta página
    const hideAllBadges = () => {
      const badges = document.querySelectorAll('#montesite-footer-badge, [id*="montesite"]');
      badges.forEach(badge => {
        if (badge instanceof HTMLElement) {
          badge.style.display = 'none';
        }
      });
    };
    
    hideAllBadges();
    // Verifica novamente após um pequeno delay para pegar badges carregados dinamicamente
    const timeout = setTimeout(hideAllBadges, 100);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
      clearTimeout(timeout);
      // Restaura os badges quando sair da página
      const badges = document.querySelectorAll('#montesite-footer-badge, [id*="montesite"]');
      badges.forEach(badge => {
        if (badge instanceof HTMLElement) {
          badge.style.display = '';
        }
      });
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col fixed inset-0">
      {/* Header fixo - 80px */}
      <div className="h-20 w-full">
        <Header />
      </div>
      
      {/* Iframe - altura dinâmica */}
      <div className="flex-1 w-full" style={{ height: iframeHeight }}>
        <iframe 
          src="https://suman.egestor.com.br/vitrine/" 
          className="w-full h-full"
          style={{ border: 'none' }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
