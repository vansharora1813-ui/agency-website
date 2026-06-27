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
  const vulcanico = {
    lava: '#FF6B3D',
    ember: '#FF8A4C',
    gold: '#FFB347',
    ash: '#D8D3CD',
    pearl: '#F6F4F0',
    ink: '#2F2A27',
  };

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

  const keywordVariants = {
    initial: {
      opacity: 0,
      y: 14,
      scale: 0.985,
      filter: 'blur(7px)',
      letterSpacing: '0.04em',
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      letterSpacing: '0em',
      transition: { duration: 0.72, ease: [0.19, 1, 0.22, 1] as const },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 1.012,
      filter: 'blur(6px)',
      letterSpacing: '0.025em',
      transition: { duration: 0.38, ease: [0.55, 0, 1, 0.45] as const },
    },
  };

  // Light vulcanico palette: lava, amber, pearl, and ash.
  const keywordColors = [
    'text-[#2F2A27]',
    'text-[#FF6B3D]',
    'text-[#FF8A4C]',
    'text-[#A76A43]'
  ];

  const borderColors = [
    'border-[#D8D3CD]',
    'border-[#FF6B3D]',
    'border-[#FFB347]',
    'border-[#A76A43]'
  ];

  const dotFillColors = [
    '#FF6B3D',
    '#FFB347',
    '#A76A43',
    '#D8D3CD'
  ];

  // SVG Chart Paths
  const auraPath = "M0 18 C15 10, 25 25, 40 14 C55 4, 65 20, 80 8 C90 3, 95 12, 100 7";
  const templatePath = "M0 25 C15 28, 25 24, 40 28 C55 26, 65 29, 80 28 C90 28, 95 29, 100 29";

  return (
    <section id="home" className="relative min-h-screen bg-transparent flex items-center justify-center pt-32 sm:pt-36 lg:pt-28 pb-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 xl:gap-12 items-center">
          
          {/* Column 1: Editorial Heading & Copy (Left Side - Expanded to lg:col-span-8 for spaciousness) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 xl:col-span-8 text-left lg:pl-10 xl:pl-16 2xl:pl-20"
          >
            {/* Minimal label */}
            <motion.div 
              variants={fadeUpVariants} 
              className="group mb-1.5 sm:mb-2 inline-flex items-center gap-2 rounded-full border border-[#EEE7E0] bg-white/80 px-3.5 py-1.5 text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-[0.24em] text-[#6F6760] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF8A4C]/45 hover:bg-white hover:text-[#2F2A27] hover:shadow-[0_12px_30px_rgba(255,107,61,0.12)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B3D] transition-transform duration-300 group-hover:scale-[1.7]" />
              Custom Web Systems
            </motion.div>

            {/* Huge bold headline (Masked text reveal) */}
            <div className="mt-3 sm:mt-4 overflow-hidden">
              <motion.h1 
                variants={textMaskVariants}
                className="text-[2.3rem] min-[390px]:text-[2.6rem] sm:text-[3.25rem] lg:text-[3.65rem] xl:text-[4.25rem] 2xl:text-[4.7rem] font-black font-display text-neutral-950 tracking-normal leading-[0.94] text-left"
              >
                <span className="block leading-[0.94]">Websites</span>
                <span className="block leading-[0.94]">Built for</span>
                <motion.span
                  transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                  className="block relative select-none text-left pt-1 sm:pt-1.5 leading-[0.94]"
                >
                  <span className="inline-block w-[6.2ch] max-w-full relative overflow-hidden h-[1.04em] align-bottom">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={words[index]}
                          variants={keywordVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className={`absolute left-0 top-0 inline-flex items-end gap-[0.04em] border-b-[2.5px] sm:border-b-[3.5px] lg:border-b-[4px] pb-1 font-display leading-[0.9] whitespace-nowrap transition-colors duration-300 will-change-transform ${keywordColors[index]} ${borderColors[index]}`}
                        >
                          <span>{words[index]}</span>
                          <span
                            className="mb-[0.09em] inline-block h-[0.13em] w-[0.13em] rounded-full"
                            style={{ backgroundColor: dotFillColors[index] }}
                            aria-hidden="true"
                          />
                        </motion.span>
                      </AnimatePresence>
                  </span>
                </motion.span>
              </motion.h1>
            </div>

            {/* Supporting text - Increased font size and contrast for premium readability */}
            <motion.p 
              variants={fadeUpVariants}
              className="mt-6 sm:mt-7 text-[15px] sm:text-[16px] lg:text-[17px] text-[#6F6760] font-mergola font-semibold max-w-xl leading-[1.62] text-left"
            >
              We craft <span className="text-[#FF6B3D] font-display font-black italic">high-performance</span>, custom-coded websites for startups, brands,<br className="hidden sm:block" />
              and modern businesses with a sharper, brighter web presence.
            </motion.p>

            {/* CTA Actions */}
            <motion.div 
              variants={fadeUpVariants} 
              className="flex flex-wrap items-center gap-4 pt-6 sm:pt-7"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="group relative inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FF6B3D] text-white font-display font-black text-[12px] uppercase tracking-[0.08em] transition-all duration-300 shadow-[0_12px_28px_rgba(255,107,61,0.22)] hover:bg-[#F45D2F] hover:shadow-[0_16px_34px_rgba(255,107,61,0.28)] hover:scale-[1.02] cursor-pointer"
              >
                <span>Book a Free Call</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button
                onClick={() => onNavigate('portfolio')}
                className="group inline-flex items-center gap-1 py-2.5 px-3 text-[#6F6760] hover:text-[#FF6B3D] font-display font-black text-[12px] uppercase tracking-[0.08em] transition-colors duration-250 cursor-pointer"
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
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F6F4F0] rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#F6F4F0] rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1.5s' }} />

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
                className="w-full rounded-[24px] border border-[#EEE7E0] bg-white/86 backdrop-blur-xl shadow-[0_35px_70px_-15px_rgba(47,42,39,0.12),0_1px_3px_rgba(47,42,39,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] p-6 flex flex-col gap-5 relative overflow-hidden"
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
                      !isBespoke ? 'bg-[#D8D3CD] text-[#2F2A27] shadow-md' : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Template Code
                  </button>
                  <button 
                    onClick={() => setIsBespoke(true)}
                    className={`flex-1 text-center py-2 rounded-full text-[8.5px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isBespoke ? 'bg-[#FF6B3D] text-white border border-[#FF8A4C]/40 shadow-md' : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Aura Engineered
                  </button>
                </div>

                {/* Circular Gauge and Metrics Grid */}
                <div className="grid grid-cols-12 gap-4 items-center">
                  
                  {/* Circular Gauge (Col 5) */}
                  <div className="col-span-5 flex flex-col items-center justify-center p-3.5 rounded-2xl bg-[#FFFDFB] border border-neutral-200/40 shadow-inner transition-colors duration-300">
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
                            stroke: isBespoke ? vulcanico.lava : vulcanico.ash
                          }}
                          transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                          style={{ strokeDasharray: 176, filter: isBespoke ? 'drop-shadow(0 2px 8px rgba(255,107,61,0.36))' : 'drop-shadow(0 2px 8px rgba(216,211,205,0.8))' }}
                        />
                      </svg>
                      {/* Inner Score Count */}
                      <div className="absolute flex flex-col items-center justify-center">
                        <motion.span 
                          className={`text-[12px] font-black tracking-tighter ${isBespoke ? 'text-[#FF6B3D]' : 'text-[#A69B91]'}`}
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
                        <div className={`p-1 rounded-lg ${isBespoke ? 'bg-[#FF6B3D]/10 text-[#FF6B3D]' : 'bg-[#D8D3CD]/35 text-[#6F6760]'}`}>
                          <Sparkles className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[6.5px] font-bold text-neutral-400 uppercase tracking-wider">LCP Metric</p>
                          <p className="text-[9px] font-extrabold text-neutral-800 tracking-tight">
                            {isBespoke ? "0.8s (Excellent)" : "4.9s (Poor)"}
                          </p>
                        </div>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full ${isBespoke ? 'bg-[#FF6B3D] shadow-[0_0_6px_#FF6B3D]' : 'bg-[#D8D3CD] shadow-[0_0_6px_#D8D3CD]'}`} />
                    </div>

                    {/* SEO Visibility */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-neutral-200/30 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-1.5">
                        <div className={`p-1 rounded-lg ${isBespoke ? 'bg-[#FFB347]/18 text-[#B64D28]' : 'bg-[#D8D3CD]/35 text-[#6F6760]'}`}>
                          <TrendingUp className="w-3 h-3" />
                        </div>
                        <div className="text-left">
                          <p className="text-[6.5px] font-bold text-neutral-400 uppercase tracking-wider">SEO Traffic</p>
                          <p className="text-[9px] font-extrabold text-neutral-800 tracking-tight">
                            {isBespoke ? "+42% Growth" : "-18% Declining"}
                          </p>
                        </div>
                      </div>
                      <span className={`w-1.5 h-1.5 rounded-full ${isBespoke ? 'bg-[#FFB347] shadow-[0_0_6px_#FFB347]' : 'bg-[#D8D3CD] shadow-[0_0_6px_#D8D3CD]'}`} />
                    </div>
                  </div>
                </div>

                {/* Conversion Graph Chart */}
                <div className="p-4 rounded-2xl bg-[#FFFDFB] border border-neutral-200/40 shadow-inner flex flex-col gap-2 relative">
                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] font-black uppercase text-neutral-500 tracking-wider">Revenue Spike Curve</span>
                    <span className={`text-[8px] font-extrabold px-2 py-0.5 rounded-full border ${
                      isBespoke 
                        ? 'text-[#B64D28] bg-[#FFB347]/16 border-[#FF8A4C]/25' 
                        : 'text-[#6F6760] bg-[#D8D3CD]/30 border-[#D8D3CD]/50'
                    }`}>
                      {isBespoke ? "+148% conversion" : "Low retention"}
                    </span>
                  </div>
                  
                  {/* SVG Graph with Path Morphing */}
                  <svg className="w-full h-16 overflow-visible" viewBox="0 0 100 30">
                    <motion.path 
                      d={isBespoke ? auraPath : templatePath}
                      fill="none" 
                      className="transition-all duration-300"
                    />

                    <motion.path
                      d={isBespoke ? auraPath : templatePath}
                      fill="none"
                      animate={{ 
                        stroke: isBespoke ? "#FF6B3D" : "#D8D3CD" 
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
                        fill: isBespoke ? "#FF6B3D" : "#D8D3CD" 
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
                    ? 'bg-white text-[#2F2A27] border-[#FF8A4C]/30' 
                    : 'bg-white text-[#6F6760] border-[#D8D3CD]/60'
                }`}
                whileHover={{ y: -4, scale: 1.05 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isBespoke ? 'bg-[#FFB347]' : 'bg-[#D8D3CD]'
                  }`} />
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${
                    isBespoke ? 'bg-[#FF6B3D]' : 'bg-[#D8D3CD]'
                  }`} />
                </span>
                <div className="text-left font-sans">
                  <p className="text-[6.5px] font-black uppercase tracking-widest leading-none opacity-80">ACTIVE USER TRAFFIC</p>
                  <p className="text-[11px] font-black tracking-tight mt-0.5 leading-none text-[#2F2A27]">
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
                  <Flame className={`w-3.5 h-3.5 ${isBespoke ? 'text-[#FF6B3D] animate-bounce' : 'text-[#A69B91]'}`} />
                  <span className="text-[7.5px] font-black uppercase tracking-wider text-neutral-500">Site Audit Check</span>
                </div>
                
                <div className="space-y-1.5 select-none font-sans">
                  <div className="flex items-center gap-1.5">
                    {isBespoke ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-[#FF6B3D]" />
                        <span className="text-[8px] font-extrabold text-neutral-700">99+ Google Lighthouse</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3 h-3 text-[#A69B91]" />
                        <span className="text-[8px] font-extrabold text-neutral-500">Laggy Theme Scripts</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {isBespoke ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-[#FF6B3D]" />
                        <span className="text-[8px] font-extrabold text-neutral-700">Conversion Focused UI</span>
                      </>
                    ) : (
                      <>
                        <ShieldAlert className="w-3 h-3 text-[#A69B91]" />
                        <span className="text-[8px] font-extrabold text-neutral-500">Generic Template Look</span>
                      </>
                    )}
                  </div>
                </div>

                <div className={`mt-3 py-1 text-center rounded-lg text-[6.5px] font-black uppercase tracking-widest border transition-colors ${
                  isBespoke 
                    ? 'bg-[#FFB347]/14 border-[#FF8A4C]/25 text-[#B64D28]' 
                    : 'bg-[#D8D3CD]/30 border-[#D8D3CD]/50 text-[#6F6760]'
                }`}>
                  {isBespoke ? "Engine Optimized" : "High Risk Audit"}
                </div>
              </motion.div>

              {/* Overlapping Floating Widget 3: Conversion Lift */}
              <motion.div
                className={`absolute -bottom-5 -right-4 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-3 flex items-center gap-2 border z-20 pointer-events-auto transition-all duration-300 ${
                  isBespoke 
                    ? 'bg-[#FF6B3D] text-white border-[#FFB347]/30 shadow-[0_15px_30px_-5px_rgba(255,107,61,0.25)]' 
                    : 'bg-[#D8D3CD] text-[#2F2A27] border-[#D8D3CD]/70 shadow-[0_15px_30px_-5px_rgba(47,42,39,0.12)]'
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
