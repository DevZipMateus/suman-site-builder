import { Button } from "@/components/ui/button";
import { Zap, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-20 pb-12 sm:pb-16 px-4 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsla(200, 85%, 35%, 0.70) 0%, hsla(200, 85%, 45%, 0.65) 50%, hsla(45, 90%, 55%, 0.60) 100%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8 animate-pulse-glow">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Main heading - H1 with company name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in px-2">
            SUMAN ELÉTRICA
          </h1>

          {/* Subtitle - H2 with description */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-6 sm:mb-8 animate-fade-in-up font-light px-2">
            Soluções elétricas que fazem diferença
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
            Produtos e serviços elétricos de alta qualidade para residências, comércio e indústria. 
            Mais de anos de experiência em Bauru e região.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="mr-2 h-5 w-5" />
              Solicite um orçamento
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-white/10 text-white border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-sm shadow-lg text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            >
              Fale conosco
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="text-center animate-fade-in-up py-4 sm:py-0" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">500+</div>
              <div className="text-sm sm:text-base text-white/80">Clientes atendidos</div>
            </div>
            <div className="text-center animate-fade-in-up py-4 sm:py-0" style={{ animationDelay: "0.7s" }}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">1000+</div>
              <div className="text-sm sm:text-base text-white/80">Projetos realizados</div>
            </div>
            <div className="text-center animate-fade-in-up py-4 sm:py-0" style={{ animationDelay: "0.8s" }}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">24h</div>
              <div className="text-sm sm:text-base text-white/80">Atendimento rápido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
