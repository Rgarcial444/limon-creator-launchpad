import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Descubrir', href: '/descubrir' },
  { name: 'Servicios', href: '/catalogo' },
  { name: 'Nosotros', href: '/nosotros' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/25 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-3xl hover:text-primary transition-colors">
            Limon.io
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isDescubrir = item.name === 'Descubrir';
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    isActive 
                      ? 'text-white' 
                      : isDescubrir
                      ? 'text-primary hover:text-primary/80'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {isDescubrir && <Sparkles className="h-3.5 w-3.5 animate-pulse" />}
                    <span className={isDescubrir ? 'font-semibold' : ''}>{item.name}</span>
                    {isDescubrir && (
                      <Badge 
                        variant="secondary" 
                        className="ml-1 text-[10px] px-1.5 py-0 h-4 bg-primary/20 text-primary border-primary/30 group-hover:bg-primary/30 transition-colors"
                      >
                        Blog
                      </Badge>
                    )}
                  </div>
                  {isDescubrir && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              );
            })}
            <Button
              onClick={() => window.open('https://wa.me/5217223145340?text=Hola! Me gustaría conocer más sobre sus servicios', '_blank')}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contactar
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Menú</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              <nav className="space-y-4">
                {navItems.map((item) => {
                  const isDescubrir = item.name === 'Descubrir';
                  const isActive = location.pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-accent text-accent-foreground' 
                          : isDescubrir
                          ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isDescubrir && <Sparkles className="h-4 w-4" />}
                          <span className={isDescubrir ? 'font-semibold' : ''}>{item.name}</span>
                        </div>
                        {isDescubrir && (
                          <Badge 
                            variant="secondary" 
                            className="text-[10px] px-2 py-0.5 h-5 bg-primary text-primary-foreground"
                          >
                            Blog
                          </Badge>
                        )}
                      </div>
                    </Link>
                  );
                })}
                
                <div className="pt-4 border-t">
                  <Button
                    onClick={() => {
                      window.open('https://wa.me/5217223145340?text=Hola! Me gustaría conocer más sobre sus servicios', '_blank');
                      setIsOpen(false);
                    }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Contactar por WhatsApp
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
