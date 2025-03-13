"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "Our Story",
    href: "/our-story",
    submenu: [
      { name: "History", href: "/our-story/history" },
      { name: "Team", href: "/our-story/team" },
      { name: "Mission", href: "/our-story/mission" },
    ],
  },
  { name: "Our Programs", href: "/Programs" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <div className="bg-white shadow-md font-font sticky top-0 z-50" ref={navRef}>
      <header className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <img className="h-16 w-auto md:h-20" src="/wow.png" alt="Mustaqbal Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              {item.submenu ? (
                <div className="group">
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex items-center text-lg font-medium text-[#212245] hover:text-[#64C6C4] transition duration-300"
                  >
                    {item.name}
                    {openSubmenu === item.name ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>

                  {openSubmenu === item.name && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-[#212245] hover:bg-[#64C6C4]/10 hover:text-[#64C6C4]"
                            role="menuitem"
                            onClick={() => setOpenSubmenu(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-lg font-medium text-[#212245] hover:text-[#64C6C4] transition duration-300"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#212245] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Moved outside the header for better positioning */}
      {isOpen && (
        <nav className="md:hidden w-full bg-white shadow-md z-50">
          <div className="flex flex-col items-start space-y-4 py-4 px-8">
            {menuItems.map((item) => (
              <div key={item.name} className="w-full">
                {item.submenu ? (
                  <div className="w-full">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full text-lg font-medium text-[#212245] hover:text-[#64C6C4] transition duration-300"
                    >
                      {item.name}
                      {openSubmenu === item.name ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    {openSubmenu === item.name && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-sm text-[#212245] hover:text-[#64C6C4]"
                            onClick={() => {
                              setOpenSubmenu(null)
                              setIsOpen(false)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full text-lg font-medium text-[#212245] hover:text-[#64C6C4] transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}

