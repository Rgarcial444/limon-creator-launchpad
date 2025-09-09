import React from 'react';
import Navigation from '@/components/Navigation';
import { Component } from "@/components/ui/blog-posts";

const Gallery = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Plataforma E-commerce Avanzada",
      category: "Desarrollo Web",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      href: "#",
      views: 2180,
      readTime: 8,
      rating: 5
    },
    {
      id: 2,
      title: "App Móvil de Gestión",
      category: "Desarrollo Móvil",
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      href: "#",
      views: 1456,
      readTime: 12,
      rating: 4
    },
    {
      id: 3,
      title: "Sistema de Gestión Empresarial",
      category: "Software Corporativo",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
      href: "#",
      views: 987,
      readTime: 15,
      rating: 4
    },
    {
      id: 4,
      title: "Marketplace de Servicios",
      category: "Plataforma Digital",
      imageUrl: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      href: "#",
      views: 1250,
      readTime: 10,
      rating: 5
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      category: "Inteligencia de Negocios",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      href: "#",
      views: 890,
      readTime: 6,
      rating: 4
    }
  ];

  const handleProjectClick = (project: any) => {
    // Handle project click - could open modal, navigate, etc.
    const message = encodeURIComponent(
      `¡Hola! Me interesa conocer más sobre el proyecto "${project.title}". ¿Podríamos hablar sobre proyectos similares?`
    );
    window.open(`https://wa.me/5491123456789?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Component
        title="Nuestros Proyectos Destacados"
        description="Explora nuestra colección de proyectos exitosos y descubre cómo transformamos ideas en soluciones digitales innovadoras"
        backgroundLabel="PORTFOLIO"
        backgroundPosition="left"
        posts={portfolioProjects}
        className="mb-16"
        onPostClick={handleProjectClick}
      />
    </div>
  );
};

export default Gallery;