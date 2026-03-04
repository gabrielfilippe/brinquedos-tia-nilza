import { useState } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import gallery1 from "@/assets/jose_toboga.jpg";
import gallery2 from "@/assets/moana_camaElastica.jpg";
import gallery3 from "@/assets/criancas_na_camaElastica.jpg";
import gallery4 from "@/assets/duas_criancas_camaElastica.jpg";
import gallery5 from "@/assets/alice_piscinaDeBolinhas.jpeg";
import gallery6 from "@/assets/noah_piscinaBolinhas.jpeg";

const images = [
  { src: gallery1, alt: "" },
  { src: gallery2, alt: "" },
  { src: gallery3, alt: "" },
  { src: gallery4, alt: "" },
  { src: gallery5, alt: "" },
  { src: gallery6, alt: "" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({
    threshold: 0.1,
  });

  return (
    <section id="galeria" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 scroll-reveal ${headerVisible ? "is-visible" : ""}`}
        >
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Galeria de fotos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Momentos de <span className="text-secondary">diversão</span>{" "}
            garantida
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos brinquedos fazem a alegria das crianças em cada
            festa!
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`group relative overflow-hidden rounded-2xl aspect-square shadow-card hover:shadow-card-hover transition-all duration-300 scroll-reveal-scale ${gridVisible ? "is-visible" : ""} ${
                index === 0 || index === 5 ? "md:col-span-1 md:row-span-1" : ""
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
