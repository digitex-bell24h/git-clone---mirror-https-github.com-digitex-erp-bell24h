'use client';

import { Mic, Video, FileText, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HeroRFQDemo() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0a1128] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* AI Pill */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/10 shadow-xl shadow-blue-500/10 hover:border-blue-500/30 transition-colors">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered RFQ System
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white tracking-tight leading-[1.1]">
          Ready to Transform <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Procurement?
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Join thousands of businesses using Bell24H for <span className="text-white font-medium">faster, smarter B2B transactions</span> with our voice & video capabilities.
        </p>

        {/* CTA Buttons - The Core 3 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          {/* Text RFQ */}
          <Link
            href="/rfq/create?type=text"
            className="group relative w-full md:w-auto min-w-[200px]"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-b from-gray-800 to-gray-900 border border-blue-500/30 rounded-2xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
              <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500 group-hover:text-white text-blue-400 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white">Try Text RFQ</span>
            </div>
          </Link>

          {/* Voice RFQ */}
          <Link
            href="/rfq/create?type=voice"
            className="group relative w-full md:w-auto min-w-[200px]"
          >
            <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-b from-gray-800 to-gray-900 border border-purple-500/30 rounded-2xl hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500 group-hover:text-white text-purple-400 transition-colors">
                <Mic className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white">Try Voice RFQ</span>
            </div>
          </Link>

          {/* Video RFQ */}
          <Link
            href="/rfq/create?type=video"
            className="group relative w-full md:w-auto min-w-[200px]"
          >
            <div className="absolute inset-0 bg-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-b from-gray-800 to-gray-900 border border-pink-500/30 rounded-2xl hover:border-pink-500 hover:-translate-y-1 transition-all duration-300">
              <div className="p-2 bg-pink-500/20 rounded-lg group-hover:bg-pink-500 group-hover:text-white text-pink-400 transition-colors">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white">Try Video RFQ</span>
            </div>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
          <div>
            <p className="text-3xl font-bold text-white mb-1">10k+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Suppliers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">~30m</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Response Time</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">12+</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Languages</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">₹500Cr</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Gross Value</p>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Trusted by procurement teams at <span className="text-gray-300">Reliance</span>, <span className="text-gray-300">Tata</span>, and <span className="text-gray-300">7,000+ SMEs</span>
          </p>
        </div>
      </div>
    </section>
  );
}

