import { motion } from 'framer-motion';
import { Check, X, Shield, Search, Zap, Smartphone, Sparkles, Clock, Edit3, Heart } from 'lucide-react';
import PremiumCard from '../components/PremiumCard';

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const capabilities = [
    { title: 'Lightning Fast', desc: 'Bespoke hand-coded architectures compile into small, optimized assets delivering sub-1s load times.', icon: Zap },
    { title: 'Modern UI', desc: 'Satoshi/Space Grotesk typography composition with minimal styling and smooth scroll motion indicators.', icon: Sparkles },
    { title: 'SEO Optimized', desc: 'Semantic HTML markup structures and speed parameters built for organic google search indexing.', icon: Search },
    { title: 'Responsive Design', desc: 'Perfect mobile-first layout designs built to fit desktop screens, tablets, and phones seamlessly.', icon: Smartphone },
    { title: 'Easy to Manage', desc: 'Bespoke modular codeblocks allowing static copy changes or markdown blogs with zero hassle.', icon: Edit3 },
    { title: 'Secure & Stable', desc: 'Zero databases or script bloats mean zero loopholes for database injections or hack exploits.', icon: Shield },
    { title: '5-Day Timelines', desc: 'Structured checkpoints and direct client reviews allow full design launches in under a week.', icon: Clock },
    { title: 'Bespoke Quality', desc: 'No templates. Handcrafted visual compositions worthy of leading startups.', icon: Heart }
  ];

  return (
    <section className="py-28 bg-transparent border-t border-[#ECECEC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-24"
        >
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-left">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">CAPABILITIES</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-neutral-900 tracking-tight leading-tight">
                Engineered for Visual Speed & Precision.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-medium">
                We write clean custom code. No templates, no bloats, and no plugins to fail or break. Your site compiles into light, secure static files distributed on global CDN edges.
              </p>
            </div>
          </div>

          {/* Clean Metric Board */}
          <motion.div variants={itemVariants} className="w-full rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
              {/* Bespoke Core */}
              <div className="space-y-6 md:pr-8 pb-6 md:pb-0 text-left">
                <h3 className="text-base font-bold font-display text-neutral-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral-900" /> Aura Bespoke Build
                </h3>
                <ul className="space-y-4">
                  {[
                    'Sub-1 second page loads with clean HTML compiling.',
                    'Zero script bloats or external database connection delays.',
                    'High security static file distribution impossible to hack.',
                    'Exceptional layout flexibility with no template boundaries.'
                  ].map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-neutral-600">
                      <Check className="w-4 h-4 text-neutral-900 flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* standard builders */}
              <div className="space-y-6 md:pl-8 pt-6 md:pt-0 text-left">
                <h3 className="text-base font-bold font-display text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neutral-200" /> Standard Builders
                </h3>
                <ul className="space-y-4 font-sans">
                  {[
                    'Heavy plugins loading scripts on every scroll event.',
                    'Prone to database breaches, injection attacks, and exploits.',
                    'Generic layouts limited to preset templates and components.',
                    'Frequent API adjustments requiring ongoing monthly fees.'
                  ].map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-neutral-450">
                      <X className="w-4 h-4 text-neutral-300 flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Capabilities Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#ECECEC]"
          >
            {capabilities.map((cap, i) => (
              <PremiumCard
                key={i}
                title={cap.title}
                description={cap.desc}
                Icon={cap.icon}
              />
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
