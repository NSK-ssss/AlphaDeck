import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a website take?',
    a: 'Our starter landing pages typically take 2 weeks to complete from wireframe to launch. Comprehensive multi-page corporate sites and custom SaaS platforms take between 4 to 6 weeks depending on requirements.',
  },
  {
    q: 'Do you redesign existing websites?',
    a: 'Yes, we specialize in high-end redesigns. We audit your current layout, performance, and conversion metrics, then rebuild the experience using a modern visual language and faster React/Tailwind architectures.',
  },
  {
    q: 'Is SEO included?',
    a: 'Every website we deliver is built with SEO best practices. This includes custom semantic HTML structure, proper header hierarchies, page performance optimization, image alt descriptions, meta descriptions, and Google Search Console indexing setup.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Absolutely. Every project includes 30 days of complimentary technical support for any bugs, adjustments, or tutorial assistance. For ongoing maintenance and security, we offer priority support packages.',
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-2xl mb-4 overflow-hidden border border-white/[0.06] bg-white/[0.01] hover:border-white/[0.12] transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-sm md:text-base font-sans font-bold text-white tracking-wide">{faq.q}</span>
        <div className={`p-1.5 rounded-full ${isOpen ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/[0.03] text-brand-secondary'} transition-colors duration-300`}>
          {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 text-xs md:text-sm font-sans text-brand-secondary leading-relaxed text-left border-t border-white/[0.04] pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-sec-bg">
      {/* Background glow overlay */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Layout grid: Title left side, Accordions right side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Title column */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold block mb-3">
              FAQ
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
              Frequently <br />
              Asked Questions
            </h2>
            <p className="text-brand-secondary font-sans text-sm md:text-base leading-relaxed max-w-sm">
              Have a question about our design workflow, engineering structure, or support packages? We have you covered.
            </p>
          </div>

          {/* Accordion column */}
          <div className="lg:col-span-7">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.q} faq={faq} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
