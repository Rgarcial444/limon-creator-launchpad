import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DiscoverCTA = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/descubrir');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 overflow-hidden">
        <div className="relative w-full max-w-4xl mx-auto py-16">
          <HandWrittenTitle title="Descubre más" />
          <div className="relative z-10 text-center -mt-12 space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground px-4">
              Explora artículos sobre tecnología y soluciones digitales
            </p>
            <Button 
              size="lg" 
              variant="default"
              onClick={handleDiscoverClick}
              className="font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Ir a Descubrir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCTA;
