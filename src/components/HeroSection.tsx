import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-glass.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const phone = "5535999999999"; // Substituir pelo número real
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-card/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-card/90 text-sm font-medium">
              Maria da Fé - MG
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-card mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Opção{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-accent">
              Vidraçaria
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-card/80 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transformando espaços com qualidade, transparência e elegância. 
            Soluções em vidros sob medida para sua casa ou empresa.
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center text-card/60 hover:text-card transition-colors"
        >
          <span className="text-sm mb-2">Saiba mais</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
