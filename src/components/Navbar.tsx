'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'AI Yodha', href: '#ai-yodha' },
    { name: 'Studio', href: '#studio' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <header className="w-full bg-black/50 text-white px-4 py-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-transducer">
          <Image src="/Assets/logo.png" alt='logo' width={100} height={50}/>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-purple-400 transition">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <Link href="https://login.cobox.co" target="_blank">
            <Button className="bg-purple-500 text-white rounded-none px-6 hover:bg-purple-600 transition">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:text-purple-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link href="https://login.cobox.co" target="_blank">
            <Button className="w-full bg-purple-500 text-white rounded-none hover:bg-purple-600 transition">
              Login
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
