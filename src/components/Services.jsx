import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, Layers, User, ShoppingCart, RefreshCw } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    desc: 'Elite, high-performing corporate websites designed to build unmatched trust, showcase credibility, and capture qualified inbound leads.',
    icon: Briefcase,
    color: '#0A4DFF',
  },
  {
    title: 'Startup Websites',
    desc: 'Cutting-edge digital architectures designed to validate products, explain complex technology, and drive fast user signups.',
    icon: Rocket,
    color: '#8B5CF6',
  },
  {
    title: 'Landing Pages',
    desc: 'Conversion-optimized hyper-focused single pages crafted with high-impact copywriting and premium visual layouts to maximize sales and leads.',
    icon: Layers,
    color: '#0A4DFF',
  },
  {
    title: 'Portfolio Websites',
    desc: 'Showcases that elevate your projects or achievements. Designed with generous white space and sophisticated serif branding.',
    icon: User,
    color: '#8B5CF6',
  },
  {
    title: 'E-Commerce Stores',
    desc: 'Sleek, secure, and fast shopping experiences structured to reduce checkout friction and convert passive visitors into buyers.',
    icon: ShoppingCart,
    color: '#0A4DFF',
  },
  {
    title: 'Website Redesigns',
    desc: 'Complete transformation of your legacy site into a modern, faster, and mobile-optimized system to boost your conversions.',
    icon: RefreshCw,
    color: '#8B5CF6',
  },
];

// Custom Card Component with Interactive spotlight effect
function ServiceCard({ service, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const IconComponent = service.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glow-card-hover relative flex flex-col items-start p-8 rounded-[24px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[20px] transition-colors duration-300 hover:bg-white/[0.04] hover:border-white/[0.15] group"
    >
      {/* Background spot light glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(10, 77, 255, 0.08), transparent 45%)`
        }}
      />

      {/* Decorative Border highlight spotlight */}
      <div 
        className="absolute inset-[-1px] rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" 
        style={{
          background: `radial-gradient(180px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(10, 77, 255, 0.25), transparent 50%)`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />

      {/* Icon Frame */}
      <div className="relative z-10 w-12 h-12 rounded-[14px] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all duration-300">
        <IconComponent className="text-brand-secondary group-hover:text-brand-blue transition-colors duration-300" size={20} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-sans font-semibold text-white mb-3 group-hover:text-brand-blue transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-brand-secondary font-sans text-sm leading-relaxed text-left">
        {service.desc}
      </p>

      {/* Subtle indicator line */}
      <div className="relative z-10 mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-secondary group-hover:text-white transition-colors duration-300">
        <span>Learn More</span>
        <span className="w-4 h-[1px] bg-brand-secondary group-hover:w-6 group-hover:bg-white transition-all duration-300" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-brand-bg">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4"
          >
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold">
              Our Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6"
          >
            What We Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg font-sans text-brand-secondary max-w-xl"
          >
            High-converting digital interfaces engineered with premium aesthetics, speed, and responsiveness.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
