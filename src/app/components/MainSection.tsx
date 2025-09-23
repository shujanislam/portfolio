import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';

const MainSection = () => {
  return (
    <div className="w-[90%] rounded-xl mx-auto p-6 mt-16 mb-16">
      <Navbar />
      <HeroSection />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default MainSection;
