
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for content creators just starting out, offering essential repurposing tools with limited outputs to help you test the platform\'s capabilities and see immediate results.',
    features: [
      '3 videos per month',
      '720p video quality',
      'Standard captions',
      'Basic analytics',
      'Single user'
    ],
    buttonText: 'Get Started'
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Ideal for serious creators and small teams who need unlimited video processing, advanced AI features, and detailed analytics to scale their content strategy across platforms.',
    features: [
      'Unlimited videos',
      '4K video quality',
      'Advanced captions & translations',
      'Detailed analytics',
      'Up to 3 team members',
      'Custom branding',
      'Priority support'
    ],
    isPopular: true,
    buttonText: 'Start 14-Day Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Comprehensive solution for agencies and large teams requiring custom workflows, advanced integrations, dedicated support, and enterprise-grade security and compliance.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Advanced integrations',
      'Custom workflows',
      'API access',
      'Dedicated account manager',
      '24/7 premium support'
    ],
    buttonText: 'Contact Sales'
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-mango-300 to-mango-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect content repurposing plan for your needs
          </p>
          <div className="mt-6 inline-flex items-center bg-white p-1 rounded-lg border">
            <span className="px-4 py-2 bg-mango-400 text-white rounded-md">Monthly</span>
            <span className="px-4 py-2 text-gray-600">Annual (Save 20%)</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden animate-fade-in ${tier.isPopular ? 'ring-2 ring-mango-400 transform md:-translate-y-4' : 'bg-white shadow-lg'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-mango-300 to-mango-400 text-white text-xs font-bold py-1 px-4 tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-8 ${tier.isPopular ? 'bg-white' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-gray-500">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                <Button 
                  className={`w-full mb-8 ${
                    tier.isPopular 
                      ? 'bg-gradient-to-r from-mango-300 to-mango-400 text-white hover:opacity-90' 
                      : 'bg-white border border-mango-300 text-mango-400 hover:bg-mango-50'
                  }`}
                >
                  {tier.buttonText}
                </Button>
                
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-mango-400 mr-2 shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
