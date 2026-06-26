import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (sectionId: string) => void;
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="portfolio" className="py-28 bg-[#FAFAFA] border-t border-[#ECECEC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-28"
        >
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">SHOWCASE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
              Bespoke Case Studies.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed font-medium">
              A review of digital products built custom for high-ticket operations.
            </p>
          </div>

          {/* Alternate Project Rows */}
          <div className="space-y-36 text-left">
            
            {/* Project 1: Pulse Athletics (MacBook Style Preview on right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text Specs */}
              <motion.div 
                variants={textVariants}
                className="lg:col-span-6 space-y-6"
              >
                <div className="flex gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-neutral-500 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full">
                    E-Commerce & Scheduling
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400 py-1">
                    Fitness Industry
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black font-display text-neutral-900 tracking-tight leading-none">
                  PULSE ATHLETICS
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                  We engineered a unified web platform for Pulse Athletics Dwarka. The project replaces standard template models with a light, custom React interface, allowing members to search class catalogs, view active hours, and buy memberships directly on WhatsApp.
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 text-xs">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">DELIVERABLE</span>
                    <p className="font-semibold text-neutral-800 mt-1">Class Scheduler Hub</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">OUTCOME</span>
                    <p className="font-semibold text-emerald-600 mt-1">+35% Monthly Bookings</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Request Demo Review</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* MacBook Mockup */}
              <motion.div 
                variants={textVariants}
                className="lg:col-span-6 flex justify-center"
              >
                {/* Simulated MacBook container */}
                <div className="w-full max-w-[440px] rounded-xl border border-neutral-200 bg-white p-3 shadow-xl relative group">
                  <div className="absolute inset-0 bg-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                  {/* Top nav */}
                  <div className="flex space-x-1 mb-2 border-b border-neutral-100 pb-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-200" />
                    <span className="w-2 h-2 rounded-full bg-neutral-200" />
                    <span className="w-2 h-2 rounded-full bg-neutral-200" />
                  </div>
                  {/* Visual canvas */}
                  <div className="bg-slate-950 rounded-lg p-4 text-white text-left h-48 flex flex-col justify-between font-sans relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="flex justify-between items-center text-[7px] text-slate-500">
                      <span className="font-extrabold text-white">PULSE</span>
                      <span className="text-red-500 font-bold uppercase tracking-wider">dw DW Dwarka</span>
                    </div>
                    <div className="space-y-1.5 my-3">
                      <h4 className="text-[11px] font-black leading-none uppercase">SHAPE YOUR CORE</h4>
                      <p className="text-[6px] text-slate-400">Certified athletic training with top-tier free weight layouts.</p>
                    </div>
                    <div className="w-full py-1.5 rounded bg-red-600 text-white font-bold text-[7px] text-center uppercase tracking-wider">
                      Book Free Workout Session
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project 2: Nouveau Bistro (iPhone Style Preview on left) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* iPhone Mockup (Left on desktop) */}
              <motion.div 
                variants={textVariants}
                className="lg:col-span-6 flex justify-center lg:order-1 order-2"
              >
                {/* Simulated iPhone container */}
                <div className="w-56 rounded-[36px] border-[6px] border-neutral-900 bg-white p-3 shadow-2xl relative group overflow-hidden h-[380px] flex flex-col justify-between">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rounded-full bg-neutral-900 z-30" />
                  
                  {/* Content screen */}
                  <div className="bg-[#111] rounded-[28px] p-4 text-[#FAFAFA] text-left h-full flex flex-col justify-between font-serif relative overflow-hidden pt-6">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-900/10 rounded-full blur-xl pointer-events-none" />
                    <div className="flex justify-between items-center text-[7px] font-sans text-stone-500">
                      <span>BREW & CRUMB</span>
                      <span className="text-emerald-400">OPEN</span>
                    </div>
                    <div className="space-y-2 my-6">
                      <h4 className="text-[14px] leading-tight">Fresh Speciality Coffee</h4>
                      <p className="text-[7px] font-sans text-stone-400">Madagascar vanilla lattes and flaky butter pastries baked daily.</p>
                    </div>
                    <div className="w-full py-2.5 rounded-full bg-amber-600 text-stone-950 font-bold text-[8px] text-center uppercase font-sans tracking-wide">
                      Order takeaway Menu
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Specs (Right on desktop) */}
              <motion.div 
                variants={textVariants}
                className="lg:col-span-6 space-y-6 lg:order-2 order-1"
              >
                <div className="flex gap-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-neutral-500 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full">
                    Reservations & takeaway Carts
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400 py-1">
                    Culinary Industry
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black font-display text-neutral-900 tracking-tight leading-none">
                  NOUVEAU BISTRO
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                  We designed and deployed an elegant mobile-first web catalog for Nouveau Bistro Cafe. The platform handles direct takeaways and reservation slot checks, bypassing delivery commission platforms completely.
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 text-xs">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">DELIVERABLE</span>
                    <p className="font-semibold text-neutral-800 mt-1">Interactive Menu Carts</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">OUTCOME</span>
                    <p className="font-semibold text-emerald-600 mt-1">RoI Achieved in 14 Days</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Request Demo Review</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
