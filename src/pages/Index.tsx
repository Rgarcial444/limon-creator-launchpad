import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import DiscoverCTA from '@/components/DiscoverCTA';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import NovedadSemana from '@/components/NovedadSemana';

const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <NovedadSemana />
      <FAQ />
      <DiscoverCTA />
      <Footer />
    </div>
  );
};

export default Index;
