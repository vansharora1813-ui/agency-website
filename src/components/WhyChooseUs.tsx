import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Zap, Laptop, Search, Edit3, Smartphone, Clock, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const advantages = [
    { title: 'Lightning Fast', desc: 'Optimized build assets and clean markup deliver sub-1s load times, boosting search indexing.', icon: Zap },
    { title: 'Modern UI', desc: 'Bespoke layouts using luxury visual languages, dynamic shadows, and smooth motion states.', icon: Sparkles },
    { title: 'SEO Friendly', desc: 'Semantic HTML markup, fast page indexing, and structured schema inputs for search rankings.', icon: Search },
    { title: 'Responsive Design', desc: 'Engineered mobile-first layouts that snap and scale beautifully across desktops, tablets, and phones.', icon: Smartphone },
    { title: 'Easy to Manage', desc: 'Simple code blocks and components making static revisions or markdown integrations stress-free.', icon: Edit3 },
    { title: 'Secure & Shielded', desc: 'Static hosting leaves zero vulnerability tracks for database exploits or hacking attempts.', icon: ShieldCheck },
    { title: 'Fast 5-Day Delivery', desc: 'Structured agile checkpoints guarantee a completely finished site in under a week.', icon: Clock },
    { title: 'Affordable Value', desc: 'Flat-rate pricing structures with zero ongoing design costs or server markups.', icon: Laptop },
  ];

  return (
    <section className="py-24 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-accent-secondary uppercase tracking-widest">WHY PARTNER WITH US</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
                Designed to Command Authority. Engineered to Convert.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                Templates and site-builders create heavy, bloated pages that look generic and repel high-ticket clients. We build clean, bespoke coded systems that establish immediate premium brand trust.
              </p>
            </div>
          </div>

          {/* Comparison Table Grid */}
          <motion.div variants={itemVariants} className="w-full rounded-2xl border border-white/5 bg-white/2 p-6 md:p-8 relative overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-secondary/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {/* Aura Systems */}
              <div className="space-y-6 md:pr-8 pb-6 md:pb-0 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-secondary" />
                  <h3 className="text-lg font-bold font-display text-white">Aura Custom Development</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    '100% bespoke design matched to your brand guidelines.',
                    'Lightning-fast page loading speed (95+ score on PageSpeed).',
                    'Zero security risks; static files are impossible to hack.',
                    'Clean semantic HTML structures optimized for SEO rankings.',
                    'Direct lead captures integrating natively with WhatsApp/UPI.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-semibold text-slate-300">
                      <Check className="w-4 h-4 text-accent-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standard Templates */}
              <div className="space-y-6 md:pl-8 pt-6 md:pt-0 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <h3 className="text-lg font-bold font-display text-slate-400">WordPress & Templates Builders</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Repetitive templates used by thousands of competitors.',
                    'Bloated plugins slowing page load times and driving clients away.',
                    'Frequent security exploits, database injections, and hack risks.',
                    'Poor code structures and server bottlenecks hurting Google rank.',
                    'Complex form setups requiring recurring monthly API fees.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-semibold text-slate-500">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Advantages Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-300 flex flex-col gap-4 text-left group"
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-slate-350 w-fit group-hover:text-accent-secondary transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white tracking-wide">{adv.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-medium">{adv.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
