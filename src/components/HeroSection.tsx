import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-opcao.png";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const phone = "5535997468894";
    const message = encodeURIComponent(
      "Olá! Gostaria de solicitar um orçamento para serviços de vidraçaria."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const scrollToServices = () => {
    const element = document.getElementById("servicos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-dark to-foreground"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(130, 60%, 55%) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <img 
              src={logo} 
              alt="Opção Vidraçaria" 
              className="h-40 md:h-56 w-auto drop-shadow-2xl"
            />
          </div>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 italic animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Sua melhor escolha!
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transformando espaços com qualidade, transparência e elegância. 
            Soluções em vidros sob medida para sua casa ou empresa em Maria da Fé e região.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              Fale Conosco pelo WhatsApp
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToServices}>
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-primary-foreground/60 text-sm">
              <span className="font-semibold text-primary">Reginaldo Vidraceiro</span>
              <span className="mx-2">•</span>
              (35) 9.9746-8894
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center text-primary-foreground/60 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Saiba mais</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
