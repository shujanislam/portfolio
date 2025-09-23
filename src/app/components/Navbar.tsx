'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-lg rounded-3xl shadow-lg border border-white/20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-indigo-400 to-blue-500/80 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-full shadow-sm text-white font-bold">
            SI
          </div>
          <p className="text-lg font-semibold text-white drop-shadow-sm">Shujan Islam</p>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-colors font-medium backdrop-blur-sm"
            >
              {link.name}
            </a>
          ))}
          <a href="#footer">
            <button className="px-5 py-2 bg-gradient-to-r from-indigo-400 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition-all">
              Contact Me
            </button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden mt-2 flex flex-col gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20
          transform transition-all duration-500 ease-out ${
            isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
          }`}
      >
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white py-2 px-4 rounded-lg hover:bg-white/20 transition-colors text-center"
          >
            {link.name}
          </a>
        ))}
        <a href="#footer" onClick={() => setIsOpen(false)}>
          <button className="w-full px-5 py-2 bg-gradient-to-r from-indigo-400 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition-all">
            Contact Me
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
