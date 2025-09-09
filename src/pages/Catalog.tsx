import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Globe, Smartphone, Code, Zap, Star } from 'lucide-react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Navigation from '@/components/Navigation';

const services = [
  {
    id: 1,
    title: 'Sitio Web Corporativo',
    description: 'Diseño web profesional que refleja la identidad de tu marca con funcionalidades avanzadas.',
    category: 'web',
    price: 'Desde $2,500 MXN',
    features: ['Diseño responsivo', 'SEO optimizado', 'Panel de administración', 'Integración con redes sociales'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '2-3 semanas'
  },
  {
    id: 2,
    title: 'E-commerce Avanzado',
    description: 'Tienda en línea completa con sistema de pagos, inventario y gestión de pedidos.',
    category: 'ecommerce',
    price: 'Desde $4,500 MXN',
    features: ['Carrito de compras', 'Pagos seguros', 'Gestión de inventario', 'Panel de ventas'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    rating: 4.8,
    duration: '4-6 semanas'
  },
  {
    id: 3,
    title: 'Aplicación Móvil',
    description: 'App nativa o híbrida para iOS y Android con funcionalidades personalizadas.',
    category: 'mobile',
    price: 'Desde $6,000 MXN',
    features: ['Multiplataforma', 'Push notifications', 'Modo offline', 'Integración con APIs'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '6-8 semanas'
  },
  {
    id: 4,
    title: 'Landing Page Optimizada',
    description: 'Página de conversión diseñada para maximizar ventas y generar leads.',
    category: 'web',
    price: 'Desde $1,800 MXN',
    features: ['Conversión optimizada', 'A/B Testing', 'Analytics integrado', 'Formularios avanzados'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
    rating: 4.7,
    duration: '1-2 semanas'
  },
  {
    id: 5,
    title: 'Sistema CRM',
    description: 'Gestión completa de clientes y ventas con dashboard personalizado.',
    category: 'software',
    price: 'Desde $5,500 MXN',
    features: ['Gestión de leads', 'Automatización', 'Reportes detallados', 'Integración con email'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    rating: 4.8,
    duration: '5-7 semanas'
  },
  {
    id: 6,
    title: 'Marketplace Personalizado',
    description: 'Plataforma multi-vendor con sistema de comisiones y gestión avanzada.',
    category: 'ecommerce',
    price: 'Desde $8,000 MXN',
    features: ['Multi-vendor', 'Sistema de comisiones', 'Chat integrado', 'Gestión de disputas'],
    image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '8-10 semanas'
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: Globe },
  { id: 'web', name: 'Sitios Web', icon: Globe },
  { id: 'ecommerce', name: 'E-commerce', icon: Smartphone },
  { id: 'mobile', name: 'Apps Móviles', icon: Smartphone },
  { id: 'software', name: 'Software', icon: Code }
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = services
    .filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price') return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.title.localeCompare(b.title);
    });

  const handleContact = (serviceName: string) => {
    const message = `Hola! Me interesa el servicio: ${serviceName}. ¿Podrías darme más información?`;
    const whatsappURL = `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Navigation />
      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Catálogo de Servicios
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones Digitales
            <span className="block text-primary">Para Tu Negocio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre nuestros servicios especializados en desarrollo web, aplicaciones móviles y software personalizado.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-card rounded-2xl p-6 shadow-soft border">
            <div className="grid md:grid-cols-3 gap-4 items-center">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar servicios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="text-xs"
                    >
                      <Icon className="h-3 w-3 mr-1" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-md border border-input bg-background text-sm"
              >
                <option value="name">Ordenar por nombre</option>
                <option value="price">Ordenar por precio</option>
                <option value="rating">Ordenar por calificación</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover-lift overflow-hidden bg-card border shadow-soft hover:shadow-large transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded-md text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.duration}
                    </Badge>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-muted-foreground">
                          <Zap className="h-3 w-3 mr-1 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <RainbowButton
                      onClick={() => handleContact(service.title)}
                      className="w-full !bg-primary !text-primary-foreground hover:!bg-primary/90"
                      size="sm"
                    >
                      Solicitar Cotización
                    </RainbowButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No se encontraron servicios</h3>
              <p className="text-muted-foreground">Prueba ajustando los filtros de búsqueda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Catalog;