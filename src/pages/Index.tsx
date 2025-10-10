import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import DiscoverCTA from '@/components/DiscoverCTA';
import FeaturedServices from '@/components/FeaturedServices';
import FAQ from '@/components/FAQ';

const Index = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <FAQ />
      <DiscoverCTA />
      <Footer />
    </div>
  );
};

export default Index;
