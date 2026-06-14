import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Compass, Zap, Smartphone, Search } from 'lucide-react';

const features = [
  {
    title: 'Modern UI/UX Design',
    desc: 'Signature luxury aesthetic combining elegant typography, spacious layout grids, and premium interactive elements.',
    icon: Compass,
    accent: '#0A4DFF',
  },
  {
    title: 'Lightning Performance',
    desc: 'Engineered with clean React code and lightweight builds to score 95+ on Google Lighthouse page speed metrics.',
    icon: Zap,
    accent: '#8B5CF6',
  },
  {
    title: 'Mobile First Focus',
    desc: 'Designed fluidly across every breakpoint to guarantee a perfect mobile user experience and layout integrity.',
    icon: Smartphone,
    accent: '#0A4DFF',
  },
  {
    title: 'SEO Ready Structure',
    desc: 'Optimized head tags, semantically correct HTML5 markup, and fast core web vitals for search discoverability.',
    icon: Search,
    accent: '#8B5CF6',
  },
];

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glow-card-hover relative flex flex-col p-8 rounded-[24px] bg-white/[0.01] border border-white/[0.06] backdrop-blur-[15px] hover:bg-white/[0.03] hover:border-white/[0.12] transition-colors duration-300 group"
    >
      {/* Background glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
        style={{
          background: `radial-gradient(350px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(10, 77, 255, 0.05), transparent 45%)`
        }}
      />

      {/* Decorative Border highlight spotlight */}
      <div 
        className="absolute inset-[-1px] rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" 
        style={{
          background: `radial-gradient(150px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${feature.accent}40, transparent 50%)`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      />

      <div className="relative z-10 w-12 h-12 rounded-[14px] bg-white/[0.02] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
        <Icon className="text-white group-hover:text-brand-blue transition-colors duration-300" size={22} />
      </div>

      <h3 className="relative z-10 text-lg font-sans font-bold text-white mb-3 text-left">
        {feature.title}
      </h3>

      <p className="relative z-10 text-brand-secondary font-sans text-xs leading-relaxed text-left">
        {feature.desc}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-sec-bg">
      {/* Glow overlays */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Layout: Section Title on left, brief subtext on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold block mb-3">
              Why Work With Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white">
              The Standards of <br />
              Digital Excellence
            </h2>
          </div>
          <div className="lg:col-span-6 text-left lg:pb-2">
            <p className="text-brand-secondary font-sans text-sm md:text-base leading-relaxed max-w-lg">
              We do not build simple templates. We engineer digital assets. Our custom sites combine elite aesthetic fidelity with extreme performance metrics.
            </p>
          </div>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
