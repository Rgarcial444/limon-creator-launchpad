import { useNavigate, useLocation } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [
  { path: '/', name: 'Inicio' },
  { path: '/descubrir', name: 'Descubrir' },
  { path: '/catalogo', name: 'Servicios' },
  { path: '/nosotros', name: 'Nosotros' }
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
    <div className="flex items-center justify-center gap-4 py-6">
      {previousPage ? (
        <div className="flex flex-col items-center gap-2">
          <RainbowButton
            onClick={() => handleNavigation(previousPage.path)}
            size="icon"
            className="w-8 h-8 rounded-full"
            aria-label={`Ir a ${previousPage.name}`}
          >
            <ChevronLeft className="h-4 w-4" />
          </RainbowButton>
          <span className="text-xs text-primary-foreground/60">{previousPage.name}</span>
        </div>
      ) : (
        <div className="w-8" />
      )}

      <div className="flex gap-2 mx-4">
        {pages.map((page, index) => (
          <button
            key={page.path}
            onClick={() => handleNavigation(page.path)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
            }`}
            aria-label={`Ir a ${page.name}`}
          />
        ))}
      </div>

      {nextPage ? (
        <div className="flex flex-col items-center gap-2">
          <RainbowButton
            onClick={() => handleNavigation(nextPage.path)}
            size="icon"
            className="w-8 h-8 rounded-full"
            aria-label={`Ir a ${nextPage.name}`}
          >
            <ChevronRight className="h-4 w-4" />
          </RainbowButton>
          <span className="text-xs text-primary-foreground/60">{nextPage.name}</span>
        </div>
      ) : (
        <div className="w-8" />
      )}
    </div>
  );
};

export default PageNavigation;
