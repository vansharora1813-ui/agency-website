import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Founder, Bloom Retail',
      quote: "Aura built our landing page in 5 days, and the design literally left us speechless. The conversion rate jumped from 2.1% on our old WordPress template to 5.6% in the first week. They are pure geniuses.",
      rating: 5,
      project: 'E-Commerce Branding'
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Medical Director, Vance Dental',
      quote: "We needed a site that communicated trust, safety, and elite care. The medical layout Aura created did exactly that. Our front desk saves hours daily thanks to direct WhatsApp appointment routing.",
      rating: 5,
      project: 'Clinical Platform'
    },
    {
      name: 'Leon Vance',
      role: 'CEO, Novus SaaS Hub',
      quote: "The custom code, micro-animations, and 100% PageSpeed score make our product feel like a premium tech brand. If you want cheap work, look elsewhere. If you want world-class design, hire Aura.",
      rating: 5,
      project: 'SaaS Product Page'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-28 bg-[#F0F4F8] border-t border-[#ECECEC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="space-y-16 text-center">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-[10px] font-black text-neutral-450 uppercase tracking-widest">VERDICTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 tracking-tight leading-tight">
              Endorsed by Growth Brands.
            </h2>
          </div>

          {/* Testimonial Panel */}
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full p-8 md:p-12 rounded-3xl border border-neutral-200 bg-white shadow-lg shadow-neutral-200/5 relative text-left space-y-6"
              >
                <Quote className="absolute top-8 right-8 w-14 h-14 text-neutral-100 pointer-events-none" />

                {/* Rating */}
                <div className="flex gap-1 text-neutral-800">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-neutral-850 leading-relaxed font-semibold italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="border-t border-neutral-100 pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 font-bold text-xs select-none">
                      {testimonials[activeIndex].name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-neutral-900 font-bold text-sm">{testimonials[activeIndex].name}</h4>
                      <p className="text-neutral-500 text-xs">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-wider text-neutral-550 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/50">
                    {testimonials[activeIndex].project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-900 transition-all cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === i ? 'w-5 bg-neutral-900' : 'bg-neutral-200'
                  }`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-500 hover:text-neutral-900 transition-all cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
