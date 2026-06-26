import { useState } from 'react';
import { 
  MessageCircle, Check, ArrowRight, Dumbbell, Coffee, 
  Stethoscope, GraduationCap, Clock, Star, AlertCircle, 
  TrendingUp, Calendar, Zap, ShieldCheck 
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [activePreview, setActivePreview] = useState<'gym' | 'cafe' | 'clinic' | 'coaching'>('gym');
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    whatsapp: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.businessType || !formData.whatsapp) {
      alert("Please fill in all details to get your free demo.");
      return;
    }
    
    const whatsappNum = "919999999999"; // Replace with actual number
    const message = `Hi! I want a free demo website.
My Name: ${formData.name}
Business Type: ${formData.businessType}
WhatsApp: ${formData.whatsapp}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDemoClick = (path: string) => {
    onNavigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[250px] h-[250px] bg-brand-secondary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-brand-secondary text-xs font-semibold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-brand-secondary" />
                <span>Free Custom Demo Built in 24 Hours</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Get more customers with a website that{' '}
                <span className="bg-gradient-to-r from-brand-primary via-indigo-400 to-brand-secondary bg-clip-text text-transparent">
                  actually works
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-450 font-medium leading-relaxed max-w-xl">
                Built specifically for gyms, cafes, clinics, coaching centres & shops. Ready in <strong>5 days</strong>.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#demos"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-95 text-white font-bold shadow-lg shadow-brand-primary/20 transition-all hover:scale-105"
                >
                  <span>See Free Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919999999999?text=Hi!%20I'm%20interested%2520in%2520getting%2520a%252520website%252520for%252520my%252520business.%252520Can%252520we%252520chat%252520about%252520a%252520free%252520demo%25253F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-bold shadow-lg shadow-brand-whatsapp/15 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
              
              {/* Trust line */}
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-1">
                <Clock className="w-4 h-4 text-brand-whatsapp" />
                <span>We reply within <strong>2 hours</strong> • No payment required upfront</span>
              </div>
            </div>

            {/* Interactive Mockup (lg:col-span-5) */}
            <div className="lg:col-span-5 w-full">
              <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-2xl p-4 relative">
                {/* Mockup Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="px-4 py-1 rounded bg-slate-950 text-slate-500 text-[10px] select-none truncate max-w-[200px]">
                    https://demo.{activePreview}site.com
                  </div>
                  <div className="w-6" />
                </div>

                {/* Tabs to trigger changes */}
                <div className="grid grid-cols-4 gap-1 mb-4 text-xs font-semibold select-none bg-slate-950 p-1 rounded-lg">
                  {[
                    { id: 'gym', label: 'Gym', icon: Dumbbell },
                    { id: 'cafe', label: 'Cafe', icon: Coffee },
                    { id: 'clinic', label: 'Clinic', icon: Stethoscope },
                    { id: 'coaching', label: 'Coaching', icon: GraduationCap }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActivePreview(tab.id as any)}
                        className={`flex items-center justify-center gap-1 py-2 px-1 rounded-md transition-all ${
                          activePreview === tab.id 
                            ? 'bg-slate-800 text-white shadow-md' 
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Inner Preview Screen */}
                <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 h-64 overflow-y-auto flex flex-col justify-between transition-all">
                  {/* Gym Preview */}
                  {activePreview === 'gym' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white tracking-widest uppercase">IRONPULSE</span>
                        <span className="text-[10px] text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full font-bold">LIVE CLASS</span>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-extrabold text-white">CRUSH YOUR GOALS TODAY</h4>
                        <p className="text-[10px] text-slate-400">Join the ultimate fitness community. Top equipment & certified trainers.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded bg-slate-900 border border-slate-850">
                          <p className="text-[9px] text-slate-500 font-bold">MEMBERSHIP</p>
                          <p className="text-xs text-white font-bold font-serif">₹1,999/mo</p>
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-850">
                          <p className="text-[9px] text-slate-500 font-bold">RATING</p>
                          <p className="text-xs text-yellow-500 font-bold">4.9 ★ (280+)</p>
                        </div>
                      </div>
                      <button className="w-full bg-red-600 text-white font-bold text-[10px] py-2 rounded hover:bg-red-700 transition-colors">
                        BOOK FREE CLASS
                      </button>
                    </div>
                  )}

                  {/* Cafe Preview */}
                  {activePreview === 'cafe' && (
                    <div className="space-y-4 animate-fade-in font-serif">
                      <div className="flex justify-between items-center font-sans">
                        <span className="text-xs font-bold text-amber-500 tracking-wider">BREW & CRUMB</span>
                        <span className="text-[9px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-semibold">OPEN NOW</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base text-white">Freshly Brewed Happiness.</h4>
                        <p className="text-[10px] text-slate-400 font-sans">Artisanal coffee and fresh pastries handcrafted daily.</p>
                      </div>
                      <div className="space-y-1.5 font-sans">
                        <div className="flex justify-between text-[10px] text-slate-300">
                          <span>Espresso Single Origin</span>
                          <span className="font-bold">₹160</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-300">
                          <span>Croissant Double Butter</span>
                          <span className="font-bold">₹180</span>
                        </div>
                      </div>
                      <button className="w-full bg-amber-600 font-sans text-white font-bold text-[10px] py-2 rounded hover:bg-amber-700 transition-colors">
                        ORDER ONLINE ON WHATSAPP
                      </button>
                    </div>
                  )}

                  {/* Clinic Preview */}
                  {activePreview === 'clinic' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-sky-400 tracking-wide flex items-center gap-1">
                          <Stethoscope className="w-3.5 h-3.5" /> CarePlus Clinic
                        </span>
                        <span className="text-[9px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-semibold">AVAILABLE</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white">Your Health is Our Top Priority</h4>
                        <p className="text-[10px] text-slate-400">Experienced doctors & modern medical equipment for your family care.</p>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1">
                        <p className="text-[9px] text-slate-400">Next Available Slot:</p>
                        <p className="text-[10px] text-white font-bold flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-sky-400" /> Today, 05:30 PM - 07:00 PM
                        </p>
                      </div>
                      <button className="w-full bg-sky-500 text-slate-950 font-bold text-[10px] py-2 rounded hover:bg-sky-650 transition-colors">
                        BOOK WHATSAPP APPOINTMENT
                      </button>
                    </div>
                  )}

                  {/* Coaching Preview */}
                  {activePreview === 'coaching' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-extrabold text-indigo-400">APEX ACADEMY</span>
                        <span className="text-[9px] text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded font-bold">BATCHES OPEN</span>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-white">Aim High. Achieve Excellence.</h4>
                        <p className="text-[10px] text-slate-400">Expert classroom coaching for Class 9th - 12th & JEE/NEET aspirants.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="p-1.5 bg-indigo-950/45 rounded border border-indigo-900/60">
                          <p className="text-xs text-white font-bold">98%</p>
                          <p className="text-[8px] text-slate-400">Pass Rate</p>
                        </div>
                        <div className="p-1.5 bg-indigo-950/45 rounded border border-indigo-900/60">
                          <p className="text-xs text-white font-bold">1200+</p>
                          <p className="text-[8px] text-slate-400">Students Guided</p>
                        </div>
                      </div>
                      <button className="w-full bg-indigo-600 text-white font-bold text-[10px] py-2 rounded hover:bg-indigo-700 transition-colors">
                        REQUEST FREE TRIAL SESSION
                      </button>
                    </div>
                  )}

                  {/* Trust footer inside mockup */}
                  <div className="pt-2 border-t border-slate-900 text-center">
                    <p className="text-[8px] text-slate-500">👉 This is a real interactive template. We deliver the full code.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-slate-950/40 relative border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Is your business invisible online?
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Most local businesses lose half their potential clients before they ever hear about them, simply because they don't have a modern website.
            </p>
          </div>

          {/* Chips Grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "No website yet",
              "Losing customers to competitors",
              "Relying only on Facebook/Instagram",
              "Can't rank on Google searches",
              "Tried agencies & got burned"
            ].map((problem, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm hover:border-red-500/30 hover:bg-red-500/5 transition-all shadow-md"
              >
                <AlertCircle className="w-4.5 h-4.5 text-red-500 flex-shrink-0" />
                <span>{problem}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent uppercase tracking-wider">
              “Your business deserves to be found online.”
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="features" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Everything you need for a flood of customers
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              We skip the fluff and build what works. Simple, stunning websites focused purely on generating leads for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Local Business Website",
                desc: "High-performance, modern designs customized for your industry. Fully responsive, lightning-fast on mobile, and built to convert viewers into clients.",
                highlight: "More customers",
                icon: TrendingUp,
                color: "from-blue-500/20 to-indigo-500/20"
              },
              {
                title: "WhatsApp Enquiry System",
                desc: "No complex forms or database setups. Connects your website visitors directly to your WhatsApp with prefilled messages so you can close deals instantly.",
                highlight: "Direct leads",
                icon: MessageCircle,
                color: "from-emerald-500/20 to-teal-500/20"
              },
              {
                title: "5-Day Delivery",
                desc: "We build fast. You request a free demo, review it, we lock in the final design and deploy to your custom domain within 5 days. Guaranteed.",
                highlight: "Fast launch",
                icon: Zap,
                color: "from-amber-500/20 to-orange-500/20"
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-tr ${service.color} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <span>Outcome</span>
                    <span className="text-brand-secondary">{service.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demos" className="py-24 bg-slate-950/60 border-t border-b border-slate-900 relative">
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              See what we can build for you
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Click on a demo template below to open a full, live demo website. These are trust-building templates that show your local clients who you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Gym Website",
                label: "Fitness / Health",
                path: "/gym-demo",
                bg: "bg-red-500/10 border-red-500/20 hover:border-red-500/50",
                icon: Dumbbell,
                cta: "View Gym Demo",
                screenshot: "💪 High-energy, class schedule, WhatsApp booking."
              },
              {
                name: "Cafe Website",
                label: "Cafe / Bakery / Restaurant",
                path: "/cafe-demo",
                bg: "bg-amber-500/10 border-amber-500/20 hover:border-amber-500/50",
                icon: Coffee,
                cta: "View Cafe Demo",
                screenshot: "☕ Warm tones, menu preview, instant reservations."
              },
              {
                name: "Clinic Website",
                label: "Dental / Doctor / Care Clinic",
                path: "/clinic-demo",
                bg: "bg-sky-500/10 border-sky-500/20 hover:border-sky-500/50",
                icon: Stethoscope,
                cta: "View Clinic Demo",
                screenshot: "🦷 Clean teal UI, appointments slots, medical services."
              },
              {
                name: "Coaching Website",
                label: "Tuition / Institute / Trainer",
                path: "/coaching-demo",
                bg: "bg-indigo-500/10 border-indigo-500/20 hover:border-indigo-500/50",
                icon: GraduationCap,
                cta: "View Coaching Demo",
                screenshot: "🎓 Success metrics, course catalogs, free trials."
              }
            ].map((demo, idx) => {
              const Icon = demo.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => handleDemoClick(demo.path)}
                  className={`group cursor-pointer rounded-2xl border bg-slate-900/40 p-6 text-left transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-80 ${demo.bg}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-950 px-2.5 py-1 rounded text-slate-400 border border-slate-800">
                        {demo.label}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-secondary transition-colors">
                        {demo.name}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {demo.screenshot}
                      </p>
                    </div>
                  </div>

                  {/* Browser design frame preview representation */}
                  <div className="border-t border-slate-850 pt-4 flex items-center justify-between mt-auto">
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                      {demo.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Get online in 4 simple steps
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              No complicated contracts, no lengthy onboarding. We start building directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step Line (Desktop) */}
            <div className="hidden lg:block absolute top-14 left-16 right-16 h-0.5 bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary pointer-events-none" />

            {[
              {
                num: "01",
                title: "WhatsApp Chat",
                desc: "Send us a message. Tell us your business type and share your logo if you have one."
              },
              {
                num: "02",
                title: "We Build Free Demo",
                desc: "In 24 hours, we build a personalized homepage preview of your website. Free of cost."
              },
              {
                num: "03",
                title: "Review & Refine",
                desc: "Check the preview on your phone. Request layout changes, add text or edit colors."
              },
              {
                num: "04",
                title: "Launch in 5 Days",
                desc: "We hook up your domain, set up lightning-fast hosting, and launch your site live!"
              }
            ].map((step, index) => (
              <div key={index} className="relative bg-slate-900/35 border border-slate-850 p-6 rounded-2xl flex flex-col justify-between text-left h-56">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                      {step.num}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-slate-950/60 border-t border-b border-slate-900 relative">
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Simple, transparent pricing
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              No hidden monthly fees, no hosting surprises. Choose a plan that fits your business scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
            {/* Tier 1: Starter */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 relative flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-300">Starter</h3>
                  <p className="text-slate-450 text-xs mt-1">Perfect for new local shops needing essential presence.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">₹8,999</span>
                  <span className="text-xs text-slate-500">one-time</span>
                </div>
                <div className="border-t border-slate-850 pt-6">
                  <ul className="space-y-3.5 text-xs font-semibold text-slate-350">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> 1-Page Modern Website</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> Responsive Mobile-first Layout</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> WhatsApp Direct Integration</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> Free Hosting Setup</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> SSL Security Certificate</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://wa.me/919999999999?text=Hi!%20I'm%2520interested%2520in%2520the%2520Starter%2520Plan%2520(₹8,999)%2520for%2520my%2520business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-sm transition-all"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-brand-whatsapp fill-current" />
                  <span>Choose Starter</span>
                </a>
              </div>
            </div>

            {/* Tier 2: Growth (Most Popular) */}
            <div className="p-8 rounded-2xl border-2 border-brand-primary bg-slate-900/60 relative flex flex-col justify-between shadow-xl shadow-brand-primary/10">
              {/* Popular tag */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-[10px] font-bold text-white uppercase tracking-wider">
                MOST POPULAR
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Growth</h3>
                  <p className="text-slate-400 text-xs mt-1">Perfect for cafes, clinics, & fitness trainers seeking growth.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">₹14,999</span>
                  <span className="text-xs text-slate-400">one-time</span>
                </div>
                <div className="border-t border-slate-800 pt-6">
                  <ul className="space-y-3.5 text-xs font-semibold text-slate-300">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-whatsapp flex-shrink-0" /> Up to 5 Pages (About, Services, Menu)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-whatsapp flex-shrink-0" /> Custom Domain Integration (e.g. .com/.in)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-whatsapp flex-shrink-0" /> Google Maps & Business Search Setup</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-whatsapp flex-shrink-0" /> Custom Inquiry WhatsApp Forms</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-whatsapp flex-shrink-0" /> Basic SEO Optimization</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-whatsapp flex-shrink-0" /> Priority Support</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://wa.me/919999999999?text=Hi!%20I'm%2520interested%2520in%2520the%2520Growth%2520Plan%2520(₹14,999)%2520for%2520my%2520business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-extrabold text-sm shadow-lg shadow-brand-whatsapp/20 transition-all hover:scale-[1.03]"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                  <span>Choose Growth</span>
                </a>
              </div>
            </div>

            {/* Tier 3: Pro */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 relative flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-300">Pro</h3>
                  <p className="text-slate-450 text-xs mt-1">For expanding local chains needing custom setups.</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">₹24,999</span>
                  <span className="text-xs text-slate-500">one-time</span>
                </div>
                <div className="border-t border-slate-850 pt-6">
                  <ul className="space-y-3.5 text-xs font-semibold text-slate-350">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> Up to 10 Pages & Subdomains</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> Online Payments Setup (UPI/QR)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> Local Directory Listings (15+ sites)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> Full SEO & Speed Optimization</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> Professional Copywriting & Content</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-secondary flex-shrink-0" /> 1 Year Maintenance & Hosting</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8">
                <a
                  href="https://wa.me/919999999999?text=Hi!%20I'm%2520interested%2520in%2520the%2520Pro%2520Plan%2520(₹24,999)%2520for%2520my%2520business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-sm transition-all"
                >
                  <MessageCircle className="w-4.5 h-4.5 text-brand-whatsapp fill-current" />
                  <span>Choose Pro</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Trusted by local business owners
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Read real-looking stories of business owners who digitized their services and got results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Before hiring LaunchPads, we only got inquiries from Instagram DM, which took hours to answer. With our new website, clients book classes directly on WhatsApp. Our membership increased by 35% in the first month!",
                author: "Rajesh Malhotra",
                role: "Owner, PulseFitness Gym",
                rating: 5,
                metric: "35% Membership Growth"
              },
              {
                quote: "A clean website was exactly what our dental clinic was missing. Patients can search our services, find our location on Maps, and book appointments via WhatsApp easily. It reduced front-desk calls significantly.",
                author: "Dr. Ananya Sen",
                role: "Lead Dentist, CareDental",
                rating: 5,
                metric: "Saved 10+ Admin Hours/Week"
              },
              {
                quote: "LaunchPads literally had my cafe website ready in 4 days. The menu looks beautiful on mobile, and customers love order-ahead features on WhatsApp. Our weekend breakfast sales went up, and it paid for itself in 2 weeks.",
                author: "Vikram Sethi",
                role: "Founder, Brew & Crumb Cafe",
                rating: 5,
                metric: "RoI Achieved in 14 Days"
              }
            ].map((t, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl border border-slate-850 bg-slate-900/30 text-left flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-850/80 mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.author}</h4>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2 py-1 rounded">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (FORM) */}
      <section id="cta-form" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Get your free demo website
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              Fill in your details below and we will build a free personalized homepage preview for your business in 24 hours. No obligation.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-md shadow-2xl text-left max-w-xl mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
                  <option value="" disabled>Select your business</option>
                  <option value="Gym/Fitness">Gym / Fitness Academy</option>
                  <option value="Cafe/Restaurant">Cafe / Restaurant</option>
                  <option value="Clinic/Doctor">Clinic / Dental / Doctor</option>
                  <option value="Coaching Centre">Coaching Centre / Classes</option>
                  <option value="Local Shop/Retail">Local Shop / Retail Store</option>
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

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-extrabold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-brand-whatsapp/25"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Request Free Demo on WhatsApp</span>
                </button>
              </div>
            </form>

            {/* Response speed tag */}
            <div className="flex items-center justify-center gap-2 mt-6 text-center text-xs text-slate-500">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-whatsapp" />
              <span>We value privacy. We will only contact you about your design.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
