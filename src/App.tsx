import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import GymDemo from './pages/demos/GymDemo';
import CafeDemo from './pages/demos/CafeDemo';
import ClinicDemo from './pages/demos/ClinicDemo';
import CoachingDemo from './pages/demos/CoachingDemo';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Determine if it is a demo page to exclude Agency Nav/Footer
  const isDemoPage = ['/gym-demo', '/cafe-demo', '/clinic-demo', '/coaching-demo'].includes(currentPath);

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <LandingPage onNavigate={navigate} />;
      case '/gym-demo':
        return <GymDemo />;
      case '/cafe-demo':
        return <CafeDemo />;
      case '/clinic-demo':
        return <ClinicDemo />;
      case '/coaching-demo':
        return <CoachingDemo />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        // Default fallback to landing page for MVP robustness
        return <LandingPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!isDemoPage && <Navbar currentPath={currentPath} onNavigate={navigate} />}
      <main className="flex-grow">
        {renderContent()}
      </main>
      {!isDemoPage && <Footer onNavigate={navigate} />}
    </div>
  );
}

export default App;
