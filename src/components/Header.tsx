import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#050816]/75 backdrop-blur-md border-b border-white/5 shadow-xl shadow-[#000000]/40'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-primary to-accent-secondary p-1 flex items-center justify-center shadow-lg shadow-accent-primary/20 group-hover:scale-105 transition-transform duration-350">
            <Rocket className="w-4 h-4 text-white" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 blur transition-opacity duration-350 -z-10" />
          </div>
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            Aura<span className="text-gradient font-sans">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="relative py-2 text-sm font-medium tracking-wide text-slate-350 hover:text-white transition-colors duration-250"
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider overflow-hidden border border-white/10"
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 w-full h-full bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-[-4px] bg-gradient-accent opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            <span className="relative text-white group-hover:text-white transition-colors duration-300">
              Book Free Consultation
            </span>
          </a>
        </div>

        {/* Mobile Hamburguer */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-white/5 bg-[#050816]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'bg-white/5 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="flex items-center justify-center w-full py-3.5 rounded-xl bg-gradient-accent hover:opacity-90 text-white font-bold text-sm shadow-lg shadow-accent-primary/20 transition-all uppercase tracking-wider"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
