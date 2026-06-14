import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Code2, Globe } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We map out your business objectives, analyze your direct competitors, determine functional requirements, and identify core features.',
    icon: MessageSquare,
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    desc: 'We construct high-fidelity visual blueprints, layout architectures, copy wireframes, and outline the technical tech stack roadmap.',
    icon: FileText,
  },
  {
    num: '03',
    title: 'Design & Dev',
    desc: 'Our design system aligns custom premium assets with responsive React components, optimizing for speed and interactive micro-animations.',
    icon: Code2,
  },
  {
    num: '04',
    title: 'Launch & Growth',
    desc: 'After rigorous testing and final sign-off, we deploy your site on global hosting infrastructure, integrating SEO metadata and indexing.',
    icon: Globe,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 overflow-hidden bg-brand-sec-bg">
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold">
              The Roadmap
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Our Simple Process
          </h2>

          <p className="text-base md:text-lg font-sans text-brand-secondary max-w-xl">
            A frictionless workflow designed to deliver world-class websites in record time.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-brand-blue/10 via-brand-purple/50 to-brand-blue/10 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Step Node */}
                  <div className="relative w-[120px] h-[120px] rounded-full bg-brand-card border border-white/[0.08] flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_5px_rgba(255,255,255,0.1)] group-hover:border-brand-blue/50 group-hover:shadow-[0_0_30px_rgba(10,77,255,0.25)] transition-all duration-300">
                    <StepIcon className="text-brand-secondary group-hover:text-white transition-colors duration-300" size={32} />
                    
                    {/* Node Glowing Dot on the desktop connector line */}
                    <div className="absolute top-[48%] -translate-y-1/2 -right-2 hidden lg:group-hover:flex w-4 h-4 rounded-full bg-brand-blue items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-white text-black font-sans font-bold text-xs tracking-wider shadow-md">
                      {step.num}
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="text-xl font-sans font-bold text-white mb-4 group-hover:text-brand-blue transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-brand-secondary font-sans text-xs leading-relaxed max-w-sm lg:max-w-none">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
