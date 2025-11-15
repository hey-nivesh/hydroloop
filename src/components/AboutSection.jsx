'use client';
import React, { useState } from 'react';
import Reveal from './Reveal';
import Image from 'next/image';

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState('mission');

    return (
        <section className="py-16 px-6 lg:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Quick Service Form */}
                <Reveal direction="down">
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="lg:w-1/4">
                            <h2 className="text-2xl lg:text-3xl font-bold text-[#0A2540]">
                                Join the Movement for Smarter Water Conservation.
                            </h2>
                            <p className="text-2xl lg:text-3xl font-bold text-[#0A2540]">

                            </p>
                        </div>

                        <Reveal direction="right" delay={120}>
                        <div className="flex flex-col sm:flex-row gap-4 lg:w-3/4">
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="flex-1 px-6 py-3 text-gray-700 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <input
                                type="tel"
                                placeholder="Email Address"
                                className="flex-1 px-6 py-3 text-gray-700 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap">
                                Join Now
                            </button>
                        </div>
                        </Reveal>
                    </div>
                </div>
                </Reveal>

                {/* Who We Are Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Image */}
                    <Reveal direction="left">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/image/about_img.png"
                            alt="Plumbing professionals at work"
                            fill
                            className="object-cover"
                        />
                    </div>
                    </Reveal>

                    {/* Content */}
                    <Reveal direction="up" delay={80}>
                    <div>
                        <p className="text-orange-500 font-semibold mb-2 uppercase tracking-wide">
                            WHO WE ARE
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2540] mb-6">
                            Empowering Communities to Save Water One Drop at a Time
                        </h2>

                        {/* Tabs */}
                        <div className="flex gap-6 mb-6 border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('mission')}
                                className={`pb-3 font-semibold transition-colors ${activeTab === 'mission'
                                        ? 'text-orange-500 border-b-2 border-orange-500'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Our Mission
                            </button>
                            <button
                                onClick={() => setActiveTab('expertise')}
                                className={`pb-3 font-semibold transition-colors ${activeTab === 'expertise'
                                        ? 'text-orange-500 border-b-2 border-orange-500'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Our Vision
                            </button>
                            <button
                                onClick={() => setActiveTab('values')}
                                className={`pb-3 font-semibold transition-colors ${activeTab === 'values'
                                        ? 'text-orange-500 border-b-2 border-orange-500'
                                        : 'text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Our Impact
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="mb-8">
                            {activeTab === 'mission' && (
                                <p className="text-gray-600 leading-relaxed">
                                    At HydroLoop, our goal is to make rainwater harvesting simple, practical, and accessible for everyone. We educate communities through interactive guides, real-world success stories, and visual learning tools that inspire sustainable water habits. Our focus is to help people understand how small actions can create long-term impact on water security.
                                </p>
                            )}
                            {activeTab === 'expertise' && (
                                <p className="text-gray-600 leading-relaxed">
                                    Our vision is to build a water-conscious society where rainwater harvesting becomes a natural part of everyday life. We aim to empower individuals, institutions, and communities with the knowledge, tools, and confidence to manage water sustainably. HydroLoop envisions a future where every home collects rainwater, every community values conservation, and every generation grows up understanding the true worth of water.
                                </p>
                            )}
                            {activeTab === 'values' && (
                                <p className="text-gray-600 leading-relaxed">
                                    HydroLoop has created measurable change by simplifying water-conservation learning for thousands of people. Through visual roadmaps, interactive quizzes, and real-life success stories, we’ve helped communities adopt practical rainwater harvesting methods and reduce water wastage. Our platform has enabled schools, NGOs, and rural groups to take informed action, leading to stronger awareness, long-term savings, and improved water security across multiple regions.
                                </p>
                            )}
                        </div>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Clear, easy-to-follow learning resources.</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Practical models for homes, schools, and communities.</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Backed by real case studies and success stories.</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Designed for all age groups and backgrounds.</p>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                </div>

                {/* Stats Section */}
                <Reveal direction="up">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-2">10,000+</h3>
                        <p className="text-gray-600">People Reached Through Awareness Programs</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-2">120+</h3>
                        <p className="text-gray-600">Schools & Communities Using Our Learning Modules</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-2">50+</h3>
                        <p className="text-gray-600">Successful Rainwater Harvesting Case Studies</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-2">24/7</h3>
                        <p className="text-gray-600">Access to Free Learning Resources</p>
                    </div>
                </div>
                </Reveal>
            </div>
        </section>
    );
};

export default AboutSection;