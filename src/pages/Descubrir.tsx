import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Loader2, 
  Sparkles, 
  Zap, 
  Beaker, 
  Lightbulb, 
  TrendingUp,
  ExternalLink,
  Clock,
  Eye,
  Star,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  views: number;
  readTime?: number;
  rating?: number;
  type: string;
  description?: string;
  etiquetas?: string;
  created_at: string;
}

const categoryIcons: Record<string, any> = {
  'experimentos': Beaker,
  'features': Zap,
  'tutoriales': Lightbulb,
  'tendencias': TrendingUp,
  'general': Sparkles
};

const categoryColors: Record<string, string> = {
  'experimentos': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'features': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'tutoriales': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'tendencias': 'bg-green-500/20 text-green-400 border-green-500/30',
  'general': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
};

const Descubrir = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null); // 👈 nuevo estado

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
  // Generar URL pública si la imagen viene de Supabase Storage
  let imageUrl = '/placeholder.svg';
  if (post.imagen) {
    const { publicUrl } = supabase
      .storage
      .from('imagenes limoniocreators') // 👈 reemplaza 'imagenes' con el nombre de tu bucket
      .getPublicUrl(post.imagen); // post.imagen = path dentro del bucket
    imageUrl = publicUrl || '/placeholder.svg';
  }

  return {
    id: post.id,
    title: post.title || 'Contenido Innovador',
    category: post.etiquetas?.toLowerCase().split(',')[0] || post.type?.toLowerCase() || 'general',
    imageUrl: imageUrl,            // 👈 usa la URL pública
    href: post.url || post.content || '',
    views: 150 + (post.id * 47) % 2000,
    readTime: 2 + (post.id * 13) % 8,
    rating: 4 + ((post.id * 23) % 100) / 100,
    type: post.type || 'internal',
    description: post.descripción || 'Descubre nuevas funcionalidades y experimentos que estamos desarrollando.',
    etiquetas: post.etiquetas,
    created_at: post.created_at
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
    if (post.href && post.href.trim() !== '') {
      window.open(post.href, '_blank'); // abre URL si existe
    } else {
      setSelectedPost(post); // abre popup con descripción
    }
  };

  const filteredPosts = useMemo(() => 
    posts.filter(post => 
      activeFilter === 'all' || post.category === activeFilter
    ), [posts, activeFilter]
  );

  const categories = useMemo(() => 
    ['all', ...Array.from(new Set(posts.map(post => post.category)))], 
    [posts]
  );

  const totalViews = useMemo(() => 
    posts.reduce((acc, post) => acc + post.views, 0), 
    [posts]
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
            <p className="text-muted-foreground animate-pulse">Cargando innovaciones...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-12 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-50" />
          <div className="container mx-auto max-w-4xl text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Lo nuevo
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent animate-fade-in">
              Laboratorio de Innovación
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Explora nuestros últimos experimentos, funcionalidades revolucionarias y contenido que empuja los límites de la innovación.
            </p>
            <div className="flex flex-wrap gap-3 justify-center items-center mb-8 animate-fade-in">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="w-4 h-4" />
                +{totalViews.toLocaleString()} vistas
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                Actualizado semanalmente
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                Contenido premium
              </div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-4 pb-20">
          <div className="container mx-auto max-w-6xl">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <Beaker className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    {activeFilter === 'all' ? 'Laboratorio en construcción' : `No hay contenido en ${activeFilter}`}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {activeFilter === 'all' 
                      ? 'Estamos cocinando experimentos increíbles. ¡Pronto tendrás acceso a innovaciones que cambiarán todo!'
                      : `Pronto agregaremos contenido fascinante sobre ${activeFilter}.`
                    }
                  </p>
                  <Button 
                    onClick={() => {
                      const message = "Hola! Me gustaría saber más sobre los próximos experimentos y features";
                      window.open(`https://wa.me/5217223145340?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Mantenerme informado
                  </Button>
                </div>
              </div>
            ) : (
              <div className={cn(
                "grid gap-6",
                viewMode === 'grid' 
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1 max-w-4xl mx-auto"
              )}>
                {filteredPosts.map((post, index) => {
                  const IconComponent = categoryIcons[post.category] || Sparkles;
                  const categoryStyle = categoryColors[post.category] || categoryColors.general;
                  
                  return (
                    <Card 
                      key={post.id}
                      className={cn(
                        "group cursor-pointer overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200 hover:scale-[1.01] hover:shadow-lg",
                        viewMode === 'list' && "flex-row",
                        index === 0 && viewMode === 'grid' && filteredPosts.length > 1 && "md:col-span-2 lg:col-span-2"
                      )}
                      onClick={() => handlePostClick(post)}
                    >
                      <div className={cn(
                        "relative overflow-hidden",
                        viewMode === 'list' ? "w-1/3 h-48" : index === 0 && viewMode === 'grid' ? "h-64" : "h-48"
                      )}>
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className={cn("border", categoryStyle)}>
                            <IconComponent className="w-3 h-3 mr-1" />
                            {post.category}
                          </Badge>
                        </div>
                        {post.type === 'external' && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <CardContent className={cn(
                        "p-6",
                        viewMode === 'list' && "flex-1"
                      )}>
                        <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
                          {post.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}min
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{post.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal de descripción */}
      {selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-card rounded-2xl shadow-xl max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedPost.title}</h2>
            <p className="text-muted-foreground whitespace-pre-line">
              {selectedPost.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Descubrir;
