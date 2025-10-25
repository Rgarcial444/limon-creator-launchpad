import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { AnimatedNovedades } from "@/components/ui/animated-testimonials";

const NovedadSemana = () => {
  const novedades = [
    {
      title: "Novedad 1",
      description: "Aquí va el texto de la primera novedad de la semana. Este contenido se actualizará regularmente con las últimas novedades, anuncios o contenido destacado que queramos compartir con nuestra audiencia.",
      date: "Actualizado recientemente",
      src: "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/novedaddelasemana.png"
    },
    {
      title: "Novedad 2",
      description: "Descubre las últimas actualizaciones y proyectos que hemos estado desarrollando. Mantente al día con todo lo nuevo que tenemos para ofrecerte.",
      date: "Esta semana",
      src: "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/novedaddelasemana3.png"
    },
    {
      title: "Novedad 3",
      description: "Explora nuestras últimas innovaciones y descubre cómo estamos transformando ideas en realidad con creatividad y tecnología.",
      date: "Reciente",
      src: "https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/novedaddelasemana4.png"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Novedad de la Semana
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo Más Reciente
          </h2>
        </div>

        <AnimatedNovedades items={novedades} autoplay={true} />
      </div>
    </section>
  );
};

export default NovedadSemana;
