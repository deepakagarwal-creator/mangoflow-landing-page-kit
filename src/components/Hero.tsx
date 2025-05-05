
import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  const handleGetStartedClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemoClick = () => {
    // This could be updated to play a demo video or navigate to a demo page
    console.log('Demo button clicked');
  };

  return (
    <section id="hero" className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-mango-300 to-mango-400 bg-clip-text text-transparent">
                Transform Long Videos
              </span>
              <br /> into Engaging Social Content in Minutes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Save hours of manual editing with AI-powered content repurposing that automatically extracts, captions, and optimizes your videos for every platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-mango-300 to-mango-400 text-white hover:opacity-90 hover:shadow-lg transition-all duration-150"
                onClick={handleGetStartedClick}
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border border-mango-300 text-mango-400 hover:bg-mango-50 hover:shadow-md transition-all duration-150"
                onClick={handleWatchDemoClick}
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-mango-300 to-mango-400 rounded-lg blur-lg opacity-30"></div>
              <div className="relative bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-150">
                <img 
                  src="https://source.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="MangoFlow platform demo" 
                  className="w-full h-auto rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
