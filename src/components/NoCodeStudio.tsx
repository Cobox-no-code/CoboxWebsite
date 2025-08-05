'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const NoCodeStudio: React.FC = () => {
  return (
    <section id='studio' className="w-full bg-black text-white px-4 py-20">
      <div className="max-w-7xl mx-auto flex flex-col justify-center gap-12 items-center">
        
        {/* Left: Text */}
        <div className='text-center'>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            No-Code<br />Game Studio
          </h2>
          <p className="text-gray-300 max-w-3xl text-lg mb-6">
            Create professional 3D multiplayer games in under 5 minutes. Our intuitive tools handle the complexity while you focus on creativity.
          </p>
        </div>

        {/* Right: Video card */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-auto"
            src="/Videos/V1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-xl font-semibold mb-2">
              Interactive Studio Demo
            </h3>
            <p className="text-gray-300 mb-4">
              Watch how creators build worlds in real-time
            </p>
            <Button className="bg-purple-500 text-white px-5 py-2 rounded-none hover:bg-purple-600 transition">
              Try Studio Beta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoCodeStudio;
