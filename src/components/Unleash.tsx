// components/Unleash.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const Unleash: React.FC = () => {
  return (
    <section className="w-full bg-[#0b0b0f] text-white px-4 py-24 flex justify-center items-center text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          Ready to unleash your creative warrior?
        </h2>
        <p className="text-gray-300 mb-6 text-lg">
          Experience the power of AI Yodha integrated into every aspect of the COBOX ecosystem.
          From ideation to deployment, your AI companion is ready to elevate your creative journey.
        </p>
        <Button
          className="bg-purple-500 text-white px-6 py-3 text-base font-semibold rounded-none hover:bg-purple-600 transition"
          disabled
        >
          Activate AI Yodha - Coming Soon
        </Button>
      </div>
    </section>
  );
};

export default Unleash;
