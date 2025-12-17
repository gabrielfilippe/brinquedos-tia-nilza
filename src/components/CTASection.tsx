import { MessageCircle, PartyPopper } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-6 animate-bounce-gentle">
            <PartyPopper className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Garanta a diversão da sua festa!
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Com quem entende do assunto há 19 anos. Faça seu orçamento agora mesmo, sem compromisso!
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green text-primary-foreground font-bold text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg glow-green animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>

          {/* Trust Badge */}
          <p className="mt-6 text-primary-foreground/60 text-sm">
            Resposta rápida • Orçamento sem compromisso • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
