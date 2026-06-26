import { motion } from 'framer-motion';
import { 
  Briefcase, User, Layers, ShoppingBag, 
  Utensils, GraduationCap, RefreshCw, Wrench, ArrowRight 
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const services = [
    { title: 'Business Websites', desc: 'Custom bespoke corporate platforms engineered to communicate elite authority and capture business contracts.', icon: Briefcase },
    { title: 'Portfolio Websites', desc: 'Exquisite, highly visual showcase sites custom-built for designers, architects, builders, and elite creatives.', icon: User },
    { title: 'Landing Pages', desc: 'Ultra-targeted single pages crafted with high-converting psychology and custom triggers to multiply leads.', icon: Layers },
    { title: 'E-Commerce Stores', desc: 'Secure, lightning-fast shopping systems with unified payment gateways (UPI, cards) and checkout flows.', icon: ShoppingBag },
    { title: 'Restaurant Websites', desc: 'Sophisticated culinary showcases featuring fluid interactive menus, reservation schedulers, and location listings.', icon: Utensils },
    { title: 'Educational Websites', desc: 'Structured platforms for academies and trainers containing batch schedules, result boards, and registration forms.', icon: GraduationCap },
    { title: 'Website Redesign', desc: 'Transform outdated layouts into stunning, modern SaaS-style sites that align with contemporary user habits.', icon: RefreshCw },
    { title: 'Maintenance & Support', desc: 'Comprehensive SLA support including active cloud migration, backups, daily security patches, and speeds tuning.', icon: Wrench },
  ];

  return (
    <section id="services" className="py-24 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section title */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">WHAT WE DELIVER</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              Bespoke Solutions Built For High-Performance.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              We build custom coded web properties. No drag-and-drop constraints. No page bloated scripts. Just clean architecture tailored for your scaling needs.
            </p>
          </div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="p-[1px] rounded-2xl bg-white/5 hover:bg-gradient-accent transition-all duration-300 group cursor-pointer"
                  onClick={() => onNavigate('contact')}
                >
                  {/* Inside card box */}
                  <div className="h-full w-full bg-[#050816] rounded-[15px] p-8 flex flex-col justify-between relative overflow-hidden">
                    {/* Radial glow follow tracker */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/10 via-transparent to-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="space-y-6">
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-slate-350 w-fit group-hover:bg-gradient-accent group-hover:text-white transition-all duration-350">
                        <Icon className="w-5.5 h-5.5 group-hover:rotate-6 transition-transform duration-300" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-white tracking-wide group-hover:text-accent-secondary transition-colors">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                          {srv.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors mt-6">
                      <span>Request Quote</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ArrowRight className="w-4 h-4 text-accent-secondary" />
                      </motion.span>
                    </div>
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
