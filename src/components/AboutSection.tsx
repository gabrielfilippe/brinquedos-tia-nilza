import { Shield, Sparkles, Clock, Heart, Users } from "lucide-react";
import { getYearsSinceStart } from "@/lib/utils";

const AboutSection = () => {
  const yearsSinceStart = getYearsSinceStart();
  
  const features = [
    {
      icon: Clock,
      text: `${yearsSinceStart} anos de experiência`,
      color: "bg-primary/10 text-primary",
    },
  {
    icon: Sparkles,
    text: "Brinquedos higienizados",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Shield,
    text: "Montagem e desmontagem inclusa",
    color: "bg-green/10 text-green",
  },
  {
    icon: Heart,
    text: "Segurança e qualidade",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    text: "Atendimento familiar e atencioso",
    color: "bg-accent/20 text-accent-foreground",
  },
];

  return (
    <section id="sobre" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Sobre a empresa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tradição em{" "}
              <span className="text-green">diversão</span> e{" "}
              <span className="text-secondary">segurança</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A <strong className="text-foreground">Brinquedos da Tia Nilza</strong> atua há {yearsSinceStart} anos 
              no mercado, levando diversão, segurança e tranquilidade para pais e responsáveis. 
              Nosso compromisso é garantir momentos inesquecíveis para as crianças, com brinquedos 
              seguros, higienizados e montagem profissional.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-2 rounded-lg ${feature.color}`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
            <div className="bg-primary rounded-3xl p-6 text-primary-foreground shadow-lg">
              <span className="text-5xl font-bold">{yearsSinceStart}</span>
              <p className="text-primary-foreground/80 mt-2">Anos de experiência</p>
            </div>
            <div className="bg-secondary rounded-3xl p-6 text-secondary-foreground shadow-lg">
              <span className="text-5xl font-bold">6</span>
              <p className="text-secondary-foreground/80 mt-2">Brinquedos disponíveis</p>
            </div>
            {/* <div className="bg-accent rounded-3xl p-6 text-accent-foreground shadow-lg">
              <span className="text-5xl font-bold">Toda</span>
              <p className="text-accent-foreground/80 mt-2">Região atendida</p>
            </div>
            <div className="bg-green rounded-3xl p-6 text-primary-foreground shadow-lg">
              <span className="text-5xl font-bold">100%</span>
              <p className="text-primary-foreground/80 mt-2">Clientes satisfeitos</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
