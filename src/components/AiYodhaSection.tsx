// components/AiYodhaSection.tsx
import Image from 'next/image';
import React from 'react';

const AiYodhaSection: React.FC = () => {
  return (
    <section id='ai-yodha' className="w-full bg-[#0b0b0f] text-white py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/Assets/ai-yodha.jpg"
            height={1500}
            width={1000}
            alt="AI Yodha"
            className="w-auto h-full shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 p-4 max-w-xl">
          <p className="uppercase text-sm text-gray-400 font-semibold tracking-widest mb-2">
            AI YODHA POWER
          </p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            AI Yodha<br />
            <span className="text-purple-500">Your Creative Warrior</span>
          </h2>
          <p className="text-gray-300 mb-6">
            In the ever-expanding COBOX Universe, meet Yodha—a cutting-edge AI built to empower creators, game developers, and digital artists. Inspired by the spirit of a warrior, Yodha helps you navigate the complexities of virtual creation.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                AI-Powered Creation Engine
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Fabricated into every part of the COBOX ecosystem
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Streamline Productivity
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Automate complex creation workflows and optimize your development process with AI-driven assistance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Business Strategy Optimization
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Navigate market complexities with AI-powered insights for marketing strategies and business growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Creative Vision Scaling
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Whether crafting immersive worlds or scaling creative vision, Yodha adapts to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiYodhaSection;
