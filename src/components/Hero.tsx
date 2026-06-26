import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Activity, ShieldCheck, CreditCard } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorators */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glowing blurred blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/15 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Floating abstract particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: `${20 + i * 12}%`,
            left: `${15 + (i * 14) % 70}%`,
          }}
          className="absolute w-2 h-2 rounded-full bg-accent-secondary/40 blur-[1px] pointer-events-none -z-10"
        />
      ))}

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center text-left">
          {/* Left Column (Main Copy) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-accent-secondary">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Elite Website Development Agency</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.08] text-white">
              We Build Websites That Turn Visitors Into{' '}
              <span className="text-gradient">
                Customers.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 font-medium max-w-xl leading-relaxed">
              We design and code custom-crafted digital experiences that command authority, build trust, and multiply your business revenue. No shortcuts, just pure premium engineering.
            </p>

            {/* Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('portfolio')}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-accent hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-accent-primary/25 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/3 backdrop-blur hover:bg-white/8 hover:border-white/15 text-white font-bold text-sm hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Book a Free Call</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent-primary" />
                <span>Custom Coded Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent-secondary" />
                <span>Award-winning Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (Animated Browser Dashboard Mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            {/* Parallax Container Wrapper */}
            <div className="w-full max-w-[460px] rounded-2xl border border-white/10 bg-surface-dark/45 backdrop-blur-xl shadow-2xl p-4 relative group">
              {/* Glowing Outline effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent-primary to-accent-secondary opacity-5 group-hover:opacity-10 blur-xl transition-opacity pointer-events-none -z-10" />

              {/* Browser bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded bg-[#050816] text-slate-600 text-[8px] font-semibold select-none truncate max-w-[180px]">
                  https://aura.agency/mockup
                </div>
                <div className="w-6" />
              </div>

              {/* Mockup Canvas Screen */}
              <div className="bg-[#050816] rounded-xl border border-white/5 p-4 space-y-4 overflow-hidden relative">
                {/* Header widget inside mockup */}
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-gradient-accent" />
                    <span className="text-[9px] font-bold text-white tracking-wider">AURA TECH</span>
                  </div>
                  <span className="text-[7px] text-accent-secondary bg-accent-secondary/10 px-2 py-0.5 rounded-full font-bold">ACTIVE DEPLOY</span>
                </div>

                {/* Main Hero widget inside mockup */}
                <div className="space-y-2">
                  <div className="w-16 h-2 rounded bg-accent-primary/25" />
                  <div className="space-y-1">
                    <div className="w-full h-3 rounded bg-white/10" />
                    <div className="w-3/4 h-3 rounded bg-white/10" />
                  </div>
                </div>

                {/* Dynamic graph layout representation (animated) */}
                <div className="p-3 bg-white/2 rounded-xl border border-white/5 space-y-3 relative overflow-hidden">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Activity className="w-3 h-3 text-accent-secondary" /> Conversion Rate
                    </span>
                    <span className="text-[10px] text-emerald-400 font-black">+4.2%</span>
                  </div>
                  
                  {/* Graph lines using SVG animated */}
                  <div className="h-16 flex items-end">
                    <svg className="w-full h-full text-accent-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                        d="M0,25 Q15,10 30,18 T60,5 T90,15 L100,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Sub cards */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-white/2 rounded-lg border border-white/5 flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-accent-secondary" />
                    <div>
                      <p className="text-[7px] text-slate-500 font-bold uppercase">SALES</p>
                      <p className="text-[9px] text-white font-extrabold">₹48,990</p>
                    </div>
                  </div>
                  <div className="p-2 bg-white/2 rounded-lg border border-white/5 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <div>
                      <p className="text-[7px] text-slate-500 font-bold uppercase">SECURE</p>
                      <p className="text-[9px] text-white font-extrabold">100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
