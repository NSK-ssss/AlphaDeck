import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg text-white overflow-x-hidden antialiased">
      {/* Top Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] bg-brand-blue/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Floating Header */}
      <Navbar />

      {/* Hero Showcase Section */}
      <Hero />

      {/* Services Grid Section */}
      <Services />

      {/* Features Outline Section */}
      <WhyChooseUs />

      {/* Case Studies / Portfolio Section */}
      <Portfolio />

      {/* Workflow Roadmap Section */}
      <Process />

      {/* Numeric Highlights Section */}
      <Stats />

      {/* Reviews Feedback Section */}
      <Testimonials />

      {/* Tiers Preview Section */}
      <Pricing />

      {/* Expandable FAQ Accordions Section */}
      <FAQ />

      {/* Conversion Form & Lead Capture Section */}
      <FinalCTA />

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
