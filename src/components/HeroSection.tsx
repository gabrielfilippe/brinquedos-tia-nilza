import { MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/todosBrinquedos.jpg";
import { getYearsSinceStart } from "@/lib/utils";

const HeroSection = () => {
  const yearsSinceStart = getYearsSinceStart();
  const scrollToToys = () => {
    document.getElementById("brinquedos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Crianças brincando em brinquedos infláveis em festa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 rounded-full blur-xl animate-float animate-delay-200" />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent/30 rounded-full blur-xl animate-float animate-delay-400" />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">
              {yearsSinceStart} anos de diversão garantida
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in animate-delay-100">
            Brinquedos da{" "}
            <span className="text-accent">Tia Nilza</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-3 animate-fade-in animate-delay-200 font-medium">
            Há {yearsSinceStart} anos levando alegria e diversão para festas infantis
          </p>

          {/* Supporting Text */}
          <p className="text-lg text-primary-foreground/70 mb-8 animate-fade-in animate-delay-300">
            Diversão garantida para crianças de até 10 anos com brinquedos seguros e higienizados
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-400">
            <a
              href="https://wa.me/5535998119836"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green text-primary-foreground font-semibold rounded-2xl hover:scale-105 transition-all duration-300 glow-green animate-pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </a>
            <button
              onClick={scrollToToys}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Ver Brinquedos
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToToys}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce-gentle cursor-pointer hover:text-primary-foreground transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
