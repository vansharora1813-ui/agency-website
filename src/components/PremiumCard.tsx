import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface PremiumCardProps {
  title: string;
  description: string;
  Icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

export default function PremiumCard({ title, description, Icon, children, className = '' }: PremiumCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative overflow-hidden p-6 bg-white border border-[#ECECEC] rounded-2xl shadow-sm hover:shadow-2xl hover:border-neutral-900/10 group transition-all duration-300 text-left flex flex-col justify-between ${className}`}
    >
      {/* Background glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-neutral-50 to-neutral-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      <div className="absolute -right-12 -top-12 w-24 h-24 bg-neutral-900/[0.02] rounded-full blur-xl group-hover:bg-neutral-950/[0.04] transition-all duration-500 -z-10" />

      <div className="space-y-4">
        {Icon && (
          <div className="p-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 w-fit group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 transition-all duration-300">
            <Icon className="w-4.5 h-4.5" />
          </div>
        )}
        <div className="space-y-1.5">
          <h3 className="text-sm font-bold text-neutral-900 tracking-wide group-hover:text-neutral-950 transition-colors">{title}</h3>
          <p className="text-xs text-neutral-500 leading-relaxed font-medium group-hover:text-neutral-600 transition-colors">{description}</p>
        </div>
      </div>

      {children && <div className="mt-4">{children}</div>}
    </motion.div>
  );
}
