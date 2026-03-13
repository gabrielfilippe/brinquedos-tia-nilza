import {
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
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

type Toy = {
  id: number;
  name: string;
  details: string;
  ageRange: string;
  space: string;
  sizeOptions?: string[];
  voltage?: string;
  image: string;
  quantity: number;
  popular: boolean;
  color: string;
  bgColor: string;
};

const toys: Toy[] = [
  {
    id: 1,
    name: "Cama Elástica",
    details:
      "Estrutura reforçada, rede de proteção e lona resistente. Ideal para aniversários e eventos com crianças cheias de energia.",
    ageRange: "3 a 10 anos",
    space: "2 tamanhos disponíveis",
    sizeOptions: ["Padrão: 3,10m", "Grande: 4,27m"],
    image: trampolineImg,
    quantity: 2,
    popular: true,
    color: "border-primary",
    bgColor: "bg-red-light",
  },
  {
    id: 2,
    name: "Tobogã Inflável",
    details:
      "Tobogã com subida segura e descida divertida. Excelente opção para manter as crianças entretidas durante toda a festa.",
    ageRange: "4 a 10 anos",
    space: "(A)6.00m (L)3.50m (C)6.50m",
    voltage: "Motor 127V",
    image: slideImg,
    quantity: 2,
    popular: true,
    color: "border-secondary",
    bgColor: "bg-blue-light",
  },
  {
    id: 3,
    name: "Piscina de Bolinhas",
    details:
      "Ambiente ludico e aconchegante para os pequenos brincarem com seguranca. Excelente para criancas menores.",
    ageRange: "1 a 6 anos",
    space: "2x2m",
    image: ballPitImg,
    quantity: 1,
    popular: false,
    color: "border-accent",
    bgColor: "bg-yellow-light",
  },
  {
    id: 4,
    name: "Castelinho Inflável",
    details:
      "Inflável compacto e temático, ideal para espaços menores sem abrir mão da diversão. Entradas e laterais protegidas.",
    ageRange: "2 a 8 anos",
    space: "(A)2.80m  (L)4.20m  (C)5.00m",
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
  const [expandedToyId, setExpandedToyId] = useState<number | null>(null);

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
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 items-start md:-ml-4">
              {toys.map((toy, index) => (
                <CarouselItem
                  key={toy.id}
                  className={`h-auto pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 scroll-reveal-scale ${gridVisible ? "is-visible" : ""}`}
                  style={{
                    transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div
                    className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-t-4 ${toy.color}`}
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
                    <div className="p-5">
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
                      <button
                        type="button"
                        onPointerDownCapture={(e) => e.stopPropagation()}
                        onTouchStartCapture={(e) => e.stopPropagation()}
                        onClick={() =>
                          setExpandedToyId((prev) =>
                            prev === toy.id ? null : toy.id,
                          )
                        }
                        aria-expanded={expandedToyId === toy.id}
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 mb-3 border border-border bg-muted/30 text-foreground font-medium rounded-xl hover:bg-muted transition-colors duration-300"
                      >
                        {expandedToyId === toy.id
                          ? "Ocultar descrição"
                          : "Ver descrição"}
                        {expandedToyId === toy.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          expandedToyId === toy.id
                            ? "grid-rows-[1fr] opacity-100 mb-4"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="p-3 rounded-xl bg-muted/50 border border-border"
                            onPointerDownCapture={(e) => e.stopPropagation()}
                            onTouchStartCapture={(e) => e.stopPropagation()}
                          >
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {toy.details}
                            </p>

                            {toy.sizeOptions && (
                              <div className="mt-3 rounded-lg bg-background px-3 py-2 border border-border/70">
                                <p className="text-[11px] sm:text-xs text-muted-foreground mb-1">
                                  Tamanhos disponíveis
                                </p>
                                <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
                                  {toy.sizeOptions.map((option) => (
                                    <span
                                      key={option}
                                      className="inline-flex rounded-full bg-muted px-2.5 py-1 text-foreground font-medium"
                                    >
                                      {option}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            <div
                              className={`mt-3 pt-3 border-t border-border/70 grid gap-2 text-[11px] sm:text-xs ${
                                toy.voltage ? "grid-cols-3" : "grid-cols-2"
                              }`}
                            >
                              <div className="rounded-lg bg-background px-2 py-1.5 text-center">
                                <p className="text-muted-foreground">Idade</p>
                                <p className="font-semibold text-foreground">
                                  {toy.ageRange}
                                </p>
                              </div>
                              <div className="rounded-lg bg-background px-2 py-1.5 text-center">
                                <p className="text-muted-foreground">
                                  Dimensões
                                </p>
                                <p className="font-semibold text-foreground">
                                  {toy.space}
                                </p>
                              </div>

                              {toy.voltage && (
                                <div className="rounded-lg bg-background px-2 py-1.5 text-center">
                                  <p className="text-muted-foreground">
                                    Voltagem
                                  </p>
                                  <p className="font-semibold text-foreground">
                                    {toy.voltage}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
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
