import React from 'react';
import { WaitlistForm } from '../ui/Form';

export const Waitlist: React.FC = () => {
  return (
    <section id="waitlist" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 dark:bg-gray-900/20 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column: Waitlist form */}
            <div>
              <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Join the waitlist today
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Be among the first to experience the power of AI-driven Twitter growth. Limited spots available for early access.
                </p>
                
                <WaitlistForm />
              </div>
            </div>
            
            {/* Right column: Feature highlights */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Early access perks
              </h3>
              
              <ul className="space-y-4">
                {[
                  'Lifetime discount on all premium features',
                  'Priority customer support',
                  'Early access to new features',
                  'Free consultation with our Twitter growth experts',
                  'Exclusive community access'
                ].map((perk, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[
                      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
                      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
                      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150'
                    ].map((avatar, index) => (
                      <img 
                        key={index}
                        src={avatar}
                        alt="User avatar"
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <span className="font-medium text-blue-600 dark:text-blue-400">128+</span> developers already joined
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};