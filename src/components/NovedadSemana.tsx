import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { AnimatedNovedades } from "@/components/ui/animated-testimonials";

const NovedadSemana = () => {
  const novedades = [
    {
      title: "Agente Inteligente",
      description: "Presentamos tu nuevo agente conversacional: atención instantánea 24/7 que resuelve preguntas frecuentes ",
      src: "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/novedaddelasemana.png"
    },
    {
      title: "Entrenado",
      description: "Impulsa ventas y conversiones al responder al momento y mantener interesados a tus leads en cualquier horario ",
      src: "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/novedaddelasemana3.png"
    },
    {
      title: "Fácil de usar",
      description: "Listo para trabajar, para capturar datos, calificar leads, crear tickets y agendar demos automáticamente, con el historial unificado.",
      src: "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/novedaddelasemana4.png"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black/80">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            NLimon.io Creators
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo más nuevo en tecnología
          </h2>
        </div>
        <AnimatedNovedades items={novedades} autoplay={true} />
      </div>
    </section>
  );
};

export default NovedadSemana;
