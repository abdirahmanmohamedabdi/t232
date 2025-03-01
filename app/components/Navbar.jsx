"use client"

import { useState } from "react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Our story", href: "/Story " },
  { name: "About us", href: "/About " },
  { name: "Our impact", href: "/Impact" },
  { name: "Our programs", href: "/Programs" },
  { name: "Get Involved", href: "/Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <header className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        
        {/* Logo */}
        <div className="flex justify-center">
          <a href="/">
            <img className="h-16 w-auto md:h-20" src="/wow.png" alt="Pracima Logo" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-medium text-[#212245] hover:text-gray-600 transition duration-300">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#212245] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="text-lg font-medium text-[#212245] hover:text-gray-600 transition duration-300">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* Menu Button for Desktop */}
      
      </header>
    </div>
  );
}