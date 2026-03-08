import { Heart, Code, MessageCircle, Mail, MapPin, Globe, Facebook } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Link } from "react-router-dom";

const NotionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
    <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" />
    <path d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.133 -6.797 2.133 -3.11 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.077 1.36s0 3.5 -4.853 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z" fill="white" />
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
                <Facebook className="h-6 w-6 text-primary-foreground" />
              </a>
            </DockIcon>
            <DockIcon className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <a href="https://wa.me/527223145340" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </a>
            </DockIcon>
            <DockIcon className="bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <a href="https://notion.so" target="_blank" rel="noopener noreferrer" aria-label="Notion">
                <NotionIcon className="h-6 w-6 text-primary-foreground" />
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
