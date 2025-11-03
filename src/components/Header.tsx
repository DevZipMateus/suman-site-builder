import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isVitrineRoute = location.pathname === '/vitrine';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Produtos", id: "products" },
    { label: "Vitrine", id: "vitrine", isRoute: true },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="SUMAN ELÉTRICA" className="h-12 w-auto" />
            <span className="text-xl font-bold text-foreground hidden sm:block">
              SUMAN ELÉTRICA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              item.isRoute ? (
                <Link key={item.id} to={`/${item.id}`}>
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Button>
              )
            ))}
            {!isVitrineRoute && (
              <Button
                onClick={() => scrollToSection("contact")}
                className="ml-4 bg-primary hover:bg-primary-light text-primary-foreground"
              >
                Entre em contato
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                item.isRoute ? (
                  <Link key={item.id} to={`/${item.id}`}>
                    <Button
                      variant="ghost"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="justify-start text-foreground hover:text-primary w-full"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className="justify-start text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Button>
                )
              ))}
              {!isVitrineRoute && (
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary-light text-primary-foreground"
                >
                  Entre em contato
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
