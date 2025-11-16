'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([
    {
      id: 'b1',
      title: "The Complete Beginner’s Guide to Rainwater Harvesting",
      category: 'Awareness',
      excerpt: 'A simple, practical introduction to how rainwater harvesting works and how you can start at home with minimal cost.',
      content: 'Basics, components, and quick-start tips for home setups.',
      imageUrl: 'https://cdn.tractorkarvan.com/tr:f-webp/images/Blogs/rainwater-harvesting/Rainwater-Harvesting-Sub-Blog.jpg',
      date: new Date().toISOString(),
    },
    {
      id: 'b2',
      title: 'How Students Helped Transform Their School with Rainwater Harvesting',
      category: 'Community Projects',
      excerpt: 'A real example of how school children built a working recharge system using simple materials.',
      content: 'Step-by-step actions and outcomes from student-led efforts.',
      imageUrl: 'https://www.propertymaster.in/uploads/blog/21070580721Rainwater-Harvesting-system.jpg',
      date: new Date().toISOString(),
    },
    {
      id: 'b3',
      title: 'Farm Ponds: The Smart Way Farmers Store Rainwater',
      category: 'Agriculture',
      excerpt: 'Why farm ponds are becoming the most trusted water-saving method for rural communities.',
      content: 'Design, sizing, and maintenance essentials for ponds.',
      imageUrl: 'https://kelvinwatertreatment.com/blog//home/urhb53uobpx1/kelvinwatertreatment.com/blog/wp-content/uploads/2025/01/rain-water-harvesting-1.png',
      date: new Date().toISOString(),
    },
  ]);

  const [form, setForm] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    imageFileUrl: '',
  });

  const [activeTab, setActiveTab] = useState('Awareness');

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((f) => ({ ...f, imageFileUrl: url }));
  };

  const handleSubmit = () => {
    const image = form.imageFileUrl || form.imageUrl;
    if (!form.title || !form.excerpt || !image) return;
    const id = `b-${Date.now()}`;
    setBlogs((prev) => [
      {
        id,
        title: form.title,
        category: form.category || 'General',
        excerpt: form.excerpt,
        content: form.content || '',
        imageUrl: image,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
    setForm({
      title: '',
      category: '',
      excerpt: '',
      content: '',
      imageUrl: '',
      imageFileUrl: '',
    });
  };

  const featured = blogs[0];
  const tabs = ['Awareness', 'Home Setup', 'Community Projects', 'Agriculture', 'Urban Planning', 'Innovation'];

  return (
    <div className="min-h-screen bg-[#e4f2db]">
      {/* Header */}
      <header className="bg-[#e4f2db] border-b border-[#5b6668]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <img src="/image/logo.png" alt="HydroLoop Logo" width={40} height={40} />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#d0ab67] rounded-full"></div>
            </div>
            <span className="text-xl text-black font-bold">HydroLoop</span>
          </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="/" className="text-[#2a3f5b] hover:text-[#2c65a4] font-medium">HOME</Link>
            <Link href="/how" className="text-[#2a3f5b] hover:text-[#2c65a4] font-medium">HOW?</Link>
            <Link href="/team" className="text-[#2a3f5b] hover:text-[#2c65a4] font-medium">THE TEAM</Link>
            <Link href="/faq" className="text-[#2a3f5b] hover:text-[#2c65a4] font-medium">FAQ</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Blog Section */}
          <div className="lg:col-span-2 bg-[#e4f2db] rounded-3xl p-8">
            {/* Blog Title */}
            <h1 className="text-6xl font-serif text-[#2a3f5b] mb-2">HydroLoop Blog</h1>
            <p className="text-sm md:text-base text-[#5b6668] mb-8">Insights, stories, and practical guides on rainwater harvesting and sustainable water management.</p>

            {/* Category Tabs */}
            <div className="flex items-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-[#2c65a4] text-white'
                      : 'bg-white text-[#2a3f5b] hover:bg-[#e4f2db] border border-[#5b6668]/20'
                  }`}
                >
                  {tab}
                  <span className="ml-2 text-xs opacity-75">
                    {tab === 'Awareness' ? '18' : tab === 'Home Setup' ? '6' : '8'}
                  </span>
                </button>
              ))}
            </div>

            {/* Featured Blog Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={featured.imageUrl} 
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#2c65a4] text-white w-fit mb-4">
                    {featured.category}
                  </span>
                  <h2 className="text-2xl font-serif text-[#2a3f5b] mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-[#5b6668] mb-6">
                    {featured.excerpt}
                  </p>
                  <button className="bg-[#2c65a4] hover:bg-[#2a3f5b] text-white px-6 py-2 rounded-full text-sm font-medium w-fit transition-colors">
                    READ
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Section */}
            <div className="mt-12">
              <h3 className="text-4xl font-serif text-[#2a3f5b] mb-6">Recent</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.slice(1).map((blog) => (
                  <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={blog.imageUrl} 
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#e4f2db] text-[#2a3f5b] mb-3 border border-[#5b6668]/20">
                        {blog.category}
                      </span>
                      <h4 className="text-lg font-serif text-[#2a3f5b] mb-2">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-[#5b6668] line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Care Section */}
          <div className="bg-[#e4f2db] rounded-3xl p-8 flex flex-col items-center justify-center">
            <div className="text-center mb-3">
              <h2 className="text-3xl font-serif text-[#2a3f5b]">Water Usage Insights at a Glance</h2>
              <p className="text-sm text-[#5b6668]">Track rainfall patterns, storage tank levels, and harvesting efficiency with HydroLoop’s upcoming smart dashboard.</p>
            </div>

            {/* Device Mockup */}
            <div className="min-h-[360px] flex items-center justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 border-2 border-[#5b6668]/30 rounded-full"></div>
                </div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-72 min-h-[22rem] z-10">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#2a3f5b] mb-1">82%</div>
                    <div className="text-xs text-[#5b6668] mb-4">Efficiency · Average water captured during last monsoon</div>
                    <div className="flex items-end justify-center gap-1 h-40 mb-4">
                      {[30, 45, 60, 70, 78, 82, 85, 88].map((height, i) => (
                        <div
                          key={i}
                          className="w-4 rounded-t"
                          style={{
                            height: `${height}%`,
                            backgroundColor: i < 3 ? '#5b6668' : i < 6 ? '#2c65a4' : '#2a3f5b'
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-[#5b6668] font-medium">
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                    </div>
                  </div>
                </div>

                {/* Decorative leaf icon */}
                <div className="absolute -bottom-8 -right-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#2c65a4] rounded-full"></div>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-[#d0ab67] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Blog Section */}
        <div className="mt-12 bg-[#e4f2db] rounded-3xl p-8">
          <h3 className="text-2xl font-serif text-[#2a3f5b] mb-6">Add a Blog Post</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Enter a powerful blog title on rainwater harvesting…"
                className="w-full rounded-xl border-2 border-[#5b6668]/20 bg-white px-4 py-3 text-[#2a3f5b] placeholder-[#5b6668] focus:outline-none focus:border-[#2c65a4]"
              />
              <input
                type="text"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                placeholder="Awareness, Home Setup, Agriculture, Innovation…"
                className="w-full rounded-xl border-2 border-[#5b6668]/20 bg-white px-4 py-3 text-[#2a3f5b] placeholder-[#5b6668] focus:outline-none focus:border-[#2c65a4]"
              />
              <input
                type="text"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                placeholder="Write a 1–2 line summary that appears on the blog card…"
                className="w-full rounded-xl border-2 border-[#5b6668]/20 bg-white px-4 py-3 text-[#2a3f5b] placeholder-[#5b6668] focus:outline-none focus:border-[#2c65a4]"
              />
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Write the full blog content here…"
                rows={6}
                className="w-full rounded-xl border-2 border-[#5b6668]/20 bg-white px-4 py-3 text-[#2a3f5b] placeholder-[#5b6668] focus:outline-none focus:border-[#2c65a4]"
              />
            </div>
            <div className="space-y-4">
              <input
                type="url"
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                placeholder="Blog Image URL"
                className="w-full rounded-xl border-2 border-[#5b6668]/20 bg-white px-4 py-3 text-[#2a3f5b] placeholder-[#5b6668] focus:outline-none focus:border-[#2c65a4]"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="w-full rounded-xl border-2 border-[#5b6668]/20 bg-white px-4 py-3 text-[#2a3f5b]"
              />
              <div className="w-full h-48 rounded-xl bg-white border-2 border-[#d4cdb8] overflow-hidden flex items-center justify-center">
                {(form.imageFileUrl || form.imageUrl) ? (
                  <img
                    src={form.imageFileUrl || form.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[#5b6668] text-sm">Image Preview</span>
                )}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#2c65a4] hover:bg-[#2a3f5b] text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Publish Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}