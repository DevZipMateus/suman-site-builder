import { Button } from "@/components/ui/button";
import { Zap, Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(200 85% 35%) 0%, hsl(200 85% 45%) 50%, hsl(45 90% 55%) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-pulse-glow">
            <Zap className="w-10 h-10 text-white" />
          </div>

          {/* Main heading - H1 with company name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            SUMAN ELÉTRICA
          </h1>

          {/* Subtitle - H2 with description */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 animate-fade-in-up font-light">
            Soluções elétricas que fazem diferença
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Produtos e serviços elétricos de alta qualidade para residências, comércio e indústria. 
            Mais de anos de experiência em Bauru e região.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Solicite um orçamento
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-sm shadow-lg text-lg px-8 py-6"
            >
              Fale conosco
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Clientes atendidos</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Projetos realizados</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-white/80">Atendimento rápido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
