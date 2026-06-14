import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Sparkles, CheckCircle2, ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-glow/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" 
      />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Info - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-brand-blue animate-pulse" />
              <span className="text-xs font-sans tracking-widest uppercase text-brand-secondary font-medium">
                Next-Gen Web Design Agency
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-white mb-6"
            >
              Websites That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-white">Scale Businesses.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl font-sans text-brand-secondary leading-relaxed max-w-2xl mb-10"
            >
              We design and develop stunning websites that help businesses grow, build trust, and generate more leads. High-converting digital architectures tailored for high-ticket startups.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-white text-black font-sans font-semibold text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
              >
                Start Your Project
                <ChevronRight size={16} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-transparent border border-white/15 text-white font-sans font-medium text-base transition-all duration-300 hover:bg-white/[0.05] hover:scale-[1.03]"
              >
                View Our Work
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]"
            >
              {[
                { title: "Fast Delivery", desc: "2-4 Weeks Setup" },
                { title: "Mobile First", desc: "100% Responsive" },
                { title: "SEO Optimized", desc: "Google Ready" },
                { title: "Modern Tech", desc: "React & Tailwind" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-white font-sans font-semibold text-base flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-brand-blue" />
                    {item.title}
                  </span>
                  <span className="text-xs text-brand-secondary font-sans mt-0.5">{item.desc}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - 5 Columns (3D Wireframe Glass Object) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
            {/* Soft Ambient lighting behind the shape */}
            <div className="absolute w-[300px] h-[300px] bg-brand-blue/30 rounded-full blur-[80px] pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
            >
              {/* Rotating Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[95%] h-[95%] border border-white/[0.04] rounded-full flex items-center justify-center"
              >
                <div className="absolute w-2 h-2 rounded-full bg-brand-purple top-1/4 right-0" />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-blue bottom-1/4 left-0" />
              </motion.div>

              {/* Rotating Mid Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] border border-dashed border-white/[0.08] rounded-full"
              />

              {/* Floating Metallic Glass Core (SVG Polyhedron) */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotateY: [0, 15, -15, 0],
                  rotateX: [0, 8, -8, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 w-[70%] h-[70%] glass-panel rounded-[32px] flex items-center justify-center shadow-[0_50px_100px_rgba(0,0,0,0.8),inset_0_1px_20px_rgba(255,255,255,0.1)] hover:border-white/[0.2] transition-colors duration-500 group"
              >
                {/* Embedded Blueprint / Grid Graphic */}
                <div className="absolute inset-4 rounded-[24px] border border-white/[0.05] bg-[#05070D]/40 backdrop-blur-md overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  {/* SVG Blueprint Architecture Mesh */}
                  <svg width="70%" height="70%" viewBox="0 0 100 100" className="opacity-80 text-brand-blue">
                    {/* Isometric Cube Wireframe */}
                    <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-white/10" />
                    <line x1="50" y1="15" x2="50" y2="95" stroke="currentColor" strokeWidth="0.8" className="text-brand-purple/40" />
                    <line x1="15" y1="35" x2="50" y2="55" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="85" y1="35" x2="50" y2="55" stroke="currentColor" strokeWidth="0.8" />
                    
                    {/* Floating Nodes */}
                    <circle cx="50" cy="15" r="2.5" className="fill-brand-purple shadow-glow" />
                    <circle cx="85" cy="35" r="2.5" className="fill-brand-blue" />
                    <circle cx="85" cy="75" r="2.5" className="fill-white" />
                    <circle cx="50" cy="95" r="2.5" className="fill-brand-blue" />
                    <circle cx="15" cy="75" r="2.5" className="fill-white" />
                    <circle cx="15" cy="35" r="2.5" className="fill-brand-purple" />
                    <circle cx="50" cy="55" r="3" className="fill-white animate-pulse" />
                    
                    {/* Connecting Glowing Lines */}
                    <path d="M 50,15 L 85,35 L 50,55 L 15,35 Z" fill="rgba(10, 77, 255, 0.08)" stroke="currentColor" strokeWidth="1.2" className="text-brand-blue" />
                    <path d="M 15,35 L 50,55 L 50,95 L 15,75 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
                    <path d="M 85,35 L 50,55 L 50,95 L 85,75 Z" fill="rgba(139, 92, 246, 0.04)" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
                  </svg>
                  
                  {/* Glass Reflection effect */}
                  <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full rotate-45 group-hover:animate-[shimmer_1.5s_infinite]" />
                </div>
              </motion.div>

              {/* Floating particles */}
              {[
                { top: "15%", left: "10%", size: 6, delay: 0 },
                { top: "75%", left: "20%", size: 8, delay: 1.5 },
                { top: "25%", right: "8%", size: 10, delay: 0.8 },
                { top: "65%", right: "12%", size: 5, delay: 2.2 }
              ].map((p, idx) => (
                <motion.div
                  key={idx}
                  style={{
                    position: 'absolute',
                    top: p.top,
                    left: p.left,
                    right: p.right,
                    width: p.size,
                    height: p.size,
                  }}
                  className="rounded-full bg-white/20 border border-white/30 backdrop-blur-sm pointer-events-none"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + idx,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
