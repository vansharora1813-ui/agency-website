import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Cpu, Flame, ShieldAlert, CheckCircle2, AlertTriangle } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const words = ['Growth', 'Leads', 'Sales', 'Trust'];
  const [index, setIndex] = useState(0);
  const [isBespoke, setIsBespoke] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const textMaskVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Premium Solid Colors for Rotating Keywords (Red/Green Shades)
  const keywordColors = [
    'text-[#1E3F20]', // Growth (Forest Green)
    'text-[#991B1B]', // Leads (Crimson Red)
    'text-[#166534]', // Sales (Emerald Green)
    'text-[#881337]'  // Trust (Burgundy Red)
  ];

  const borderColors = [
    'border-[#1E3F20]',
    'border-[#991B1B]',
    'border-[#166534]',
    'border-[#881337]'
  ];

  const dotColors = [
    'text-[#1E3F20]',
    'text-[#991B1B]',
    'text-[#166534]',
    'text-[#881337]'
  ];

  // SVG Chart Paths
  const auraPath = "M0 18 C15 10, 25 25, 40 14 C55 4, 65 20, 80 8 C90 3, 95 12, 100 7";
  const templatePath = "M0 25 C15 28, 25 24, 40 28 C55 26, 65 29, 80 28 C90 28, 95 29, 100 29";

  return (
    <section id="home" className="relative min-h-screen bg-[#F0F4F8] flex items-center justify-center pt-32 sm:pt-36 lg:pt-28 pb-16 overflow-hidden">
      {/* Editorial Background Grid Lines (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 xl:gap-12 items-center">
          
          {/* Column 1: Editorial Heading & Copy (Left Side - Expanded to lg:col-span-8 for spaciousness) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 xl:col-span-8 text-left"
          >
            {/* Minimal label */}
            <motion.div 
              variants={fadeUpVariants} 
              className="group mb-1.5 sm:mb-2 inline-flex items-center gap-2 rounded-full border border-neutral-300/60 bg-white/55 px-3.5 py-1.5 text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-[0.28em] text-neutral-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950/25 hover:bg-white hover:text-neutral-950 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#166534] transition-transform duration-300 group-hover:scale-[1.7]" />
              Custom Web Systems
            </motion.div>

            {/* Huge bold headline (Masked text reveal) */}
            <div className="mt-3 sm:mt-4 overflow-hidden">
              <motion.h1 
                variants={textMaskVariants}
                className="text-[2.55rem] min-[390px]:text-[2.9rem] sm:text-[3.8rem] lg:text-[4.25rem] xl:text-[5rem] 2xl:text-[5.55rem] font-black font-display text-neutral-950 tracking-tight leading-[0.94] text-left"
              >
                <span className="block leading-[0.94]">Websites</span>
                <span className="block leading-[0.94]">Built for</span>
                <motion.span
                  transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                  className="block relative select-none text-left pt-1 sm:pt-1.5 leading-[0.94]"
                >
                  <span className="inline-block w-[6.1ch] max-w-full relative overflow-hidden h-[1.02em] align-bottom">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={words[index]}
                          initial={{ y: '100%', opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: '-100%', opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                          className={`absolute left-0 top-0 inline-block border-b-[2.5px] sm:border-b-[3.5px] lg:border-b-[4px] pb-1 font-display leading-[0.9] whitespace-nowrap transition-colors duration-300 ${keywordColors[index]} ${borderColors[index]}`}
                        >
                          {words[index]}<span className={dotColors[index]}>.</span>
                        </motion.span>
                      </AnimatePresence>
                  </span>
                </motion.span>
              </motion.h1>
            </div>

            {/* Supporting text - Increased font size and contrast for premium readability */}
            <motion.p 
              variants={fadeUpVariants}
              className="mt-6 sm:mt-7 text-[13px] sm:text-[14px] lg:text-[15px] text-neutral-600 font-medium max-w-xl leading-[1.65] text-left"
            >
              We craft high-performance, custom-coded websites for startups, brands,<br className="hidden sm:block" />
              and modern businesses.
            </motion.p>

            {/* CTA Actions */}
            <motion.div 
              variants={fadeUpVariants} 
              className="flex flex-wrap items-center gap-4 pt-6 sm:pt-7"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="group relative inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_25px_rgba(156,140,125,0.25)] hover:scale-[1.01] cursor-pointer"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('portfolio')}
                className="group inline-flex items-center gap-1 py-2.5 px-3 text-neutral-600 hover:text-neutral-950 font-bold text-[11px] uppercase tracking-wider transition-colors duration-250 cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Column 2: Right-Side Premium Apple-SaaS Dashboard Showcase (Col 4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 w-full flex justify-center lg:justify-end relative z-10 pt-8 lg:pt-10 xl:pt-14"
          >
            {/* Ambient Glowing Background Lights */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-neutral-400/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#9C8C7D]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />

            {/* Pop-up Lift Wrapper */}
            <motion.div
              whileHover={{ 
                y: -10,
                scale: 1.025,
                transition: { type: "spring", stiffness: 260, damping: 20 }
              }}
              whileTap={{ scale: 0.99 }}
              className="w-full max-w-[400px] relative select-none cursor-pointer"
            >
              {/* Main Dashboard Window (Glassmorphism) */}
              <div 
                className="w-full rounded-[24px] border border-neutral-200/50 bg-white/75 backdrop-blur-xl shadow-[0_35px_70px_-15px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.8)] p-6 flex flex-col gap-5 relative overflow-hidden"
              >
                {/* Safari-style Chrome Header */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200/40">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 shadow-[0_0_2px_rgba(0,0,0,0.1)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 shadow-[0_0_2px_rgba(0,0,0,0.1)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 shadow-[0_0_2px_rgba(0,0,0,0.1)]" />
                  </div>
                  <div className="flex items-center gap-1 text-[8px] font-sans font-bold text-neutral-400 bg-neutral-100 px-3 py-0.5 rounded-full border border-neutral-200/30 shadow-inner">
                    <Cpu className="w-2 h-2 text-neutral-500 animate-spin" />
                    <span>aura-engine.v2</span>
                  </div>
                </div>

                {/* Playful Interactive Toggle */}
                <div className="flex items-center bg-neutral-100/85 p-1 rounded-full border border-neutral-200/50 shadow-inner w-full">
                  <button 
                    onClick={() => setIsBespoke(false)}
                    className={`flex-1 text-center py-2 rounded-full text-[8.5px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      !isBespoke ? 'bg-[#B91C1C] text-white shadow-md' : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Template Code
                  </button>
                  <button 
                    onClick={() => setIsBespoke(true)}
                    className={`flex-1 text-center py-2 rounded-full text-[8.5px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isBespoke ? 'bg-[#1D1D1F] text-[#4ADE80] border border-neutral-800 shadow-md' : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Aura Engineered
                  </button>
                </div>

                {/* Circular Gauge and Metrics Grid */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  
                  {/* Circular Gauge (Col 5) */}
                  <div className="col-span-5 flex flex-col items-center justify-center p-3.5 rounded-2xl bg-gradient-to-b from-neutral-50 to-neutral-100/50 border border-neutral-200/40 shadow-inner transition-colors duration-300">
                    <div className="relative flex items-center justify-center">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle cx="32" cy="32" r="28" className="stroke-neutral-200/50 fill-none" strokeWidth="5.5" />
                        <motion.circle 
                          cx="32" 
                          cy="32" 
                          r="28" 
                          className="fill-none" 
                          strokeWidth="5.5" 
                          strokeLinecap="round"
                          animate={{ 
                            strokeDashoffset: isBespoke ? 176 - (99.8 / 100) * 176 : 176 - (34.1 / 100) * 176,
                            stroke: isBespoke ? '#166534' : '#B91C1C'
                          }}
                          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                          style={{ strokeDasharray: 176, filter: isBespoke ? 'drop-shadow(0 2px 8px rgba(22,101,52,0.35))' : 'drop-shadow(0 2px 8px rgba(185,28,28,0.35))' }}
                        />
                      </svg>
                      {/* Inner Score Count */}
                      <div className="absolute flex flex-col items-center justify-center">
                        <motion.span 
                          className={`text-[12px] font-black tracking-tighter ${isBespoke ? 'text-[#166534]' : 'text-[#B91C1C]'}`}
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ duration: 0.3 }}
                          key={isBespoke ? "99.8" : "34.1"}
                        >
                          {isBespoke ? "99.8" : "34.1"}
                        </motion.span>
                        <span className="text-[5px] uppercase font-black text-neutral-500 tracking-widest leading-none mt-0.5">SPEED</span>
                      </div>
                    </div>
                    <span className="text-[7px] font-black uppercase text-neutral-500 mt-2 tracking-wider">PageSpeed Rating</span>
                  </div>

                  {/* Metrics Box (Col 7) */}
                  <div className="col-span-7 flex flex-col gap-2">
                    {/* LCP Metric */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-neutral-200/30 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-1.5">
                        <div className={`p-1 rounded-lg ${isBespoke ? 'bg-[#166534]/10 text-[#166534]' : 'bg-red-50 text-[#B91C1C]'}`}>
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[6.5px] font-bold text-neutral-400 uppercase tracking-wider">LCP Metric</p>
                          <p className="text-[9px] font-extrabold text-neutral-800 tracking-tight">
                            {isBespoke ? "0.8s (Excellent)" : "4.9s (Poor)"}
                          </p>
                        </div>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full ${isBespoke ? 'bg-[#166534] shadow-[0_0_6px_#166534]' : 'bg-[#B91C1C] shadow-[0_0_6px_#B91C1C]'}`} />
                    </div>

                    {/* SEO Visibility */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-neutral-200/30 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-1.5">
                        <div className={`p-1 rounded-lg ${isBespoke ? 'bg-neutral-100 text-neutral-600' : 'bg-red-50 text-[#B91C1C]'}`}>
                          <TrendingUp className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[6.5px] font-bold text-neutral-400 uppercase tracking-wider">SEO Traffic</p>
                          <p className="text-[9px] font-extrabold text-neutral-800 tracking-tight">
                            {isBespoke ? "+42% Growth" : "-18% Declining"}
                          </p>
                        </div>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full ${isBespoke ? 'bg-[#166534] shadow-[0_0_6px_#166534]' : 'bg-[#B91C1C] shadow-[0_0_6px_#B91C1C]'}`} />
                    </div>
                  </div>
                </div>

                {/* Conversion Graph Chart */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-neutral-50 to-neutral-100/50 border border-neutral-200/40 shadow-inner flex flex-col gap-2 relative">
                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] font-black uppercase text-neutral-500 tracking-wider">Revenue Spike Curve</span>
                    <span className={`text-[8px] font-extrabold px-2 py-0.5 rounded-full border ${
                      isBespoke 
                        ? 'text-[#166534] bg-[#166534]/10 border-[#166534]/20' 
                        : 'text-[#B91C1C] bg-[#B91C1C]/10 border-[#B91C1C]/20'
                    }`}>
                      {isBespoke ? "+148% conversion" : "Low retention"}
                    </span>
                  </div>
                  
                  {/* SVG Graph with Path Morphing */}
                  <svg className="w-full h-16 overflow-visible" viewBox="0 0 100 30">
                    <defs>
                      <linearGradient id="chartGradAura" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#166534" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#166534" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="chartGradTemplate" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#B91C1C" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    <motion.path 
                      d={isBespoke ? auraPath : templatePath}
                      fill={isBespoke ? "url(#chartGradAura)" : "url(#chartGradTemplate)"} 
                      className="transition-all duration-300"
                    />

                    <motion.path
                      d={isBespoke ? auraPath : templatePath}
                      fill="none"
                      animate={{ 
                        stroke: isBespoke ? "#166534" : "#B91C1C" 
                      }}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Pulse Dot */}
                    <motion.circle 
                      animate={{ 
                        cx: isBespoke ? 100 : 100, 
                        cy: isBespoke ? 7 : 29, 
                        fill: isBespoke ? "#166534" : "#B91C1C" 
                      }}
                      r="2.5" 
                      className="stroke-white" 
                      strokeWidth="0.75" 
                    />
                  </svg>
                </div>
              </div>

              {/* Overlapping Floating Widget 1: Active Users */}
              <motion.div
                className={`absolute -top-5 -left-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-2.5 flex items-center gap-2 border z-20 pointer-events-auto transition-all duration-300 ${
                  isBespoke 
                    ? 'bg-[#1D1D1F] text-white border-neutral-800' 
                    : 'bg-[#18181B] text-neutral-400 border-neutral-800'
                }`}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isBespoke ? 'bg-[#22C55E]' : 'bg-red-400'
                  }`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${
                    isBespoke ? 'bg-[#22C55E]' : 'bg-red-500'
                  }`} />
                </span>
                <div className="text-left font-sans">
                  <p className="text-[6.5px] font-black uppercase tracking-widest leading-none opacity-80">ACTIVE USER TRAFFIC</p>
                  <p className="text-[11px] font-black tracking-tight mt-0.5 leading-none text-white">
                    {isBespoke ? "4,821 / live" : "14 / active"}
                  </p>
                </div>
              </motion.div>

              {/* Overlapping Floating Widget 2: Playful Site Health Audit (Replaces Code Widget) */}
              <motion.div
                className="absolute -bottom-6 -left-4 rounded-2xl border border-neutral-200/60 bg-white p-3.5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.08)] w-[170px] z-20 pointer-events-auto text-left"
                whileHover={{ y: -6, scale: 1.04 }}
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Flame className={`w-3.5 h-3.5 ${isBespoke ? 'text-[#166534] animate-bounce' : 'text-neutral-450'}`} />
                  <span className="text-[7.5px] font-black uppercase tracking-wider text-neutral-500">Site Audit Check</span>
                </div>
                
                <div className="space-y-1.5 select-none font-sans">
                  <div className="flex items-center gap-1.5">
                    {isBespoke ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-[#166534]" />
                        <span className="text-[8px] font-extrabold text-neutral-700">99+ Google Lighthouse</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3 h-3 text-[#B91C1C]" />
                        <span className="text-[8px] font-extrabold text-neutral-500">Laggy Theme Scripts</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {isBespoke ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-[#166534]" />
                        <span className="text-[8px] font-extrabold text-neutral-700">Conversion Focused UI</span>
                      </>
                    ) : (
                      <>
                        <ShieldAlert className="w-3 h-3 text-[#B91C1C]" />
                        <span className="text-[8px] font-extrabold text-neutral-500">Generic Template Look</span>
                      </>
                    )}
                  </div>
                </div>

                <div className={`mt-3 py-1 text-center rounded-lg text-[6.5px] font-black uppercase tracking-widest border transition-colors ${
                  isBespoke 
                    ? 'bg-neutral-50 border-neutral-200/50 text-[#166534]' 
                    : 'bg-red-50 border-red-200/30 text-[#B91C1C]'
                }`}>
                  {isBespoke ? "Engine Optimized" : "High Risk Audit"}
                </div>
              </motion.div>

              {/* Overlapping Floating Widget 3: Conversion Lift */}
              <motion.div
                className={`absolute -bottom-5 -right-4 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3 flex items-center gap-2 border z-20 pointer-events-auto transition-all duration-300 ${
                  isBespoke 
                    ? 'bg-gradient-to-br from-[#166534] to-[#14532D] text-white border-[#166534]/20 shadow-[0_15px_30px_-5px_rgba(22,101,52,0.2)]' 
                    : 'bg-gradient-to-br from-[#B91C1C] to-[#7F1D1D] text-white border-red-400/20 shadow-[0_15px_30px_-5px_rgba(185,28,28,0.25)]'
                }`}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <div className="p-1 rounded-lg bg-white/20 text-white">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left font-sans">
                  <p className="text-[6px] font-black uppercase tracking-widest leading-none opacity-85">
                    {isBespoke ? "CONVERSION BOOST" : "REVENUE LEAKAGE"}
                  </p>
                  <p className="text-[12px] font-black tracking-tight mt-0.5 leading-none">
                    {isBespoke ? "+32% boost" : "-24% loss"}
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
