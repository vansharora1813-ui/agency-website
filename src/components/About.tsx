import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Zap, HelpCircle, Flame } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
}

function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500; // Total count-up duration in ms
    const frameRate = 16; // ~60fps
    const totalFrames = duration / frameRate;
    const increment = target / totalFrames;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  const stats = [
    { label: 'Websites Delivered', val: 100, suffix: '+', desc: 'Crafted for startups, global brands, and premium shops.', icon: Award },
    { label: 'Client Satisfaction', val: 98, suffix: '%', desc: 'Long-term relations built on clean code and reliable metrics.', icon: Flame },
    { label: 'Uptime Support', val: 24, suffix: '/7', desc: 'Active cloud server scaling, backups, and security monitoring.', icon: HelpCircle },
    { label: 'Launch Speed', val: 5, suffix: ' Days', desc: 'Streamlined development frameworks for rapid deployments.', icon: Zap },
  ];

  return (
    <section id="about" className="py-24 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-accent-secondary uppercase tracking-widest">WHO WE ARE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                A Premium Design & Web Engineering Studio.
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                We believe your website is your most valuable employee. It shouldn't just look pretty—it should serve as a high-performance machine that educates visitors, establishes supreme trust, and converts clicks into loyal clients. We combine luxury design aesthetics with custom hand-coded architectures to make your brand unforgettable.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-8 rounded-2xl border border-white/5 bg-white/2 hover:border-white/10 transition-all duration-300 flex flex-col justify-between h-64 relative group overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 group-hover:text-accent-secondary transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-650 tracking-wider">0{i+1}</span>
                  </div>

                  <div className="space-y-2 mt-auto">
                    <h3 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                      <Counter target={stat.val} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm font-bold text-slate-200 tracking-wide">{stat.label}</p>
                    <p className="text-xs text-slate-450 leading-relaxed font-medium">{stat.desc}</p>
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
