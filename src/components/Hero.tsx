import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import Navigation from '@/components/Navigation';
import { Link } from "react-router-dom";

const Hero = () => {
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
            <motion.h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-center text-white py-4 leading-tight drop-shadow-2xl max-w-5xl">
              Creamos sitios web, automatizaciones y agentes de IA que generan clientes para tu negocio.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white font-semibold max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-xl"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            >
              Desde landing pages de alto rendimiento hasta sistemas completos de ventas.
              <br />
              Diseño profesional, implementación rápida y soporte continuo.
            </motion.p>
            
            {/* Más rápido que una agencia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="backdrop-blur-md bg-white/10 rounded-2xl px-6 md:px-10 py-6 border border-white/20"
            >
              <p className="text-sm md:text-base text-white/80 font-medium mb-4 uppercase tracking-wider">
                Más rápido que una agencia tradicional
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <div className="flex items-start gap-2">
                  <span className="text-xl">⚡</span>
                  <span className="text-sm text-white font-medium">Desarrollo 50% más rápido</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🚀</span>
                  <span className="text-sm text-white font-medium">Lanzamiento en semanas, no meses</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">📈</span>
                  <span className="text-sm text-white font-medium">Sitios optimizados para convertir</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🤖</span>
                  <span className="text-sm text-white font-medium">Automatización con IA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </ImagesSlider>
      </div>

    </>
  );
};

export default Hero;
