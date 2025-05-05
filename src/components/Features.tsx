
import React from 'react';
import { Zap, Rocket, Star, Award, TrendingUp } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: 'Smart Video Clip Detection',
    description: 'Our AI technology automatically identifies high-engagement moments in your videos, extracting the perfect clips for maximum audience impact.',
    icon: Zap
  },
  {
    title: 'Multi-Platform Format Optimization',
    description: 'Instantly resize, reformat, and optimize your content for every social platform, eliminating hours of manual editing and technical adjustments.',
    icon: Rocket
  },
  {
    title: 'Automated Captions & Translation',
    description: 'Generate accurate captions in multiple languages with perfect timing, increasing accessibility and expanding your global reach.',
    icon: Star
  },
  {
    title: 'Custom Branding',
    description: 'Add your logo, colors, and style to all repurposed content automatically.',
    icon: Award
  },
  {
    title: 'Engagement Analytics',
    description: 'Track performance across platforms with unified reporting dashboard.',
    icon: TrendingUp
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-mango-300 to-mango-400 bg-clip-text text-transparent">
              Content Repurposing, Reimagined
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MangoFlow transforms how creators and marketing teams repurpose content across platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:translate-y-[-5px] transition-all duration-150 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-mango-100 rounded-lg mb-5 group-hover:bg-mango-200 transition-colors duration-150">
                <feature.icon className="h-6 w-6 text-mango-400 group-hover:scale-110 transition-transform duration-150" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-mango-400 transition-colors duration-150">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
