import { Code2, Smartphone, Globe, Zap, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { MarqueeAnimation } from "@/components/ui/marquee-effect";
const FeaturedServices = () => {
  useEffect(() => {
    // Add Service schema markup for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [{
        "@type": "Service",
        "position": 1,
        "name": "Desarrollo Web Profesional",
        "description": "Sitios web modernos con React y TypeScript optimizados para SEO",
        "provider": {
          "@type": "Organization",
          "name": "Limon.io"
        }
      }, {
        "@type": "Service",
        "position": 2,
        "name": "Aplicaciones Móviles",
        "description": "Apps móviles nativas e híbridas con React Native",
        "provider": {
          "@type": "Organization",
          "name": "Limon.io"
        }
      }, {
        "@type": "Service",
        "position": 3,
        "name": "WordPress y CMS",
        "description": "Sitios WordPress personalizados y gestión de contenido",
        "provider": {
          "@type": "Organization",
          "name": "Limon.io"
        }
      }]
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const stats = [
    { number: "50+", label: "Proyectos" },
    { number: "98%", label: "Satisfacción" },
    { number: "24/7", label: "Soporte" }
  ];
  const services = [{
    icon: Code2,
    title: "Desarrollo Web",
    description: "Sitios modernos con React y TypeScript",
    tags: ["React", "TypeScript", "SEO"]
  }, {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Experiencias nativas e híbridas",
    tags: ["React Native", "iOS", "Android"]
  }, {
    icon: Globe,
    title: "WordPress & CMS",
    description: "Gestión de contenido personalizada",
    tags: ["WordPress", "WooCommerce"]
  }, {
    icon: Zap,
    title: "Optimización",
    description: "Velocidad, SEO y rendimiento",
    tags: ["Performance", "Analytics"]
  }];
  return <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Bar with Marquee */}
        <div className="mb-20">
          <MarqueeAnimation baseVelocity={3} className="text-2xl md:text-3xl text-muted-foreground/30">
            React • TypeScript • Tailwind • Node.js • WordPress • 
          </MarqueeAnimation>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors" />
                  <div className="relative text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="mb-16">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Nuestros Servicios</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              Soluciones que impulsan<br />tu negocio digital
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tecnología de vanguardia para crear experiencias excepcionales
            </p>
          </header>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLarge = index === 0 || index === 3;
              
              return (
                <article 
                  key={index} 
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                    isLarge ? 'lg:row-span-2' : ''
                  }`}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative p-6 ${isLarge ? 'lg:p-8 h-full flex flex-col justify-between' : ''}`}>
                    {/* Icon with glow effect */}
                    <div className="mb-6">
                      <div className="relative inline-flex">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500" />
                        <div className="relative p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="h-7 w-7" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-muted-foreground mb-4 ${isLarge ? 'text-base' : 'text-sm'}`}>
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Hover arrow indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/catalogo">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explorar Todos los Servicios
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default FeaturedServices;