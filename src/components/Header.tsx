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
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 sm:px-8 flex justify-center pointer-events-none">
      <div className="w-full max-w-7xl flex items-center justify-center relative">
        
        {/* Logo (Top Left) */}
        <div className="absolute left-0 pointer-events-auto">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-1.5 font-display text-sm font-extrabold tracking-tight text-neutral-900 select-none bg-white/80 backdrop-blur-md border border-neutral-200/40 px-4 py-2.5 rounded-full shadow-sm hover:scale-[1.02] transition-all duration-200 cursor-pointer"
          >
            <span>AURA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
          </a>
        </div>

        {/* Center Floating Navigation Pill */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className={`pointer-events-auto rounded-full border border-neutral-200/50 bg-white/70 backdrop-blur-md shadow-sm transition-[border-color,background-color,box-shadow] duration-200 ease-out flex items-center justify-center px-6 py-2.5 ${
            scrolled ? 'border-neutral-200/80 bg-white/90 shadow-md shadow-neutral-200/5' : ''
          }`}
        >
          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="relative px-1 py-1 text-xs font-bold tracking-wider uppercase text-neutral-500 hover:text-neutral-950 transition-colors duration-200"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                     layoutId="activeDot"
                     className="absolute -bottom-1 left-0 right-0 flex justify-center"
                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-950" />
                  </motion.div>
                )}
              </a>
            ))}
          </nav>

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

        {/* Consultation Button (Top Right) - Premium Button Style */}
        <div className="absolute right-0 pointer-events-auto hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-neutral-900 text-[#F0F4F8] hover:text-white text-[11px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(22,101,52,0.25)] hover:scale-[1.02] border border-neutral-850 cursor-pointer overflow-hidden"
          >
            <span className="tracking-widest">Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            {/* Subtle premium border glow highlight */}
            <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#166534]/50 transition-colors duration-300" />
          </a>
        </div>

      </div>

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
