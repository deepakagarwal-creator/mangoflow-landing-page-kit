
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Is my data secure with MangoFlow?",
    answer: "Absolutely. MangoFlow uses bank-level encryption for all uploaded content. Your videos are stored securely and never shared with third parties. We comply with GDPR and CCPA regulations, giving you full control over your data."
  },
  {
    question: "Which social media platforms are supported?",
    answer: "MangoFlow currently supports Instagram (Posts, Reels, Stories), TikTok, YouTube (Shorts and regular uploads), Twitter, LinkedIn, Facebook, and Pinterest. We regularly add new platform integrations based on user feedback."
  },
  {
    question: "Can I customize the captions and visuals?",
    answer: "Yes! MangoFlow gives you complete control over caption styling, including font, color, size, and positioning. You can also add your branded elements, logos, and custom graphics to any repurposed content."
  },
  {
    question: "How accurate is the AI in identifying the best clips?",
    answer: "Our AI has been trained on millions of high-performing social media posts to identify engaging moments. It analyzes speech patterns, visual elements, and narrative structure with 95%+ accuracy. You can always manually adjust clip selections if needed."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "Yes, we offer a 14-day money-back guarantee for all paid plans. If MangoFlow doesn't meet your expectations, simply contact our support team within 14 days of purchase for a full refund."
  }
];

export const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0"); // Default first item open

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-mango-300 to-mango-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about MangoFlow
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={openItem || undefined}
            onValueChange={(value) => setOpenItem(value)}
          >
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 group">
                  <div className="flex justify-between w-full">
                    <span className="text-left font-medium group-hover:text-mango-400 transition-colors duration-150">{item.question}</span>
                    <span className="ml-2 flex-shrink-0">
                      {openItem === `item-${index}` ? 
                        <ChevronUp className="h-5 w-5 text-mango-400 transition-transform duration-200" /> : 
                        <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                      }
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 animate-accordion-down">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Still have questions? <a href="#contact" className="text-mango-400 font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};
