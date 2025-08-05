// src/components/Partnerships.tsx

import React from 'react';

const partners = [
  {
    name: 'BitsCrunch',
    logo: '/Assets/partners/bitscrunch.svg', // Ensure this path is correct
    description: 'Blockchain Analytics',
    link: 'https://bitscrunch.com/',
  },
  {
    name: 'Lumia',
    logo: '/Assets/partners/luma.svg',
    description: 'Web3 Infrastructure',
    link: 'https://lumia.org/',
  },
  {
    name: 'Beam',
    logo: '/Assets/partners/beam.svg',
    description: 'Gaming Ecosystem',
    link: 'https://onbeam.com/',
  },
  {
    name: 'Immutable',
    logo: '/Assets/partners/immutable.svg',
    description: 'NFT Gaming Platform',
    link: 'https://play.immutable.com/',
  },
];

const Partnerships = () => {
  return (
    <section id="partners" className="py-20 px-4 md:px-16 bg-[#0a0a0a] text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-transducer">Trusted Partners</h2>
      <p className="text-lg md:text-xl mb-10 text-gray-300">Building the future of Web3 gaming together with industry leaders</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img src={partner.logo} alt={partner.name} className="w-24 h-24 mx-auto object-contain mb-2" />
            <div className="text-base font-semibold mt-2">{partner.name}</div>
            <div className="text-sm text-gray-400">{partner.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
