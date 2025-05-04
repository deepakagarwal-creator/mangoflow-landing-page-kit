
import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "MangoFlow's auto-clip tool saved our marketing team 5+ hours per week. The AI correctly identifies the most engaging parts of our webinars every time.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechStream Inc.",
    image: "https://source.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    quote: "As a solo YouTuber, I couldn't keep up with creating content for multiple platforms. MangoFlow helps me turn one video into dozens of engaging social posts.",
    name: "Michael Chen",
    title: "Content Creator",
    company: "Tech Insights",
    image: "https://source.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    quote: "The caption generation is flawless and saves our editing team countless hours. We've seen a 40% increase in engagement since using MangoFlow across our channels.",
    name: "Priya Patel",
    title: "Social Media Manager",
    company: "Bright Marketing",
    image: "https://source.unsplash.com/photo-1534528741775-53994a69daeb"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-mango-300 to-mango-400 bg-clip-text text-transparent">
              Loved by Content Creators
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how MangoFlow is transforming content workflows
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-mango-100">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <div className="text-mango-400 mb-4">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33333 22.6667C7.86667 22.6667 6.66667 22.1333 5.73333 21.0667C4.8 20 4.33333 18.6667 4.33333 17.0667C4.33333 15.4667 4.8 13.8 5.73333 12.0667C6.66667 10.3333 8 8.86667 9.73333 7.66667L12.6667 10.3333C12.1333 10.8667 11.6667 11.4 11.2667 11.9333C10.8667 12.4667 10.6667 13.0667 10.6667 13.7333C10.6667 14.0667 10.7333 14.3333 10.8667 14.5333C11 14.7333 11.2 15 11.4667 15.3333H14.6667C15.2 15.3333 15.6667 15.5333 16.0667 15.9333C16.4667 16.3333 16.6667 16.8 16.6667 17.3333V20C16.6667 20.5333 16.4667 21 16.0667 21.4C15.6667 21.8 15.2 22 14.6667 22H9.33333ZM22.6667 22.6667C21.2 22.6667 20 22.1333 19.0667 21.0667C18.1333 20 17.6667 18.6667 17.6667 17.0667C17.6667 15.4667 18.1333 13.8 19.0667 12.0667C20 10.3333 21.3333 8.86667 23.0667 7.66667L26 10.3333C25.4667 10.8667 25 11.4 24.6 11.9333C24.2 12.4667 24 13.0667 24 13.7333C24 14.0667 24.0667 14.3333 24.2 14.5333C24.3333 14.7333 24.5333 15 24.8 15.3333H28C28.5333 15.3333 29 15.5333 29.4 15.9333C29.8 16.3333 30 16.8 30 17.3333V20C30 20.5333 29.8 21 29.4 21.4C29 21.8 28.5333 22 28 22H22.6667Z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    <p className="text-gray-600 italic text-lg mb-6">{testimonial.quote}</p>
                    
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-mango-400' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
