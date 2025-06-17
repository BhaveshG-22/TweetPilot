'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { AtSign } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  icon,
  ...props
}) => {
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={`
            px-4 py-2 ${icon ? 'pl-10' : ''} 
            border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 
            rounded-lg 
            text-gray-900 dark:text-gray-100 
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent
            transition-colors duration-200
            ${fullWidth ? 'w-full' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

interface WaitlistFormProps {
  onSubmit?: (data: { name: string; email: string; twitterHandle?: string }) => void;
  className?: string;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  onSubmit,
  className = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');
  const [errors, setErrors] = useState<{name?: string; email?: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: {name?: string; email?: string} = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      if (onSubmit) {
        onSubmit({ name, email, twitterHandle });
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setName('');
      setEmail('');
      setTwitterHandle('');
      setErrors({});
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center ${className}`}>
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
          You&apos;re on the list! 🎉
        </h3>
        <p className="text-green-600 dark:text-green-300">
          We&apos;ll notify you when we launch. Thanks for your interest!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <Input
        label="Name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        fullWidth
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="your.email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        fullWidth
        required
      />
      
      <Input
        label="Twitter Handle (optional)"
        placeholder="yourusername"
        value={twitterHandle}
        onChange={(e) => setTwitterHandle(e.target.value)}
        fullWidth
        icon={<AtSign size={16} />}
      />
      
      <Button 
        type="submit" 
        size="lg" 
        fullWidth 
        disabled={isSubmitting}
        className="mt-2"
      >
        {isSubmitting ? 'Joining waitlist...' : 'Join the Waitlist'}
      </Button>
    </form>
  );
};