import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carla Santos",
    rating: 5,
    text: "Atendimento impecável! A Tia Nilza é super atenciosa e os brinquedos chegaram limpos e no horário combinado. As crianças amaram!",
    color: "border-primary",
  },
  {
    id: 2,
    name: "Marcos Oliveira",
    rating: 5,
    text: "Já é a terceira festa que fazemos com a Tia Nilza. Profissionalismo e qualidade são marcas registradas. Super recomendo!",
    color: "border-secondary",
  },
  {
    id: 3,
    name: "Juliana Mendes",
    rating: 5,
    text: "A cama elástica e o tobogã fizeram o maior sucesso! Montagem rápida e segura. Os pequenos não queriam sair dos brinquedos!",
    color: "border-accent",
  },
  {
    id: 4,
    name: "Roberto Lima",
    rating: 5,
    text: "Excelente custo-benefício! Preço justo, brinquedos de qualidade e um atendimento que faz toda diferença. Parabéns!",
    color: "border-green",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que os <span className="text-accent">pais</span> dizem sobre nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação de nossos clientes é nossa maior recompensa!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 ${testimonial.color} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-muted/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold text-muted-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
