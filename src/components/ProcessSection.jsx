'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProcessSection = () => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();

  const steps = [
    {
      number: '01',
      title: 'Explore the Basics',
      description: 'Understand the core concepts of water scarcity, rainwater harvesting, and why conservation is essential. HydroLoop introduces these topics through visuals, simple guides, and beginner-friendly explanations.',
      bgColor: 'bg-[#0A2540]',
      textColor: 'text-white',
      numberColor: 'text-orange-500'
    },
    {
      number: '02',
      title: 'Follow Interactive Roadmaps',
      description: 'Dive into step-by-step visual roadmaps that explain how rainwater harvesting systems work—from collection and filtration to storage and reuse. Everything is explained in a practical, easy-to-apply way.',
      bgColor: 'bg-slate-400',
      textColor: 'text-white',
      numberColor: 'text-orange-500'
    },
    {
      number: '03',
      title: 'Learn Through Real Stories',
      description: 'Discover inspiring case studies from communities, schools, and villages that successfully implemented rainwater harvesting. These real-life examples help users understand what actually works and why.',
      bgColor: 'bg-[#0A2540]',
      textColor: 'text-white',
      numberColor: 'text-orange-500'
    },
    {
      number: '04',
      title: 'Test Yourself With Smart Quizzes',
      description: 'Strengthen your understanding through interactive quizzes. Each question comes with AI-generated hints, helping you learn step-by-step rather than just guessing answers.',
      bgColor: 'bg-slate-400',
      textColor: 'text-white',
      numberColor: 'text-orange-500'
    },
    {
      number: '05',
      title: 'Take Action in Your Community',
      description: 'Apply what you\'ve learned with simple, actionable models suitable for homes, colleges, and local communities. HydroLoop empowers users to begin conserving water with clear, realistic steps.',
      bgColor: 'bg-[#0A2540]',
      textColor: 'text-white',
      numberColor: 'text-white'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
        const maxScroll = scrollHeight - clientHeight;
        const progress = (scrollTop / maxScroll) * 100;
        setScrollProgress(progress);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-16 lg:gap-24 items-start relative">
          {/* Left side - Scrollable Cards */}
          <div className="relative order-1">
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="space-y-8 max-h-[650px] overflow-y-auto scroll-smooth"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative transform transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Card */}
                  <div className={`${step.bgColor} ${step.textColor} rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-5xl font-bold text-orange-50">{step.number}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 mt-1">{step.title}</h3>
                        <p className="text-white/90 leading-relaxed text-base">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* Center Progress Line with Numbers */}
          <div className="hidden lg:flex flex-col items-center justify-start min-h-[650px] order-2 relative px-8">
            {/* Progress Line Container */}
            <div className="relative w-1 bg-gray-300 rounded-full h-[600px]">
              {/* Animated Progress */}
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full transition-all duration-300 ease-out"
                style={{ 
                  height: `${Math.min(scrollProgress, 100)}%`,
                  boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)'
                }}
              />
              
              {/* Step Number Circles */}
              {steps.map((step, index) => {
                const stepPosition = (index / (steps.length - 1)) * 100;
                const isActive = scrollProgress >= stepPosition - 5; // Add slight threshold for better UX
                
                return (
                  <div 
                    key={index}
                    className={`absolute rounded-full bg-white flex items-center justify-center font-bold transition-all duration-300 z-10 text-base ${
                      isActive 
                        ? 'w-14 h-14 border-[3px] border-orange-500 text-orange-500' 
                        : 'w-12 h-12 border-[3px] border-gray-300 text-gray-400'
                    }`}
                    style={{ 
                      top: `${stepPosition}%`,
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: isActive 
                        ? '0 0 20px rgba(249, 115, 22, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)' 
                        : '0 2px 8px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {step.number}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:sticky lg:top-24 order-3">
            <div className="p-10">
              <div className="inline-block">
                <p className="text-orange-500 font-bold mb-3 uppercase tracking-wider text-sm bg-orange-50 px-4 py-2 rounded-full">
                  OUR PROCESS
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
                Understanding Water<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Conservation Made Easy
                </span><br />
                in Just 5 Steps
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                HydroLoop breaks down water conservation and rainwater harvesting into clear, easy-to-follow steps. Scroll through to see how our platform helps you learn, apply, and make an impact.
              </p>
              <button onClick={() => router.push('/roadmaps/domestic-rainwater-harvesting')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 group">
                Start Learning
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        div[class*="overflow-y-auto"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;