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
        className="fixed top-0 left-0 w-full bg-black text-white z-50 transition-all duration-300 shadow-md">
        <nav className="container mx-auto flex items-center justify-between py-6 px-8">
          {/* Logo */}
          <a href="/">
            <div className="text-lg tracking-wider flex items-center space-x-2">
              <img
                src="/assets/logo.png"
                className="h-12 w-auto"
                alt="Ship and Shore Logo"
              />
              <span className="font-bebas-neue md:text-3xl">Shipandshore</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8 text-xl">
            <li>
              <a
                href="/"
                className="font-bebas-neue relative cursor-pointer line-permanent">
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.2 bg-white transition-all transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-bebas-neue relative cursor-pointer">
                Services
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-bebas-neue relative cursor-pointer">
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-bebas-neue relative cursor-pointer">
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all transform duration-300"></span>
              </a>
            </li>
            <li>
              <button
                className="flex items-center justify-center text-white transition-all hover:opacity-80 transform duration-200 pl-6"
                aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  className="w-6 h-6">
                  <path
                    fill="#ffffff"
                    d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
              </button>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button className="text-white p-2" aria-label="Toggle mobile menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    )
  );
}
