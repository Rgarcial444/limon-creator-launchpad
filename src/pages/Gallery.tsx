import React from 'react';
import Navigation from '@/components/Navigation';
import { EnhancedGallery } from "@/components/ui/enhanced-gallery";

const Gallery = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Plataforma E-commerce Avanzada",
      category: "Desarrollo Web",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      views: 2180,
      readTime: 8,
      rating: 5,
      description: "Una plataforma completa de comercio electrónico con funcionalidades avanzadas de gestión de inventario, procesamiento de pagos y análisis de ventas.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      completionDate: "2024-03-15"
    },
    {
      id: 2,
      title: "App Móvil de Gestión",
      category: "Desarrollo Móvil",
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      views: 1456,
      readTime: 12,
      rating: 4,
      description: "Aplicación móvil para la gestión eficiente de recursos empresariales con funciones offline y sincronización en tiempo real.",
      technologies: ["React Native", "Firebase", "Redux"],
      completionDate: "2024-02-28"
    },
    {
      id: 3,
      title: "Sistema de Gestión Empresarial",
      category: "Software Corporativo",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      views: 987,
      readTime: 15,
      rating: 4,
      description: "Sistema integral para la gestión de recursos humanos, finanzas y operaciones empresariales con reportes automatizados.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      completionDate: "2024-01-20"
    },
    {
      id: 4,
      title: "Marketplace de Servicios",
      category: "Plataforma Digital",
      imageUrl: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      views: 1250,
      readTime: 10,
      rating: 5,
      description: "Marketplace que conecta proveedores de servicios con clientes, incluyendo sistema de reseñas y pagos integrados.",
      technologies: ["Next.js", "Express", "MongoDB", "PayPal"],
      completionDate: "2024-04-10"
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      category: "Inteligencia de Negocios",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      views: 890,
      readTime: 6,
      rating: 4,
      description: "Dashboard interactivo para análisis de datos empresariales con visualizaciones avanzadas y reportes personalizables.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      completionDate: "2024-03-25"
    },
    {
      id: 6,
      title: "Sistema de Reservas Online",
      category: "Desarrollo Web",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      views: 1678,
      readTime: 9,
      rating: 5,
      description: "Plataforma de reservas en línea para hoteles y restaurantes con integración de calendario y notificaciones automáticas.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      completionDate: "2024-05-05"
    },
    {
      id: 7,
      title: "App de Delivery",
      category: "Desarrollo Móvil",
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      views: 2340,
      readTime: 11,
      rating: 5,
      description: "Aplicación completa de delivery con seguimiento en tiempo real, múltiples métodos de pago y sistema de calificaciones.",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      completionDate: "2024-04-20"
    },
    {
      id: 8,
      title: "Portal Educativo",
      category: "Plataforma Digital",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      views: 1123,
      readTime: 14,
      rating: 4,
      description: "Portal educativo con cursos online, sistema de evaluaciones y certificaciones digitales.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      completionDate: "2024-02-15"
    }
  ];

  const handleProjectClick = (project: any) => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa conocer más sobre el proyecto "${project.title}". ¿Podríamos hablar sobre proyectos similares?`
    );
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <EnhancedGallery
        title="Portfolio de Proyectos"
        description="Explora nuestra colección de proyectos exitosos y descubre cómo transformamos ideas en soluciones digitales innovadoras"
        projects={portfolioProjects}
        onProjectClick={handleProjectClick}
      />
    </div>
  );
};

export default Gallery;