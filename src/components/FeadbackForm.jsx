'use client';
import React, { useState } from 'react';

export default function PlumbingLanding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceArea: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: "url('/image/feedback_img.png')",
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(1, 0, 0, 0.5)'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <p className="text-orange-500 text-sm font-semibold mb-2 tracking-wider">CONTACT US</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Book Expert Plumbing<br />Service Today!
          </h1>
        </div>
      </div>

      {/* Main Content with Overlapping Form */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              24/7 Emergency Plumbing Service
            </h2>
            <p className="text-gray-700 mb-4 font-semibold">
              Don't let plumbing issues disrupt your home! FixFlow offers 24/7 
              emergency plumbing services, ensuring fast, professional, and reliable 
              repairs. Call now and get a licensed plumber at your doorstep!
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand the stress and potential damage a plumbing emergency can 
              cause, which is why we prioritize quick response times, quality repairs, and 
              customer satisfaction. Whether it's a small leak or a major flooding issue, 
              our licensed professionals arrive fully equipped.
            </p>
          </div>

          {/* Contact Form - Overlapping */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Get in Touch with Us
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 text-black py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <input
                type="text"
                name="serviceArea"
                placeholder="Service areas"
                value={formData.serviceArea}
                onChange={handleChange}
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              
              <textarea
                name="message"
                placeholder="Type your message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-full transition duration-300 shadow-lg"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-slate-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-slate-700">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Get 24/7 Emergency<br />
                Plumbing Help — Call Today!
              </h2>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (124) 507 6900
            </button>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-orange-500 text-2xl">💧</div>
                <span className="text-xl font-bold">FixFlow</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                FixFlow provides top-quality plumbing services, from emergency repairs to full installations trust our certified.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Services</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Contact Us</a></li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-bold text-lg mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition">Emergency Plumbing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Pipe Repair</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Drain Cleaning</a></li>
                <li><a href="#" className="hover:text-orange-500 transition">Leak Detection</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>123 Main Street, Your City, State, ZIP</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href="mailto:contact@fixflow.com" className="hover:text-orange-500 transition">contact@fixflow.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <a href="tel:+11234567890" className="hover:text-orange-500 transition">(123) 456-7890</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-700 text-center text-gray-400 text-sm">
            © 2025 FixFlow. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}