import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Founder, Bloom Retail',
      quote: "Aura built our brand landing page in 5 days, and the aesthetic literally left us speechless. The visitor conversion rate jumped from 2.1% on our old WordPress site to 5.6% in the first week. They are absolute geniuses.",
      rating: 5,
      project: 'E-Commerce Branding'
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Medical Director, Vance Dental',
      quote: "We needed a website that immediately communicated clinical trust, security, and absolute professionalism. The layout Aura designed is flawless. Patients can book slots on WhatsApp instantly.",
      rating: 5,
      project: 'Clinical Platform'
    },
    {
      name: 'Leon Vance',
      role: 'CEO, Novus SaaS Hub',
      quote: "The custom code, micro-animations, and 100% PageSpeed score make our product feel like a premium tech brand. If you want cheap work, look elsewhere. If you want award-winning design, hire Aura.",
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
    <section id="testimonials" className="py-24 bg-[#050816] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="space-y-16 text-center">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-accent-secondary uppercase tracking-widest">CLIENT VERDICTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              Endorsed by Fast-Growing Brands.
            </h2>
          </div>

          {/* Testimonial Box */}
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full p-8 md:p-12 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-md relative text-left space-y-6"
              >
                {/* Quotes watermark icon */}
                <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 pointer-events-none" />

                {/* Rating */}
                <div className="flex gap-1 text-amber-500">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Simulated avatar circle */}
                    <div className="w-10 h-10 rounded-full bg-gradient-accent p-0.5 flex items-center justify-center text-white font-bold text-xs select-none">
                      {testimonials[activeIndex].name.split(' ').map(n=>n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{testimonials[activeIndex].name}</h4>
                      <p className="text-slate-500 text-xs">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-wider text-accent-secondary bg-accent-secondary/10 px-2.5 py-1 rounded-full">
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
              className="p-3 rounded-full border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
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
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    activeIndex === i ? 'w-6 bg-accent-secondary' : 'bg-white/10'
                  }`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
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
