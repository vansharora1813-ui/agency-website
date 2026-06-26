import { motion } from 'framer-motion';
import { ArrowUpRight, Dumbbell, Coffee, Layout, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const projects = [
    {
      title: 'Pulse Athletics',
      category: 'E-Commerce & Booking',
      industry: 'Fitness / Gym Brand',
      desc: 'A high-energy dark-mode digital hub with live class bookings, trainer schedules, and a unified merchandise store.',
      icon: Dumbbell,
      glow: 'shadow-red-500/5 hover:border-red-500/20',
      color: 'text-red-500 bg-red-500/10 border-red-500/20',
      preview: (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between text-left border border-white/5 rounded-t-xl overflow-hidden font-sans">
          <div className="flex justify-between items-center text-[8px] text-slate-500">
            <span className="font-extrabold text-white uppercase tracking-widest">PULSE</span>
            <span className="bg-red-500/10 text-red-400 font-bold px-1.5 py-0.5 rounded">LIVE CLASS</span>
          </div>
          <div className="space-y-1.5 my-3">
            <p className="text-[12px] font-black text-white leading-none uppercase">BUILD YOUR POWER</p>
            <p className="text-[7px] text-slate-400 leading-normal">Premium workouts led by world-class certified coaches.</p>
          </div>
          <div className="w-full py-1.5 rounded bg-red-600 text-white font-bold text-[7px] text-center uppercase">
            Start Free Trial
          </div>
        </div>
      )
    },
    {
      title: 'Nouveau Bistro',
      category: 'Interactive Menu & Orders',
      industry: 'Fine Dining / Restaurant',
      desc: 'An immersive digital menu experience featuring fluid dish catalogs, order-ahead takeaway carts, and private table bookings.',
      icon: Coffee,
      glow: 'shadow-amber-500/5 hover:border-amber-500/20',
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      preview: (
        <div className="w-full h-full bg-[#111] p-4 flex flex-col justify-between text-left border border-white/5 rounded-t-xl overflow-hidden font-serif">
          <div className="flex justify-between items-center text-[7px] text-slate-500 font-sans">
            <span className="font-semibold text-amber-100 uppercase tracking-widest">NOUVEAU</span>
            <span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">OPEN</span>
          </div>
          <div className="space-y-1.5 my-3 font-sans">
            <p className="text-[11px] font-serif text-amber-55 leading-none">Freshly Baked Cinnamon Rolls</p>
            <p className="text-[7px] text-amber-100/50 leading-normal">Rich French butter, organic cinnamon, hot cheese glaze.</p>
          </div>
          <div className="w-full py-1.5 rounded-full bg-amber-600 text-stone-950 font-bold text-[7px] text-center uppercase font-sans">
            Order Takeaway
          </div>
        </div>
      )
    },
    {
      title: 'Novus SaaS Hub',
      category: 'SaaS Product Marketing',
      industry: 'Tech Startup',
      desc: 'A modular, conversion-focused product marketing site featuring interactive metric diagrams, user flows, and integrations.',
      icon: Layout,
      glow: 'shadow-cyan-500/5 hover:border-cyan-500/20',
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      preview: (
        <div className="w-full h-full bg-slate-900 p-4 flex flex-col justify-between text-left border border-white/5 rounded-t-xl overflow-hidden font-sans">
          <div className="flex justify-between items-center text-[8px] text-slate-500">
            <span className="font-extrabold text-cyan-400 tracking-tight">NOVUS.IO</span>
            <span className="bg-cyan-500/10 text-cyan-400 font-bold px-1.5 py-0.5 rounded">V2.4</span>
          </div>
          <div className="my-3 space-y-2">
            <div className="w-14 h-2 rounded bg-cyan-400/20" />
            <div className="space-y-1">
              <div className="w-full h-2 rounded bg-white/10" />
              <div className="w-5/6 h-2 rounded bg-white/10" />
            </div>
          </div>
          <div className="w-full py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-[7px] text-center uppercase tracking-wider">
            Start Free Trial
          </div>
        </div>
      )
    },
    {
      title: 'Vanguard Academy',
      category: 'Course Dashboard',
      industry: 'Educational Institute',
      desc: 'A structured classroom dashboard featuring course selections, rank list visualizations, and exam mock databases.',
      icon: GraduationCap,
      glow: 'shadow-purple-500/5 hover:border-purple-500/20',
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      preview: (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between text-left border border-white/5 rounded-t-xl overflow-hidden font-sans">
          <div className="flex justify-between items-center text-[8px] text-slate-500">
            <span className="font-bold text-white tracking-widest uppercase">VANGUARD</span>
            <span className="text-yellow-500 bg-yellow-500/10 px-1.5 py-0.5 rounded font-bold uppercase">OPEN</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-2 text-center text-[7px]">
            <div className="p-1.5 bg-slate-900 rounded border border-white/5">
              <p className="font-bold text-white text-[10px]">98.2%</p>
              <p className="text-[6px] text-slate-550">Board Pass Rate</p>
            </div>
            <div className="p-1.5 bg-slate-900 rounded border border-white/5">
              <p className="font-bold text-white text-[10px]">85+</p>
              <p className="text-[6px] text-slate-550">JEE Selections</p>
            </div>
          </div>
          <div className="w-full py-1.5 rounded bg-purple-600 text-white font-bold text-[7px] text-center uppercase">
            Enroll Today
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">PORTFOLIO</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              Selected Showcase Deliverables.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              Explore some of the premium platforms we have designed, hand-coded, and launched live on static content edges.
            </p>
          </div>

          {/* Grid Portfolio */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((proj, i) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className={`rounded-2xl border border-white/5 bg-white/2 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group hover:shadow-2xl ${proj.glow}`}
                >
                  {/* Interactive UI Mockup Box */}
                  <div className="p-8 pb-0 bg-white/3 border-b border-white/5 h-64 flex items-end justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-40 z-10" />
                    
                    {/* Simulated website frame */}
                    <div className="w-[85%] h-[80%] rounded-t-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.04] group-hover:translate-y-1 z-20">
                      {proj.preview}
                    </div>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-8 text-left space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-450 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                          {proj.category}
                        </span>
                        <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                          {proj.industry}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-slate-400">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <h3 className="text-xl font-bold font-display text-white group-hover:text-accent-secondary transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-slate-400 leading-relaxed font-medium">
                        {proj.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors mt-6">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
