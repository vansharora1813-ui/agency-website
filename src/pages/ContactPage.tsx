import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: ''
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="bg-transparent min-h-screen pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Navigation back helper */}
        <div className="mb-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Details & Handles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">GET IN TOUCH</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
                Let's Partner on Your <br />
                Next Digital Release.
              </h1>
              <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                Fill in our digital brief or connect directly through our official social pipelines. Our response window is within 2 hours.
              </p>
            </div>

            {/* Direct Connect Handles (Dynamic cards that change colors on hover) */}
            <div className="space-y-4 border-t border-neutral-200 pt-6">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919999999999?text=Hi%20Aura%20Team!%20I'd%20like%20to%20know%20more%2520about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-start p-4 rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] hover:shadow-lg hover:shadow-emerald-500/5 group"
              >
                <div className="p-3 rounded-xl border border-neutral-200 bg-white text-neutral-800 transition-colors group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase text-neutral-400 tracking-wider">WhatsApp Direct</h3>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5 group-hover:text-emerald-950 transition-colors">+91 99999 99999</p>
                  <span className="text-[10px] text-emerald-600 font-medium group-hover:text-emerald-700">Chat with Design Lead →</span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/aura.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-start p-4 rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/[0.02] hover:shadow-lg hover:shadow-pink-500/5 group"
              >
                <div className="p-3 rounded-xl border border-neutral-200 bg-white text-neutral-800 transition-colors group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500">
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase text-neutral-400 tracking-wider">Instagram Handle</h3>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5 group-hover:text-pink-950 transition-colors">@aura.studio</p>
                  <span className="text-[10px] text-pink-600 font-medium group-hover:text-pink-700">Follow our design grids →</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:hello@aura.studio"
                className="flex gap-4 items-start p-4 rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-950/30 hover:bg-neutral-50 hover:shadow-lg hover:shadow-neutral-950/5 group"
              >
                <div className="p-3 rounded-xl border border-neutral-200 bg-white text-neutral-800 transition-colors group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase text-neutral-400 tracking-wider">Email Inquiry</h3>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5 group-hover:text-neutral-950">hello@aura.studio</p>
                  <span className="text-[10px] text-neutral-500 font-medium">Standard RFPs / Pitch decks</span>
                </div>
              </a>

              {/* Location Card */}
              <div
                className="flex gap-4 items-start p-4 rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-950/30 hover:bg-neutral-50 group"
              >
                <div className="p-3 rounded-xl border border-neutral-200 bg-white text-neutral-800 transition-colors group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase text-neutral-400 tracking-wider">Studio Office</h3>
                  <p className="text-sm font-semibold text-neutral-800 mt-0.5">Dwarka Sector 12, New Delhi, 110075</p>
                  <span className="text-[10px] text-neutral-500 font-medium">Meetings strictly by appointment</span>
                </div>
              </div>

            </div>

            {/* Stylized custom Light Map Mockup */}
            <div className="relative w-full h-40 rounded-2xl border border-neutral-200 bg-white overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-neutral-350">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:1.25rem_1.25rem]" />
              <div className="absolute w-[60%] h-[1px] bg-neutral-200/60 top-1/3 left-10 transform -rotate-12" />
              <div className="absolute w-[80%] h-[1px] bg-neutral-200/60 top-1/2 left-2 transform rotate-6" />
              
              <div className="relative flex flex-col items-center">
                <motion.div 
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-5 h-5 rounded-full bg-neutral-900/10 border border-neutral-900 flex items-center justify-center"
                >
                  <span className="w-2 h-2 rounded-full bg-neutral-950 animate-pulse" />
                </motion.div>
                <span className="text-[7.5px] font-black text-neutral-400 uppercase tracking-widest mt-2">DWARKA SECTOR 12</span>
              </div>
            </div>

          </div>

          {/* Right Column: Briefing Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 rounded-3xl border border-neutral-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-neutral-300">
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
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-950 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-350"
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
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-950 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-350"
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
                      className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-950 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-350"
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
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-950 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-350"
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
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-neutral-200 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950/20 text-neutral-950 bg-neutral-50/50 text-xs font-semibold focus:outline-none transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-350 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-neutral-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-900 transition-colors shadow shadow-neutral-950/5 hover:scale-[1.01] transition-transform duration-200 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Briefing Form</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
