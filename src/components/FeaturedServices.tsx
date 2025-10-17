import { Code2, Smartphone, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const FeaturedServices = () => {
  useEffect(() => {
    // Add Service schema markup for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Desarrollo Web Profesional",
          "description": "Sitios web modernos con React y TypeScript optimizados para SEO",
          "provider": {
            "@type": "Organization",
            "name": "Limon.io"
          }
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "Aplicaciones Móviles",
          "description": "Apps móviles nativas e híbridas con React Native",
          "provider": {
            "@type": "Organization",
            "name": "Limon.io"
          }
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "WordPress y CMS",
          "description": "Sitios WordPress personalizados y gestión de contenido",
          "provider": {
            "@type": "Organization",
            "name": "Limon.io"
          }
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const benefits = [
    { icon: CheckCircle2, text: "Diseño que inspira confianza" },
    { icon: CheckCircle2, text: "Implementación rápida" },
    { icon: CheckCircle2, text: "Precio fijo sin sorpresas" }
  ];

  const services = [
    {
      icon: Code2,
      title: "Desarrollo Web",
      description: "Sitios modernos con React y TypeScript",
      tags: ["React", "TypeScript", "SEO"]
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Experiencias nativas e híbridas",
      tags: ["React Native", "iOS", "Android"]
    },
    {
      icon: Globe,
      title: "WordPress & CMS",
      description: "Gestión de contenido personalizada",
      tags: ["WordPress", "WooCommerce"]
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Velocidad, SEO y rendimiento",
      tags: ["Performance", "Analytics"]
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Benefits Bar */}
      <div className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-12">
        <header className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Nuestros Servicios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Soluciones de desarrollo web
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnología moderna para impulsar tu presencia digital
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article 
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs rounded-md bg-primary/5 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <Link to="/catalogo">
          <Button size="lg" variant="default" className="group">
            Ver Catálogo Completo
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedServices;
