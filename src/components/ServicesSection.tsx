import { Layers, Frame, DoorOpen, Square, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Box para Banheiro",
    description:
      "Box de vidro temperado sob medida, com acabamento premium e segurança garantida.",
  },
  {
    icon: Frame,
    title: "Espelhos Decorativos",
    description:
      "Espelhos personalizados para ambientes residenciais e comerciais com design exclusivo.",
  },
  {
    icon: DoorOpen,
    title: "Portas de Vidro",
    description:
      "Portas de correr, pivotantes e de abrir em vidro temperado ou laminado.",
  },
  {
    icon: Square,
    title: "Janelas e Esquadrias",
    description:
      "Janelas em vidro temperado e alumínio, com isolamento térmico e acústico.",
  },
  {
    icon: Sparkles,
    title: "Tampos de Vidro",
    description:
      "Tampos para mesas, balcões e móveis com acabamento impecável e sob medida.",
  },
  {
    icon: Shield,
    title: "Vidros Temperados",
    description:
      "Vidros temperados de alta resistência para máxima segurança e durabilidade.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluções Completas em{" "}
            <span className="text-primary">Vidraçaria</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla variedade de serviços para atender todas as suas 
            necessidades em vidros e espelhos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
