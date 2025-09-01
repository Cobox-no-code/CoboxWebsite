
import Image from "next/image";
import React from "react";

const RoadMap = () => {
  return (
    <div className="w-full relative">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {" "}
        <Image
          src="/Assets/roadmap.webp"
          alt="Project Roadmap showing three phases: Phase 1 Foundation (Q1 2025), Phase 2 Ecosystem Expansion (Q2-Q3 2025), and Phase 3 Open Metaverse Evolution (Q4 2025 & Beyond)"
          fill
          className="object-contain" // Ensures full image is visible
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default RoadMap;
