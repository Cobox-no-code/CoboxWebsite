// components/MarqueeFooter.tsx
import React from 'react';

const MarqueeFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#532be4] overflow-hidden text-white absolute left-0 bottom-0 z-[10000] font-black text-sm shadow-[0_-2px_16px_0_#2a1a4d33] flex justify-center items-center px-4 py-2 min-h-[36px] text-center font-[Transducer]">
      <div className="marquee-content inline-flex items-center gap-8 whitespace-nowrap font-medium animate-footer-marquee">
        <span className="font-extrabold tracking-wide text-white">
          100,000 $COBX TOKENS PER GENESIS NFT
        </span>
        -THE GENESIS ADVANTAGE IS MATHEMATICAL
        <span className="mx-4 opacity-70 text-lg">|</span>
        EARLY ACCESS
        <span className="mx-4 opacity-70 text-lg">|</span>
        TOKEN CLAIM
        <span className="mx-4 opacity-70 text-lg">|</span>
        REVENUE SHARING
        <span className="mx-4 opacity-70 text-lg">|</span>
        <span className="font-extrabold tracking-wide text-white">
          100,000 $COBX TOKENS PER GENESIS NFT
        </span>
      </div>
    </footer>
  );
};

export default MarqueeFooter;
