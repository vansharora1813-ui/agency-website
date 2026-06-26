import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass, Calendar, Edit3, Code, Terminal, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: 'Discovery & Consultation', num: '01', icon: Compass, desc: 'We deep dive into your business model, customer demographic, target search keywords, and key conversion metrics.' },
    { title: 'Information Mapping', num: '02', icon: Calendar, desc: 'We outline content structures, sitemaps, and direct lead paths to minimize funnel friction.' },
    { title: 'Visual & Interface Design', num: '03', icon: Edit3, desc: 'We craft high-fidelity desktop and mobile mockups in Figma, prioritizing typography, whitespace, and branding rules.' },
    { title: 'Engineering & Animation', num: '04', icon: Code, desc: 'We handcode your web pages in React and Tailwind CSS, layering lightweight scroll-bound Framer Motion transitions.' },
    { title: 'Speed Audit & Diagnostics', num: '05', icon: Terminal, desc: 'We run diagnostics checking performance, semantic schema, speed indexing, and responsive alignment grids.' },
    { title: 'CDN Launch & SSL Setup', num: '06', icon: Rocket, desc: 'We point your domain, setup security headers, configure hosting on global CDN edges, and go live.' }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-28 bg-[#F0F4F8] border-t border-[#ECECEC] relative overflow-hidden">
      {/* Dynamic Background Mesh Effect */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-neutral-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">TIMELINE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
            An Agile 5-Day Launch Path.
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed font-medium">
            Our structured build process ensures pixel-perfect codebases and seamless handoffs with zero launch delays.
          </p>
        </div>

        {/* Editorial Vertical Step Layout */}
        <div ref={containerRef} className="relative mt-24 max-w-3xl mx-auto pl-8 md:pl-16 space-y-12 text-left">
          
          {/* Background Timeline Line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-neutral-200/80 rounded-full" />
          
          {/* Animated Foreground Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-neutral-950 origin-top rounded-full"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
                  }
                }}
                className="relative group"
              >
                {/* Glowing Node on timeline line */}
                <div className="absolute -left-[38px] md:-left-[62px] top-6 w-4 h-4 rounded-full bg-[#F0F4F8] border-2 border-neutral-300 group-hover:border-neutral-950 flex items-center justify-center transition-all duration-300 z-10 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-neutral-950 transition-all duration-300 group-hover:scale-125" />
                </div>

                {/* Layered Interactive Step Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.005 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="bg-white border border-[#ECECEC] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-neutral-950/15 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle inner grid lines in active card background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-neutral-50 border border-neutral-150 text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-neutral-900 tracking-tight transition-colors group-hover:text-neutral-950">
                        {step.title}
                      </h3>
                    </div>
                    <span className="font-display text-xl font-black text-neutral-200 group-hover:text-neutral-950/20 transition-colors tracking-tight select-none">
                      {step.num}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-medium max-w-2xl relative z-10 group-hover:text-neutral-600 transition-colors">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
