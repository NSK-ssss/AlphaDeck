import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Business Websites', href: '#services' },
  { name: 'Startup Websites', href: '#services' },
  { name: 'Landing Pages', href: '#services' },
  { name: 'Portfolio Websites', href: '#services' },
  { name: 'E-Commerce Stores', href: '#services' },
  { name: 'Website Redesigns', href: '#services' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070D] border-t border-white/[0.06] pt-20 pb-12 overflow-hidden">
      {/* Background soft glow overlay */}
      <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <img 
              src={logo} 
              alt="Alpha Deck Brand Logo" 
              className="h-16 md:h-18 object-contain mb-4" 
            />
            
            <p className="font-serif text-lg tracking-widest text-white/90 mb-6 uppercase">
              Websites That Scale.
            </p>

            <p className="text-brand-secondary font-sans text-xs md:text-sm leading-relaxed max-w-sm mb-8">
              Crafting digital experiences that drive business growth. We combine signature design fidelity with custom code engineering.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ), 
                  href: 'https://x.com' 
                },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ), 
                  href: 'https://linkedin.com' 
                },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ), 
                  href: 'https://github.com' 
                },
                { 
                  icon: (
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ), 
                  href: 'https://instagram.com' 
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-[12px] bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-brand-secondary hover:text-white hover:border-brand-blue transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 lg:col-start-7 flex flex-col items-start text-left">
            <h4 className="text-xs font-sans tracking-widest uppercase text-white font-bold mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-sans text-brand-secondary hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Services (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-sans tracking-widest uppercase text-white font-bold mb-6">
              What We Build
            </h4>
            <div className="flex flex-col gap-3.5">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="text-xs font-sans text-brand-secondary hover:text-white transition-colors"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info (2 Columns) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-xs font-sans tracking-widest uppercase text-white font-bold mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:hello@alphadeck.agency" 
                className="flex items-center gap-2.5 text-xs font-sans text-brand-secondary hover:text-white transition-colors"
              >
                <Mail size={13} className="text-brand-blue shrink-0" />
                <span>hello@alphadeck.agency</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs font-sans text-brand-secondary">
                <MapPin size={13} className="text-brand-blue shrink-0 mt-0.5" />
                <span>San Francisco, CA<br />Global Operations</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/[0.04]">
          <span className="text-[11px] font-sans text-brand-secondary">
            &copy; {currentYear} Alpha Deck Agency. All rights reserved.
          </span>
          <div className="flex items-center gap-6 mt-4 sm:mt-0 text-[11px] font-sans text-brand-secondary">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
