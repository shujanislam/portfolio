import Navbar from './Navbar.tsx';
import HeroSection from './HeroSection.tsx';
import Projects from './Projects.tsx';
import Footer from './Footer.tsx';

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
