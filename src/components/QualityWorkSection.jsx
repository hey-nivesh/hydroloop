'use client';

import React from 'react';

const QualityWorkSection = () => {
  const workItems = [
    {
      id: 1,
      title: 'Community Awareness Drive',
      image: '/image/camps6.png',
      size: 'large' // Takes full height on left
    },
    {
      id: 2,
      title: 'School Rainwater Harvesting Camp',
      image: '/image/camps2.png',
      size: 'medium' // Top middle
    },
    {
      id: 3,
      title: 'Village Model Installation',
      image: '/image/camps5.png',
      size: 'medium' // Top right
    },
    {
      id: 4,
      title: 'Youth Water Conservation Meetup',
      image: '/image/camps1.png',
      size: 'small' // Bottom left
    },
    {
      id: 5,
      title: 'Hands-On Harvesting Workshop',
      image: '/image/camps3.png',
      size: 'small' // Bottom right
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold mb-3 uppercase tracking-wider text-sm">
            PEOPLE INITIATIVES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] leading-tight">
            Real Communities Taking<br />
            Action for Water Conservation
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[280px]">
          {/* Large Image - Left Side (Spans 2 rows) */}
          <div className="lg:col-span-4 lg:row-span-2 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src={workItems[0].image}
              alt={workItems[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-2xl font-bold mb-2">{workItems[0].title}</h3>
              <p className="text-white/90 text-sm">Volunteers educating households about rainwater harvesting and simple home-based systems.</p>
            </div>
            {/* Static Label */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full group-hover:opacity-0 transition-opacity duration-500">
              <span className="text-[#0A2540] font-bold text-base">{workItems[0].title}</span>
            </div>
          </div>

          {/* Top Middle Image */}
          <div className="lg:col-span-4 lg:row-span-1 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src={workItems[1].image}
              alt={workItems[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-xl font-bold mb-1">{workItems[1].title}</h3>
              <p className="text-white/90 text-sm">Students learning how runoff can be collected and reused during field demonstrations.</p>
            </div>
          </div>

          {/* Top Right Image */}
          <div className="lg:col-span-4 lg:row-span-1 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src={workItems[2].image}
              alt={workItems[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-xl font-bold mb-1">{workItems[2].title}</h3>
              <p className="text-white/90 text-sm">Rural communities building low-cost harvesting pits with support from local organizations.</p>
            </div>
          </div>

          {/* Bottom Left Image */}
          <div className="lg:col-span-4 lg:row-span-1 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src={workItems[3].image}
              alt={workItems[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-xl font-bold mb-1">{workItems[3].title}</h3>
              <p className="text-white/90 text-sm">Young volunteers discussing urban water challenges and practical rainwater solutions.</p>
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="lg:col-span-4 lg:row-span-1 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src={workItems[4].image}
              alt={workItems[4].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-white text-xl font-bold mb-1">{workItems[4].title}</h3>
              <p className="text-white/90 text-sm">Participants creating recharge pits and learning step-by-step water–saving techniques.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="https://www.youtube.com/results?search_query=rain+water+harvesting+initiatives" className="w-67 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto group">
            View All Initiatives
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualityWorkSection;  