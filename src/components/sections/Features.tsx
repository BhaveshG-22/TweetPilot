import React from 'react';
import { FeatureCard } from '../ui/Card';
import { MessageSquareText, Sliders, Calendar, BarChart3 } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquareText size={24} />,
      title: 'Personalized AI-generated tweets',
      description: 'Our AI learns your writing style and generates tweets that sound like you wrote them — maintaining your authentic voice while saving you time.'
    },
    {
      icon: <Sliders size={24} />,
      title: 'Custom tone and voice settings',
      description: 'Fine-tune your AI\'s tone to match your personal brand perfectly, from professional to casual, technical to approachable, and everything in between.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Advanced scheduling & approval',
      description: 'Review generated tweets, make edits if needed, and schedule them for optimal posting times to maximize engagement.'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Growth analytics dashboard',
      description: 'Track follower growth, engagement metrics, and content performance to continuously optimize your Twitter strategy.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful features that save you time
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to maintain an active Twitter presence without the daily grind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};