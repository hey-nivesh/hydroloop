'use client';
import React from 'react';
import { SearchCheck, GitBranch, FlaskConical, Database, Settings, Droplets } from 'lucide-react';

export default function IndustrialRoadmap() {
  const steps = [
    {
      id: 1,
      title: 'Catchment Audit',
      description: 'Analyze huge roof surfaces and runoff potential.',
      icon: SearchCheck,
      position: { top: '10%', left: '50%' }
    },
    {
      id: 2,
      title: 'Heavy-Duty Guttering',
      description: 'Install wider gutters and drainage pipes for high flow.',
      icon: GitBranch,
      position: { top: '26%', left: '50%' }
    },
    {
      id: 3,
      title: 'Pre-Treatment Chamber',
      description: 'Add silt traps and oil traps for industrial impurities.',
      icon: FlaskConical,
      position: { top: '42%', left: '50%' }
    },
    {
      id: 4,
      title: 'Large-Scale Storage Tanks',
      description: 'Use RCC tanks or modular storage units.',
      icon: Database,
      position: { top: '58%', left: '50%' }
    },
    {
      id: 5,
      title: 'Treatment Unit',
      description: 'Include pressure sand filters, activated carbon, or industrial-grade filters.',
      icon: Settings,
      position: { top: '74%', left: '50%' }
    },
    {
      id: 6,
      title: 'Reuse for Non-Process Needs',
      description: 'Use water for cooling towers, landscaping, and cleaning.',
      icon: Droplets,
      position: { top: '90%', left: '50%' }
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/Industrial&FactoryHarvesting.png')",
          backgroundColor: '#1e3a8a'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-blue-900/40 to-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full mb-4">
              ROADMAP
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industrial & Factory Harvesting
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              High-volume collection, filtration, and reuse systems designed for large industrial roofs and production sites.
            </p>
          </div>
        </div>

        {/* Desktop Roadmap Container */}
        <div className="hidden lg:block max-w-7xl mx-auto relative" style={{ minHeight: '1000px' }}>
          {/* SVG Path - Straight Vertical Line */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* Straight vertical path */}
            <line
              x1="50%"
              y1="5%"
              x2="50%"
              y2="95%"
              stroke="white"
              strokeWidth="8"
              strokeDasharray="20,15"
              opacity="1"
              strokeLinecap="round"
            />
          </svg>

          {/* Roadmap Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="absolute group cursor-pointer"
                style={{ 
                  top: step.position.top, 
                  left: step.position.left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 10
                }}
              >
                {/* Icon Circle */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/60 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/80">
                    <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-9 h-9 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-base shadow-xl">
                    {step.id}
                  </div>
                </div>

                {/* Info Card - Appears on Hover */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${
                  index % 2 === 0 ? 'left-full ml-8' : 'right-full mr-8'
                } w-80 bg-slate-900/95 backdrop-blur-md rounded-xl p-5 shadow-2xl border-2 border-blue-500/40 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}>
                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
                  
                  {/* Arrow Pointer */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${
                    index % 2 === 0 
                      ? 'left-0 -ml-3 border-t-[12px] border-b-[12px] border-r-[12px] border-t-transparent border-b-transparent border-r-slate-900/95'
                      : 'right-0 -mr-3 border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent border-l-slate-900/95'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden max-w-2xl mx-auto space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-12 top-24 w-1 h-16 bg-gradient-to-b from-blue-500 to-blue-600 opacity-60"></div>
                )}
                
                <div className="flex items-start space-x-6 bg-slate-900/90 backdrop-blur-md rounded-xl p-6 border-2 border-blue-500/30 shadow-2xl">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/50 border-4 border-blue-400/30">
                      <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm shadow-lg border-2 border-blue-200">
                      {step.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="bg-gradient-to-r from-blue-500/30 to-blue-600/30 backdrop-blur-md rounded-2xl p-10 border-2 border-blue-500/40 shadow-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Implement at Your Factory?
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Scale up water conservation with our high-volume rainwater harvesting solutions for industrial facilities.
            </p>
            <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 border-2 border-blue-400/50">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}