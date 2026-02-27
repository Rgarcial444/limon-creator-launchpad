import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Calendar, ExternalLink, Clock, X, Globe, Code, Palette, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InteractiveSelector, { type SelectorOption } from "@/components/ui/interactive-selector";

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
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
};

const parseTags = (etiquetas: string) =>
  etiquetas ? etiquetas.split(/[,;]+/g).map((t) => t.trim()).filter(Boolean) : [];

// Icons to cycle through for blog posts
const postIcons = [<Code className="w-5 h-5" />, <Palette className="w-5 h-5" />, <Rocket className="w-5 h-5" />, <Briefcase className="w-5 h-5" />];

// Static portfolio companies
const empresasOptions: SelectorOption[] = [
  {
    title: "Clinical Equipment Service",
    description: "Sitio web profesional para equipo médico",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    icon: <Globe className="w-5 h-5" />,
    url: "https://clinicalequipmentservice.com",
  },
  {
    title: "Tecnolan",
    description: "Soluciones tecnológicas empresariales",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    icon: <Globe className="w-5 h-5" />,
    url: "https://tecnolan.mx",
  },
];

const PortafolioSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
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

  // Build selector options: empresas first, then blog posts
  const selectorOptions: SelectorOption[] = [
    ...empresasOptions,
    ...posts.map((p, i) => ({
      title: p.title,
      description: p.description || p.content.slice(0, 60),
      image: p.imageUrl === FALLBACK_IMG
        ? "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
        : p.imageUrl,
      icon: postIcons[i % postIcons.length],
      url: p.url || undefined,
    })),
  ];

  // When a blog-post option is clicked we want to open a detail modal
  const handleOptionClick = (index: number) => {
    const blogIndex = index - empresasOptions.length;
    if (blogIndex >= 0 && blogIndex < posts.length) {
      setSelectedPost(posts[blogIndex]);
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

  return (
    <section id="portafolio" className="bg-background">
      <InteractiveSelector
        options={selectorOptions}
        title="Portafolio"
        subtitle="Proyectos y empresas que confían en nosotros."
      />

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
