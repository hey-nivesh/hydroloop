'use client';

import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "This website made learning about rainwater harvesting so easy! The roadmaps are simple to follow, and the chatbot helped me understand different harvesting methods instantly. The quizzes are fun and helped me test my knowledge. I loved it!",
      name: "Aditi Sharma",
      role: "Environmental Science Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      platform: "Google",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E"
    },
    {
      id: 2,
      rating: 5,
      text: "I use this platform to teach my students about water conservation. The visual roadmap and interactive tools are excellent. The chatbot explains concepts in simple language, and the quiz section is perfect for classroom activities",
      name: "Rahul Verma",
      role: "School Teacher",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      platform: "Yelp",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Ctext x='10' y='35' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='%23d32323'%3Eyelp%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      rating: 5,
      text: "The blog section is a beautiful community space! People share real experiences and local solutions. It motivates others to save water too. Truly a great initiative for spreading awareness.",
      name: "Priya Nair",
      role: "Community Volunteer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      platform: "Google",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E"
    },
    {
      id: 4,
      rating: 5,
      text: "The chatbot is super interactive and gives step-by-step harvesting methods. It's like having an expert guide available 24/7. The whole website is very user-friendly!",
      name: "Saurabh Singh",
      role: "College Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      platform: "Yelp",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Ctext x='10' y='35' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='%23d32323'%3Eyelp%3C/text%3E%3C/svg%3E"
    },
    {
      id: 1,
      rating: 5,
      text: "I always wanted to install a rainwater harvesting system but never knew where to start. The website’s roadmap walked me through the entire process. The quizzes also helped me learn important safety practices.",
      name: "Meera Joshi",
      role: "Homeowner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      platform: "Google",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E"
    },
    {
      id: 2,
      rating: 5,
      text: "The platform is a complete package—roadmaps for learning, quizzes for revision, blogs for community stories, and a chatbot for instant answers. Perfect for students working on water management projects!",
      name: "Ankit Kumar",
      role: "Civil Engineering Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      platform: "Yelp",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Ctext x='10' y='35' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='%23d32323'%3Eyelp%3C/text%3E%3C/svg%3E"
    },
    {
      id: 3,
      rating: 5,
      text: "I love posting on the vlog/blog page. The community is very active, and the website encourages meaningful discussions on water conservation. Great place to spread awareness!",
      name: "Neha Gupta",
      role: "Eco Blogger",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      platform: "Google",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 272 92'%3E%3Cpath fill='%234285F4' d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23EA4335' d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'/%3E%3Cpath fill='%23FBBC05' d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'/%3E%3Cpath fill='%234285F4' d='M225 3v65h-9.5V3h9.5z'/%3E%3Cpath fill='%2334A853' d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'/%3E%3Cpath fill='%23EA4335' d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'/%3E%3C/svg%3E"
    },
    {
      id: 4,
      rating: 5,
      text: "The roadmaps are super easy to follow, and the chatbot explains everything clearly. The quizzes helped me revise all key topics about water harvesting!",
      name: "Rajesh Patel",
      role: "Property Manager",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      platform: "Yelp",
      platformLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Ctext x='10' y='35' font-family='Arial, sans-serif' font-size='30' font-weight='bold' fill='%23d32323'%3Eyelp%3C/text%3E%3C/svg%3E"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className="w-6 h-6 fill-current text-orange-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#0A2540] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal direction="down">
            <p className="text-orange-500 font-bold mb-3 uppercase tracking-wider text-sm">
              TESTIMONIAL
            </p>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              What Our Customers Say
            </h2>
          </Reveal>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="min-w-full px-3 lg:min-w-[50%] lg:px-4"
                  >
                  <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full bg-gray-200"
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0A2540] text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Platform Logo */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.platformLogo}
                          alt={testimonial.platform}
                          className="h-6 opacity-80"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-orange-500'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;