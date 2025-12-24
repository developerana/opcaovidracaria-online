import { CheckCircle2, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Materiais de primeira linha e acabamento impecável",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Cumprimos prazos com eficiência e pontualidade",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para atender suas necessidades",
  },
];

const highlights = [
  "Mais de 10 anos de experiência no mercado",
  "Equipe qualificada e treinada",
  "Materiais certificados e de qualidade",
  "Orçamento gratuito e sem compromisso",
  "Garantia em todos os serviços",
  "Atendimento em Maria da Fé e região",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Sua Confiança é Nossa{" "}
              <span className="text-primary">Prioridade</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A Opção Vidraçaria é referência em serviços de vidraçaria em Maria da Fé 
              e região. Com anos de experiência, oferecemos soluções personalizadas 
              que combinam qualidade, design e funcionalidade para transformar seus 
              ambientes.
            </p>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-6 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
