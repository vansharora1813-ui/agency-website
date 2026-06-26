import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.service) {
      alert("Please fill in Name, WhatsApp, and select a Service.");
      return;
    }

    const whatsappNum = "919999999999";
    const body = `Hi Aura Team! I want to request a website consultation.
Name: ${formData.name}
Email: ${formData.email || 'N/A'}
WhatsApp: ${formData.whatsapp}
Service: ${formData.service}
Details: ${formData.message || 'Interested in a website consultation.'}`;

    const encodedMessage = encodeURIComponent(body);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-28 bg-[#FAFAFA] border-t border-[#ECECEC] text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact details & Vector Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">CONTACT</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
                Let's Partner on Your <br />
                Next Digital Release.
              </h2>
              <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                Fill in the briefing fields, and our design team will reach out to schedule an introduction call on WhatsApp in under 2 hours.
              </p>
            </div>

            {/* Info details */}
            <div className="space-y-4 border-t border-neutral-200 pt-6 text-xs">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-lg border border-neutral-200 bg-white text-neutral-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Email Inquiry</h3>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">hello@aura.studio</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-lg border border-neutral-200 bg-white text-neutral-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-neutral-400 tracking-wider">Studio Address</h3>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">Dwarka Sector 12, New Delhi, 110075</p>
                </div>
              </div>
            </div>

            {/* Stylized custom Light Map Mockup */}
            <div className="relative w-full h-40 rounded-xl border border-neutral-200 bg-white overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:1.25rem_1.25rem]" />
              <div className="absolute w-[60%] h-[1px] bg-neutral-200/60 top-1/3 left-10 transform -rotate-12" />
              <div className="absolute w-[80%] h-[1px] bg-neutral-200/60 top-1/2 left-2 transform rotate-6" />
              
              <div className="relative flex flex-col items-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-4 h-4 rounded-full bg-neutral-900/10 border border-neutral-900 flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                </motion.div>
                <span className="text-[7px] font-black text-neutral-400 uppercase tracking-widest mt-2">DWARKA CENTRAL</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4 border-t border-neutral-200">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-900 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 rounded-3xl border border-neutral-200 bg-white shadow-lg">
              <h3 className="text-lg font-bold font-display text-neutral-900 mb-6">Brief Your Project Requirements</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[9px] font-black uppercase tracking-wider text-neutral-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-900 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-200"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-[9px] font-black uppercase tracking-wider text-neutral-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-900 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-[9px] font-black uppercase tracking-wider text-neutral-400 mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-900 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[9px] font-black uppercase tracking-wider text-neutral-400 mb-2">
                    Select Capabilities
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-900 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-200"
                    required
                  >
                    <option value="" disabled>Select a capability</option>
                    <option value="Corporate Platform">Corporate & Business Platform</option>
                    <option value="Bespoke Portfolio">Bespoke Visual Portfolio</option>
                    <option value="Conversion Page">Targeted Landing Page</option>
                    <option value="Custom E-Commerce">E-Commerce Architecture</option>
                    <option value="Redesign Framework">Complete Code Rebuild</option>
                    <option value="SLA Code Care">Support SLA & Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[9px] font-black uppercase tracking-wider text-neutral-400 mb-2">
                    Project Goals
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your brand scale, target launch dates, required integrations..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-900 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors shadow shadow-neutral-950/5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Submit Briefing Form</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
