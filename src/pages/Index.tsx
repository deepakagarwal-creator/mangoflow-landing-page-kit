
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);

    // Add smooth scrolling behavior to the HTML element
    document.documentElement.style.scrollBehavior = 'smooth';

    // Clean up when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>MangoFlow | AI Video Repurposing for Content Creators</title>
        <meta name="description" content="Transform long-form videos into platform-optimized social content. Save time with AI-powered clip extraction, captioning, and multi-platform publishing." />
      </Helmet>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
