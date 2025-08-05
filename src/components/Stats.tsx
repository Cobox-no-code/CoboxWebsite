import React from 'react';

const Stats: React.FC = () => {
  return (
    <div id='ecosystem' className="m-4 md:m-24 game-panel rounded-3xl p-12 text-center">
      {/* Stats section */}
      <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-12 text-white">
        Ecosystem Impact
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="group">
          <div className="text-4xl font-bold bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(280,85%,60%)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
            7 million
          </div>
          <div className="text-sm text-muted-foreground">UGC Game Creators</div>
        </div>

        <div className="group">
          <div className="text-4xl font-bold bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(280,85%,60%)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
            750 million+
          </div>
          <div className="text-sm text-muted-foreground">UGC Game Players</div>
        </div>

        <div className="group">
          <div className="text-4xl font-bold bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(280,85%,60%)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
            3 million (annually)
          </div>
          <div className="text-sm text-muted-foreground">Creators Earning</div>
        </div>

        <div className="group">
          <div className="text-4xl font-bold bg-gradient-to-r from-[hsl(195,100%,60%)] to-[hsl(280,85%,60%)] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
            $1.5 billion+
          </div>
          <div className="text-sm text-muted-foreground">Total UGC Payouts (2024)</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
