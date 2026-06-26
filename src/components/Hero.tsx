import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const textMaskVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="home" className="relative min-h-screen bg-[#FAFAFA] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Editorial Background Grid Lines (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Column 1: Editorial Heading & Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            {/* Minimal label */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse" />
              <span>AURA DIGITAL / bespoke engineering</span>
            </motion.div>

            {/* Huge bold headline (Masked text reveal) */}
            <div className="overflow-hidden">
              <motion.h1 
                variants={textMaskVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-neutral-900 tracking-tight leading-[1.05]"
              >
                We Build Websites That Turn Visitors Into Customers.
              </motion.h1>
            </div>

            {/* Supporting text */}
            <motion.p 
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-neutral-500 font-medium max-w-xl leading-relaxed"
            >
              We craft high-performance, custom-coded web properties for startups, brands, and modern businesses. Tailored layouts, zero-bloat code, and exceptional engineering.
            </motion.p>

            {/* CTA Actions */}
            <motion.div 
              variants={fadeUpVariants} 
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="group relative inline-flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow hover:scale-[1.01] cursor-pointer"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('portfolio')}
                className="group inline-flex items-center gap-1 py-3.5 px-4 text-neutral-600 hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors duration-250 cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Column 2: MacBook/Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            {/* Apple style mockup box */}
            <div className="w-full max-w-[460px] rounded-2xl border border-neutral-200 bg-white shadow-2xl p-4 relative group">
              {/* Browser navigation bar */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                </div>
                <div className="px-4 py-0.5 rounded bg-neutral-50 border border-neutral-150 text-neutral-400 text-[8px] font-bold select-none truncate max-w-[180px]">
                  aura.studio/portfolio
                </div>
                <div className="w-6" />
              </div>

              {/* Inner Mockup content */}
              <div className="bg-[#FAFAFA] rounded-xl border border-neutral-100 p-4 space-y-4 text-neutral-900 text-left h-64 overflow-y-auto">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-150">
                  <span className="text-[9px] font-extrabold tracking-wider">AURA DEPLOYMENT</span>
                  <span className="text-[7px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full font-bold">STABLE</span>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-2 rounded bg-neutral-200" />
                  <div className="space-y-1">
                    <div className="w-full h-3.5 rounded bg-neutral-150" />
                    <div className="w-5/6 h-3.5 rounded bg-neutral-150" />
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-neutral-150 space-y-3 shadow-sm">
                  <div className="flex justify-between items-center text-[8px] font-bold text-neutral-450 uppercase">
                    <span>Performance Rating</span>
                    <span className="text-neutral-900 font-extrabold">99%</span>
                  </div>
                  <div className="h-1 bg-neutral-100 rounded overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '99%' }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-neutral-900" 
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 text-[7px] text-neutral-500 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> SEO Valid
                    </div>
                    <div className="flex items-center gap-1 text-[7px] text-neutral-500 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Secure
                    </div>
                  </div>
                </div>

                {/* Simulated list item */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[7px] text-neutral-400 font-bold uppercase">
                    <span>Active Projects</span>
                    <span>DW Dwarka</span>
                  </div>
                  <div className="p-2 bg-white rounded-lg border border-neutral-150 flex items-center justify-between text-[8px] font-bold">
                    <span>Pulse Fitness Hub</span>
                    <span className="text-neutral-500">Live</span>
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
