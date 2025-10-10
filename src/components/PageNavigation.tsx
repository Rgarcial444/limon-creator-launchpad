import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home, Sparkles, Briefcase, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const pages = [
  { path: '/', name: 'Inicio', icon: Home },
  { path: '/descubrir', name: 'Descubrir', icon: Sparkles },
  { path: '/catalogo', name: 'Servicios', icon: Briefcase },
  { path: '/nosotros', name: 'Nosotros', icon: Users }
];

const PageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentIndex === -1) return null;

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-1 bg-primary-foreground/10 rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div 
              className="h-1 bg-gradient-to-r from-primary via-primary to-primary rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / pages.length) * 100}%` }}
            />
          </div>
          <div className="relative flex justify-between">
            {pages.map((page, index) => {
              const Icon = page.icon;
              const isActive = index === currentIndex;
              const isPassed = index < currentIndex;
              
              return (
                <button
                  key={page.path}
                  onClick={() => handleNavigation(page.path)}
                  className={cn(
                    "flex flex-col items-center gap-2 transition-all duration-300 group",
                    "hover:scale-110"
                  )}
                  aria-label={`Ir a ${page.name}`}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    "border-2 shadow-lg",
                    isActive && "bg-primary border-primary scale-110 shadow-primary/50",
                    isPassed && "bg-primary/20 border-primary/40",
                    !isActive && !isPassed && "bg-background border-primary-foreground/20 group-hover:border-primary/50"
                  )}>
                    <Icon className={cn(
                      "w-5 h-5 transition-colors",
                      isActive && "text-primary-foreground",
                      isPassed && "text-primary",
                      !isActive && !isPassed && "text-primary-foreground/40 group-hover:text-primary"
                    )} />
                  </div>
                  <span className={cn(
                    "text-xs font-medium transition-colors hidden sm:block",
                    isActive && "text-primary font-bold",
                    isPassed && "text-primary-foreground/60",
                    !isActive && !isPassed && "text-primary-foreground/40 group-hover:text-primary-foreground/70"
                  )}>
                    {page.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mt-8">
          {previousPage ? (
            <Button
              onClick={() => handleNavigation(previousPage.path)}
              variant="outline"
              size="lg"
              className="group flex-1 sm:flex-none bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-primary-foreground/60">Anterior</span>
                <span className="font-semibold">{previousPage.name}</span>
              </div>
            </Button>
          ) : (
            <div className="flex-1 sm:flex-none" />
          )}

          {nextPage ? (
            <Button
              onClick={() => handleNavigation(nextPage.path)}
              size="lg"
              className="group flex-1 sm:flex-none bg-gradient-to-r from-primary via-primary to-primary/80 hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <div className="flex flex-col items-end">
                <span className="text-xs text-primary-foreground/80">Siguiente</span>
                <span className="font-semibold text-primary-foreground">{nextPage.name}</span>
              </div>
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <div className="flex-1 sm:flex-none" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageNavigation;
