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

