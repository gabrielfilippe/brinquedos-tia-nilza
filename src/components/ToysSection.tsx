import { Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
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
import trampolineImg from "@/assets/camaelastica.jpg";
import slideImg from "@/assets/tobogaslide.jpeg";
import ballPitImg from "@/assets/piscinaDeBolinhas.jpeg";
import bouncyCastleImg from "@/assets/castelinho.jpg";

const toys = [
  {
    id: 1,
    name: "Cama Elástica",
    description: "Perfeita para pular e gastar energia!",
    image: trampolineImg,
    quantity: 2,
    popular: true,
    color: "border-primary",
    bgColor: "bg-red-light",
  },
  {
    id: 2,
    name: "Tobogã Inflável",
    description: "Muita diversão! Sucesso garantido em qualquer festa.",
    image: slideImg,
    quantity: 2,
    popular: true,
    color: "border-secondary",
    bgColor: "bg-blue-light",
  },
  {
    id: 3,
    name: "Piscina de Bolinhas",
    description: "Colorida e super divertida! As crianças adoram.",
    image: ballPitImg,
    quantity: 1,
    popular: false,
    color: "border-accent",
    bgColor: "bg-yellow-light",
  },
  {
    id: 4,
    name: "Castelinho Inflável",
    description: "Um castelo de sonhos para as crianças brincarem à vontade!",
    image: bouncyCastleImg,
    quantity: 1,
    popular: false,
    color: "border-green",
    bgColor: "bg-green-light",
  },
];

const ToysSection = () => {
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
    <section id="brinquedos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 scroll-reveal ${headerVisible ? "is-visible" : ""}`}
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nosso catálogo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Brinquedos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossa linha completa de brinquedos para tornar sua festa
            inesquecível!
          </p>
        </div>

        {/* Toys Carousel */}
        <div ref={gridRef} className="relative px-12">
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
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {toys.map((toy, index) => (
                <CarouselItem
                  key={toy.id}
                  className={`pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 scroll-reveal-scale ${gridVisible ? "is-visible" : ""}`}
                  style={{
                    transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div
                    className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-t-4 ${toy.color} flex flex-col h-full`}
                  >
                    {/* Popular Badge */}
                    {toy.popular && (
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 fill-current" />
                        Mais alugado
                      </div>
                    )}

                    {/* Image */}
                    <div
                      className={`relative h-48 overflow-hidden ${toy.bgColor}`}
                    >
                      <img
                        src={toy.image}
                        alt={toy.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-foreground">
                          {toy.name}
                        </h3>
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
                        href="https://wa.me/5535998119836"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 bg-green text-primary-foreground font-medium rounded-xl hover:scale-[1.02] transition-transform duration-300 mt-auto"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Solicitar orçamento
                      </a>
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
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground/50 w-2"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            <Star className="inline w-4 h-4 text-accent mr-1" />
            <strong className="text-foreground">Dica:</strong> Reserve com
            antecedência para garantir disponibilidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToysSection;
