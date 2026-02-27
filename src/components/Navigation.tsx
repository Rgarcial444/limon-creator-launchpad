import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', href: '/#inicio' },
  { name: 'Portafolio', href: '/#portafolio' },
  { name: 'Servicios', href: '/catalogo' },
  { name: 'Nosotros', href: '/#nosotros' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '');
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-3xl hover:text-primary transition-colors">
            Limon io Creators
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = item.href.startsWith('/#') 
                ? location.pathname === '/' && location.hash === `#${item.href.replace('/#', '')}`
                : location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
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
                  const isActive = item.href.startsWith('/#') 
                    ? location.pathname === '/' && location.hash === `#${item.href.replace('/#', '')}`
                    : location.pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={(e) => {
                        handleNavClick(item.href, e);
                        setIsOpen(false);
                      }}
                      className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-accent text-accent-foreground' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {item.name}
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
