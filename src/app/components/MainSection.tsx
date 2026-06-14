import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';

const MainSection = () => {
  return (
    <div className="w-full rounded-xl mx-auto px-4 py-6 sm:w-[90%] sm:p-6 sm:mt-16 mb-16">
      <Navbar />
      <HeroSection />
      <Experience />
      <Projects />
    </div>
  );
}

export default MainSection;
