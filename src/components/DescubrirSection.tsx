import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Calendar,
  ExternalLink,
  Clock,
  X,
} from "lucide-react";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

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
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

const parseTags = (etiquetas: string) =>
  etiquetas
    ? etiquetas
        .split(/[,;]+/g)
        .map((t) => t.trim())
        .filter(Boolean)
    : [];

const DescubrirSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const fetchBlogPosts = useCallback(async () => {
    try {
      const supabaseAny = supabase as any;
      const { data, error } = await supabaseAny
        .from("Blog")
        .select("id,title,content,descripción,imagenes,url,type,etiquetas,is_published,author_id,updated_at");

      if (error) {
        console.error("Supabase error Blog select:", error);
        setPosts([]);
        return;
      }

      const sorted = (data || []).sort((a: any, b: any) => {
        if (a.updated_at && b.updated_at) {
          const da = new Date(a.updated_at).getTime();
          const db = new Date(b.updated_at).getTime();
          if (!isNaN(da) && !isNaN(db) && db !== da) return db - da;
        }
        return (b?.id || 0) - (a?.id || 0);
      });

      const transformed: BlogPost[] = sorted
        .filter((row: any) => row.is_published === true)
        .map((post: any) => ({
          id: post.id,
          title: post.title || "Sin título",
          content: post.content || "",
          description: post.descripción || "Sin descripción disponible",
          imageUrl: toPublicImage(post.imagenes),
          url: post.url || "",
          type: post.type || "article",
          etiquetas: post.etiquetas || "",
          is_published: !!post.is_published,
          author_id: post.author_id || undefined,
          updated_at: post.updated_at ?? null,
        }));

      setPosts(transformed);
    } catch (e) {
      console.error("Error inesperado:", e);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  // Transform posts to scroll cards format
  const cardItems: iCardItem[] = posts.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    tag: parseTags(p.etiquetas)[0] || p.type,
    src: p.imageUrl,
    link: p.url || "#",
    color: "#0a0a0a",
    textColor: "white",
  }));

  const handleCardClick = (item: iCardItem) => {
    const post = posts.find((p) => p.id === item.id);
    if (post) setSelectedPost(post);
  };

  if (loading) {
    return (
      <section id="descubrir" className="py-20 bg-background">
        <div className="flex items-center justify-center min-h-[40vh]">
          <div className="text-center space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
            <p className="text-muted-foreground">Cargando artículos…</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="descubrir" className="bg-background">
      {/* Hero */}
      <div className="py-10 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-secondary/10 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Descubrir
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mt-3">
              Lecturas sobre tecnología útil, clara y humana.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Cards */}
      <div className="container mx-auto max-w-6xl px-4">
        {posts.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            No hay artículos disponibles.
          </div>
        ) : (
          <CardsParallax items={cardItems} onCardClick={handleCardClick} />
        )}
      </div>

      {/* Modal */}
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
                {parseTags(selectedPost.etiquetas).map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {selectedPost.url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() =>
                      window.open(selectedPost.url!, "_blank", "noopener,noreferrer")
                    }
                  >
                    Visitar <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedPost(null)}
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {selectedPost.imageUrl !== FALLBACK_IMG && (
              <div className="h-56 md:h-80 overflow-hidden bg-muted flex items-center justify-center">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground mb-4">
                {selectedPost.updated_at ? (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatMaybeDate(selectedPost.updated_at)}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Post #{selectedPost.id}
                  </span>
                )}
                {selectedPost.content && (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {getReadingTime(selectedPost.content)} min de lectura
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

export default DescubrirSection;
