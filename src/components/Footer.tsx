import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Opção</h3>
                <p className="text-xs text-card/60 -mt-1">Vidraçaria</p>
              </div>
            </div>
            <p className="text-card/70 leading-relaxed">
              Soluções completas em vidraçaria para residências e empresas. 
              Qualidade, transparência e compromisso com o cliente.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-card/70">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Maria da Fé - MG</span>
              </div>
              <div className="flex items-center gap-3 text-card/70">
                <Phone className="w-5 h-5 text-accent" />
                <span>(35) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-card/70">
                <Mail className="w-5 h-5 text-accent" />
                <span>contato@opcaovidracaria.com.br</span>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-card/70 mb-6">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
            <h4 className="font-serif text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 pt-8 text-center">
          <p className="text-card/50 text-sm">
            © {currentYear} Opção Vidraçaria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
