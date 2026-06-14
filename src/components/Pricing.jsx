import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$2,500',
    desc: 'High-converting single-page solution designed for new startups and local brand launches.',
    features: [
      'Business Landing Page',
      'Mobile Responsive Layout',
      'Basic On-Page SEO Setup',
      '2 Weeks Delivery Time',
      'Standard Email Support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$4,900',
    desc: 'Comprehensive multi-page digital architecture built for established startups and growing brands.',
    features: [
      'Multi-page System (Up to 5 Pages)',
      'Advanced Custom UI/UX Design',
      'Full SEO Optimization Roadmap',
      'Interactive Micro-Animations',
      '3-4 Weeks Delivery Time',
      '30 Days Post-Launch Support',
    ],
    cta: 'Start Project',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Bespoke custom solutions built for high-scale enterprise platforms with advanced software needs.',
    features: [
      'Unlimited Functional Pages',
      'Custom WebApp Systems (React)',
      'High-Scale Cloud Deployments',
      'API & Backend Integrations',
      'Priority 24/7 Slack Support',
      'Dedicated Project Manager',
    ],
    cta: 'Book Consultation',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden bg-brand-bg">
      {/* Background glow highlights */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold">
              Flexible Tiers
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Pricing Preview
          </h2>

          <p className="text-base md:text-lg font-sans text-brand-secondary max-w-xl">
            Choose a development tier tailored to your scale. No hidden fees. Fully transparent pricing.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col justify-between p-8 md:p-10 rounded-[28px] ${
                tier.featured 
                  ? 'bg-[#0D1424]/90 border-[2px] border-brand-blue shadow-[0_30px_70px_rgba(10,77,255,0.2),inset_0_1px_10px_rgba(255,255,255,0.05)]' 
                  : 'bg-white/[0.01] border border-white/[0.06] backdrop-blur-[20px] hover:border-white/15'
              } transition-all duration-300 group`}
            >
              {/* Glowing Featured Card Light behind it */}
              {tier.featured && (
                <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-brand-blue to-brand-purple opacity-30 blur-lg -z-10" />
              )}

              <div>
                {/* Featured Header Badge */}
                {tier.featured && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 mb-6 self-start">
                    <Sparkles size={11} className="text-brand-blue" />
                    <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-white">Featured Plan</span>
                  </div>
                )}

                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-sans font-bold text-white">{tier.name}</h3>
                  <span className="text-3xl md:text-4xl font-sans font-extrabold text-white">
                    {tier.price}
                    {tier.price !== 'Custom' && <span className="text-xs font-sans text-brand-secondary font-normal"> / project</span>}
                  </span>
                </div>

                <p className="text-brand-secondary font-sans text-xs md:text-sm leading-relaxed mb-8 text-left">
                  {tier.desc}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        tier.featured ? 'bg-brand-blue/20 text-brand-blue' : 'bg-white/[0.04] text-brand-secondary'
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs md:text-sm font-sans text-brand-secondary text-left">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action button */}
              <a
                href="#contact"
                className={`w-full py-4 rounded-[14px] text-center font-sans font-semibold text-sm transition-all duration-300 hover:scale-[1.02] ${
                  tier.featured
                    ? 'bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                    : 'bg-transparent border border-white/15 text-white hover:bg-white/[0.04]'
                }`}
              >
                {tier.cta}
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
