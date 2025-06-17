'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Menu, X, Twitter } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
              <Twitter className="text-blue-600 dark:text-blue-400" size={28} />
              <span>TweetPilot</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('waitlist')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Join Waitlist
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection('waitlist')}
                variant="primary"
              >
                Get Early Access
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 dark:text-gray-300 py-2 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-700 dark:text-gray-300 py-2 font-medium"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection('waitlist')}
                className="text-gray-700 dark:text-gray-300 py-2 font-medium"
              >
                Join Waitlist
              </button>
              <Button
                onClick={() => scrollToSection('waitlist')}
                variant="primary"
                fullWidth
              >
                Get Early Access
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};