import { ArrowUp, Mail, Phone, Clock } from 'lucide-react';

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
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8 relative overflow-hidden text-left font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-1.5 font-display text-sm font-extrabold tracking-tight text-neutral-900 select-none cursor-pointer"
            >
              <span>AURA</span>
              <span className="w-1 h-1 rounded-full bg-neutral-900" />
            </a>
            <p className="text-xs text-neutral-500 leading-relaxed font-medium">
              We design and code bespoke digital products that command absolute authority, establish trust, and turn visitors into loyal clients.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[9px] text-neutral-500 font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Response: <strong>&lt; 2 Hours</strong></span>
            </div>
          </div>

          {/* Navigation Sitemap */}
          <div>
            <h4 className="text-neutral-900 font-bold text-xs uppercase tracking-wider mb-4">Sitemap</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-neutral-500">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-neutral-900 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-neutral-900 transition-colors">
                  About Story
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-neutral-900 transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="hover:text-neutral-900 transition-colors">
                  Work Portfolio
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleLinkClick(e, 'process')} className="hover:text-neutral-900 transition-colors">
                  Delivery path
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-neutral-900 font-bold text-xs uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-neutral-500">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-neutral-900 transition-colors">
                  Bespoke Corporate Sites
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-neutral-900 transition-colors">
                  Luxury Portfolio Pages
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-neutral-900 transition-colors">
                  Conversion Landing Funnels
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-neutral-900 transition-colors">
                  Custom E-Commerce Architectures
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 className="text-neutral-900 font-bold text-xs uppercase tracking-wider mb-4">Direct channels</h4>
            <ul className="space-y-3.5 text-xs font-semibold text-neutral-500">
              <li>
                <a
                  href="https://wa.me/919999999999?text=Hi!%2520I'm%2520requesting%2520a%2520website%2520consultation%2520with%2520Aura."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-neutral-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-neutral-400" />
                  <span>+91 99999 99999</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>hello@aura.studio</span>
              </li>
              <li className="text-[9px] text-neutral-400 uppercase tracking-widest leading-relaxed">
                Aura Digital Inc.<br />
                Mon – Sat: 9:00 AM – 7:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 my-8" />

        {/* Bottom copyright line & Back to top button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-[10px] font-bold uppercase tracking-wider">
          <p>&copy; {currentYear} Aura Studio. All rights reserved.</p>
          
          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1 px-4 py-2 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:text-neutral-900 transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
