
import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Upload Your Content',
    description: 'Upload your long-form video directly or connect to YouTube, Vimeo, or Zoom.',
    image: 'https://source.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    number: 2,
    title: 'Auto-Repurpose',
    description: 'AI identifies key moments and reformats them for various platforms simultaneously.',
    image: 'https://source.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  {
    number: 3,
    title: 'Schedule & Analyze',
    description: 'Set publishing schedules and track performance metrics across all platforms.',
    image: 'https://source.unsplash.com/photo-1473091534298-04dcbce3278c'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-mango-300 to-mango-400 bg-clip-text text-transparent">
              How MangoFlow Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your content workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative animate-fade-in" style={{ animationDelay: `${(step.number - 1) * 0.2}s` }}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-r from-mango-300 to-mango-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
