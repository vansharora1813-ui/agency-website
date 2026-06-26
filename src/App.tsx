import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate active section intersections
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 160; // Offset offset for natural intersection triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // 2. Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen relative flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Floating Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-neutral-100 z-50">
        <div
          className="h-full bg-neutral-950 transition-all duration-75 origin-left"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating Glass Navigation Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Services onNavigate={handleNavigate} />
        <WhyChooseUs />
        <Portfolio onNavigate={handleNavigate} />
        <Process />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
