// components/Hero.tsx
import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white text-center px-4"
      style={{ backgroundImage: "url('/Assets/hero-bg.webp')" }}
    >
      <div className="bg-opacity-50 p-8 rounded-lg max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Build 3D multiplayer games with AI — no code needed.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          The Ultimate No-Code Studio for UGC 3D Multiplayer Games. Build immersive worlds, launch your creativity, and earn in the metaverse.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="https://discord.com/invite/KTMG3NxBEK" target="_blank">
            <Button className='bg-purple-500 text-white px-6 py-3 text-base font-semibold rounded-none'>Launch Your World</Button>
          </Link>
          <Link href="https://opensea.io/collection/cobox-genesis" target="_blank">
            <Button variant="secondary" className='text-base font-semibold'>Explore Genesis NFTs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
