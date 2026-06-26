import { useState } from 'react';
import { MessageCircle, Clock, Mail, ShieldCheck, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: '',
    whatsapp: '',
    notes: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.businessType || !formData.whatsapp) {
      alert("Please fill in Name, Business Type, and WhatsApp number.");
      return;
    }

    const whatsappNum = "919999999999";
    const message = `Hi! I want to contact LaunchPads.
My Name: ${formData.name}
Business Name: ${formData.businessName || 'N/A'}
Business Type: ${formData.businessType}
WhatsApp: ${formData.whatsapp}
Details: ${formData.notes || 'Interested in a website.'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Text Left Column (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's launch <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                your website
              </span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Have questions about pricing, features, or the custom domain integration? Drop us a line. We are here to help your local business grow.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-900">
              <div className="flex gap-3 items-start">
                <div className="p-2.5 rounded bg-brand-primary/10 text-brand-primary h-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fast Response Pledge</h3>
                  <p className="text-xs text-slate-400 mt-0.5">We reply on WhatsApp in under 2 hours, Monday through Saturday.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2.5 rounded bg-brand-secondary/10 text-brand-secondary h-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Direct Email</h3>
                  <p className="text-xs text-slate-400 mt-0.5">hello@launchpads.in • Send us your high-res logo designs here.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2.5 rounded bg-slate-800 text-slate-400 h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Office</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Plot 45, Sector 12, Dwarka, New Delhi, 110075</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right Column (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-6">Send Message</h2>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:border-brand-primary text-sm transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      placeholder="e.g. FitPulse Gym"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:border-brand-primary text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="businessType" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-brand-primary text-sm transition-all"
                      required
                    >
                      <option value="" disabled>Select business type</option>
                      <option value="Gym/Fitness">Gym / Fitness Center</option>
                      <option value="Cafe/Bakery">Cafe / Bakery / Resto</option>
                      <option value="Clinic/Doctor">Clinic / Dental / Doctor</option>
                      <option value="Coaching Centre">Coaching / Tuitions</option>
                      <option value="Local Shop">Local Shop / Retail Store</option>
                      <option value="Other Business">Other Service Business</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:border-brand-primary text-sm transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-405 mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Describe your requirements (e.g., number of pages, domain names, services)..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-650 focus:outline-none focus:border-brand-primary text-sm transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-extrabold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-brand-whatsapp/25"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Submit & Chat on WhatsApp</span>
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-1.5 mt-6 text-slate-500 text-xs">
                <ShieldCheck className="w-4 h-4 text-brand-whatsapp" />
                <span>No backend forms. Submissions directly open WhatsApp.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
