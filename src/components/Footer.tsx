import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 text-black border-t border-border">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sobre */}
          <div className="space-y-4">
            <img src={logo} alt="Suman Elétrica" className="h-12 w-auto mb-2" />
            <p className="text-sm text-black/80">
              Soluções elétricas que fazem diferença. Qualidade, confiança e excelência no atendimento.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Links rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#sobre" className="text-sm text-black/80 hover:text-primary transition-colors">
                Sobre nós
              </a>
              <a href="#servicos" className="text-sm text-black/80 hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#produtos" className="text-sm text-black/80 hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="#contato" className="text-sm text-black/80 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:14998017067" 
                className="flex items-start gap-2 text-sm text-black/80 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>(14) 99801-7067</span>
              </a>
              <a 
                href="mailto:suman.eletrica@gmail.com" 
                className="flex items-start gap-2 text-sm text-black/80 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>suman.eletrica@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-black/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Octacílio Nogueira, 400</span>
              </div>
            </div>
          </div>

          {/* Horário e Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Horário</h3>
            <div className="flex items-start gap-2 text-sm text-black/80">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Seg a Sex: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-black mb-3">Redes sociais</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/suman.eletrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-black group-hover:text-white" />
                </a>
                <a
                  href="https://facebook.com/suman.eletrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-black group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="text-center text-xs sm:text-sm text-black/70">
            <p>© {new Date().getFullYear()} Suman Elétrica. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 23.556.294/0001-38</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
