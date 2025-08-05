// components/FeatureSection.tsx
import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section id='features' className="w-full px-4 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/Assets/build.jpg"
            alt="Built for Creators"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Built for Creators, Powered by Web3
          </h2>
          <p className="text-lg text-gray-300">
            Since 2022, we've been pioneering the future of no-code game development, empowering creators to build, monetize, and scale their visions in the virtual creation.
          </p>

          {/* Grid of Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div>
              <h3 className="text-xl font-semibold">Community First</h3>
              <p className="text-gray-400 text-sm mt-1">
                Built by creators, for creators. Join thousands building the next generation of interactive experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Web3 Native</h3>
              <p className="text-gray-400 text-sm mt-1">
                Ownership, monetization, and rewards built into every creation. Your work, your value.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">No-Code Power</h3>
              <p className="text-gray-400 text-sm mt-1">
                Professional 3D multiplayer games in minutes. Drag, drop, deploy. No coding required.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">One Click Action</h3>
              <p className="text-gray-400 text-sm mt-1">
                Deploy games instantly with a single click. From concept to live multiplayer experience in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
