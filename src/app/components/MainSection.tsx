import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Footer from './Footer';

const MainSection = () => {
  return (
    <div className="w-[90%] border-4 border-black rounded-xl mx-auto p-6 mt-16">
      <Navbar />
      <HeroSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default MainSection;
