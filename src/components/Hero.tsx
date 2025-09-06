import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
const Hero = () => {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/527223145340?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Limonio Creators", "_blank");
  };
  const images = [
    "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/imagen4.png",
    "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/imagen3.png",
    "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/imagen2.png",
    "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/imagen1.png",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 leading-tight">
          Limon.io Creators
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl">Dale Vida a Tu Marca</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Desarrollo sitios web y landing pages que convierten visitantes en clientes. 
          Soluciones digitales modernas para hacer crecer tu negocio.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Button 
            size="lg" 
            variant="hero"
            onClick={handleWhatsAppContact}
            className="bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contáctame por WhatsApp
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
          >
            Ver proyectos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 backdrop-blur-sm"
        >
          <div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-neutral-300">Proyectos</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-neutral-300">Responsivo</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-neutral-300">Soporte</div>
          </div>
        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
};
export default Hero;

Hero Component with RainbowButton
Código 
Hero Component with RainbowButton
Código ∙ Versión 2 
Perfecto, he actualizado el código con tu información actual:

Cambios que mantuve:

Tu número de teléfono: 527223145340
Tu mensaje original de WhatsApp
Toda tu estructura existente
Solo agregué:

La importación del RainbowButton
Reemplacé el primer botón por RainbowButton manteniendo toda su funcionalidad
Pasos para implementar:

Crear /components/ui/rainbow-button.tsx con el primer artifact
Reemplazar tu Hero.tsx con este código actualizado
Probar que funciona
El segundo botón quedó normal para que puedas ver la diferencia. Si te gusta el efecto, después cambiamos el segundo también.

¿Ya tienes el componente RainbowButton creado o necesitas ayuda para crearlo?

neceisto ayuda

Te ayudo paso a paso para crear el componente RainbowButton.

Paso 1: Ir a la carpeta correcta

Ve a tu proyecto en Lovable o GitHub
Navega a src → components → ui
Si no existe la carpeta ui, créala
Paso 2: Crear el archivo

En la carpeta /components/ui/
Crea un nuevo archivo llamado rainbow-button.tsx
Paso 3: Copiar el código

Copia exactamente este código en el archivo nuevo:

tsx
import React from 'react';
import { cn } from "@/lib/utils";

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RainbowButton = ({ children, onClick, className, size = 'md' }: RainbowButtonProps) => {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
  };

  return (
    <>
      <button 
        onClick={onClick}
        className={cn(
          "rainbow-border relative flex items-center justify-center gap-2.5 bg-black rounded-xl border-none text-white cursor-pointer font-bold transition-all duration-200 hover:scale-105",
          sizeClasses[size],
          className
        )}
      >
        {children}
      </button>
      
      <style jsx>{`
        .rainbow-border::before,
        .rainbow-border::after {
          content: '';
          position: absolute;
          left: -2px;
          top: -2px;
          border-radius: 12px;
          background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
          background-size: 400%;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          z-index: -1;
          animation: rainbow 20s linear infinite;
        }
        .rainbow-border::after {
          filter: blur(50px);
        }
        @keyframes rainbow {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </>
  );
};
