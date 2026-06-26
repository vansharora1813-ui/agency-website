import { useState, useEffect } from 'react';
import { Menu, X, Rocket, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (target.startsWith('#')) {
      if (currentPath !== '/') {
        onNavigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const el = document.getElementById(target.substring(1));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(target.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(target);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demos', href: '#demos' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-slate-950/20' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-gradient-to-tr from-brand-primary to-brand-secondary p-2 rounded-xl text-white shadow-md shadow-brand-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              LaunchPads
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/919999999999?text=Hi!%20I'm%20interested%20in%20a%20free%20demo%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-bold text-sm shadow-lg shadow-brand-whatsapp/15 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get Free Demo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100 border-b border-slate-850 bg-slate-950/95 backdrop-blur-lg' 
          : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-3">
            <a
              href="https://wa.me/919999999999?text=Hi!%20I'm%20interested%20in%20a%20free%20demo%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-bold shadow-lg shadow-brand-whatsapp/20 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Get Free Demo</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
