import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Zap, Star, Filter } from 'lucide-react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Navigation from '@/components/Navigation';
import { MarqueeAnimation } from '@/components/ui/marquee-effect';

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
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = services
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory);

  const handleContact = (serviceName: string) => {
    const message = `Hola! Me interesa el servicio: ${serviceName}. ¿Podrías darme más información?`;
    const whatsappURL = `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      
      {/* Hero Section Minimalista */}
      <section className="py-20 px-6 text-center bg-white">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-slate-100 text-slate-700 border-slate-200">
            Catálogo de Servicios
          </Badge>
          <h1 className="text-5xl md:text-6xl font-light leading-tight text-slate-900 mb-6">
            Soluciones Digitales
            <span className="block text-slate-600 text-4xl md:text-5xl mt-2">
              Para Tu Negocio
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
            Descubre nuestros servicios especializados en desarrollo web, aplicaciones móviles y software personalizado.
          </p>
        </div>
      </section>

      {/* Category Filter Minimalista */}
      <section className="px-6 py-12 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-slate-900 text-white border-transparent shadow-lg hover:shadow-xl'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Minimalista */}
      <section className="px-6 py-20 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs flex items-center shadow-lg">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="text-xs bg-slate-100 text-slate-600 border-slate-200">
                      {service.duration}
                    </Badge>
                    <span className="text-lg font-semibold text-slate-900">
                      {service.price}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-slate-900 font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-slate-500">
                          <Zap className="h-3 w-3 mr-2 text-slate-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <RainbowButton
                      onClick={() => handleContact(service.title)}
                      className="w-full !bg-slate-900 !text-white hover:!bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
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
              <Filter className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-900">No se encontraron servicios</h3>
              <p className="text-slate-600">Prueba ajustando los filtros de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* Marquee Effect Footer Minimalista */}
      <footer className="relative px-6 overflow-hidden bg-slate-900 py-8">
        <div className="relative space-y-4">
          <MarqueeAnimation
            direction="left"
            baseVelocity={-2}
            className="text-3xl md:text-4xl lg:text-5xl py-2"
          >
            <span className="text-white font-light tracking-wider">
              DESARROLLO WEB • E-COMMERCE • APPS MÓVILES • SOFTWARE • INNOVACIÓN
            </span>
          </MarqueeAnimation>
          
          <MarqueeAnimation
            direction="right"
            baseVelocity={-1.5}
            className="text-2xl md:text-3xl lg:text-4xl py-2"
          >
            <span className="text-slate-400 font-light tracking-wider">
              TECNOLOGÍA • DISEÑO • SOLUCIONES • CREATIVIDAD • RESULTADOS
            </span>
          </MarqueeAnimation>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
