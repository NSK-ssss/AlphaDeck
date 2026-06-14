import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ left: '50%' }}
        className={`fixed top-6 w-[92%] max-w-[1400px] z-[9999] rounded-[24px] px-6 md:px-8 py-4 transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled 
            ? 'bg-[#0A1020]/80 backdrop-blur-[30px] border border-white/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]' 
            : 'bg-white/[0.03] backdrop-blur-[20px] border border-white/[0.08]'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left Side: Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-wide text-brand-secondary hover:text-white transition-colors duration-250 relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Hamburguer button (Left on mobile/tablet) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-secondary hover:text-white p-2 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Right Side: Logo & CTA Button */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Alpha Deck Logo (silver/white tone, no recolor, original proportion) */}
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="Alpha Deck Logo" 
                className="h-9 md:h-11 object-contain block"
                style={{ imageRendering: 'auto' }}
              />
            </motion.a>

            {/* Book a Call Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[14px] bg-white text-black font-sans font-medium text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Book a Call
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-28 left-[4%] w-[92%] z-[9998] lg:hidden rounded-[24px] bg-[#05070D]/95 backdrop-blur-2xl border border-white/[0.08] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-sans font-medium text-brand-secondary hover:text-white transition-colors duration-250 py-2 border-b border-white/[0.04]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3.5 rounded-[14px] bg-white text-black font-sans font-medium text-base hover:bg-neutral-100 transition-colors"
              >
                Book a Free Consultation
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
