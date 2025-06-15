import HeroSection from '@/components/home/hero';
import FeaturesSection from '@/components/home/features';
import ServicesSection from '@/components/home/services';
import CtaSection from '@/components/home/cta';

const Home = () => {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <CtaSection />
    </div>
  );
};

export default Home;