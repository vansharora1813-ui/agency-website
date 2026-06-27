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
      {/* Editorial Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12] z-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #EBE3DB 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #EBE3DB 1.5px, transparent 1.5px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 85%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 xl:gap-12 items-center">
          
          {/* Column 1: Editorial Heading & Copy (Spans full width after removing the right visual element) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-12 xl:col-span-12 text-left lg:pl-0"
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
                  <motion.span 
                    layout
                    transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                    className="inline-block relative pb-1 overflow-hidden h-[1.15em] align-bottom border-b-[2.5px] sm:border-b-[3.5px] lg:border-b-[4px] transition-colors duration-300"
                    style={{ borderColor: dotFillColors[index] }}
                  >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={words[index]}
                          variants={keywordVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className={`inline-flex items-end gap-[0.04em] font-display leading-[0.9] whitespace-nowrap transition-colors duration-300 will-change-transform ${keywordColors[index]}`}
                        >
                          <span>{words[index]}</span>
                          <span
                            className="mb-[0.09em] inline-block h-[0.13em] w-[0.13em] rounded-full"
                            style={{ backgroundColor: dotFillColors[index] }}
                            aria-hidden="true"
                          />
                        </motion.span>
                      </AnimatePresence>
                  </motion.span>
                </motion.span>
              </motion.h1>
            </div>

            {/* Supporting text - Increased font size, wider max-width, strictly 2 lines */}
            <motion.p 
              variants={fadeUpVariants}
              className="mt-6 sm:mt-7 text-[18px] sm:text-[20px] lg:text-[22px] text-[#6F6760] font-mergola font-bold max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] leading-[1.45] text-left"
            >
              We craft bespoke, <span className="text-[#FF6B3D] font-display font-black">high-performance</span><br />
              websites for modern brands.
            </motion.p>

            {/* CTA Actions - Restored on the left side */}
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

        </div>
      </div>
    </section>
  );
}
