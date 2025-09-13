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

        // Transform Supabase data to BlogPost format
        const transformedPosts: BlogPost[] = data?.map((post: any, index: number) => ({
          id: post.id,
          title: post.title || 'Contenido Innovador',
          category: post.etiquetas?.toLowerCase().split(',')[0] || post.type?.toLowerCase() || 'general',
          imageUrl: post.url || '/placeholder.svg',
          href: post.type === 'external' && post.content ? post.content : '#',
          views: 150 + (post.id * 47) % 2000, // Deterministic views based on post id
          readTime: 2 + (post.id * 13) % 8, // Deterministic read time
          rating: 4 + ((post.id * 23) % 100) / 100, // Deterministic rating
          type: post.type || 'internal',
          description: post.descripción || 'Descubre nuevas funcionalidades y experimentos que estamos desarrollando.',
          etiquetas: post.etiquetas,
          created_at: post.created_at
        })) || [];

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
    if (post.href && post.href !== '#') {
      window.open(post.href, '_blank');
    } else {
      const message = `Hola! Me interesa saber más sobre: ${post.title}`;
      const whatsappUrl = `https://wa.me/5217223145340?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

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
        {/* Hero Section Optimizado */}
        <section className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-50" />
          
          <div className="container mx-auto max-w-4xl text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Laboratorio de Innovación
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground/80 bg-clip-text text-transparent animate-fade-in">
              Descubrir
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Explora nuestros últimos experimentos, funcionalidades revolucionarias y contenido que empuja los límites de la innovación.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center items-center mb-8 animate-fade-in">
              <div className="flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 border">
                <Eye className="w-4 h-4 text-primary" />
                <span className="font-medium">+{totalViews.toLocaleString()}</span>
                <span className="text-muted-foreground">vistas</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 border">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-medium">Actualizado</span>
                <span className="text-muted-foreground">semanalmente</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 border">
                <Star className="w-4 h-4 text-primary" />
                <span className="font-medium">Contenido</span>
                <span className="text-muted-foreground">premium</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid - Directamente después del hero */}
        <section className="px-4 pb-20">
          <div className="container mx-auto max-w-6xl">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
