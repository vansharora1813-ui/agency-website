import { ArrowUp, Rocket, Mail, Phone, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] border-t border-white/5 pt-16 pb-8 relative overflow-hidden text-left">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-7 h-7 rounded bg-gradient-to-tr from-accent-primary to-accent-secondary p-1 flex items-center justify-center text-white">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                Aura<span className="text-gradient font-sans">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-450 leading-relaxed font-medium">
              We design and code luxury digital experiences that command immediate premium trust, establish absolute domain authority, and multiply conversions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-accent-secondary" />
              <span>Response: <strong>&lt; 2 Hours</strong></span>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Sitemap</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition-colors">
                  About Story
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-white transition-colors">
                  Agency Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="hover:text-white transition-colors">
                  Work Portfolio
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleLinkClick(e, 'process')} className="hover:text-white transition-colors">
                  Delivery Process
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-white transition-colors">
                  Bespoke Corporate Sites
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-white transition-colors">
                  Luxury Portfolio Showcases
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-white transition-colors">
                  SaaS & Landing Funnels
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-white transition-colors">
                  Custom E-Commerce Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Support */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Direct Support</h4>
            <ul className="space-y-3.5 text-xs font-semibold text-slate-400">
              <li>
                <a
                  href="https://wa.me/919999999999?text=Hi!%20I'm%20requesting%20a%20website%20consultation%20with%20Aura."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-accent-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent-secondary" />
                  <span>+91 99999 99999</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-primary" />
                <span>hello@aura.agency</span>
              </li>
              <li className="text-[10px] text-slate-500 uppercase tracking-widest leading-relaxed">
                Aura Digital Inc.<br />
                Mon – Sat: 9:00 AM – 7:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Copyright & Scroll Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
          <p>&copy; {currentYear} Aura Digital. All rights reserved.</p>
          
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 hover:text-white transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
