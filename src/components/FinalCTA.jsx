import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tier: 'Professional ($4,900)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-brand-bg">
      {/* Premium background glowing radial mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,#001D5A_0%,#05070D_80%)] opacity-40 pointer-events-none z-0" />
      
      {/* Additional glow bubbles */}
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Text (5 Columns) */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-sans tracking-widest uppercase text-brand-blue font-semibold block mb-4">
              Get Started
            </span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white mb-6">
              Ready To Build <br />
              Your Dream Website?
            </h2>

            <p className="text-brand-secondary font-sans text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Let's create a website that helps your business stand out, establish enterprise-grade credibility, and generate more leads. Book your free blueprint consultation call today.
            </p>

            {/* Quick Benefits Checklist */}
            <div className="flex flex-col gap-3.5">
              {[
                "100% Free Blueprint Design Session",
                "Delivery in 2-4 Weeks with Complete Code Sign-off",
                "High-converting Architecture Guarantee"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                  <span className="text-xs md:text-sm font-sans text-brand-secondary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Lead Form Card (7 Columns) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel relative p-8 md:p-12 rounded-[28px] bg-white/[0.02] border border-white/[0.08] backdrop-blur-[30px] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_1px_5px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              {/* Highlight gradient bar at top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                  <h3 className="text-xl font-sans font-bold text-white mb-2">Book a Free Consultation</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-sans tracking-widest text-brand-secondary uppercase font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4.5 py-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-brand-blue transition-colors placeholder-white/20"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-sans tracking-widest text-brand-secondary uppercase font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4.5 py-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-brand-blue transition-colors placeholder-white/20"
                      />
                    </div>
                  </div>

                  {/* Project Tier */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-sans tracking-widest text-brand-secondary uppercase font-semibold">Estimated Scope / Plan</label>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      className="w-full px-4.5 py-3.5 rounded-[12px] bg-[#0A1020] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-brand-blue transition-colors"
                    >
                      <option>Starter ($2,500)</option>
                      <option>Professional ($4,900)</option>
                      <option>Enterprise (Custom Solution)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-sans tracking-widest text-brand-secondary uppercase font-semibold">Project Details</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand, goals, or required features..."
                      className="w-full px-4.5 py-3.5 rounded-[12px] bg-white/[0.02] border border-white/[0.08] text-white text-sm font-sans focus:outline-none focus:border-brand-blue transition-colors placeholder-white/20 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 mt-4 px-8 py-4.5 rounded-[14px] bg-white text-black font-sans font-bold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                  >
                    Submit Booking Request
                    <ArrowRight size={15} />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-white mb-3">Request Received</h3>
                  <p className="text-brand-secondary font-sans text-sm max-w-sm mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our growth strategy lead will reach out to you at <span className="text-white font-semibold">{formData.email}</span> within 24 hours to schedule your blueprint call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-[12px] border border-white/10 text-white font-sans text-xs hover:bg-white/[0.04] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
