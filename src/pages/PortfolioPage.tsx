import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function PortfolioPage() {
  // Scroll to top when mounting this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const projects = [
    {
      id: 'pulse-athletics',
      title: 'PULSE ATHLETICS',
      subtitle: 'Fitness & E-Commerce Hub',
      category: 'E-Commerce & Scheduling',
      industry: 'Fitness Industry',
      description: 'We engineered a unified web platform for Pulse Athletics. The project replaces standard template models with a light, custom React interface, allowing members to search class catalogs, view active hours, and buy memberships directly on WhatsApp.',
      deliverable: 'Class Scheduler Hub',
      outcome: '+35% Monthly Bookings',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'WhatsApp API'],
      hoverAccent: 'hover:border-red-500/20 hover:shadow-red-500/5',
      glowColor: 'bg-red-500/5',
      mockup: (
        <div className="w-full max-w-[440px] rounded-xl border border-neutral-200 bg-white p-3 shadow-xl relative group overflow-hidden transition-all duration-500 hover:border-red-200">
          <div className="absolute inset-0 bg-red-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="flex space-x-1 mb-2 border-b border-neutral-100 pb-2">
            <span className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-red-300 transition-colors" />
            <span className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-red-300 transition-colors" />
            <span className="w-2 h-2 rounded-full bg-neutral-200 group-hover:bg-red-300 transition-colors" />
          </div>
          <div className="bg-slate-950 rounded-lg p-5 text-white text-left h-52 flex flex-col justify-between font-sans relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-center text-[7px] text-slate-500">
              <span className="font-extrabold text-white tracking-widest">PULSE</span>
              <span className="text-red-500 font-bold uppercase tracking-wider">Dwarka, Delhi</span>
            </div>
            <div className="space-y-1.5 my-3">
              <h4 className="text-[12px] font-black leading-none uppercase tracking-tight">SHAPE YOUR CORE</h4>
              <p className="text-[6.5px] text-slate-400">Certified athletic training with top-tier free weight layouts.</p>
            </div>
            <div className="w-full py-2 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-[7.5px] text-center uppercase tracking-wider transition-colors">
              Book Free Workout Session
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'nouveau-bistro',
      title: 'NOUVEAU BISTRO',
      subtitle: 'Premium Culinary Experience',
      category: 'Reservations & Takeaway Carts',
      industry: 'Culinary Industry',
      description: 'We designed and deployed an elegant mobile-first web catalog for Nouveau Bistro Cafe. The platform handles direct takeaways and reservation slot checks, bypassing delivery commission platforms completely.',
      deliverable: 'Interactive Menu Carts',
      outcome: 'RoI Achieved in 14 Days',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'UPI Integration'],
      hoverAccent: 'hover:border-amber-500/20 hover:shadow-amber-500/5',
      glowColor: 'bg-amber-500/5',
      mockup: (
        <div className="w-56 rounded-[36px] border-[6px] border-neutral-900 bg-white p-3 shadow-2xl relative group overflow-hidden h-[380px] flex flex-col justify-between transition-all duration-500 hover:border-amber-950">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rounded-full bg-neutral-900 z-30" />
          <div className="bg-[#111] rounded-[28px] p-4 text-[#FAFAFA] text-left h-full flex flex-col justify-between font-serif relative overflow-hidden pt-6 transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-900/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex justify-between items-center text-[7px] font-sans text-stone-500">
              <span>BREW & CRUMB</span>
              <span className="text-emerald-450 font-bold">OPEN</span>
            </div>
            <div className="space-y-2 my-6">
              <h4 className="text-[15px] leading-tight font-light">Fresh Speciality Coffee</h4>
              <p className="text-[7.5px] font-sans text-stone-400 leading-relaxed">Madagascar vanilla lattes and flaky butter pastries baked daily.</p>
            </div>
            <div className="w-full py-2.5 rounded-full bg-amber-600 text-stone-950 font-bold text-[8px] text-center uppercase font-sans tracking-wide transition-colors hover:bg-amber-500">
              Order takeaway Menu
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lumina-skin',
      title: 'LUMINA CLINIC',
      subtitle: 'Luxury Dermatology Portal',
      category: 'Consultation & Booking System',
      industry: 'Healthcare & Wellness',
      description: 'A bespoke dermatology catalog and consultation funnel. Designed to communicate absolute trust and medical quality, this light-themed interface integrates WhatsApp booking workflows and digital skin profiles.',
      deliverable: 'Consultation Portal',
      outcome: '50% Lead Drop-off Reduction',
      tech: ['React', 'Lucide Icons', 'Tailwind CSS', 'WhatsApp Linker'],
      hoverAccent: 'hover:border-indigo-500/20 hover:shadow-indigo-500/5',
      glowColor: 'bg-indigo-500/5',
      mockup: (
        <div className="w-full max-w-[440px] rounded-xl border border-neutral-200 bg-white p-3 shadow-xl relative group overflow-hidden transition-all duration-500 hover:border-indigo-200">
          <div className="absolute inset-0 bg-indigo-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="flex space-x-1 mb-2 border-b border-neutral-100 pb-2">
            <span className="w-2 h-2 rounded-full bg-neutral-200" />
            <span className="w-2 h-2 rounded-full bg-neutral-200" />
            <span className="w-2 h-2 rounded-full bg-neutral-200" />
          </div>
          <div className="bg-neutral-950 rounded-lg p-5 text-white text-left h-52 flex flex-col justify-between font-sans relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-center text-[7px] text-neutral-400">
              <span className="font-extrabold text-white tracking-widest">LUMINA</span>
              <span className="text-indigo-400 font-bold uppercase tracking-wider">Derm Care</span>
            </div>
            <div className="space-y-1.5 my-3">
              <h4 className="text-[12px] font-black leading-none uppercase tracking-tight text-indigo-100">BESPOKE SKIN SYSTEMS</h4>
              <p className="text-[6.5px] text-neutral-400">Targeted dermatology treatments and clinical consultations.</p>
            </div>
            <div className="w-full py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-[7.5px] text-center uppercase tracking-wider transition-colors">
              Schedule Skin Consultation
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Typographic Intro */}
        <div className="space-y-6 max-w-3xl mb-24">
          <div className="inline-flex items-center gap-1.5 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full text-[9px] font-bold text-neutral-600 uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-neutral-950" />
            <span>SELECTED DIGITAL CASE STUDIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-neutral-900 tracking-tight leading-[1.05]">
            Engineering Custom Web Experiences.
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-medium">
            We focus on custom components, rapid loading times, and intuitive layouts. Every project is built from scratch to meet the highest engineering standards and maximize business conversions.
          </p>
        </div>

        {/* Case Studies Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-36"
        >
          {projects.map((proj, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={proj.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border border-transparent rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white hover:border-[#ECECEC] hover:shadow-2xl shadow-neutral-200/40 group ${proj.hoverAccent}`}
              >
                {/* Text specs */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] font-black uppercase tracking-wider text-neutral-600 bg-neutral-100/80 border border-neutral-200 px-3 py-1 rounded-full transition-colors group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950">
                      {proj.category}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wider text-neutral-450 py-1">
                      {proj.industry}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-black font-display text-neutral-900 tracking-tight leading-none transition-colors group-hover:text-neutral-950">
                    {proj.title}
                  </h2>

                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                    {proj.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[8px] font-mono text-neutral-500 border border-neutral-200 px-2 py-0.5 rounded transition-all duration-300 group-hover:border-neutral-300 group-hover:bg-neutral-50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 text-xs transition-colors group-hover:border-neutral-300">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">DELIVERABLE</span>
                      <p className="font-semibold text-neutral-800 mt-1">{proj.deliverable}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-neutral-400">OUTCOME</span>
                      <p className="font-semibold text-neutral-900 mt-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{proj.outcome}</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center gap-2 text-neutral-900 hover:text-neutral-600 text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <span>Request Briefing Call</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Mockup visual display */}
                <div className={`lg:col-span-6 flex justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {proj.mockup}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic bottom CTA section */}
        <div className="mt-40 border border-neutral-200 rounded-3xl p-8 sm:p-16 bg-white shadow-xl relative overflow-hidden flex flex-col items-center text-center space-y-6 transition-all duration-500 hover:border-neutral-950 hover:shadow-2xl">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-neutral-50 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neutral-50 rounded-full blur-2xl" />
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-none z-10">
            Let's build something iconic.
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm font-medium max-w-md leading-relaxed z-10">
            We operate in high-end design grids. Book a free consultation call to audit your current platform design and user flow today.
          </p>
          <div className="pt-4 z-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white hover:bg-neutral-900 text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-neutral-950/10 cursor-pointer"
            >
              <span>Initiate Project Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
