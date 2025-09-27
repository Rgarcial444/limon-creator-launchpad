import { useState, useEffect, useMemo, useCallback } from "react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Calendar,
  ExternalLink,
  Clock,
  BookOpen,
  X,
  Hash,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  description: string;
  imageUrl: string;
  url?: string;
  type: string;
  etiquetas: string;
  created_at: string;
  is_published: boolean;
  author_id?: string;
}

const IMAGE_BUCKET = "imagenes limoniocreators";
const FALLBACK_IMG = "/placeholder.svg";

const toPublicImage = (path?: string) => {
  if (!path) return FALLBACK_IMG;
  if (path.startsWith("http")) return path;
  const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path);
  return data?.publicUrl || FALLBACK_IMG;
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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

const EmptyState = ({ message }: { message: string }) => (
  <div className="text-center py-20">
    <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
    <h2 className="text-2xl font-semibold mb-3">Nada por aquí… aún</h2>
    <p className="text-muted-foreground">{message}</p>
  </div>
);

const Descubrir = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [refreshing, setRefreshing] = useState(false);

  const fetchBlogPosts = useCallback(async () => {
    setRefreshing(true);
    try {
      const { data, error } = await supabase
        .from("Blog")
        .select("id,title,content,descripción,imagenes,url,type,etiquetas,created_at,is_published,author_id")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching blog posts:", error);
        return;
      }

      const transformed: BlogPost[] =
        data?.map((post: any) => ({
          id: post.id,
          title: post.title || "Sin título",
          content: post.content || "",
          description: post.descripción || "Sin descripción disponible",
          imageUrl: toPublicImage(post.imagenes),
          url: post.url || "",
          type: post.type || "article",
          etiquetas: post.etiquetas || "",
          created_at: post.created_at,
          is_published: post.is_published,
          author_id: post.author_id || undefined,
        })) || [];

      setPosts(transformed);
    } catch (e) {
      console.error("Error:", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => parseTags(p.etiquetas).forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "es"));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return posts;
    return posts.filter((p) => parseTags(p.etiquetas).includes(selectedCategory));
  }, [posts, selectedCategory]);

  const handlePostClick = (post: BlogPost) => {
    if (post.url && post.url.trim() !== "") {
      window.open(post.url, "_blank", "noopener,noreferrer");
      return;
    }
    setSelectedPost(post);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
            <p className="text-muted-foreground">Cargando artículos…</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-14 px-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-secondary/10 border-b">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-5">
              <BookOpen className="w-4 h-4" /> Blog
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Descubrir
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Artículos, experimentos y reflexiones sobre tecnología útil, clara y humana.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => fetchBlogPosts()}
                disabled={refreshing}
              >
                <RefreshCw className={cn("w-4 h-4 mr-2", refreshing && "animate-spin")} />
                Actualizar
              </Button>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-6 px-4 sticky top-16 z-10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 border-b">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="rounded-full"
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  <Hash className="w-3 h-3 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid de posts */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            {filteredPosts.length === 0 ? (
              <EmptyState
                message={
                  selectedCategory === "all"
                    ? "Pronto publicaremos contenido interesante."
                    : `No hay artículos en la categoría “${selectedCategory}”.`
                }
              />
            ) : (
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group cursor-pointer overflow-hidden transition-all duration-300 border border-primary/10 hover:border-primary/30 hover:shadow-[0_0_0_1px_rgba(var(--primary),0.2)] bg-card/60 backdrop-blur-sm rounded-2xl"
                    onClick={() => handlePostClick(post)}
                  >
                    {/* Imagen */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      {post.url && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-black/45 backdrop-blur-sm rounded-full p-2">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="p-5 flex flex-col gap-4">
                      {/* Tags */}
                      {parseTags(post.etiquetas).length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {parseTags(post.etiquetas)
                            .slice(0, 3)
                            .map((tag, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                        </div>
                      )}

                      {/* Título */}
                      <h2 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      {/* Descripción */}
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.created_at)}
                          </span>
                          {post.content && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {getReadingTime(post.content)} min
                            </span>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal de artículo */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-primary/20">
            {/* Header */}
            <div className="p-4 md:p-6 border-b flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {parseTags(selectedPost.etiquetas).map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedPost(null)} aria-label="Cerrar">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Imagen destacada */}
            {selectedPost.imageUrl !== FALLBACK_IMG && (
              <div className="h-56 md:h-64 overflow-hidden">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Contenido */}
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{selectedPost.title}</h1>
              <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(selectedPost.created_at)}
                </span>
                {selectedPost.content && (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {getReadingTime(selectedPost.content)} min de lectura
                  </span>
                )}
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none">
                {selectedPost.content ? (
                  <div className="whitespace-pre-wrap text-base leading-relaxed">
                    {selectedPost.content}
                  </div>
                ) : (
                  <div className="text-base leading-relaxed">{selectedPost.description}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Descubrir;
