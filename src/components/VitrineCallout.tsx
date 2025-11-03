import { Button } from "@/components/ui/button";
import { Store, ShoppingCart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const VitrineCallout = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 animate-pulse-glow">
            <Store className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Conheça Nossa Vitrine Digital
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Explore nosso catálogo completo de produtos elétricos. Encontre tudo que você precisa 
            para seus projetos residenciais, comerciais e industriais em um só lugar.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all">
              <ShoppingCart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Catálogo Completo</h3>
              <p className="text-sm text-muted-foreground">Centenas de produtos disponíveis</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Atualizado Sempre</h3>
              <p className="text-sm text-muted-foreground">Novos produtos toda semana</p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/50 transition-all">
              <Store className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Fácil Navegação</h3>
              <p className="text-sm text-muted-foreground">Encontre o que precisa rapidamente</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/vitrine" className="inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-6 group"
            >
              <Store className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Acessar Vitrine Agora
            </Button>
          </Link>

          {/* Small text */}
          <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            🔒 Navegação segura e rápida
          </p>
        </div>
      </div>
    </section>
  );
};

export default VitrineCallout;
