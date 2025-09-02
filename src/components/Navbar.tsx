'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTelegram, FaXTwitter } from 'react-icons/fa6';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'AI', href: '#ai-yodha' },
    { name: 'Studio', href: '#studio' },
    { name: 'Partners', href: '#partners' },
    { name: 'Whitepaper', href: 'https://cobox.gitbook.io/cobox-universe-whitepaper' },
  ];

  // Use a typed const tuple for cubic-bezier
  const cubic = [0.42, 0, 0.58, 1] as const;

  // Drawer animation
  const drawerVariants: Variants = {
    hidden: { y: '-100%' },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubic,               // ✅ tuple, not number[]
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      y: '-100%',
      transition: { duration: 0.5, ease: cubic },
    },
  };

  // Staggered child animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <header className="w-full bg-black/50 text-white px-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-transducer">
          <Image src="/Assets/logo.png" alt="logo" width={100} height={50} />
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

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-between p-6 z-40"
          >
            {/* Top Section with Logo + Close */}
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/Assets/logo.png" alt="logo" width={100} height={50} />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            {/* Center Menu Items */}
            <motion.nav className="flex flex-col gap-2 text-lg font-medium items-start">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-purple-400 transition"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div variants={itemVariants}>
                <Link href="https://login.cobox.co" target="_blank">
                  <Button className="bg-purple-500 text-white rounded-none hover:bg-purple-600 transition mt-4">
                    Login
                  </Button>
                </Link>
              </motion.div>
            </motion.nav>

            {/* Separator */}
            <motion.div variants={itemVariants} className="border-t border-gray-700 my-6" />

            {/* Social Media Icons */}
            <motion.div variants={itemVariants} className="flex gap-6 text-white justify-center">
              <a href="https://www.facebook.com/people/COBOX/100083173726667" target="_blank" rel="noreferrer"><FaFacebook size={22} /></a>
              <a href="https://x.com/COBOXmetaverse" target="_blank" rel="noreferrer"><FaXTwitter size={22} /></a>
              <a href="https://www.instagram.com/coboxmetaverse" target="_blank" rel="noreferrer"><FaInstagram size={22} /></a>
              <a href="https://t.me/coboxcommunity" target="_blank" rel="noreferrer"><FaTelegram size={22} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
