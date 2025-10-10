import { Code2, Smartphone, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
          "description": "Creamos sitios web modernos y responsivos con React, TypeScript y las últimas tecnologías. Soluciones escalables y optimizadas para SEO.",
          "provider": {
            "@type": "Organization",
            "name": "Limon.io"
          }
        },
        {
          "@type": "Service",
          "position": 2,
          "name": "Aplicaciones Móviles",
          "description": "Desarrollo de aplicaciones móviles nativas e híbridas con React Native. Experiencias móviles fluidas y optimizadas.",
          "provider": {
            "@type": "Organization",
            "name": "Limon.io"
          }
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "WordPress y CMS",
          "description": "Sitios WordPress personalizados, plugins a medida y soluciones de gestión de contenido empresarial.",
          "provider": {
            "@type": "Organization",
            "name": "Limon.io"
          }
        },
        {
          "@type": "Service",
          "position": 4,
          "name": "Optimización y Rendimiento",
          "description": "Mejoramos la velocidad, SEO y rendimiento de tu sitio web. Auditorías técnicas y optimización continua.",
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

  const services = [
    {
      icon: Code2,
      title: "Desarrollo Web Profesional",
      description: "Creamos sitios web modernos y responsivos con React, TypeScript y las últimas tecnologías. Soluciones escalables y optimizadas para SEO.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Desarrollo de aplicaciones móviles nativas e híbridas con React Native. Experiencias móviles fluidas y optimizadas.",
      technologies: ["React Native", "iOS", "Android", "Flutter"]
    },
    {
      icon: Globe,
      title: "WordPress y CMS",
      description: "Sitios WordPress personalizados, plugins a medida y soluciones de gestión de contenido empresarial.",
      technologies: ["WordPress", "PHP", "WooCommerce", "Elementor"]
    },
    {
      icon: Zap,
      title: "Optimización y Rendimiento",
      description: "Mejoramos la velocidad, SEO y rendimiento de tu sitio web. Auditorías técnicas y optimización continua.",
      technologies: ["SEO", "Performance", "Analytics", "Core Web Vitals"]
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <header className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          Nuestros Servicios de Desarrollo Web
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Soluciones tecnológicas completas para impulsar tu presencia digital. 
          Desde desarrollo web hasta aplicaciones móviles y optimización SEO.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/5 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="text-center">
        <Link to="/catalogo">
          <Button size="lg" variant="default" className="text-lg px-8">
            Ver Todos los Servicios
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedServices;
