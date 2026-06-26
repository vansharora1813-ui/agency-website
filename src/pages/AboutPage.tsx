import { MessageCircle, Rocket, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';

export default function AboutPage() {
  const whatsappNum = "919999999999";
  const message = "Hi! I read your About page and I want to know more about getting a website for my business.";
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMsg}`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-center">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-secondary text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5" />
            <span>Empowering Local Businesses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            We are on a mission to build{' '}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              a digital presence
            </span>{' '}
            for every local business.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
            We started LaunchPads to rescue local cafes, clinics, shops, and coaching centers from expensive, slow-moving agencies and complicated site builders.
          </p>
        </div>
      </section>

      {/* Grid: Why We Started */}
      <section className="py-16 bg-slate-950/40 border-t border-b border-slate-900">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Why we started LaunchPads</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We watched local business owners struggle. When they hired typical digital agencies, they got hit with quotes of ₹50,000+, took months to launch, and left them with complex dashboards they couldn't edit.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We believed there was a better way. Local businesses don't need databases, logins, or over-engineered dashboards. They need a **fast, premium layout** that lists their location, services, hours, and triggers direct enquiries on **WhatsApp**.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We created a streamlined system. We design custom-fit templates for your industry, insert your text/logo, connect WhatsApp leads, and launch your site in **5 days**. No fuss. No tech headaches.
            </p>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: ShieldCheck, title: "100% Transparent Flat Pricing", desc: "No recurring monthly design fees, no locking clauses. One flat fee for life." },
              { icon: Heart, title: "Built for Real Conversion", desc: "We design every page to push visitors towards calling you or sending a WhatsApp lead." },
              { icon: Sparkles, title: "Personalized & Managed", desc: "We handle domain buying, hosting pointing, SSL setups, and email configurations for you." }
            ].map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="p-5 bg-slate-900 border border-slate-850 rounded-xl flex gap-4 text-left">
                  <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary h-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{val.title}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 text-center relative max-w-4xl mx-auto px-4">
        <div className="space-y-6">
          <div className="flex justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-serif text-slate-200 italic leading-relaxed">
            “Your business deserves to be found by customers searching on Google. We make it happen, quickly and professionally.”
          </blockquote>
          <div>
            <p className="text-white font-bold font-sans">Vikram Malhotra</p>
            <p className="text-slate-500 text-xs">Founder, LaunchPads Digital</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border-t border-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Let's build your free demo website</h2>
          <p className="text-slate-350 text-sm max-w-lg mx-auto">
            Ready to grow? Chat with us for 5 minutes about your business type, and we'll send a live homepage preview in 24 hours.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-bold transition-all hover:scale-105 shadow-lg shadow-brand-whatsapp/25"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
