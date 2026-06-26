import { Dumbbell, Clock, Users, Shield, MessageCircle, MapPin, Phone, Star } from 'lucide-react';

export default function GymDemo() {
  const whatsappNum = "919999999999";
  const agencyMessage = "Hi! I saw the Gym Demo website and I want a similar website for my gym.";
  const encodedAgencyMsg = encodeURIComponent(agencyMessage);
  const agencyUrl = `https://wa.me/${whatsappNum}?text=${encodedAgencyMsg}`;

  const gymMessage = "Hi IronPulse! I'm interested in booking a free trial workout session.";
  const encodedGymMsg = encodeURIComponent(gymMessage);
  const gymUrl = `https://wa.me/${whatsappNum}?text=${encodedGymMsg}`;

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen relative pb-20">
      {/* Sticky Top Agency Promo Line */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary py-2 text-center text-xs font-bold text-white relative z-50">
        Demo Mode: This is a premium website layout we can build for you.
      </div>

      {/* Gym Header */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="w-6 h-6 text-red-500 animate-bounce" />
            <span className="text-xl font-black tracking-wider text-white">IRONPULSE</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#classes" className="hover:text-white transition-colors">Classes</a>
            <a href="#pricing" className="hover:text-white transition-colors">Memberships</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href={gymUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Free Trial
          </a>
        </div>
      </header>

      {/* Gym Hero */}
      <section className="relative py-24 md:py-32 bg-slate-950 flex items-center overflow-hidden">
        {/* Athletic backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-650/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">NO PAIN NO GAIN</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
              SHAPE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">ULTIMATE BODY</span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              A premium fitness studio offering elite personal coaching, state-of-the-art weights, and dynamic group classes designed to unlock your limits.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={gymUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-600/20 transition-all hover:scale-105"
              >
                Join Today
              </a>
              <a
                href="#classes"
                className="px-6 py-3.5 rounded border border-slate-800 hover:border-slate-700 text-slate-350 font-bold text-sm uppercase tracking-wider transition-all"
              >
                Explore Classes
              </a>
            </div>
          </div>

          {/* Large decorative graphic panel */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 p-1 shadow-2xl">
              <div className="w-full h-full bg-slate-900 rounded-[14px] p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-red-500 tracking-wider">GYM HOURS</p>
                    <p className="text-sm font-bold">Open 24 Hours / Day</p>
                  </div>
                  <Clock className="w-5 h-5 text-slate-500" />
                </div>
                
                <div className="space-y-3">
                  <p className="text-xs text-slate-400 font-medium">✨ Peak hours & traffic indicators show that mornings 6AM-8AM and evenings 6PM-8PM are our active community slots!</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 bg-slate-950 rounded border border-slate-850">
                      <p className="font-bold text-red-500">1500+</p>
                      <p className="text-[9px] text-slate-500">Sq. Ft Area</p>
                    </div>
                    <div className="p-2 bg-slate-950 rounded border border-slate-850">
                      <p className="font-bold text-red-500">20+</p>
                      <p className="text-[9px] text-slate-500">Elite Machines</p>
                    </div>
                    <div className="p-2 bg-slate-950 rounded border border-slate-850">
                      <p className="font-bold text-red-500">5</p>
                      <p className="text-[9px] text-slate-500">Expert Coaches</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Stats / Features */}
      <section className="py-12 bg-slate-950 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Expert Coaching", desc: "Get certified trainers to plan your schedule & forms." },
            { icon: Shield, title: "Clean & Certified", desc: "Regularly sanitized areas, top safety norms in place." },
            { icon: Dumbbell, title: "Modern Equipment", desc: "Top-tier cardio ranges, free-weights, and heavy lifters." }
          ].map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="flex gap-4 items-start text-left">
                <div className="p-3 bg-red-650/10 rounded-xl text-red-500">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase">{feat.title}</h3>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Classes Grid */}
      <section id="classes" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">OUR PROGRAMS</span>
            <h2 className="text-3xl font-black uppercase text-white">Find Your Perfect Workout</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Strength & Conditioning", desc: "Lift heavy, build muscle, and optimize explosive power.", time: "Mon, Wed, Fri | 7:00 AM" },
              { title: "HIIT & Cardio Burn", desc: "Fast-paced, high heart rate, max calorie burning session.", time: "Tue, Thu, Sat | 6:00 PM" },
              { title: "Power Yoga & Core", desc: "Flexibility meets balance. Build functional core stamina.", time: "Mon, Thu | 8:30 AM" },
              { title: "Personal Training", desc: "One-on-one customized workouts tailored to your metabolism.", time: "Book Flex-Slots" }
            ].map((cl, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-850 rounded-xl hover:border-red-500/30 transition-all flex flex-col justify-between h-52">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white uppercase">{cl.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{cl.desc}</p>
                </div>
                <div className="text-[10px] text-slate-500 border-t border-slate-850 pt-3 flex items-center justify-between font-semibold uppercase">
                  <span>Schedule</span>
                  <span className="text-red-500">{cl.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Pricing */}
      <section id="pricing" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">MEMBERSHIPS</span>
            <h2 className="text-3xl font-black uppercase text-white">Affordable Fitness Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            {[
              { plan: "Monthly", price: "₹1,999", duration: "1 month", features: ["24/7 Gym Access", "Free Locker", "1 Trainer Assessment"] },
              { plan: "Quarterly", price: "₹4,999", duration: "3 months", features: ["24/7 Gym Access", "Free Locker", "2 Assessment Tests", "Diet Consultation"] },
              { plan: "Annual Pass", price: "₹14,999", duration: "12 months", features: ["24/7 Gym Access", "Personal Locker Assigned", "Monthly Assessments", "Dedicated Diet Plan", "2 Guest Passes/Mo"] }
            ].map((p, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-slate-850 rounded-xl relative flex flex-col justify-between">
                {i === 1 && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-0.5 rounded bg-red-600 text-[9px] font-bold uppercase tracking-wider text-white">
                    BEST VALUE
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase">{p.plan}</h3>
                    <p className="text-slate-500 text-xs">Validity: {p.duration}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">{p.price}</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-350 border-t border-slate-850 pt-4">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckIcon className="w-3.5 h-3.5 text-red-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-8">
                  <a
                    href={gymUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded bg-red-600 hover:bg-red-750 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire Plan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Testimonials */}
      <section className="py-20 bg-slate-950/60 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase">TRANSFORMATIONS</span>
            <h2 className="text-3xl font-black uppercase text-white">What Our Members Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              { name: "Karan Malhotra", quote: "Lost 12 kgs in 4 months under Coach Ajay's guidance. The atmosphere here is extremely motivating, and people really focus on their workouts.", rating: 5 },
              { name: "Sneha Reddy", quote: "As a working professional, the 24/7 access is a lifesaver. I workout late at night and feel completely safe. Clean locker rooms and great equipment.", rating: 5 }
            ].map((test, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-850 rounded-xl space-y-4">
                <div className="flex gap-1 text-red-500">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-350 text-xs italic leading-relaxed">"{test.quote}"</p>
                <p className="text-white font-bold text-xs">- {test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Contact */}
      <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-2xl font-black uppercase text-white">VISIT IRONPULSE STUDIO</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-slate-900 border border-slate-850 rounded-xl space-y-4">
              <h3 className="text-sm font-bold uppercase text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" /> LOCATION
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Plot 45, Sector 12, Dwarka,<br />
                Near Metro Station Gate No. 2,<br />
                New Delhi - 110075
              </p>
            </div>
            <div className="p-6 bg-slate-900 border border-slate-850 rounded-xl space-y-4">
              <h3 className="text-sm font-bold uppercase text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" /> CONTACT INFO
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                WhatsApp: +91 99999 99999<br />
                Email: info@ironpulse.in<br />
                Support: 011-4567890
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Call-to-action to buy this layout (Agency Conversion) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-brand-primary/50 py-3 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-200 text-xs sm:text-sm font-semibold">
            👉 Want a professional website like <strong className="text-white">IronPulse Fitness</strong> for your gym?
          </p>
          <a
            href={agencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-slate-950 hover:text-white font-bold text-xs uppercase transition-all shadow shadow-brand-whatsapp/20"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get this Site in 5 Days</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
