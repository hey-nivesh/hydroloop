'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const roadmapCategories = [
    {
      title: 'Domestic Rainwater Harvesting',
      slug: 'domestic-rainwater-harvesting'
    },
    {
      title: 'Commercial & Residential Societies',
      slug: 'Commercial&ResidentialSocieties'
    },
    {
      title: 'Industrial & Factory Harvesting',
      slug: 'industrial-factory-harvesting'
    },
    {
      title: 'Roads & Public Infrastructure',
      slug: 'roads-public-infrastructure'
    },
    {
      title: 'Government & Public Welfare Projects',
      slug: 'government-public-welfare'
    },
    {
      title: 'Agricultural & Rural Harvesting',
      slug: 'agricultural-rural-harvesting'
    }
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 text-white py-4 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">HL</span>
            </div>
            <span className="text-xl font-bold">HyroLoop</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">
            About
          </Link>
          
          {/* RoadMap Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsRoadmapOpen(true)}
            onMouseLeave={() => setIsRoadmapOpen(false)}
          >
            <button className="hover:text-orange-500 transition-colors flex items-center space-x-1">
              <span>RoadMap</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isRoadmapOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isRoadmapOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div className="py-2">
                  {roadmapCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/roadmaps/${category.slug}`}
                      className="block px-6 py-3 hover:bg-orange-50 hover:text-orange-500 transition-colors border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsRoadmapOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-orange-500 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors font-medium">
            Explore Roadmaps
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-slate-800 rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">
              About
            </Link>
            
            {/* Mobile RoadMap Dropdown */}
            <div>
              <button 
                onClick={() => setIsRoadmapOpen(!isRoadmapOpen)}
                className="hover:text-orange-500 transition-colors flex items-center justify-between w-full"
              >
                <span>RoadMap</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isRoadmapOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isRoadmapOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {roadmapCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/roadmaps/${category.slug}`}
                      className="block py-2 text-sm hover:text-orange-500 transition-colors"
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors font-medium mt-4">
              Explore Roadmaps
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;