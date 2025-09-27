import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import Navigation from '@/components/Navigation';

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
    <>
      {/* HERO SECTION */}
      <div className="relative h-screen overflow-hidden">
        <ImagesSlider 
          className="h-screen brightness-125 saturate-150 contrast-110" 
          images={images}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-green-900/30 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

          <Navigation />

          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-50 flex flex-col justify-center items-center text-center px-6 relative"
          >
            <motion.h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-center text-white py-4 leading-tight drop-shadow-2xl">
              Dale Vida a Tu Marca
              <br />
              <span className="text-xl md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Creatividad sin Límites
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white font-semibold max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-xl"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Soluciones digitales modernas para hacer crecer tu negocio.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <RainbowButton 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="!bg-white !text-black shadow-2xl hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contáctame por WhatsApp
              </RainbowButton>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/40 backdrop-blur-md bg-white/10 rounded-xl px-8 py-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-white font-medium">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-white font-medium">Responsivo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-white font-medium">Soporte</div>
              </div>
            </motion.div>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* SECCIÓN INTERMEDIA - PROPUESTA A */}
      <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-200">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Respuesta en menos de cinco minutos.
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Sin costos ocultos. Sin vueltas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">✅</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Diseño que inspira confianza</h3>
                <p className="text-gray-600 text-sm">Interfaces claras y modernas que generan credibilidad y mejoran la conversión.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Implementación rápida</h3>
                <p className="text-gray-600 text-sm">Lanza en días, no en meses, con procesos simples y sin fricción.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-3">💰</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">Precio fijo</h3>
                <p className="text-gray-600 text-sm">Presupuesto claro desde el inicio, sin sorpresas ni cargos escondidos.</p>
              </div>
            </div>

            <div className="mt-10">
              <RainbowButton 
                size="lg" 
                onClick={handleWhatsAppContact}
                className="!bg-gradient-to-r from-blue-600 to-cyan-600 !text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Empezar ahora
              </RainbowButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
