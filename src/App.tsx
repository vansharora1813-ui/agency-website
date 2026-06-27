import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Sync routing pathname with activeSection
  useEffect(() => {
    if (location.pathname === '/portfolio') {
      setActiveSection('portfolio');
    } else if (location.pathname === '/contact') {
      setActiveSection('contact');
    } else if (location.pathname === '/') {
      setActiveSection('home');
    }
  }, [location.pathname]);

  // 2. Calculate active section intersections on home page scroll
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['about', 'process'];
      const scrollPosition = window.scrollY + 180; // Offset for natural intersection triggers

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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial invocation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // 3. Global Scroll Progress Tracker
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScrollProgress);
    handleScrollProgress();
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, [location.pathname]);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'portfolio') {
      navigate('/portfolio');
      setActiveSection('portfolio');
      return;
    }
    if (sectionId === 'contact') {
      navigate('/contact');
      setActiveSection('contact');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 150);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-bg-light text-[#111111] min-h-screen relative flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Floating Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-neutral-100 z-50">
        <div
          className="h-full bg-neutral-950 transition-all duration-75 origin-left"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating Glass Navigation Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections / Pages */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onNavigate={handleNavigate} />
                <About />
                <Services onNavigate={handleNavigate} />
                <WhyChooseUs />
                <Process />
                <Testimonials />
              </>
            }
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
