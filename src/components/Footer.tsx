import { MessageCircle, Instagram, Heart } from "lucide-react";
import logo from "@/assets/logoBrinquedosTiaNilza.jpeg";
import { getYearsSinceStart } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearsSinceStart = getYearsSinceStart();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <img src={logo} alt="Logo Brinquedos da Tia Nilza" className="w-12 h-12 rounded-lg object-contain bg-white/90 p-1" />
                <h3 className="text-2xl font-bold">
                  Brinquedos da <span className="text-accent">Tia Nilza</span>
                </h3>
              </div>
              <p className="text-primary-foreground/60 text-sm">
                Há {yearsSinceStart} anos levando alegria e diversão para festas infantis.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex justify-center gap-8">
              <a
                href="#sobre"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Sobre
              </a>
              <a
                href="#brinquedos"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Brinquedos
              </a>
              <a
                href="#galeria"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Galeria
              </a>
              <a
                href="#contato"
                className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                Contato
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-end gap-4">
              <a
                href="https://wa.me/5535998119836"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-green transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/brinquedosdatianilza"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} Brinquedos da Tia Nilza — Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
