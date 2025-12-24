import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-opcao.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Opção Vidraçaria" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Soluções completas em vidraçaria para residências e empresas. 
              Qualidade, transparência e compromisso com o cliente.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Maria da Fé - MG</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>(35) 9.9746-8894</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@opcaovidracaria.com.br</span>
              </div>
            </div>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-primary-foreground/70 mb-6">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
            <h4 className="font-serif text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Opção Vidraçaria. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-sm mt-1">
            Reginaldo Vidraceiro • Maria da Fé - MG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
