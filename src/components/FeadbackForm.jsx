'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function PlumbingLanding() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceArea: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email address');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (!formData.phone.trim()) {
      alert('Please enter your phone number');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = 'service_6475aje';
      const templateId = 'template_k7nroij'; // Replace with your template ID from EmailJS
      const publicKey = '16ULlEqI6u4XGMFRd'; // Replace with your public key from EmailJS

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          serviceArea: formData.serviceArea,
          message: formData.message,
          to_name: 'FixFlow Team' // Optional: recipient name
        },
        publicKey
      );

      console.log('Email sent successfully!', response.status, response.text);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceArea: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative h-96">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <p className="text-orange-500 text-sm font-semibold mb-2 tracking-wider">CONTACT US</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Get Guidance on Rainwater Harvesting Today
          </h1>
        </div>
      </div>

      {/* Main Content with Overlapping Form */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Community Rainwater Harvesting Support
            </h2>
            <p className="text-gray-700 mb-4 font-semibold">
              Need help understanding rainwater harvesting or setting up a system? HydroLoop provides clear guidance, expert-backed information, and community support to help you take the right steps. Whether you're installing a home system, planning a school model, or designing a community project, we’re here to assist you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We help you understand system design, filtration methods, storage options, recharge structures, and maintenance best practices. Our goal is to make water conservation simple, practical, and accessible for everyone.
            </p>
          </div>

          {/* Contact Form - Overlapping */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Get in Touch With Us
            </h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-400 text-green-800 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Success! Your request has been submitted. We'll contact you soon.</span>
              </div>
            )}
            
            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-400 text-red-800 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">Failed to submit. Please try again or call us directly.</span>
              </div>
            )}
            
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 text-black py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              
              <input
                type="text"
                name="serviceArea"
                placeholder="Project Type (Home, School, Society, Industrial, Rural, etc.)"
                value={formData.serviceArea}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={4}
                className="w-full text-black px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-500 hover:bg-orange-600'
                } text-white font-semibold py-4 rounded-full transition duration-300 shadow-lg flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Send Inquiry'
              )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                * Required fields
              </p>
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
              Join the Movement for<br />
              Sustainable Water Management!
            </h2>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (123) 456-7890
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-blue-500 text-2xl">💧</div>
              <span className="text-xl font-bold">HydroLoop</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              HydroLoop is a digital platform designed to spread awareness and provide guidance on rainwater harvesting and sustainable water management. Explore roadmaps, learn methods, interact with our chatbot, and join a community working toward water conservation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
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
              <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Features</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Service Areas / Modules */}
          <div>
            <h3 className="font-bold text-lg mb-4">Modules</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition">Rainwater Harvesting Roadmaps</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Water Conservation Techniques</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Interactive Quizzes</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">AI Chatbot Assistance</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>123 EcoStreet, Your City, State, ZIP</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:support@hydroloop.com" className="hover:text-blue-500 transition">support@hydroloop.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+11234567890" className="hover:text-blue-500 transition">(123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-700 text-center text-gray-400 text-sm">
          © 2025 HydroLoop. All Rights Reserved.
        </div>
      </div>
    </footer>
    </div>
  );
}