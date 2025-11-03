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
    
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
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
      <div className="h-[63px] w-full bg-muted/30 border-t border-border flex items-center justify-center">
        <a 
          href="https://montesite.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <span>Desenvolvido por</span>
          <span className="font-semibold">Montesite</span>
        </a>
      </div>
    </div>
  );
};

export default Vitrine;
