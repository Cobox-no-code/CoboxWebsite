// components/CoboxText.tsx

import React from "react";

const CoboxText: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full bg-black">
      <h1
        className="text-[20vw] font-extrabold uppercase text-transparent bg-cover bg-center bg-clip-text"
        style={{
          backgroundImage: "url('/Assets/cobox-text.jpg')",
        }}
      >
        COBOX
      </h1>
    </div>
  );
};

export default CoboxText;
