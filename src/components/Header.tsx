import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">O</span>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-foreground">Opção</h1>
              <p className="text-xs text-muted-foreground -mt-1">Vidraçaria</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollToSection("contato")}
            >
              <Phone className="w-4 h-4" />
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-up">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
            >
              Contato
            </button>
            <Button
              variant="default"
              onClick={() => scrollToSection("contato")}
              className="mt-2"
            >
              <Phone className="w-4 h-4" />
              Solicitar Orçamento
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
