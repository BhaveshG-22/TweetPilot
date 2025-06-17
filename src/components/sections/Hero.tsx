'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import { Play } from 'lucide-react';
// @ts-ignore
import TextTransition, { presets } from 'react-text-transition';

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [currentAudienceIndex, setCurrentAudienceIndex] = useState<number>(0);

  const audiences = [
    'Tech',
    'Business',
    'Creator',
    'Startup',
    'Personal'
  ];

  const audienceColors = [
    'from-blue-400 to-purple-500',    // Tech
    'from-green-400 to-blue-500',     // Business
    'from-purple-400 to-pink-500',    // Creator
    'from-orange-400 to-red-500',     // Startup
    'from-cyan-400 to-blue-500'       // Personal
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAudienceIndex((prev) => (prev + 1) % audiences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [audiences.length]);

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  const handleStartForFree = (): void => {
    console.log('Start for free clicked');
  };

  const handleSeeItInAction = (): void => {
    console.log('See it in action clicked');
  };

  return (
    <section className="bg-slate-900 min-h-screen flex items-center py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Grow Your{' '}
              <TextTransition springConfig={presets.wobbly}>
                <span className={`inline-block w-48 lg:w-72 text-left text-transparent bg-clip-text bg-gradient-to-r ${audienceColors[currentAudienceIndex]}`}>
                  {audiences[currentAudienceIndex]}
                </span>
              </TextTransition>
              {' '}
              Audience{' '}
              <span className="text-blue-400">on</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Autopilot
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              TweetPilot helps professionals and content creators post high-quality, personalized tweets daily — even when you&apos;re busy focusing on your work.
            </p>

            <div className="flex gap-4 mb-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
                onClick={handleStartForFree}
                type="button"
                aria-label="Start using TweetPilot for free"
              >
                Start for Free
              </button>
              <button
                className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg text-lg font-medium flex items-center gap-2 transition-colors"
                onClick={handleSeeItInAction}
                type="button"
                aria-label="Watch TweetPilot demo video"
              >
                <Play className="w-4 h-4" aria-hidden="true" />
                See It in Action
              </button>
            </div>

            <p className="text-sm text-gray-400">
              No credit card needed. Setup takes 30 seconds.
            </p>
          </div>

          {/* Right content - Tweet preview */}
          <div className="relative">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {/* Tweet header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm" aria-hidden="true">
                    JD
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">John Developer</p>
                  <p className="text-gray-400 text-sm">@johnbuilds</p>
                </div>
                <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                  Auto-generated
                </div>
              </div>

              {/* Tweet content */}
              <div className="space-y-6">
                <article className="bg-gray-900 rounded-lg p-4">
                  <p className="text-white mb-3 leading-relaxed">
                    🔥 Just deployed a new React hook that automatically handles API retries with exponential backoff. Sometimes the simplest solutions are the most elegant.
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1" aria-label="18 comments">
                      <span aria-hidden="true">💬</span> <span>18</span>
                    </span>
                    <span className="flex items-center gap-1" aria-label="32 retweets">
                      <span aria-hidden="true">🔄</span> <span>32</span>
                    </span>
                    <span className="flex items-center gap-1" aria-label="156 likes">
                      <span aria-hidden="true">❤️</span> <span>156</span>
                    </span>
                  </div>
                </article>

                <article className="bg-gray-900 rounded-lg p-4">
                  <p className="text-white mb-3 leading-relaxed">
                    Pro tip: Always write tests for your edge cases first. Your future self will thank you when debugging at 2 AM 🧪✨
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="flex items-center gap-1" aria-label="24 comments">
                      <span aria-hidden="true">💬</span> <span>24</span>
                    </span>
                    <span className="flex items-center gap-1" aria-label="45 retweets">
                      <span aria-hidden="true">🔄</span> <span>45</span>
                    </span>
                    <span className="flex items-center gap-1" aria-label="203 likes">
                      <span aria-hidden="true">❤️</span> <span>203</span>
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;