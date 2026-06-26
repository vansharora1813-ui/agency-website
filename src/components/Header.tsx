import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <div className="fixed top-6 left-0 right-0 z-50 px-6 sm:px-8 flex justify-center pointer-events-none">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className={`w-full max-w-5xl rounded-full border border-neutral-200/50 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 pointer-events-auto flex items-center justify-between px-6 py-2.5 ${
          scrolled ? 'border-neutral-200/80 shadow-md shadow-neutral-200/5' : ''
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-1.5 font-display text-sm font-extrabold tracking-tight text-neutral-900 select-none"
        >
          <span>AURA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="relative px-1 py-1 text-xs font-semibold tracking-wide text-neutral-500 hover:text-neutral-950 transition-colors duration-200"
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute -bottom-1 left-0 right-0 flex justify-center pointer-events-none"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                >
                  <span className="w-1 h-1 rounded-full bg-neutral-950" />
                </motion.div>
              )}
            </a>
          ))}
        </nav>

        {/* CTA (Right) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="group relative inline-flex items-center gap-1 px-4 py-2 rounded-full bg-neutral-950 hover:bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-wider transition-all duration-300 shadow shadow-neutral-950/5 hover:scale-[1.02] cursor-pointer"
          >
            <span>Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute top-20 left-6 right-6 p-6 rounded-3xl border border-neutral-200 bg-white/95 backdrop-blur-lg shadow-xl flex flex-col gap-3 pointer-events-auto text-left"
          >
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-neutral-50 text-neutral-950'
                    : 'text-neutral-500 hover:text-neutral-950 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100 mt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="flex items-center justify-center gap-1.5 w-full py-3 rounded-xl bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
