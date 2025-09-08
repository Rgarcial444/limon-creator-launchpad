import { Heart, Code, MessageCircle, Mail, MapPin } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/528116825524?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Limon.io", "_blank");
  };

  const handleEmailContact = () => {
    window.open("mailto:ricardo@limon.io?subject=Consulta%20sobre%20servicios%20web", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8" />
              <span className="text-2xl font-bold">Limon.io</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Desarrollo sitios web y landing pages que convierten visitantes en clientes. 
              Soluciones digitales modernas para hacer crecer tu negocio.
            </p>
            <div className="flex space-x-4">
              <RainbowButton 
                onClick={handleWhatsAppContact}
                size="sm"
                className="w-10 h-10 rounded-full"
              >
                <MessageCircle className="h-5 w-5" />
              </RainbowButton>
              <RainbowButton 
                onClick={handleEmailContact}
                size="sm"
                className="w-10 h-10 rounded-full"
              >
                <Mail className="h-5 w-5" />
              </RainbowButton>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Páginas Web Básicas</li>
              <li>Herramientas de Citas</li>
              <li>E-commerce Completo</li>
              <li>Proyectos con IA</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">WhatsApp: +52 81 1682 5524</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">ricardo@limon.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Monterrey, México</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Limon.io Creators. Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" /> por Ricardo García Limón
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;