import { motion } from 'framer-motion';
import { Compass, BookOpen, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: 'Discovery', num: '01', icon: Compass, desc: 'We deep dive into your business metrics, target demographic, brand guidelines, and key conversion objectives.' },
    { title: 'Planning', num: '02', icon: BookOpen, desc: 'We map out custom page hierarchies, visual sitemaps, and direct lead paths to define the scope.' },
    { title: 'Design', num: '03', icon: PenTool, desc: 'We create custom, high-fidelity UI mockups in Figma using premium aesthetics, curated colors, and modern shapes.' },
    { title: 'Development', num: '04', icon: Code, desc: 'Our engineering team writes custom hand-coded React structures layered with fluid, micro-animated Framer Motion components.' },
    { title: 'Testing', num: '05', icon: CheckCircle, desc: 'We perform strict speed audits (Core Web Vitals), cross-browser grid checkups, and test form submissions.' },
    { title: 'Launch', num: '06', icon: Rocket, desc: 'We point your domain, set up hosting on global CDN edges, configure SSL keys, and launch live in 5 days.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariantsLeft = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const cardVariantsRight = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="process" className="py-24 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-xs font-bold text-accent-secondary uppercase tracking-widest">OUR BLUEPRINT</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              From Concept to Launch in 5 Days.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              We have structured a frictionless, milestone-driven execution plan to deliver pixel-perfect websites without communication lags or launch delays.
            </p>
          </div>

          {/* Timeline Process Flow */}
          <div className="relative max-w-4xl mx-auto mt-20">
            {/* Center Line (Desktop) */}
            <div className="absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary transform -translate-x-1/2 hidden md:block opacity-30" />

            <div className="space-y-12 md:space-y-16">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col md:flex-row items-center relative ${
                      isEven ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* Center Dot (Desktop) */}
                    <div className="absolute left-1/2 top-1/2 w-8 h-8 rounded-full bg-[#050816] border border-accent-secondary/50 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hidden md:flex z-20">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-secondary animate-pulse" />
                    </div>

                    {/* Content Card */}
                    <motion.div
                      variants={isEven ? cardVariantsLeft : cardVariantsRight}
                      className={`w-full md:w-[45%] p-6 md:p-8 rounded-2xl border border-white/5 bg-white/2 relative overflow-hidden group text-left ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      {/* Ambient hover light */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className={`flex items-center gap-4 mb-4 ${
                        isEven ? 'md:flex-row-reverse' : 'flex-row'
                      }`}>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-350 group-hover:text-accent-secondary transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{step.num}</span>
                          <h3 className="text-lg font-bold text-white font-display tracking-wide">{step.title}</h3>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
