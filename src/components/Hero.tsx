// components/Hero.tsx
import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Play, Coins } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white text-center px-4"
      style={{ backgroundImage: "url('/Assets/hero-bg.webp')" }}
    >
      <div className="bg-opacity-50 p-8 rounded-lg max-w-5xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Build 3D multiplayer games with AI — no code needed.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Empowering creators and players with true
          ownership. Build, play, and earn in a decentralized world
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
          <Link href="https://discord.com/invite/KTMG3NxBEK" target="_blank">
            <Button size="lg" variant="outline"
              className="px-8 py-3 h-auto group rounded-2xl border border-gray-700 hover:text-purple-500 hover:bg-black font-medium">
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />Launch Your World</Button>
          </Link>
          {/* <Link href="https://opensea.io/collection/cobox-genesis" target="_blank">
            <Button variant="outline"
              size="lg"
              className="px-8 py-3 h-auto rounded-2xl border border-gray-700 hover:text-purple-500 hover:bg-black font-medium group">
              <Coins className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />Explore Genesis NFTs</Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
