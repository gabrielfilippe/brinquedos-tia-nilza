import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Reset to first slide when section becomes visible
  useEffect(() => {
    if (gridVisible && api) {
      api.scrollTo(0, true);
    }
  }, [gridVisible, api]);

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 scroll-reveal ${headerVisible ? "is-visible" : ""}`}
        >
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

        {/* Testimonials Carousel */}
        <div ref={gridRef} className="relative px-4 sm:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: 35,
              skipSnaps: false,
              startIndex: 0,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className={`pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 scroll-reveal ${gridVisible ? "is-visible" : ""}`}
                  style={{
                    transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div
                    className={`relative bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-t-4 ${testimonial.color} h-full flex flex-col`}
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
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Mobile Swipe Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden text-muted-foreground text-sm">
            <ChevronLeft className="w-4 h-4 animate-pulse" />
            <span>Deslize para ver mais</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-accent w-8"
                    : "bg-muted hover:bg-muted-foreground/50 w-2"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
