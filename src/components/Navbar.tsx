"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Make navbar visible when scrolling up or at the top
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header 
      className={`bg-white shadow-md sticky top-0 z-50 transition-transform duration-300 h-20 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 h-full flex items-center">
            <Link href="/" className="flex items-center h-full">
              <div className="h-16 relative w-64">
                <Image 
                  src="/images/treibgut-logo.jpg" 
                  alt="Treibgut Restaurant im Kiekut" 
                  fill
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 h-full items-center">
            <Link 
              href="/" 
              className={`font-medium text-lg ${isActive('/') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
            >
              Home
            </Link>
            <Link 
              href="/speisekarte" 
              className={`font-medium text-lg ${isActive('/speisekarte') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
            >
              Speisekarte
            </Link>
            <Link 
              href="/veranstaltungen" 
              className={`font-medium text-lg ${isActive('/veranstaltungen') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
            >
              Veranstaltungen
            </Link>
            <Link 
              href="/gastgeber" 
              className={`font-medium text-lg ${isActive('/gastgeber') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
            >
              Ihre Gastgeber
            </Link>
            <Link 
              href="/jobs" 
              className={`font-medium text-lg ${isActive('/jobs') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
            >
              Jobs
            </Link>
            <Link 
              href="/kontakt" 
              className={`font-medium text-lg ${isActive('/kontakt') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
            >
              Kontakt
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center h-full">
            <button 
              type="button" 
              className="text-treibgut-text hover:text-treibgut-blue"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              href="/" 
              className={`block px-3 py-2 font-medium text-lg ${isActive('/') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/speisekarte" 
              className={`block px-3 py-2 font-medium text-lg ${isActive('/speisekarte') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
              onClick={() => setMenuOpen(false)}
            >
              Speisekarte
            </Link>
            <Link 
              href="/veranstaltungen" 
              className={`block px-3 py-2 font-medium text-lg ${isActive('/veranstaltungen') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
              onClick={() => setMenuOpen(false)}
            >
              Veranstaltungen
            </Link>
            <Link 
              href="/gastgeber" 
              className={`block px-3 py-2 font-medium text-lg ${isActive('/gastgeber') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
              onClick={() => setMenuOpen(false)}
            >
              Ihre Gastgeber
            </Link>
            <Link 
              href="/jobs" 
              className={`block px-3 py-2 font-medium text-lg ${isActive('/jobs') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
              onClick={() => setMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link 
              href="/kontakt" 
              className={`block px-3 py-2 font-medium text-lg ${isActive('/kontakt') ? 'text-treibgut-blue' : 'text-treibgut-text hover:text-treibgut-blue'}`}
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 