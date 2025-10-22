import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div className="space-y-4">
            <img src={logo} alt="Suman Elétrica" className="h-12 w-auto mb-2" />
            <p className="text-sm text-primary-foreground/80">
              Soluções elétricas que fazem diferença. Qualidade, confiança e excelência no atendimento.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Links rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#sobre" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Sobre nós
              </a>
              <a href="#servicos" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Serviços
              </a>
              <a href="#produtos" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Produtos
              </a>
              <a href="#contato" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:14998017067" 
                className="flex items-start gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors group"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>(14) 99801-7067</span>
              </a>
              <a 
                href="mailto:suman.eletrica@gmail.com" 
                className="flex items-start gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors group"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>suman.eletrica@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Octacílio Nogueira, 400</span>
              </div>
            </div>
          </div>

          {/* Horário e Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Horário</h3>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Seg a Sex: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-secondary mb-3">Redes sociais</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/suman.eletrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
                <a
                  href="https://facebook.com/suman.eletrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="text-center text-sm text-primary-foreground/70">
            <p>© {new Date().getFullYear()} Suman Elétrica. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 23.556.294/0001-38</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
