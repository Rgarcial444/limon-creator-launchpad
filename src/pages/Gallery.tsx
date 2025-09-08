import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, Filter, Grid, List, ExternalLink, Calendar, Tag } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Artesanías México',
    category: 'ecommerce',
    type: 'Tienda en Línea',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    thumbnails: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop'
    ],
    description: 'Plataforma completa de e-commerce para artesanos mexicanos con sistema de pagos integrado.',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    date: '2024-01',
    client: 'Artesanías Mexicanas SA',
    features: ['Carrito de compras', 'Pagos seguros', 'Inventario automático', 'Panel administrativo']
  },
  {
    id: 2,
    title: 'App Delivery Restaurantes',
    category: 'mobile',
    type: 'Aplicación Móvil',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    thumbnails: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop'
    ],
    description: 'Aplicación móvil para pedidos de comida con geolocalización y tracking en tiempo real.',
    technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
    date: '2023-11',
    client: 'Grupo Restaurantero del Centro',
    features: ['GPS tracking', 'Push notifications', 'Pagos móviles', 'Calificaciones']
  },
  {
    id: 3,
    title: 'Sistema CRM Inmobiliaria',
    category: 'software',
    type: 'Sistema Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    thumbnails: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop'
    ],
    description: 'CRM personalizado para gestión completa de propiedades y clientes inmobiliarios.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'WhatsApp API'],
    date: '2023-09',
    client: 'Inmobiliaria Premier',
    features: ['Gestión de leads', 'Automatización', 'Reportes', 'Integración WhatsApp']
  },
  {
    id: 4,
    title: 'Landing Clínica Dental',
    category: 'web',
    type: 'Sitio Web',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    thumbnails: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop'
    ],
    description: 'Sitio web optimizado para conversión con sistema de citas en línea.',
    technologies: ['React', 'Tailwind CSS', 'Calendar API', 'Email JS'],
    date: '2023-08',
    client: 'Clínica Dental Sonrisas',
    features: ['Citas online', 'Galería antes/después', 'SEO optimizado', 'Formulario contacto']
  },
  {
    id: 5,
    title: 'Marketplace Servicios',
    category: 'marketplace',
    type: 'Plataforma Web',
    image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=600&h=400&fit=crop',
    thumbnails: [
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    ],
    description: 'Marketplace para conectar profesionales independientes con clientes.',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe Connect', 'Socket.io'],
    date: '2023-06',
    client: 'Servicios Profesionales MX',
    features: ['Multi-vendor', 'Chat tiempo real', 'Sistema comisiones', 'Calificaciones']
  },
  {
    id: 6,
    title: 'Dashboard Analytics',
    category: 'software',
    type: 'Panel de Control',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    thumbnails: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop'
    ],
    description: 'Dashboard interactivo para análisis de datos con gráficos en tiempo real.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Express'],
    date: '2023-04',
    client: 'Analytics Corp',
    features: ['Gráficos interactivos', 'Tiempo real', 'Exportar reportes', 'Multi-usuario']
  }
];

const categories = [
  { id: 'all', name: 'Todos los Proyectos', count: projects.length },
  { id: 'web', name: 'Sitios Web', count: projects.filter(p => p.category === 'web').length },
  { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
  { id: 'mobile', name: 'Apps Móviles', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'software', name: 'Software', count: projects.filter(p => p.category === 'software').length },
  { id: 'marketplace', name: 'Marketplaces', count: projects.filter(p => p.category === 'marketplace').length }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = projects
    .filter(project => 
      selectedCategory === 'all' || project.category === selectedCategory
    )
    .filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const openProject = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.thumbnails.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.thumbnails.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setSelectedProject(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Galería de Proyectos
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Trabajos
            <span className="block text-primary">en Acción</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explora una selección de nuestros proyectos más destacados y descubre cómo transformamos ideas en soluciones digitales exitosas.
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="px-6 mb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-card rounded-2xl p-6 shadow-soft border">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar por tecnología, título..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* View Mode */}
              <div className="flex bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 mb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-6xl">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-soft border hover-lift cursor-pointer transition-all duration-300"
                  onClick={() => openProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-black/80 text-white">
                      {project.type}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(project.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long' })}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-xl p-6 shadow-soft border hover-lift cursor-pointer transition-all duration-300"
                  onClick={() => openProject(project)}
                >
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                    
                    <div className="md:col-span-3 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge>{project.type}</Badge>
                      </div>
                      
                      <p className="text-muted-foreground">{project.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(project.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long' })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron proyectos</h3>
              <p className="text-muted-foreground">Prueba ajustando los filtros de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image Gallery */}
                <div className="relative">
                  <img
                    src={selectedProject.thumbnails[currentImageIndex]}
                    alt={`${selectedProject.title} - Vista ${currentImageIndex + 1}`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  
                  {selectedProject.thumbnails.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        →
                      </button>
                      
                      <div className="flex justify-center mt-4 gap-2">
                        {selectedProject.thumbnails.map((_: any, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              currentImageIndex === index ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Descripción</h4>
                      <p className="text-muted-foreground">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Tag className="h-4 w-4 mr-2" />
                        Características Principales
                      </h4>
                      <ul className="space-y-1">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Información del Proyecto</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Cliente:</span>
                          <span>{selectedProject.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fecha:</span>
                          <span>{new Date(selectedProject.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long' })}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tipo:</span>
                          <span>{selectedProject.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Tecnologías Utilizadas</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech: string, index: number) => (
                          <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-6 border-t">
                  <p className="text-muted-foreground mb-4">
                    ¿Te inspiró este proyecto? Creemos algo increíble juntos.
                  </p>
                  <Button
                    onClick={() => {
                      const message = `Hola! Me interesa un proyecto similar a "${selectedProject.title}". ¿Podríamos conversarlo?`;
                      window.open(`https://wa.me/5215512345678?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Solicitar Proyecto Similar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;