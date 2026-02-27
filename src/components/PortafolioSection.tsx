import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Calendar, ExternalLink, Clock, X, Globe, Code, Palette, Briefcase, Rocket, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImagePlayer } from "@/components/ui/image-player";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  description: string;
  imageUrl: string;
  url?: string;
  type: string;
  etiquetas: string;
  is_published: boolean;
  author_id?: string;
  updated_at?: string | null;
}

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
  isCompany?: boolean;
}

const IMAGE_BUCKET = "imagenes limoniocreators";
const FALLBACK_IMG = "/placeholder.svg";

const toPublicImage = (path?: string) => {
  if (!path) return FALLBACK_IMG;
  if (path.startsWith("http")) return path;
  const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
  return data?.publicUrl || FALLBACK_IMG;
};

const formatMaybeDate = (d?: string | null) => {
  if (!d) return null;
  const date = new Date(d);
  if (isNaN(date.getTime())) return null;
  return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
};

const getReadingTime = (content: string) => {
  if (!content) return 1;
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
};

const parseTags = (etiquetas: string) =>
  etiquetas ? etiquetas.split(/[,;]+/g).map((t) => t.trim()).filter(Boolean) : [];

// Static portfolio companies
const empresas: PortfolioItem[] = [
  {
    title: "Clinical Equipment Service",
    description: "Sitio web profesional para equipo clínico y hospitalario. Diseño moderno con catálogo de productos y contacto directo.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    url: "https://clinicalequipmentservice.com",
    tags: ["Web", "E-commerce", "Salud"],
    isCompany: true,
  },
  {
    title: "Tecnolan",
    description: "Plataforma de soluciones tecnológicas empresariales. Networking, infraestructura y soporte técnico.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    url: "https://tecnolan.mx",
    tags: ["Web", "Tecnología", "B2B"],
    isCompany: true,
  },
];

const PortafolioSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const fetchBlogPosts = useCallback(async () => {
    try {
      const supabaseAny = supabase as any;
      const { data, error } = await supabaseAny
        .from("Blog")
        .select("id,title,content,descripción,imagenes,url,type,etiquetas,is_published,author_id,updated_at");

      if (error) { console.error("Supabase error:", error); setPosts([]); return; }

      const sorted = (data || []).sort((a: any, b: any) => {
        if (a.updated_at && b.updated_at) {
          const da = new Date(a.updated_at).getTime();
          const db = new Date(b.updated_at).getTime();
          if (!isNaN(da) && !isNaN(db) && db !== da) return db - da;
        }
        return (b?.id || 0) - (a?.id || 0);
      });

      setPosts(
        sorted
          .filter((row: any) => row.is_published === true)
          .map((post: any) => ({
            id: post.id,
            title: post.title || "Sin título",
            content: post.content || "",
            description: post.descripción || "",
            imageUrl: toPublicImage(post.imagenes),
            url: post.url || "",
            type: post.type || "article",
            etiquetas: post.etiquetas || "",
            is_published: true,
            author_id: post.author_id || undefined,
            updated_at: post.updated_at ?? null,
          }))
      );
    } catch (e) {
      console.error("Error inesperado:", e);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchBlogPosts(); }, [fetchBlogPosts]);

  // Build combined items: empresas + blog posts
  const allItems: PortfolioItem[] = [
    ...empresas,
    ...posts.map((p) => ({
      title: p.title,
      description: p.description || p.content.slice(0, 120),
      image: p.imageUrl === FALLBACK_IMG
        ? "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
        : p.imageUrl,
      url: p.url || undefined,
      tags: parseTags(p.etiquetas),
    })),
  ];

  const images = allItems.map((item) => item.image);
  const currentItem = allItems[currentIndex] || allItems[0];

  const handleViewMore = () => {
    // If it's a blog post (index >= empresas.length), open modal
    const blogIndex = currentIndex - empresas.length;
    if (blogIndex >= 0 && blogIndex < posts.length) {
      setSelectedPost(posts[blogIndex]);
    } else if (currentItem?.url) {
      window.open(currentItem.url, "_blank", "noopener,noreferrer");
    }
  };

  if (loading) {
    return (
      <section id="portafolio" className="py-20 bg-background">
        <div className="flex items-center justify-center min-h-[40vh]">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (allItems.length === 0) return null;

  return (
    <section id="portafolio" className="bg-background">
      {/* Player area */}
      <div
        className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <ImagePlayer
          images={images}
          interval={4500}
          paused={paused}
          onIndexChange={setCurrentIndex}
          className="relative w-full h-full"
          renderImage={(src, idx) => (
            <>
              {/* Preload next image */}
              {images[(idx + 1) % images.length] && (
                <link rel="preload" as="image" href={images[(idx + 1) % images.length]} />
              )}
              <img
                key={src}
                src={src}
                alt={allItems[idx]?.title || "Portafolio"}
                className="w-full h-full object-cover animate-fade-in"
                loading="lazy"
              />
            </>
          )}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-10 md:p-14">
          <div className="max-w-3xl space-y-3">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {currentItem?.tags?.map((tag, i) => (
                <Badge key={i} variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm border-white/20 text-xs">
                  {tag}
                </Badge>
              ))}
              {currentItem?.isCompany && (
                <Badge className="bg-primary/80 text-primary-foreground border-primary/40 text-xs">
                  <Globe className="w-3 h-3 mr-1" /> Cliente
                </Badge>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {currentItem?.title}
            </h2>

            {/* Description — visible on pause/hover */}
            <p className={`text-white/80 text-sm sm:text-base md:text-lg max-w-xl transition-all duration-500 ${paused ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:opacity-70 md:translate-y-0'}`}>
              {currentItem?.description}
            </p>

            {/* Actions */}
            <div className={`flex items-center gap-3 pt-2 transition-all duration-500 ${paused ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 sm:opacity-100 sm:translate-y-0'}`}>
              <Button
                onClick={handleViewMore}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              >
                {currentItem?.url ? 'Visitar' : 'Ver más'}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                onClick={() => setPaused(!paused)}
                aria-label={paused ? "Reanudar" : "Pausar"}
              >
                {paused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-white/50 text-xs font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(allItems.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Section label */}
      <div className="py-4 px-6 border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Portafolio — Proyectos & Clientes
          </p>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Pasa el cursor para pausar y explorar
          </p>
        </div>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 border-b flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {parseTags(selectedPost.etiquetas).map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {selectedPost.url && (
                  <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open(selectedPost.url!, "_blank", "noopener,noreferrer")}>
                    Visitar <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                )}
                <Button variant="ghost" size="icon" onClick={() => setSelectedPost(null)} aria-label="Cerrar">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {selectedPost.imageUrl !== FALLBACK_IMG && (
              <div className="h-56 md:h-80 overflow-hidden bg-muted flex items-center justify-center">
                <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-contain" loading="lazy" />
              </div>
            )}

            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{selectedPost.title}</h2>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatMaybeDate(selectedPost.updated_at) || `Post #${selectedPost.id}`}
                </span>
                {selectedPost.content && (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {getReadingTime(selectedPost.content)} min
                  </span>
                )}
              </div>
              <div className="prose prose-sm max-w-none text-foreground">
                <p className="whitespace-pre-wrap">{selectedPost.content || selectedPost.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortafolioSection;
