import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, ShieldCheck, Github, Linkedin, Twitter, Target } from 'lucide-react';

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
      alert("Please fill in your Name, WhatsApp number, and select a Service.");
      return;
    }

    const whatsappNum = "919999999999";
    const body = `Hi Aura Team! I want to request a website consultation.
Name: ${formData.name}
Email: ${formData.email || 'N/A'}
WhatsApp: ${formData.whatsapp}
Required Service: ${formData.service}
Details: ${formData.message || 'Interested in a website consultation.'}`;

    const encodedMessage = encodeURIComponent(body);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Panel: Contact info & Map placeholder (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-accent-secondary uppercase tracking-widest">GET IN TOUCH</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                Let's Build Something <br />
                <span className="text-gradient">Extraordinary.</span>
              </h2>
              <p className="text-slate-405 text-sm leading-relaxed font-medium">
                Ready to launch a pixel-perfect digital platform? Fill out the details, and our engineering team will get back to you on WhatsApp within 2 hours.
              </p>
            </div>

            {/* Info Items */}
            <div className="space-y-4 border-t border-white/5 pt-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-350">
                  <Mail className="w-5 h-5 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider">Email Support</h3>
                  <p className="text-sm font-semibold text-slate-205 mt-0.5">hello@aura.agency</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-350">
                  <MapPin className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider">Studio Headquarters</h3>
                  <p className="text-sm font-semibold text-slate-205 mt-0.5">Dwarka Sector 12, New Delhi, 110075</p>
                </div>
              </div>
            </div>

            {/* Stylized custom Dark Map Preview */}
            <div className="relative w-full h-44 rounded-2xl border border-white/5 bg-white/2 overflow-hidden group flex items-center justify-center">
              {/* Graphic map lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              <div className="absolute w-[60%] h-[1px] bg-accent-primary/20 top-1/3 left-10 transform -rotate-12" />
              <div className="absolute w-[80%] h-[1px] bg-accent-secondary/20 top-1/2 left-2 transform rotate-6" />
              
              {/* Glow node */}
              <div className="relative flex flex-col items-center z-15">
                <motion.div 
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-4 h-4 rounded-full bg-accent-secondary/20 border border-accent-secondary flex items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                </motion.div>
                <span className="text-[7px] font-bold text-slate-500 uppercase tracking-widest mt-2">DWARKA, NEW DELHI</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <h4 className="text-[10px] font-black uppercase text-slate-600 tracking-wider">Follow Our Releases</h4>
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: 'https://twitter.com' },
                  { icon: Linkedin, href: 'https://linkedin.com' },
                  { icon: Github, href: 'https://github.com' }
                ].map((soc, i) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={i}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Beautiful Form (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm shadow-2xl">
              <h3 className="text-xl font-bold font-display text-white mb-6">Brief Your Project</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050816] border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/30 text-xs font-semibold transition-all duration-300"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050816] border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/30 text-xs font-semibold transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050816] border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/30 text-xs font-semibold transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050816] border border-white/5 text-white focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/30 text-xs font-semibold transition-all duration-300"
                    required
                  >
                    <option value="" disabled>Select your service</option>
                    <option value="Business Website">Corporate/Business Website</option>
                    <option value="Landing Page">High-converting Landing Page</option>
                    <option value="E-Commerce Store">E-Commerce Development</option>
                    <option value="Creative Portfolio">Custom Portfolio Website</option>
                    <option value="Website Redesign">Website Audit & Redesign</option>
                    <option value="Monthly SLA Care">Support & Code Maintenance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-wider text-slate-550 mb-2">
                    Project Notes
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your design needs, features, timeline targets, etc..."
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050816] border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary/30 text-xs font-semibold transition-all duration-300 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-accent text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-accent-primary/25 cursor-pointer"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-current" />
                    <span>Submit & Request Free Call</span>
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-2 mt-6 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-accent-secondary" />
                <span>Zero spam guarantee • 100% privacy maintained</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
