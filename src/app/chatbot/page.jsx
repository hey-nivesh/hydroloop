'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Globe, BookOpen, FileText, Settings, User, Send, Paperclip, Mic, Image, MoreHorizontal, Share2, Droplet, Map, MessageCircle } from 'lucide-react';

// Component to format markdown-like content
function FormattedMessage({ content }) {
  const lines = content.split('\n');
  const elements = [];
  let currentList = [];
  let currentTable = [];
  let inCodeBlock = false;
  let codeBlockContent = [];

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc pl-6 space-y-2 my-4">
          {currentList.map((item, i) => (
            <li key={i} className="text-slate-700">{item}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  const flushTable = () => {
    if (currentTable.length > 1) {
      const headers = currentTable[0];
      const rows = currentTable.slice(2); // Skip separator line
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
          <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
              <tr>
                {headers.map((header, i) => (
                  <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-slate-700 border-b border-slate-200">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-sm text-slate-700 border-b border-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTable = [];
    }
  };

  const flushCodeBlock = () => {
    if (codeBlockContent.length > 0) {
      elements.push(
        <pre key={`code-${elements.length}`} className="bg-slate-800 text-slate-100 rounded-lg p-4 overflow-x-auto my-4">
          <code>{codeBlockContent.join('\n')}</code>
        </pre>
      );
      codeBlockContent = [];
    }
  };

  lines.forEach((line, index) => {
    // Code block detection
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        flushCodeBlock();
        inCodeBlock = false;
      } else {
        flushList();
        flushTable();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Headers
    if (line.startsWith('###')) {
      flushList();
      flushTable();
      elements.push(
        <h3 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-4">
          {line.replace(/^###\s*/, '')}
        </h3>
      );
    } else if (line.startsWith('##')) {
      flushList();
      flushTable();
      elements.push(
        <h2 key={index} className="text-3xl font-bold text-slate-800 mt-10 mb-6 pb-2 border-b-2 border-blue-200">
          {line.replace(/^##\s*/, '')}
        </h2>
      );
    } else if (line.startsWith('#')) {
      flushList();
      flushTable();
      elements.push(
        <h1 key={index} className="text-4xl font-bold text-slate-800 mt-8 mb-6">
          {line.replace(/^#\s*/, '')}
        </h1>
      );
    }
    // Horizontal rule
    else if (line.trim() === '---') {
      flushList();
      flushTable();
      elements.push(<hr key={index} className="my-8 border-t-2 border-slate-200" />);
    }
    // Tables
    else if (line.trim().startsWith('|')) {
      flushList();
      const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
      if (!line.includes('---')) {
        currentTable.push(cells);
      } else {
        currentTable.push(cells); // Include separator for detection
      }
    }
    // Lists
    else if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
      flushTable();
      const content = line.trim().replace(/^[-*]\s*/, '');
      // Handle bold within list items
      const formatted = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      currentList.push(<span dangerouslySetInnerHTML={{ __html: formatted }} />);
    }
    // Numbered lists
    else if (/^\d+\./.test(line.trim())) {
      flushTable();
      const content = line.trim().replace(/^\d+\.\s*/, '');
      const formatted = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      currentList.push(<span dangerouslySetInnerHTML={{ __html: formatted }} />);
    }
    // Blockquotes or italics
    else if (line.trim().startsWith('*') && line.trim().endsWith('*') && !line.includes('**')) {
      flushList();
      flushTable();
      elements.push(
        <p key={index} className="italic text-slate-600 my-4 pl-4 border-l-4 border-blue-300">
          {line.trim().replace(/^\*/, '').replace(/\*$/, '')}
        </p>
      );
    }
    // Code inline
    else if (line.includes('`') && !line.startsWith('```')) {
      flushList();
      flushTable();
      const formatted = line.replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">$1</code>');
      elements.push(
        <p key={index} className="text-slate-700 my-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />
      );
    }
    // Regular paragraphs
    else if (line.trim()) {
      flushList();
      flushTable();
      // Handle bold text
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-800">$1</strong>');
      elements.push(
        <p key={index} className="text-slate-700 my-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatted }} />
      );
    }
    // Empty lines
    else {
      flushList();
      flushTable();
    }
  });

  // Flush any remaining content
  flushList();
  flushTable();
  flushCodeBlock();

  return <div className="space-y-1">{elements}</div>;
}

export default function ChatbotPage() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      title: 'Welcome Chat',
      messages: [{ role: 'system', content: 'Welcome to HydroLoop Assistant. Ask anything about rainwater harvesting.' }],
      timestamp: new Date()
    }
  ]);
  const [activeConversationId, setActiveConversationId] = useState(1);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('#8B5CF6');
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const activeConversation = conversations.find(c => c.id === activeConversationId);
  const messages = activeConversation?.messages || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text) return;
    setLoading(true);
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeConversationId) {
        return {
          ...conv,
          messages: [...conv.messages, { role: 'user', content: text }],
          title: conv.messages.length === 1 ? text.slice(0, 50) : conv.title
        };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await res.json();
      
      setConversations(prev => prev.map(conv => {
        if (conv.id === activeConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, { role: 'assistant', content: data.text || 'No response' }]
          };
        }
        return conv;
      }));
    } catch (e) {
      setConversations(prev => prev.map(conv => {
        if (conv.id === activeConversationId) {
          return {
            ...conv,
            messages: [...conv.messages, { role: 'assistant', content: 'Error contacting AI service.' }]
          };
        }
        return conv;
      }));
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const createNewChat = () => {
    const newId = Math.max(...conversations.map(c => c.id)) + 1;
    const newConv = {
      id: newId,
      title: 'New Chat',
      messages: [{ role: 'system', content: 'Welcome to HydroLoop Assistant. Ask anything about rainwater harvesting.' }],
      timestamp: new Date()
    };
    setConversations([newConv, ...conversations]);
    setActiveConversationId(newId);
  };

  const switchConversation = (id) => {
    setActiveConversationId(id);
  };

  const todayChats = conversations.filter(c => {
    const today = new Date();
    const chatDate = new Date(c.timestamp);
    return chatDate.toDateString() === today.toDateString();
  });

  const yesterdayChats = conversations.filter(c => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const chatDate = new Date(c.timestamp);
    return chatDate.toDateString() === yesterday.toDateString();
  });

  const themes = [
    { color: '#8B5CF6', name: 'Purple' },
    { color: '#EC4899', name: 'Pink' },
    { color: '#3B82F6', name: 'Blue' },
    { color: '#10B981', name: 'Green' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/image/logo.png" alt="HydroLoop AI" className="w-10 h-10 rounded-full" />
            <span className="font-bold text-xl text-slate-800">HydroLoop AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white/50 px-4 py-2 rounded-xl">
              <span>HydroLoop Core v1</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-slate-600" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/50 hover:bg-white/70 rounded-lg transition-colors">
              <Share2 className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-600">Share</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1 bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
          <button 
            onClick={createNewChat}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            New Chat
            <kbd className="ml-auto text-xs opacity-70 bg-white/20 px-2 py-1 rounded">⌘N</kbd>
          </button>

          <div className="mt-6 space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-white/50 rounded-xl transition-colors">
              <Globe className="w-4 h-4" />
              Explore HydroLoop AI
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-white/50 rounded-xl transition-colors">
              <BookOpen className="w-4 h-4" />
              Rainwater Knowledge Base
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-white/50 rounded-xl transition-colors">
              <Map className="w-4 h-4" />
              Guided Roadmaps
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-white/50 rounded-xl transition-colors">
              <MessageCircle className="w-4 h-4" />
              Success Stories
            </button>
          </div>

          {todayChats.length > 0 && (
            <div className="mt-8">
              <div className="text-xs font-semibold text-slate-500 mb-3 px-2">TODAY</div>
              <ul className="space-y-1">
                {todayChats.map((conv) => (
                  <li 
                    key={conv.id}
                    onClick={() => switchConversation(conv.id)}
                    className={`px-4 py-2 text-sm text-slate-700 truncate rounded-xl transition-colors cursor-pointer ${
                      activeConversationId === conv.id ? 'bg-blue-100 font-medium' : 'hover:bg-white/50'
                    }`}
                  >
                    {conv.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {yesterdayChats.length > 0 && (
            <div className="mt-8">
              <div className="text-xs font-semibold text-slate-500 mb-3 px-2">YESTERDAY</div>
              <ul className="space-y-1">
                {yesterdayChats.map((conv) => (
                  <li 
                    key={conv.id}
                    onClick={() => switchConversation(conv.id)}
                    className={`px-4 py-2 text-sm text-slate-700 truncate rounded-xl transition-colors cursor-pointer ${
                      activeConversationId === conv.id ? 'bg-blue-100 font-medium' : 'hover:bg-white/50'
                    }`}
                  >
                    {conv.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-8">
            <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-white/50 rounded-xl transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <div className="mt-4 flex items-center gap-3 px-4 py-3 bg-white/50 rounded-xl">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800">User</div>
                <div className="text-xs text-slate-500">Free Plan</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Chat Area */}
        <section className="lg:col-span-3">
          {messages.length <= 1 ? (
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
              {/* Upgrade Banner */}
              <div className="flex items-center justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-full px-4 py-2">
                  <Droplet className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-600">Upgrade</span>
                  <span className="text-sm text-slate-600">free plan to full access</span>
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                  <Droplet className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <div className="text-center mb-4">
                <h1 className="text-4xl font-bold text-slate-800 mb-2">Ask Anything About Rainwater Harvesting</h1>
                <p className="text-slate-600 text-lg">Your intelligent assistant for water conservation, roadmap guidance, and real-time answers.</p>
              </div>

              {/* Input Area */}
              <div className="mb-6 mt-10">
                <div className="relative">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about rainwater harvesting…"
                    className="w-full bg-white/70 border border-slate-200 rounded-2xl px-6 py-4 pr-48 text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Paperclip className="w-4 h-4 text-slate-500" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Image className="w-4 h-4 text-slate-500" />
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <Mic className="w-4 h-4 text-slate-500" />
                    </button>
                    <button
                      onClick={send}
                      disabled={loading}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Explore Roadmaps Button */}
                <div className="mt-3 flex items-center gap-2">
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl text-sm text-blue-600 hover:shadow-md transition-all">
                    <Map className="w-4 h-4" />
                    Explore Roadmaps
                  </button>
                </div>

                {/* Theme Selector */}
                <div className="mt-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl px-6 py-4 flex items-center justify-between">
                  <span className="text-sm text-slate-700">Choose Interface Theme</span>
                  <div className="flex items-center gap-2">
                    {themes.map((theme) => (
                      <button
                        key={theme.color}
                        onClick={() => setSelectedTheme(theme.color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedTheme === theme.color ? 'border-white shadow-lg scale-110' : 'border-transparent'
                        }`}
                        style={{ backgroundColor: theme.color }}
                        title={theme.name}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-slate-800 mb-2">Learn Concepts</div>
                  <div className="text-sm text-slate-600">Explore fundamental topics like rooftop harvesting, filtration, ground recharge, and sustainable water use.</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Map className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-slate-800 mb-2">Interactive Roadmaps</div>
                  <div className="text-sm text-slate-600">Get clear visual instructions for domestic, commercial, industrial, public, and rural rainwater harvesting systems.</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-slate-800 mb-2">Ask Questions</div>
                  <div className="text-sm text-slate-600">Ask any question—from installation steps to cost, maintenance, filtration, or government schemes.</div>
                </div>
              </div>

              {/* Bottom Advisory */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-600 bg-blue-50 border border-blue-200 rounded-xl px-6 py-3">
                  <strong>HydroLoop AI</strong> provides general guidance based on verified rainwater harvesting methods. Always cross-check structural requirements with local experts for installations.
                </p>
              </div>
            </div>
          ) : null}

          {/* Messages */}
          <div className="space-y-4">
            {messages.filter(m => m.role !== 'system').map((m, i) => (
              <div
                key={i}
                className={`rounded-3xl p-6 shadow-lg backdrop-blur-xl border transition-all duration-300 hover:shadow-xl ${
                  m.role === 'user'
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 ml-auto max-w-3xl'
                    : 'bg-white/70 border-white/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    m.role === 'user'
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-gradient-to-br from-blue-500 to-blue-600'
                  }`}>
                    {m.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Droplet className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-slate-500 mb-2">
                      {m.role === 'user' ? 'You' : 'HydroLoop AI'}
                    </div>
                    <div className="prose prose-slate max-w-none">
                      <FormattedMessage content={m.content} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar when messages exist */}
          {messages.length > 1 && (
            <div className="mt-6 bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/50">
              <div className="relative">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about rainwater harvesting…"
                  className="w-full bg-white/70 border border-slate-200 rounded-2xl px-6 py-4 pr-48 text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Paperclip className="w-4 h-4 text-slate-500" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Image className="w-4 h-4 text-slate-500" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Mic className="w-4 h-4 text-slate-500" />
                  </button>
                  <button
                    onClick={send}
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              HydroLoop ensures accuracy but may generate occasional mistakes. Refer to real-world resources for critical decisions.
            </p>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
} 