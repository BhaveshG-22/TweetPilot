import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-md 
        p-6 
        border border-gray-100 dark:border-gray-700
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}> = ({ icon, title, description, className = '' }) => {
  return (
    <Card hover className={`flex flex-col ${className}`}>
      <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-3 w-12 h-12 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
    </Card>
  );
};

export const RoadmapCard: React.FC<{
  phase: string;
  title: string;
  features: string[];
  active?: boolean;
  className?: string;
}> = ({ phase, title, features, active = false, className = '' }) => {
  return (
    <Card 
      className={`border-l-4 ${active ? 'border-l-orange-500' : 'border-l-gray-200 dark:border-l-gray-700'} ${className}`}
    >
      <div className="mb-3">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${active ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>
          {phase}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-orange-500 mr-2">✓</span>
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};