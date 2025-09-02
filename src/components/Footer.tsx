import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Footer = () => {
  return (
    <footer
      className="w-full bg-black text-white bg-cover bg-center px-6 py-16"
      style={{
        backgroundImage: 'url("/Assets/hero-bg.webp")', // replace with your actual background image path
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Newsletter Signup */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider mb-4">NEWSLETTER SIGNUP</h4>
          <div className="flex items-center bg-transparent border-b border-white">
            <FaEnvelope className="text-lg text-white mr-2" />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full py-2"
            />
            <button className="text-white text-2xl">
              <IoIosArrowRoundForward className="text-purple-500 hover:text-purple-600" />
            </button>
          </div>
          <label className="flex items-center mt-4 text-xs">
            <input type="checkbox" className="mr-2" />
            I agree to the <a href="/privacy" className="underline ml-1">Privacy Policy</a>.
          </label>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider mb-4">SOCIALS</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.facebook.com/people/COBOX/100083173726667" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://x.com/COBOXmetaverse" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://t.me/coboxcommunity" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="https://discord.com/invite/KTMG3NxBEK" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="https://www.instagram.com/coboxmetaverse" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://medium.com/@socobox5" target="_blank" rel="noopener noreferrer">Medium</a></li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider mb-4">MENU</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#ai-yodha">AI</a></li>
            <li><a href="#studio">Studio</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="https://cobox.gitbook.io/cobox-universe-whitepaper">Whitepaper</a></li>
          </ul>
        </div>

        {/* Say Hello */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider mb-4">SAY HELLO</h4>
          <p className="text-sm"><a href="mailto:coboxverse@cobox.co" className="underline">coboxverse@cobox.co</a></p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-xs text-gray-400 border-t border-white pt-6">
        Cobox © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
