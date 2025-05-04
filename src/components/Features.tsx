
import React from 'react';
import { Zap, Rocket, Star, Award, TrendingUp } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Clip Extraction',
    description: 'Auto-trim video highlights for any platform using smart content recognition.',
    icon: Zap
  },
  {
    title: 'Multi-Platform Publishing',
    description: 'One-click publishing to Instagram, TikTok, YouTube, Twitter, and LinkedIn.',
    icon: Rocket
  },
  {
    title: 'Automated Captions',
    description: 'Generate accurate captions in multiple languages with perfect timing.',
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
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-mango-100 rounded-lg mb-5">
                <feature.icon className="h-6 w-6 text-mango-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
