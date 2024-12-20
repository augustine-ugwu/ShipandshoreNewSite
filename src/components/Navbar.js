"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight ||
        window.innerHeight;
      setShowStickyNavbar(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showStickyNavbar && (
      <header
        id="sticky-navbar"
        className="fixed top-0 z-50 w-full bg-white text-black shadow-md transition-all duration-300">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="text-lg font-bold">Sticky Navbar</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#services" className="hover:text-secondary">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-secondary">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  );
}
