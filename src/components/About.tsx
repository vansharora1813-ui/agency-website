import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  target: number;
  suffix?: string;
}

function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const frameRate = 16;
    const totalFrames = duration / frameRate;
    const increment = target / totalFrames;
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
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

  const stats = [
    { label: 'Websites Delivered', val: 100, suffix: '+' },
    { label: 'Client Satisfaction', val: 98, suffix: '%' },
    { label: 'Uptime Monitoring', val: 24, suffix: '/7' },
    { label: 'Standard Delivery', val: 5, suffix: ' Days' },
  ];

  return (
    <section id="about" className="py-28 bg-[#FAFAFA] border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-24"
        >
          {/* Offset layout block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">OUR PHILOSOPHY</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-neutral-900 tracking-tight leading-[1.08]">
                We Engineer Speed. We Design Authority.
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6 text-left text-neutral-500 text-sm sm:text-base leading-relaxed">
              <p className="font-medium">
                Aura is a bespoke web design and code studio. We do not use commercial templates, drag-and-drop builders, or generic layout kits. Everything we ship is meticulously designed from a blank canvas in Figma and hand-coded in custom React frameworks.
              </p>
              <p className="font-medium">
                We believe your website should be your strongest conversion engine. Our work focuses on absolute typography hierarchy, high speed indicators, and clean navigation flows that establish immediate, institutional trust for your brand.
              </p>
            </motion.div>
          </div>

          {/* Minimal Editorial Stats (No cards, just dividers) */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#ECECEC]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-left space-y-2"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400">0{i+1}</span>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-neutral-900 tracking-tight">
                  <Counter target={stat.val} suffix={stat.suffix} />
                </h3>
                <p className="text-xs font-bold text-neutral-800 tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
