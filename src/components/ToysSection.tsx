import { Star, MessageCircle } from "lucide-react";
import trampolineImg from "@/assets/trampoline.jpg";
import slideImg from "@/assets/slide.jpg";
import ballPitImg from "@/assets/ball-pit.jpg";
import bouncyCastleImg from "@/assets/bouncy-castle.jpg";

const toys = [
  {
    id: 1,
    name: "Cama Elástica",
    description: "Perfeita para pular e gastar energia! Disponível em 2 unidades para atender mais crianças.",
    image: trampolineImg,
    quantity: 2,
    popular: true,
    color: "border-primary",
    bgColor: "bg-red-light",
  },
  {
    id: 2,
    name: "Tobogã Inflável",
    description: "Muita diversão descendo e subindo! Sucesso garantido em qualquer festa.",
    image: slideImg,
    quantity: 2,
    popular: true,
    color: "border-secondary",
    bgColor: "bg-blue-light",
  },
  {
    id: 3,
    name: "Piscina de Bolinhas",
    description: "Colorida e super divertida! As crianças adoram mergulhar nas bolinhas.",
    image: ballPitImg,
    quantity: 1,
    popular: false,
    color: "border-accent",
    bgColor: "bg-yellow-light",
  },
  {
    id: 4,
    name: "Castelinho Inflável",
    description: "Um castelo de sonhos para as crianças pularem e brincarem à vontade!",
    image: bouncyCastleImg,
    quantity: 1,
    popular: false,
    color: "border-green",
    bgColor: "bg-green-light",
  },
];

const ToysSection = () => {
  return (
    <section id="brinquedos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nosso catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Brinquedos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossa linha completa de brinquedos para tornar sua festa inesquecível!
          </p>
        </div>

        {/* Toys Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toys.map((toy, index) => (
            <div
              key={toy.id}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-2 ${toy.color} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {toy.popular && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                  <Star className="w-3 h-3 fill-current" />
                  Mais alugado
                </div>
              )}

              {/* Image */}
              <div className={`relative h-48 overflow-hidden ${toy.bgColor}`}>
                <img
                  src={toy.image}
                  alt={toy.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">{toy.name}</h3>
                  {toy.quantity > 1 && (
                    <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full text-muted-foreground">
                      {toy.quantity} unidades
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {toy.description}
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-green text-primary-foreground font-medium rounded-xl hover:scale-[1.02] transition-transform duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            <Star className="inline w-4 h-4 text-accent mr-1" />
            <strong className="text-foreground">Dica:</strong> Reserve com antecedência para garantir disponibilidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToysSection;
