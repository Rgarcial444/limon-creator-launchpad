import { Heart, Code, MessageCircle, Mail, MapPin, Globe } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Link } from "react-router-dom";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#1877F2" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#25D366" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinktreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#43E55E" {...props}>
    <path d="M7.953 15.066l-.038-4.017-3.46 2.527-1.498-2.09 3.753-2.6-3.753-2.6 1.498-2.09 3.46 2.528.038-4.018h2.604l-.038 4.018 3.46-2.528 1.498 2.09-3.753 2.6 3.753 2.6-1.498 2.09-3.46-2.527.038 4.017H7.953zm-1.3 2.05h5.204v5.884h-5.204v-5.884z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/527223145340?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Limon%20io%20Creators", "_blank");
  };

  const handleEmailContact = () => {
    window.open("mailto:limon_50@hotmail.com?subject=Consulta%20sobre%20servicios%20web", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8" />
              <span className="text-2xl font-bold">Limon io Creators</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
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
                className="w-11 h-11 rounded-full"
              >
                <Mail className="h-5 w-5" />
              </RainbowButton>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Páginas Web </li>
              <li>E-commerce Completo</li>
              <li>Herramientas de citas</li>
              <li>Proyectos con IA</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">WhatsApp: 722 314 5340 </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">limon_50@hotmail.com </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Toluca, México & Remoto </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dock */}
        <div className="flex justify-center mt-10">
          <Dock
            magnification={60}
            distance={100}
            direction="bottom"
            className="border-primary-foreground/20 bg-primary-foreground/5"
          >
            <DockIcon className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </DockIcon>
            <DockIcon className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <a href="https://wa.me/527223145340" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon className="h-6 w-6" />
              </a>
            </DockIcon>
            <DockIcon className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer" aria-label="Linktree">
                <LinktreeIcon className="h-6 w-6" />
              </a>
            </DockIcon>
            <DockIcon className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <a href="https://limoncreators.lovable.app" target="_blank" rel="noopener noreferrer" aria-label="Sitio Web">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </a>
            </DockIcon>
          </Dock>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Todos los derechos reservados.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" /> por Ricardo García
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
