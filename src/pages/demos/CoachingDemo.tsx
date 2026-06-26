import { GraduationCap, Star, MessageCircle, Phone, MapPin, Trophy } from 'lucide-react';

export default function CoachingDemo() {
  const whatsappNum = "919999999999";
  const agencyMessage = "Hi! I saw the Coaching Demo website and I want a similar website for my coaching centre.";
  const encodedAgencyMsg = encodeURIComponent(agencyMessage);
  const agencyUrl = `https://wa.me/${whatsappNum}?text=${encodedAgencyMsg}`;

  const coachingMessage = "Hi Apex Academy! I want to enroll my child for a free trial coaching session.";
  const encodedCoachingMsg = encodeURIComponent(coachingMessage);
  const coachingUrl = `https://wa.me/${whatsappNum}?text=${encodedCoachingMsg}`;

  return (
    <div className="bg-slate-950 text-slate-100 font-sans min-h-screen relative pb-20">
      {/* Sticky Top Agency Promo Line */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary py-2 text-center text-xs font-bold text-white relative z-50">
        Demo Mode: This is a premium website layout we can build for you.
      </div>

      {/* Coaching Header */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded bg-indigo-650/15 text-indigo-400">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <span className="text-xl font-extrabold tracking-wider text-white">APEX ACADEMY</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Methodology</a>
            <a href="#courses" className="hover:text-white transition-colors">Programs</a>
            <a href="#results" className="hover:text-white transition-colors">Wall of Fame</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <a
            href={coachingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            Trial Class
          </a>
        </div>
      </header>

      {/* Coaching Hero */}
      <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
        {/* Indigo glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">EXPERIENCED PEDAGOGY • DW Dwarka</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white animate-fade-in">
              Aim High. <br />
              Achieve Academic <br />
              <span className="text-indigo-400">Excellence.</span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              Customized learning programs for Class 9th-12th CBSE Boards & Competitive Entrance preparation (JEE Main & NEET) led by IITian faculty.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={coachingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm uppercase transition-all shadow-lg shadow-indigo-600/20"
              >
                Book Free Trial
              </a>
              <a
                href="#courses"
                className="px-6 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-350 font-bold text-sm uppercase transition-all"
              >
                View Batches
              </a>
            </div>
          </div>

          {/* Educational Achievements Board */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-indigo-400 tracking-wider">ANNUAL HIGHLIGHTS</p>
                  <h3 className="text-lg font-bold">Proven Track Record</h3>
                </div>
                <Trophy className="w-5 h-5 text-yellow-500 animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                    <p className="font-extrabold text-2xl text-white">98.2%</p>
                    <p className="text-[9px] text-slate-400 uppercase mt-0.5">Board Pass Rate</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-850">
                    <p className="font-extrabold text-2xl text-white">85+</p>
                    <p className="text-[9px] text-slate-400 uppercase mt-0.5">JEE/NEET Selections</p>
                  </div>
                </div>

                <div className="p-3 bg-indigo-950/45 rounded-xl border border-indigo-900/40 flex items-center justify-between text-xs">
                  <span className="text-indigo-200 font-semibold">New Session Admissions:</span>
                  <span className="text-white bg-indigo-650 px-2 py-0.5 rounded font-bold uppercase text-[9px]">Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog */}
      <section id="courses" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">COURSES & BATCHES</span>
            <h2 className="text-3xl font-extrabold text-white">Our Educational Programs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Secondary Board Prep", details: "Class 9th & 10th Maths, Science, Social, English. Structured CBSE curriculum.", fee: "₹3,500/Month" },
              { title: "Senior Secondary Board", details: "Class 11th & 12th Physics, Chemistry, Maths, Biology. Board syllabus mastery.", fee: "₹4,500/Month" },
              { title: "IIT-JEE Focus Group", details: "Intense concepts, pattern practice, JEE Mains & Advanced practice test series.", fee: "₹6,500/Month" },
              { title: "NEET Medical Group", details: "Regular biology labs, organic chemistry maps, speed mocks, error book analyses.", fee: "₹6,500/Month" }
            ].map((course, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-850 rounded-xl hover:border-indigo-500/20 transition-all flex flex-col justify-between h-52">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{course.details}</p>
                </div>
                <div className="text-[10px] text-slate-500 border-t border-slate-850 pt-3 flex items-center justify-between font-bold">
                  <span>Admissions</span>
                  <span className="text-indigo-400 uppercase">{course.fee}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall of Fame */}
      <section id="results" className="py-20 bg-slate-950 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">WALL OF FAME</span>
            <h2 className="text-3xl font-extrabold text-white">Top Student Ranks (2025)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            {[
              { name: "Priyanshu Sen", achievement: "99.64 Percentile", exam: "JEE Mains (Dwarka Topper)" },
              { name: "Megha Malhotra", achievement: "97.4% Marks", exam: "Class 12th Board Science" },
              { name: "Ananya Nair", achievement: "680 / 720 Marks", exam: "NEET Medical Entrance" }
            ].map((res, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-850 rounded-xl space-y-2 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 bg-yellow-500/10 text-yellow-500 rounded-bl text-[8px] font-bold">GOLD</div>
                <p className="text-2xl font-black text-white">{res.achievement}</p>
                <h4 className="text-sm font-bold text-indigo-400">{res.name}</h4>
                <p className="text-slate-500 text-[10px] uppercase font-bold">{res.exam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Testimonials */}
      <section className="py-20 bg-slate-950/60 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">FEEDBACK</span>
            <h2 className="text-3xl font-extrabold text-white">What Parents & Students Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              { name: "Suresh Sen (Parent of Priyanshu)", quote: "Apex Academy changed my son's attitude towards science. The teachers are highly approachable, and their weekly analysis reports helped us check his weak areas.", rating: 5 },
              { name: "Tanya Sharma (Class 12 Student)", quote: "The study notes and the mock papers prepared by IITian faculty are excellent. It helped me clear my board concepts easily. The doubt clearing sessions are a life saver.", rating: 5 }
            ].map((test, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-850 rounded-xl space-y-3">
                <div className="flex gap-1 text-indigo-455">
                  {[...Array(test.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-350 text-xs italic leading-relaxed">"{test.quote}"</p>
                <p className="text-white font-bold text-xs">- {test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Contact */}
      <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4 text-left">
            <h3 className="text-xl font-bold text-white">Apex Academy Dwarka</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We provide clean study rooms, a specialized library for competitive exams, and separate doubt counters for subjects.
            </p>
            <div className="space-y-2 text-xs text-slate-350">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Sector 12, Dwarka, New Delhi (Above Dwarka Book Depot)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+91 99999 99999</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-900 rounded-2xl border border-slate-850 space-y-4 text-left">
            <h4 className="text-sm font-bold tracking-wider uppercase text-indigo-400">BATCH TIMINGS</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between border-b border-slate-850 pb-1.5">
                <span>Class 9 – 10 Batches</span>
                <span className="font-semibold text-white">04:00 PM – 06:30 PM (Mon-Sat)</span>
              </div>
              <div className="flex justify-between border-b border-slate-850 pb-1.5">
                <span>Class 11 – 12 / Competitive</span>
                <span className="font-semibold text-white">03:30 PM – 08:30 PM (Mon-Sat)</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday Doubt Clear Session</span>
                <span className="font-semibold text-white">10:00 AM – 01:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persistent Call-to-action to buy this layout (Agency Conversion) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-t border-brand-primary/50 py-3 shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-300 text-xs sm:text-sm font-semibold">
            👉 Want a professional website like <strong className="text-white">Apex Academy</strong> for your coaching centre?
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
