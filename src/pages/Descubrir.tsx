import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Component as BlogPosts } from "@/components/ui/blog-posts";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  views: number;
  readTime?: number;
  rating?: number;
  className?: string;
}

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
          title: post.title || 'Sin título',
          category: post.etiquetas?.split(',')[0] || post.type || 'General',
          imageUrl: post.url || '/placeholder.svg',
          href: post.type === 'external' && post.content ? post.content : '#',
          views: Math.floor(Math.random() * 1000) + 100, // Random views for demo
          readTime: Math.floor(Math.random() * 10) + 3, // Random read time
          rating: 4 + Math.random(), // Random rating between 4-5
          className: index === 0 ? 'primary' : undefined
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
      // Open WhatsApp with post info
      const message = `Hola! Me interesa saber más sobre: ${post.title}`;
      const whatsappUrl = `https://wa.me/5217223145340?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <BlogPosts
          title="Descubrir"
          description="Explora nuestros últimos experimentos, funcionalidades y contenido innovador. Mantente al día con las últimas tendencias y desarrollos."
          backgroundLabel="EXPLORE"
          backgroundPosition="left"
          posts={posts}
          onPostClick={handlePostClick}
          className="py-20"
        />
        
        {posts.length === 0 && (
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Próximamente contenido nuevo
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Estamos preparando contenido increíble para compartir contigo. 
              ¡Mantente atento a nuestras próximas publicaciones!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Descubrir;