import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Zap, Star, Filter, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Navigation from '@/components/Navigation';

const services = [
  {
    id: 1,
    title: 'Sitio Web Corporativo',
    description: 'Diseño web profesional que refleja la identidad de tu marca con funcionalidades avanzadas.',
    category: 'web',
    price: 'Desde $2,500 MXN',
    originalPrice: '$4,000 MXN',
    features: ['Diseño responsivo', 'SEO optimizado', 'Panel de administración', 'Integración con redes sociales'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '2-3 semanas',
    popular: false,
    savings: '37%'
  },
  {
    id: 2,
    title: 'E-commerce Avanzado',
    description: 'Tienda en línea completa con sistema de pagos, inventario y gestión de pedidos.',
    category: 'ecommerce',
    price: 'Desde $4,500 MXN',
    originalPrice: '$7,200 MXN',
    features: ['Carrito de compras', 'Pagos seguros', 'Gestión de inventario', 'Panel de ventas'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    rating: 4.8,
    duration: '4-6 semanas',
    popular: true,
    savings: '38%'
  },
  {
    id: 3,
    title: 'Aplicación Móvil',
    description: 'App nativa o híbrida para iOS y Android con funcionalidades personalizadas.',
    category: 'mobile',
    price: 'Desde $6,000 MXN',
    originalPrice: '$10,000 MXN',
    features: ['Multiplataforma', 'Push notifications', 'Modo offline', 'Integración con APIs'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '6-8 semanas',
    popular: false,
    savings: '40%'
  },
  {
    id: 4,
    title: 'Landing Page Optimizada',
    description: 'Página de conversión diseñada para maximizar ventas y generar leads.',
    category: 'web',
    price: 'Desde $1,800 MXN',
    originalPrice: '$2,800 MXN',
    features: ['Conversión optimizada', 'A/B Testing', 'Analytics integrado', 'Formularios avanzados'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop',
    rating: 4.7,
    duration: '1-2 semanas',
    popular: false,
    savings: '36%'
  },
  {
    id: 5,
    title: 'Sistema CRM',
    description: 'Gestión completa de clientes y ventas con dashboard personalizado.',
    category: 'software',
    price: 'Desde $5,500 MXN',
    originalPrice: '$8,500 MXN',
    features: ['Gestión de leads', 'Automatización', 'Reportes detallados', 'Integración con email'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    rating: 4.8,
    duration: '5-7 semanas',
    popular: true,
    savings: '35%'
  },
  {
    id: 6,
    title: 'Marketplace Personalizado',
    description: 'Plataforma multi-vendor con sistema de comisiones y gestión avanzada.',
    category: 'ecommerce',
    price: 'Desde $8,000 MXN',
    originalPrice: '$12,000 MXN',
    features: ['Multi-vendor', 'Sistema de comisiones', 'Chat integrado', 'Gestión de disputas'],
    image: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=250&fit=crop',
    rating: 4.9,
    duration: '8-10 semanas',
    popular: false,
    savings: '33%'
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: Globe, count: 6 },
  { id: 'web', name: 'Sitios Web', icon: Globe, count: 2 },
  { id: 'ecommerce', name: 'E-commerce', icon: Smartphone, count: 2 },
  { id: 'mobile', name: 'Apps Móviles', icon: Smartphone, count: 1 },
  { id: 'software', name: 'Software', icon: Code, count: 1 }
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = services
    .filter(service => selectedCategory === 'all' || service.category === selectedCategory);

  const handleContact = (serviceName: string) => {
    const message = `Hola! Me interesa el servicio: ${serviceName}. ¿Podrías darme más información?`;
    const whatsappURL = `https://wa.me/5215512345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Fondo animado con patrones sutiles */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-cyan-900/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section Renovado */}
        <section className="py-12 px-6 text-center">
          <div className="container mx-auto max-w-5xl">
            {/* Badge de oferta especial */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">🔥 Ofertas Especiales Disponibles</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Soluciones Digitales
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Que Transforman Negocios
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              💰 Digitalizar tu negocio cuesta poco. 💸 Lo que cuesta caro es perder clientes porque no te encuentran en digital. 
              Con Limon.io tienes soluciones de bajo costo, listas para que vendas más. 📲 No gastes: invierte.
            </p>

            {/* Stats mejorados */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">30+</div>
                <div className="text-xs text-slate-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">99%</div>
                <div className="text-xs text-slate-400">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">24h</div>
                <div className="text-xs text-slate-400">Respuesta</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter Mejorado */}
        <section className="px-6 mb-8">
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
                    className={`text-sm transition-all duration-300 group ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-xl hover:shadow-2xl'
                        : 'bg-white/10 text-slate-300 border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.name}
                    <Badge className="ml-2 bg-white/20 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid Renovado */}
        <section className="px-6 pb-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Card key={service.id} className={`group hover-lift overflow-hidden border transition-all duration-300 backdrop-blur-md ${
                  service.popular 
                    ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 shadow-2xl' 
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                } shadow-xl hover:shadow-2xl`}>
                  
                  {/* Badge "Popular" */}
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none shadow-lg">
                        🔥 Popular
                      </Badge>
                    </div>
                  )}

                  {/* Savings Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-green-500/90 text-white border-none shadow-lg">
                      -{service.savings}
                    </Badge>
                  </div>

                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded-md text-xs backdrop-blur-sm">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {service.rating}
                      </div>
                      <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded-md text-xs backdrop-blur-sm">
                        <Clock className="h-3 w-3 mr-1 text-blue-400" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    {/* Precio con descuento */}
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        {service.price}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        {service.originalPrice}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Features con mejor diseño */}
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-slate-300">
                            <CheckCircle className="h-3 w-3 mr-2 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <RainbowButton
                        onClick={() => handleContact(service.title)}
                        className="w-full !bg-gradient-to-r from-cyan-500 to-blue-500 !text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        size="sm"
                      >
                        <span>Solicitar Cotización</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </RainbowButton>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty state mejorado */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">No hay servicios disponibles</h3>
                <p className="text-slate-400 text-lg">Prueba seleccionando otra categoría</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-12 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Creamos soluciones personalizadas para tu negocio. Cuéntanos tu idea y la hacemos realidad.
              </p>
              <RainbowButton
                onClick={() => handleContact('Proyecto Personalizado')}
                className="!bg-gradient-to-r from-purple-500 to-pink-500 !text-white hover:from-purple-600 hover:to-pink-600 shadow-xl hover:shadow-2xl"
                size="lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Consultoría Gratuita
              </RainbowButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
