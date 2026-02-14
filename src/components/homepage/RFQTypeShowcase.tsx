'use client';

import { FileText, Mic, Video, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getMockRFQStats } from '@/data/mockRFQs';

export default function RFQTypeShowcase() {
  const stats = getMockRFQStats();

  const types = [
    {
      icon: FileText,
      title: 'Text RFQ',
      description: 'Type your requirement with full specifications',
      count: stats.total - stats.voiceRFQs - stats.videoRFQs,
      color: 'blue',
      // Gradient background for card
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      // Icon styles
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      // Text styles
      textColor: 'text-blue-400',
      // Button styles
      buttonGradient: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400',
      borderColor: 'border-blue-500/20',
      link: '/rfq/create?type=text',
      demoLink: '/rfq/demo/text',
    },
    {
      icon: Mic,
      title: 'Voice RFQ',
      description: 'Just speak in any language - our AI understands 12 Indian languages',
      count: stats.voiceRFQs,
      color: 'purple',
      bgGradient: 'from-purple-500/10 to-violet-600/5',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      textColor: 'text-purple-400',
      buttonGradient: 'bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400',
      borderColor: 'border-purple-500/20',
      link: '/rfq/create?type=voice',
      demoLink: '/rfq/demo/voice',
    },
    {
      icon: Video,
      title: 'Video RFQ',
      description: 'Record or upload a video showing the product you need',
      count: stats.videoRFQs,
      color: 'pink',
      bgGradient: 'from-pink-500/10 to-rose-600/5',
      iconBg: 'bg-pink-500/20',
      iconColor: 'text-pink-400',
      textColor: 'text-pink-400',
      buttonGradient: 'bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-500 hover:to-rose-400',
      borderColor: 'border-pink-500/20',
      link: '/rfq/create?type=video',
      demoLink: '/rfq/demo/video',
    },
  ];

  return (
    <section className="py-16 bg-[#0a1128]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How Bell24h Accepts RFQs
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the method that works best for you. Our AI handles all three formats seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border hover:scale-105 transition-all duration-300 group
                  bg-gradient-to-br ${type.bgGradient} ${type.borderColor} backdrop-blur-md shadow-lg hover:shadow-2xl`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center ${type.iconBg}`}>
                    <Icon className={`w-10 h-10 ${type.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold ${type.textColor} text-center mb-3`}>
                  {type.title}
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  {type.description}
                </p>

                {/* Stats */}
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-white mb-1">
                    ~{type.count.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-400">
                    {type.title} Demos Available
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    href={type.link}
                    className={`w-full ${type.buttonGradient} text-white px-4 py-3 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl`}
                  >
                    Try {type.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={type.demoLink}
                    className="w-full border border-white/10 px-4 py-3 rounded-xl font-medium text-gray-300 inline-flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                  >
                    View {type.count.toLocaleString()}+ Demos
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

