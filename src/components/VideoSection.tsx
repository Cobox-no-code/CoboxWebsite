// components/VideoSection.tsx
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      <div className="relative rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)]">
        <video
          className="w-full h-auto block rounded-xl"
          src="/Videos/V2.mp4"
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
        />
      </div>
    </div>
  );
};

export default VideoSection;
