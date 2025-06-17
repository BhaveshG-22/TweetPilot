import React from 'react';
import { RoadmapCard } from '../ui/Card';

export const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'MVP',
      features: [
        'Daily AI-generated tweets',
        'Basic scheduler',
        'Content suggestions',
        'Simple analytics'
      ],
      active: true
    },
    {
      phase: 'Phase 2',
      title: 'Advanced Features',
      features: [
        'Custom tone & voice settings',
        'Advanced approval workflow',
        'Multi-account support',
        'Enhanced analytics'
      ],
      active: false
    },
    {
      phase: 'Phase 3',
      title: 'Platform Expansion',
      features: [
        'LinkedIn integration',
        'Reddit integration',
        'Discord integration',
        'Cross-platform analytics'
      ],
      active: false
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What&apos;s Coming
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our development roadmap for the next 12 months.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapCard
              key={index}
              phase={item.phase}
              title={item.title}
              features={item.features}
              active={item.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
};