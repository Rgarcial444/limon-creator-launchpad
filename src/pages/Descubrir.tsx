import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Loader2, 
  Calendar,
  User,
  ExternalLink,
  Clock,
  Eye,
  BookOpen,
  X,
  Hash,
  ArrowRight
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

const Descubrir = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await (supabase as any)
          .from('Blog')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching blog posts:', error);
          return;
        }

        const transformedPosts: BlogPost[] = data?.map((post: any) => {
          // Crear URL de imagen desde Supabase Storage si existe
          let imageUrl = '/placeholder.svg';
          if (post.imagenes) {
            // Si la imagen ya es una URL completa, usarla directamente
            if (post.imagenes.startsWith('http')) {
              imageUrl = post.imagenes;
            } else {
              // Si es un path, construir la URL de Supabase Storage
              const { data: { publicUrl } } = supabase
                .storage
                .from('imagenes limoniocreators')
                .getPublicUrl(post.imagenes);
              imageUrl = publicUrl || '/placeholder.svg';
            }
          }

          return {
            id: post.id,
            title: post.title || 'Sin título',
            content: post.content || '',
            description: post.descripción || 'Sin descripción disponible',
            imageUrl: imageUrl,
            url: post.url || '',
            type: post.type || 'article',
            etiquetas: post.etiquetas || '',
            created_at: post.created_at,
            is_published: post.is_published,
            author_id: post.author_id
          };
        }) || [];

        setPosts(transformedPosts);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handlePostClick = (post: BlogPost) => {
    // Si tiene URL externa, abrirla en nueva pestaña
    if (post.url && post.url.trim() !== '') {
      window.open(post.url, '_blank');
    } else {
      // Si no tiene URL externa, mostrar popup con el contenido
      setSelectedPost(post);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  const getTags = (etiquetas: string) => {
    return etiquetas ? etiquetas.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
  };

  const categories = [...new Set(posts.flatMap(post => getTags(post.etiquetas)))];
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => getTags(post.etiquetas).includes(selectedCategory));

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <p className="text-muted-foreground">Cargando artículos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Blog
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Descubrir
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explora nuestros últimos artículos, experimentos y reflexiones sobre tecnología e innovación.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        {categories.length > 0 && (
          <section className="py-8 px-4 border-b">
            <div className="container mx-auto max-w-4xl">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory('all')}
                  className="rounded-full"
                >
                  Todos
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
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
        )}

        {/* Blog Posts */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h2 className="text-2xl font-semibold mb-4">No hay artículos disponibles</h2>
                <p className="text-muted-foreground">
                  {selectedCategory === 'all' 
                    ? 'Pronto publicaremos contenido interesante.' 
                    : `No hay artículos en la categoría "${selectedCategory}".`
                  }
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <Card 
                    key={post.id}
                    className={cn(
                      "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm",
                      index === 0 && "md:bg-gradient-to-r md:from-primary/5 md:to-secondary/5"
                    )}
                    onClick={() => handlePostClick(post)}
                  >
                    <div className={cn(
                      "grid gap-6",
                      index === 0 ? "md:grid-cols-2" : "md:grid-cols-3"
                    )}>
                      {/* Image */}
                      <div className={cn(
                        "relative overflow-hidden",
                        index === 0 ? "h-64 md:h-80" : "h-48 md:h-full"
                      )}>
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {post.url && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={cn(
                        "p-6 flex flex-col justify-between",
                        index === 0 ? "md:col-span-1" : "md:col-span-2"
                      )}>
                        <div>
                          {/* Tags */}
                          {getTags(post.etiquetas).length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {getTags(post.etiquetas).slice(0, 3).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Title */}
                          <h2 className={cn(
                            "font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2",
                            index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                          )}>
                            {post.title}
                          </h2>

                          {/* Description */}
                          <p className={cn(
                            "text-muted-foreground mb-4 line-clamp-3",
                            index === 0 ? "text-base" : "text-sm"
                          )}>
                            {post.description}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.created_at)}
                            </div>
                            {post.content && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {getReadingTime(post.content)} min
                              </div>
                            )}
                          </div>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {getTags(selectedPost.etiquetas).map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedPost(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Featured Image */}
              {selectedPost.imageUrl !== '/placeholder.svg' && (
                <div className="h-64 overflow-hidden">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                {/* Article Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold mb-4">{selectedPost.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedPost.created_at)}
                    </div>
                    {selectedPost.content && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {getReadingTime(selectedPost.content)} min de lectura
                      </div>
                    )}
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  {selectedPost.content ? (
                    <div className="whitespace-pre-wrap text-base leading-relaxed">
                      {selectedPost.content}
                    </div>
                  ) : (
                    <div className="text-base leading-relaxed">
                      {selectedPost.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Descubrir;