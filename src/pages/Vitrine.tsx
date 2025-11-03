import { useEffect, useState } from 'react';
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 143px)');

  useEffect(() => {
    const calculateHeight = () => {
      const headerHeight = 80; // 80px
      const badgeHeight = 63; // 63px
      const calculatedHeight = window.innerHeight - headerHeight - badgeHeight;
      setIframeHeight(`${calculatedHeight}px`);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    
    // Oculta o badge global do index.html nesta página
    const globalBadge = document.getElementById('montesite-footer-badge');
    if (globalBadge && globalBadge.parentElement?.id !== 'vitrine-badge-container') {
      globalBadge.style.display = 'none';
    }
    
    // Carrega o script do badge Montesite
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      window.removeEventListener('resize', calculateHeight);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Restaura o badge global quando sair da página
      if (globalBadge) {
        globalBadge.style.display = '';
      }
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
      
      {/* Badge inferior - 63px */}
      <div id="vitrine-badge-container" className="h-[63px] w-full">
        <div id="montesite-footer-badge"></div>
      </div>
    </div>
  );
};

export default Vitrine;
