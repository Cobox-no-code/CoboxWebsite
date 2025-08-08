// src/components/Partnerships.tsx

import React from "react";

const Partnerships = () => {
  const partners = [
    {
      name: "BitsCrunch",
      logo: "/Assets/partners/bitscrunch.svg", // Ensure this path is correct
      description: "Blockchain Analytics",
      link: "https://bitscrunch.com/",
    },
    {
      name: "Lumia",
      logo: "/Assets/partners/luma.svg",
      description: "Web3 Infrastructure",
      link: "https://lumia.org/",
    },
    {
      name: "Beam",
      logo: "/Assets/partners/beam.svg",
      description: "Gaming Ecosystem",
      link: "https://onbeam.com/",
    },
    {
      name: "Immutable",
      logo: "/Assets/partners/immutable.svg",
      description: "NFT Gaming Platform",
      link: "https://play.immutable.com/",
    },
    {
      name: "ANIM AI",
      logo: "/Assets/partners/anim-ai.png",
      description: "",
      link: "https://x.com/AnimAI_x",
    },
    {
      name: "ARCANEVAULT",
      logo: "/Assets/partners/arcane-vault.png",
      description: "",
      link: "https://x.com/ArcaneVault_xyz",
    },
    {
      name: "BITGERT",
      logo: "/Assets/partners/bitgert.png",
      description: "",
      link: "https://x.com/bitgertbrise",
    },

    {
      name: "CREATOR AI",
      logo: "/Assets/partners/creator_ai.png",
      description: "",
      link: "https://x.com/creator_ai1",
    },

    {
      name: "DOGE BANK",
      logo: "/Assets/partners/doge-bank.png",
      description: "",
      link: "https://x.com/Doge_Bank_",
    },
    {
      name: "ECOCREDS",
      logo: "/Assets/partners/ecocreds.png",
      description: "",
      link: "https://x.com/EcoCreds",
    },
    {
      name: "FUNTON AI",
      logo: "/Assets/partners/funton-ai.png",
      description: "",
      link: "https://x.com/funton_ai",
    },

    {
      name: "INITVERSE",
      logo: "/Assets/partners/init-verse.png",
      description: "",
      link: "https://x.com/InitVerse",
    },
    {
      name: "MAJYOGAME",
      logo: "/Assets/partners/majyo-game.png",
      description: "",
      link: "https://x.com/MajyoGame",
    },
    {
      name: "MCNEX",
      logo: "/Assets/partners/mcnex.png",
      description: "",
      link: "https://x.com/MCNEx_web3",
    },

    {
      name: "NEXCROW",
      logo: "/Assets/partners/nexcrow.png",
      description: "",
      link: "https://x.com/Nexus_mls",
    },
    {
      name: "POEG",
      logo: "/Assets/partners/poeg.png",
      description: "",
      link: "https://x.com/Peog_meme_",
    },
    {
      name: "POP MAX",
      logo: "/Assets/partners/pop.png",
      description: "",
      link: "https://x.com/PopMax_xyz",
    },

    {
      name: "SFT PROTOCOL",
      logo: "/Assets/partners/sft-protocol.png",
      description: "",
      link: "https://x.com/SFTProtocol",
    },
    {
      name: "SHADOW",
      logo: "/Assets/partners/shadow.png",
      description: "",
      link: "https://x.com/ShadowbyteFi",
    },
    {
      name: "SWEETYAI",
      logo: "/Assets/partners/sweety.png",
      description: "",
      link: "https://x.com/SweetyAI_Labs",
    },
    {
      name: "TERMINUS",
      logo: "/Assets/partners/terminus.png",
      description: "",
      link: "https://x.com/terminus_pos",
    },
    {
      name: "V&",
      logo: "/Assets/partners/v-and.png",
      description: "",
      link: "https://x.com/VN_DeSearch",
    },
    {
      name: "VITAMIN AI",
      logo: "/Assets/partners/vitamin-ai.png",
      description: "",
      link: "https://x.com/Vitaminiai",
    },
    {
      name: "VLY",
      logo: "/Assets/partners/vly.png",
      description: "",
      link: "https://x.com/vlyai",
    },
    {
      name: "WILD SHOOTING",
      logo: "/Assets/partners/wild-shooting.png",
      description: "",
      link: "https://x.com/WildShootingOFL",
    },
    {
      name: "ZIP CLASH",
      logo: "/Assets/partners/zip-clash.png",
      description: "",
      link: "https://x.com/Zip_Clash",
    },
  ];
  return (
    <section
      id="partners"
      className="py-20 px-4 md:px-16 bg-[#0a0a0a] text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-transducer">
        Trusted Partners
      </h2>
      <p className="text-lg md:text-xl mb-10 text-gray-300">
        Building the future of Web3 gaming together with industry leaders
      </p>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 mx-auto object-contain mb-2 filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        ))}
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10 items-center justify-center">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 mx-auto object-contain mb-2 
                   filter grayscale opacity-80 
                   group-hover:grayscale-0 group-hover:opacity-100 
                   transform group-hover:scale-110 
                   transition-all duration-300"
            />
            <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
              {partner.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
