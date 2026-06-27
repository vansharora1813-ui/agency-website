import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, ShoppingBag } from 'lucide-react';

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
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
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const sections = [
    {
      num: '01',
      title: 'Premium Corporate & Portfolio Platforms',
      desc: 'Bespoke corporate websites and luxury creative portfolios designed from scratch. We build search-optimized architectures that represent your brand as an industry leader, establishing immediate market authority.',
      bullet: 'Business & Portfolio Websites',
      side: 'left',
      preview: (
        <div className="w-full max-w-[360px] rounded-xl border border-neutral-200 bg-white shadow-2xl p-4 flex flex-col justify-between text-neutral-900 text-left h-44 overflow-hidden font-sans relative">
          {/* Subtle design grid pattern in the background */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
          
          <div className="relative z-10 flex justify-between items-center text-[8px] text-neutral-400 font-medium">
            <span className="tracking-widest uppercase font-semibold">MUSEUM OF MODERN ART</span>
            <span className="font-mono text-neutral-350">© 2026</span>
          </div>

          <div className="relative z-10 my-auto py-2">
            <h4 className="text-[15px] font-light leading-none tracking-tight text-neutral-950 font-serif mb-1">
              The Art of Coded Spaces
            </h4>
            <p className="text-[7px] text-neutral-400 font-sans tracking-wide max-w-[200px] leading-relaxed">
              Curating high-performance layouts for cultural foundations and global design houses.
            </p>
          </div>

          {/* Premium wireframe card stack effect */}
          <div className="relative z-10 flex gap-2 items-end justify-between mt-auto">
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
            </div>
            
            {/* Minimalist interactive node diagram or preview thumbnail */}
            <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 px-2.5 py-1 rounded-full text-[7px] font-semibold text-neutral-800 shadow-sm">
              <span className="w-1 h-1 rounded-full bg-[#FF6B3D] animate-pulse" />
              <span className="font-mono tracking-tight text-[6px]">142.4 FPS / LIGHTNING</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'High-Converting Landing Pages & Funnels',
      desc: 'Clean, modular single-page funnels engineered with conversion psychology. We integrate direct lead parameters and call triggers to minimize user drop-off and maximize customer outreach.',
      bullet: 'Landing Pages',
      side: 'right',
      preview: (
        <div className="w-full max-w-[360px] rounded-xl border border-neutral-200 bg-white shadow-xl p-4 flex flex-col justify-between text-neutral-900 text-left h-44 overflow-hidden font-sans">
          <div className="flex justify-between items-center text-[7px] text-neutral-400">
            <span className="font-extrabold uppercase">CONVERSIONS</span>
            <span className="text-[#C2410C] bg-[#FFB347]/15 px-1.5 py-0.5 rounded font-bold uppercase text-[6px]">ACTIVE</span>
          </div>
          <div className="space-y-2 mt-2">
            <div className="w-10 h-1.5 rounded bg-neutral-200" />
            <div className="space-y-1">
              <div className="w-full h-2.5 rounded bg-neutral-100" />
              <div className="w-5/6 h-2.5 rounded bg-neutral-100" />
            </div>
          </div>
          <div className="w-full py-2.5 rounded bg-neutral-950 text-white font-bold text-[8px] text-center uppercase tracking-wider mt-4">
            Request Free Session
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Custom E-Commerce & Dining Integrations',
      desc: 'Fluid digital menus, reservations modules, and fast checkout e-commerce architectures. Built with secure payment gateways and API endpoints that keep checkout friction to an absolute minimum.',
      bullet: 'E-Commerce Stores & Restaurant Websites',
      side: 'left',
      preview: (
        <div className="w-full max-w-[360px] rounded-xl border border-neutral-200 bg-white shadow-xl p-3 flex flex-col justify-between text-neutral-900 text-left h-44 overflow-hidden font-sans">
          <div className="flex justify-between items-center text-[7px] text-neutral-405">
            <span className="font-extrabold uppercase flex items-center gap-1"><ShoppingBag className="w-2.5 h-2.5" /> SECURE GATEWAY</span>
            <span>UPI / PAYMENTS</span>
          </div>
          <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-150 flex items-center justify-between text-[8px] font-bold">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B3D] animate-pulse" />
              <span>Table Booking Success</span>
            </div>
            <span className="text-neutral-500"> Dwarka </span>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[7px] text-neutral-550 border-b border-neutral-150 pb-1">
              <span>Espresso Coffee Double</span>
              <span className="font-bold">₹160</span>
            </div>
            <div className="flex justify-between text-[7px] text-neutral-550">
              <span>Croissant Butter Baked</span>
              <span className="font-bold">₹180</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Enterprise Redesign & SLA Support Care',
      desc: 'Complete audit processes that redesign outdated legacy websites. Supported by daily cloud code backups, speed optimizations, domain security patches, and instant emergency fixes.',
      bullet: 'Website Redesigns, Maintenance & Support',
      side: 'right',
      preview: (
        <div className="w-full max-w-[360px] rounded-xl border border-neutral-200 bg-white shadow-xl p-4 flex flex-col justify-between text-neutral-900 text-left h-44 overflow-hidden font-sans">
          <div className="flex justify-between items-center text-[7px] text-neutral-400">
            <span className="font-extrabold uppercase">SUPPORT PLAN</span>
            <span>24/7 SLA</span>
          </div>
          <div className="space-y-2 mt-2">
            <p className="text-[10px] font-black text-neutral-900 flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5 text-neutral-500 animate-spin-slow" /> Redesign Framework
            </p>
            <p className="text-[7px] text-neutral-500 leading-normal">Outdated layouts restructured into mobile-first lightweight static pages.</p>
          </div>
          <div className="flex justify-between items-center pt-2.5 border-t border-neutral-100 mt-2 text-[7px] font-bold text-neutral-500">
            <span>Uptime Monitoring</span>
            <span className="text-[#C2410C] font-extrabold flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-[#FF6B3D]" /> 100% Active
            </span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-28 bg-transparent border-t border-[#ECECEC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-28"
        >
          {/* Main Title Section */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">OFFERINGS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
              Client Capabilities & Solutions.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed font-medium">
              We design and code clean, structured web properties. Built bespoke from layout grids to final CDN deployments.
            </p>
          </div>

          {/* Alternating Layout Sections */}
          <div className="space-y-36">
            {sections.map((sect, idx) => {
              const isLeft = sect.side === 'left';
              return (
                <div 
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Text Details */}
                  <motion.div 
                    variants={textVariants}
                    className={`lg:col-span-6 space-y-6 text-left ${
                      isLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-7xl font-black text-neutral-200 select-none">
                        {sect.num}
                      </span>
                      <div className="h-[1px] flex-grow bg-neutral-200" />
                    </div>
                    
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                      {sect.bullet}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-900 tracking-tight leading-tight">
                      {sect.title}
                    </h3>
                    
                    <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                      {sect.desc}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="group inline-flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        <span>Discuss this Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>

                  {/* Mockup Preview Column */}
                  <motion.div 
                    variants={textVariants}
                    className={`lg:col-span-6 flex justify-center ${
                      isLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Simulated screen container */}
                    <div className="w-full max-w-[420px] p-6 rounded-2xl bg-white border border-neutral-200/60 shadow-lg flex justify-center items-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
                      <div className="transition-transform duration-500 group-hover:scale-[1.01]">
                        {sect.preview}
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
