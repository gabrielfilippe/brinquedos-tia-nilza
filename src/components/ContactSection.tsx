import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <span className="inline-block px-4 py-1 bg-green/10 text-green rounded-full text-sm font-medium mb-4">
              Entre em contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fale com a <span className="text-primary">Tia Nilza</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato e faça seu orçamento sem compromisso. Estamos prontos para 
              fazer da sua festa um momento inesquecível!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5535998119836"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="p-3 bg-green/10 rounded-xl group-hover:bg-green group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-6 h-6 text-green group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground">(35) 99811-9836</p>
                </div>
              </a>

              <a
                href="https://instagram.com/brinquedosdatianilza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <p className="text-muted-foreground">@brinquedosdatianilza</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-card">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Área de Atendimento</p>
                  <p className="text-muted-foreground">São Paulo e região</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-card">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horário de Atendimento</p>
                  <p className="text-muted-foreground">Segunda a Domingo, 8h às 20h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Image Placeholder */}
          <div className="animate-fade-in-right">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 text-center">
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4 bg-green/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Atendimento Rápido
                </h3>
                <p className="text-muted-foreground mb-6">
                  Resposta em até 1 hora pelo WhatsApp
                </p>
                <a
                  href="https://wa.me/5535998119836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-green text-primary-foreground font-semibold rounded-xl hover:scale-[1.02] transition-transform duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Iniciar conversa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
