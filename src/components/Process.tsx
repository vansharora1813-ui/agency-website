import { motion } from 'framer-motion';
import { Compass, Calendar, Edit3, Code, Terminal, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: 'Discovery & Consultation', num: '01', icon: Compass, desc: 'We deep dive into your business model, customer demographic, target search keywords, and key conversion metrics.' },
    { title: 'Information Mapping', num: '02', icon: Calendar, desc: 'We outline content structures, link parameters, sitemaps, and direct lead paths to minimize funnel friction.' },
    { title: 'Visual & Interface Design', num: '03', icon: Edit3, desc: 'We craft high-fidelity desktop and mobile mockups in Figma, prioritizing typography, whitespace, and branding rules.' },
    { title: 'Engineering & Animation', num: '04', icon: Code, desc: 'We handcode your web pages in React and Tailwind CSS, layering lightweight scroll-bound Framer Motion transitions.' },
    { title: 'Speed Audit & Diagnostics', num: '05', icon: Terminal, desc: 'We run diagnostics checking performance, semantic schema, speed indexing, and responsive alignment grids.' },
    { title: 'CDN Launch & SSL Setup', num: '06', icon: Rocket, desc: 'We point your domain, setup security headers, configure hosting on global CDN edges, and go live.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="process" className="py-28 bg-[#FAFAFA] border-t border-[#ECECEC] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">TIMELINE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
              A Agile 5-Day Launch Path.
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed font-medium">
              Our structured build process ensures pixel-perfect codebases and seamless handoffs with zero launch delays.
            </p>
          </div>

          {/* Editorial Vertical Step Layout */}
          <div className="relative mt-16 max-w-3xl mx-auto border-l border-neutral-200 pl-8 md:pl-12 space-y-12 text-left">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="relative group space-y-3"
                >
                  {/* Glowing Node on timeline line */}
                  <div className="absolute -left-[38px] md:-left-[54px] top-1.5 w-4 h-4 rounded-full bg-[#FAFAFA] border-2 border-neutral-300 group-hover:border-neutral-900 flex items-center justify-center transition-colors duration-300">
                    <span className="w-1 h-1 rounded-full bg-neutral-300 group-hover:bg-neutral-900 transition-colors" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-display text-2xl font-black text-neutral-350">{step.num}</span>
                    <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                      <Icon className="w-4 h-4 text-neutral-500" /> {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-medium max-w-xl">
                    {step.desc}
                  </p>

                  {idx !== steps.length - 1 && <div className="h-6" />}
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
