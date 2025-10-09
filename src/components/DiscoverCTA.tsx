import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const DiscoverCTA = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 overflow-hidden">
        <HandWrittenTitle 
          title="Descubre más" 
          subtitle="Explora artículos sobre tecnología y soluciones digitales"
        />
        <div className="flex justify-center pb-16 -mt-8">
          <Link to="/descubrir">
            <Button 
              size="lg" 
              variant="default"
              className="font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Ir a Descubrir
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCTA;
