import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Inicio', href: '/#inicio' },
  { name: 'Descubrir', href: '/#descubrir' },
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
              const isDescubrir = item.name === 'Descubrir';
              const isActive = item.href.startsWith('/#') 
                ? location.pathname === '/' && location.hash === `#${item.href.replace('/#', '')}`
                : location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    isActive 
                      ? 'text-white' 
                      : isDescubrir
                      ? ''
                      : 'text-white/90 hover:text-white'
                  } ${
                    isDescubrir 
                      ? 'px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 border border-purple-400/50 hover:border-purple-300/70 hover:from-purple-500/40 hover:via-blue-500/40 hover:to-purple-500/40 shadow-lg shadow-purple-500/30 hover:shadow-purple-400/50' 
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {isDescubrir && <Sparkles className="h-3.5 w-3.5 animate-pulse text-purple-200" />}
                    <span className={isDescubrir ? 'font-bold text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : ''}>{item.name}</span>
                    {isDescubrir && (
                      <Badge 
                        variant="secondary" 
                        className="ml-1 text-[10px] px-1.5 py-0 h-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold border border-white/30 shadow-md"
                      >
                        Blog
                      </Badge>
                    )}
                  </div>
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
                          : isDescubrir
                          ? 'bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 text-white border-2 border-purple-400/60 hover:border-purple-300 hover:from-purple-500/40 hover:via-blue-500/40 hover:to-purple-500/40 shadow-lg shadow-purple-500/30'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isDescubrir && <Sparkles className="h-4 w-4 animate-pulse text-purple-200" />}
                          <span className={isDescubrir ? 'font-bold' : ''}>{item.name}</span>
                        </div>
                        {isDescubrir && (
                          <Badge 
                            variant="secondary" 
                            className="text-[10px] px-2 py-0.5 h-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold border border-white/30"
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
