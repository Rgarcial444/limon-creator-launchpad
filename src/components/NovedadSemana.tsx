import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const NovedadSemana = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border-cyan-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Novedad de la Semana
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo Más Reciente
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover-lift">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto">
              <img 
                src="https://haxduiibwxlolflkrjuz.supabase.co/storage/v1/object/public/imagenes%20limoniocreators/novedaddelasemana.png"
                alt="Novedad de la Semana"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Título de la Novedad
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Aquí va el texto de la novedad de la semana. Este contenido se actualizará regularmente con las últimas novedades, anuncios o contenido destacado que queramos compartir con nuestra audiencia.
              </p>
              <p className="text-sm text-slate-400">
                Actualizado recientemente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovedadSemana;
