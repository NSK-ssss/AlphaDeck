import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Apex Finance',
    category: 'FinTech Enterprise',
    tag: 'Web Design & React WebApp',
    color: 'from-[#001D5A] to-[#0A4DFF]',
    accentGlow: 'rgba(10,77,255,0.2)',
    // Inside structure for the custom browser mockup
    ui: (
      <div className="w-full h-full bg-[#050814] p-4 flex flex-col gap-3 font-sans select-none text-left">
        <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">APEX.FI</span>
          <span className="text-[8px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">+12.4% Today</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-1">
            <span className="text-[8px] text-brand-secondary">Net Liquidity</span>
            <span className="text-sm font-semibold text-white">$1,248,900</span>
            <div className="w-full h-8 flex items-end gap-1 mt-1">
              {[30, 45, 25, 60, 50, 75, 90, 80, 95].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-brand-blue rounded-t-[2px] transition-all duration-300" 
                  style={{ height: `${h}%`, opacity: 0.3 + (i * 0.07) }} 
                />
              ))}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between">
            <span className="text-[8px] text-brand-secondary">API Status</span>
            <div className="w-6 h-6 rounded-full border-2 border-brand-blue/30 border-t-brand-blue animate-spin self-center my-1" />
            <span className="text-[8px] text-center text-brand-blue font-semibold">Active</span>
          </div>
        </div>
        <div className="p-2.5 rounded-xl bg-brand-blue/5 border border-brand-blue/20 flex justify-between items-center text-[8px]">
          <span className="text-white">New Smart Contract Audit Completed</span>
          <span className="text-brand-blue font-bold">Details &rarr;</span>
        </div>
      </div>
    )
  },
  {
    title: 'Aetheria AI',
    category: 'Cognitive AI Platform',
    tag: 'Design System & Landing Page',
    color: 'from-[#1E1145] to-[#8B5CF6]',
    accentGlow: 'rgba(139,92,246,0.2)',
    ui: (
      <div className="w-full h-full bg-[#080512] p-4 flex flex-col gap-3 font-sans select-none text-left">
        <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">AETHERIA.AI</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" />
            <span className="text-[8px] text-brand-purple font-medium">Model 4.0 Online</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 justify-center items-center text-center px-4 relative overflow-hidden">
          {/* Decorative mesh circle */}
          <div className="absolute w-24 h-24 rounded-full border border-brand-purple/20 animate-[spin_12s_infinite_linear] flex items-center justify-center">
            <div className="w-18 h-18 rounded-full border border-dashed border-brand-purple/10" />
          </div>
          <span className="relative z-10 text-[9px] text-brand-secondary uppercase tracking-widest">Neural Cluster</span>
          <span className="relative z-10 text-[13px] font-light text-white leading-tight">Decentralized Intelligence</span>
          <span className="relative z-10 text-[8px] text-white/40 max-w-[150px]">99.8% precision rate across millions of nodes</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 py-1.5 rounded-lg bg-brand-purple text-black font-semibold text-[8px] text-center">Deploy Model</div>
          <div className="flex-1 py-1.5 rounded-lg border border-white/10 text-white text-[8px] text-center">Docs</div>
        </div>
      </div>
    )
  },
  {
    title: 'Chronos Labs',
    category: 'Web3 Infrastructure',
    tag: 'Web3 Application & Brand',
    color: 'from-[#071F22] to-[#14B8A6]',
    accentGlow: 'rgba(20,184,166,0.15)',
    ui: (
      <div className="w-full h-full bg-[#030808] p-4 flex flex-col gap-3 font-sans select-none text-left">
        <div className="flex items-center justify-between border-b border-white/[0.05] pb-2">
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">CHRONOS</span>
          <span className="text-[8px] text-neutral-400">Epoch 4902</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <span className="text-[8px] text-brand-secondary">Sync Blocks</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-1 bg-teal-400 rounded-full" />
              <span className="w-2 h-1 bg-teal-400 rounded-full" />
              <span className="w-2 h-1 bg-teal-400 rounded-full" />
              <span className="w-2 h-1 bg-teal-400/20 rounded-full" />
            </div>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <span className="text-[8px] text-brand-secondary">Gas Price</span>
            <span className="text-[9px] font-mono text-teal-400 font-semibold">18 Gwei</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.01] border border-dashed border-white/10 flex flex-col gap-1.5">
            <div className="flex justify-between text-[7px] text-white/50">
              <span>Validators Running</span>
              <span>10,248</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-teal-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 overflow-hidden bg-brand-bg">
      {/* Accent lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4">
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold">
              Our Showcase
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Recent Projects
          </h2>

          <p className="text-base md:text-lg font-sans text-brand-secondary max-w-xl">
            Explore a curated selection of our digital architectures designed for premium startups.
          </p>
        </div>

        {/* 3-Column Grid for Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-[24px] bg-white/[0.01] border border-white/[0.06] overflow-hidden group hover:border-white/[0.15] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Browser Mockup Area */}
              <div className="relative aspect-[4/3] w-full bg-black/60 border-b border-white/[0.06] overflow-hidden p-6 flex items-center justify-center">
                {/* Browser Header details */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-[#090D1A]/80 border-b border-white/[0.04] px-4 flex items-center justify-between">
                  {/* Browser window circles */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
                  </div>
                  {/* Mock URL bar */}
                  <div className="w-[50%] h-3.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-center">
                    <span className="text-[7px] text-white/30 tracking-wide font-mono">https://alphadeck.agency/{project.title.toLowerCase()}</span>
                  </div>
                  <div className="w-3" />
                </div>

                {/* Soft backdrop glow to illuminate the mockup */}
                <div 
                  className="absolute w-[200px] h-[200px] rounded-full blur-[50px] opacity-40 group-hover:opacity-75 transition-opacity duration-500" 
                  style={{
                    background: `radial-gradient(circle, ${project.accentGlow} 0%, transparent 70%)`
                  }}
                />

                {/* Simulated UI container - floats and scales with parallax on hover */}
                <motion.div
                  className="relative z-10 w-[90%] h-[82%] mt-4 rounded-xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-500 group-hover:scale-[1.04]"
                >
                  {project.ui}
                </motion.div>
              </div>

              {/* Text Info Area */}
              <div className="p-8 flex flex-col text-left flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-sans font-semibold tracking-wider text-brand-blue uppercase">{project.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <span className="text-[11px] font-sans text-brand-secondary">{project.tag}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-white mb-4 group-hover:text-brand-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 self-start px-4.5 py-2.5 rounded-[12px] bg-white/[0.03] border border-white/[0.08] text-white font-sans font-medium text-xs transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-105"
                >
                  View Case Study
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
