
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle smooth scrolling on nav item click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      });
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Track scroll position for active section highlighting and navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Change navbar style when scrolled
      setIsScrolled(scrollPosition > 10);
      
      // Determine which section is in view
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95" 
          : "bg-transparent"
      )}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent transition-colors duration-200">
                MangoFlow
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3 py-2 rounded-lg text-base font-medium transition-all duration-150",
                  activeSection === item.href.substring(1)
                    ? "text-orange-500 bg-orange-50/50 dark:bg-orange-900/20 dark:text-orange-300"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50/50 dark:text-gray-200 dark:hover:text-orange-300 dark:hover:bg-orange-900/20"
                )}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
            <Button 
              asChild 
              className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-150 px-6 font-medium border-0"
            >
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Get Started Free
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className={cn(
                "p-2 rounded-lg transition-colors duration-150",
                "text-gray-700 hover:text-orange-500 hover:bg-orange-50/50",
                "dark:text-gray-200 dark:hover:text-orange-300 dark:hover:bg-orange-900/20",
                "focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              )}
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 mt-3 bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-lg">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150",
                  activeSection === item.href.substring(1)
                    ? "text-orange-500 bg-orange-50/50 dark:bg-orange-900/20 dark:text-orange-300"
                    : "text-gray-700 hover:text-orange-500 hover:bg-orange-50/50 dark:text-gray-200 dark:hover:text-orange-300 dark:hover:bg-orange-900/20"
                )}
                aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block px-4 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:shadow-md transition-all duration-150 text-center"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
