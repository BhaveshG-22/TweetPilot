import React from 'react';
import { Code, Shield, Database } from 'lucide-react';

export const Trust: React.FC = () => {
  const testimonials = [
    {
      quote: "TweetPilot has helped me maintain a consistent Twitter presence while I focus on building my product. The AI-generated tweets sound exactly like me.",
      author: "Sarah Chen",
      role: "Founder, DevToolkit",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As a solo developer, I never had time to build my Twitter audience. With TweetPilot, I've gained 2,000+ followers in just 3 months.",
      author: "Alex Johnson",
      role: "Indie Hacker",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full mb-6">
            <Code size={18} className="mr-2" />
            <span className="font-medium">Built by devs, for devs</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by developers & founders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join hundreds of developers, indie hackers, and startup founders who are growing their Twitter audience with TweetPilot.
          </p>
        </div>
        
        {/* Trust features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-3 w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Developer-First</h3>
            <p className="text-gray-600 dark:text-gray-300">Built with the specific needs of developers and technical founders in mind.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-3 w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Data Privacy</h3>
            <p className="text-gray-600 dark:text-gray-300">Your data is secure and never used to train our AI models or shared with third parties.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-3 w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">API Access</h3>
            <p className="text-gray-600 dark:text-gray-300">Full API access for power users who want to integrate with their existing workflows.</p>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="text-4xl text-blue-500 dark:text-blue-400 leading-none">&quot;</div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};