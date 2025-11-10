import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventSection from "@/components/EventSection";
import StudentsSection from "@/components/StudentsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EventSection />
      <StudentsSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
