'use client';

import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Form';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

export default function NewPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [errors, setErrors] = useState<{name?: string; email?: string; company?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: {name?: string; email?: string; company?: string} = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate API call to add lead
    setTimeout(() => {
      console.log('New lead added:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', company: '' });
    }, 1000);
  };

  const handleInputChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
                <h1 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
                  Lead Added Successfully! 🎉
                </h1>
                <p className="text-green-600 dark:text-green-300 mb-6">
                  The new lead has been added to your leads list.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="primary">
                  Add Another Lead
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                Add New Lead
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                Add a new lead to your leads list
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  error={errors.name}
                  fullWidth
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  error={errors.email}
                  fullWidth
                  required
                />
                
                <Input
                  label="Company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleInputChange('company')}
                  error={errors.company}
                  fullWidth
                  required
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  fullWidth 
                  disabled={isSubmitting}
                  className="mt-8"
                >
                  {isSubmitting ? 'Adding Lead...' : 'Add Lead'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}