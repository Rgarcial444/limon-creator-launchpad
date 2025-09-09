import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#' },
  { name: 'Galería', href: '#' },
  { name: 'Nosotros', href: '#' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/10 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            Limon.io
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
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
              <Button variant="ghost" size="icon">
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
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-accent ${
                      location.pathname === item.href 
                        ? 'bg-accent text-accent-foreground' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
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
