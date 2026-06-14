import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    const startTime = performance.now();

    const updateCount = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalMiliseconds, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const current = Math.floor(easedProgress * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: '50', suffix: '+', label: 'Projects Delivered', desc: 'Enterprise and startup sites' },
  { value: '30', suffix: '+', label: 'Happy Clients', desc: 'Global brands and local leaders' },
  { value: '95', suffix: '%', label: 'Satisfaction Rate', desc: 'Average client rating score' },
  { value: '24', suffix: '/7', label: 'Support & Security', desc: 'Post-launch operations' },
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-brand-sec-bg/50 border-y border-white/[0.04] overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-[20px] bg-white/[0.01] border border-white/[0.03] backdrop-blur-sm"
            >
              {/* Counter number */}
              <span className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-blue/60 mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>

              {/* Label */}
              <span className="text-sm md:text-base font-sans font-semibold text-white mb-1">
                {stat.label}
              </span>

              {/* Subdescription */}
              <span className="text-xs text-brand-secondary font-sans">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
