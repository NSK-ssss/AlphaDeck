import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Vance',
    role: 'Founder',
    company: 'Aetheria AI',
    rating: 5,
    text: 'Alpha Deck completely redesigned our SaaS interface. Conversions skyrocketed by 45% within three weeks. They are absolute masters of modern digital design and responsive code.',
    gradient: 'from-[#8B5CF6] to-[#0A4DFF]',
  },
  {
    name: 'Sophia Kincaid',
    role: 'Director of Growth',
    company: 'Apex Finance',
    rating: 5,
    text: 'High-end luxury aesthetic combined with lightning-fast performance. They took our complex financial dashboard structure and engineered it into an incredibly clean experience.',
    gradient: 'from-[#0A4DFF] to-[#001D5A]',
  },
  {
    name: 'Devon Miller',
    role: 'Co-Founder',
    company: 'Chronos Labs',
    rating: 5,
    text: 'A truly seamless development experience. The team understands modern premium design languages and delivered a website that matches our exact vision for high-ticket clients.',
    gradient: 'from-[#8B5CF6] to-[#1E3A8A]',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-brand-bg">
      {/* Glow overlays */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold">
              Client Reviews
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            What Clients Say
          </h2>

          <p className="text-base md:text-lg font-sans text-brand-secondary max-w-xl">
            Read how we have helped high-growth businesses scale their visual brands.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-panel relative p-8 md:p-10 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[20px] flex flex-col justify-between hover:border-white/[0.15] transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-white/[0.04] pointer-events-none">
                <Quote size={56} strokeWidth={1} />
              </div>

              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-brand-secondary font-sans text-sm md:text-base leading-relaxed text-left mb-8 italic">
                  "{t.text}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                {/* Custom Gradient Avatar */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${t.gradient} flex items-center justify-center font-sans font-bold text-white text-sm shadow-[0_4px_15px_rgba(0,0,0,0.5)]`}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Client Details */}
                <div className="flex flex-col text-left">
                  <span className="text-sm font-sans font-bold text-white">{t.name}</span>
                  <span className="text-xs font-sans text-brand-secondary">
                    {t.role}, <span className="text-brand-blue font-semibold">{t.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
