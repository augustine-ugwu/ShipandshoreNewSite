"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);

    // Close dropdown when closing the mobile menu
    if (isMobileMenuOpen) {
      setIsAboutDropdownOpen(false);
    }
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight ||
        window.innerHeight;
      const shouldShowNavbar = window.scrollY > heroHeight;
      setShowStickyNavbar(shouldShowNavbar);

      if (shouldShowNavbar && !isAnimated) {
        setIsAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimated]);

  return (
    showStickyNavbar && (
      <header
        id="sticky-navbar"
        className={`fixed top-0 left-0 w-full bg-black text-white z-50 transition-all duration-700 ease-out shadow-md ${
          isAnimated ? "animate-navbar" : ""
        }`}>
        <nav className="container mx-auto flex items-center justify-between p-8">
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
              <a href="/" className="font-bebas-neue cursor-pointer">
                Home
              </a>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}>
              <a className="font-bebas-neue cursor-pointer">About Us</a>
              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <ul className="absolute top-full left-0 bg-black text-white w-48 py-2 shadow-lg text-sm">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="/management">Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="/fleet">Fleet</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="/companies">Companies</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/services" className="font-bebas-neue cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="font-bebas-neue cursor-pointer">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Toggle mobile menu">
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
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 bg-black opacity-90 lg:hidden w-full h-screen flex flex-col items-center justify-center space-y-6 text-white z-20">
            <button
              onClick={toggleMobileMenu}
              className="absolute p-6 top-4 right-4 text-white text-4xl"
              aria-label="Close menu">
              &times;
            </button>
            <a href="/" className="font-bebas-neue text-2xl">
              Home
            </a>
            <div>
              <button
                onClick={toggleAboutDropdown}
                className="font-bebas-neue text-2xl flex items-center space-x-2">
                <span>About Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 transform transition-transform ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <ul className="flex flex-col space-y-4 text-lg mt-4">
                  <li>
                    <a href="/management" className="hover:bg-gray-800 p-2">
                      Management
                    </a>
                  </li>
                  <li>
                    <a href="/fleet" className="hover:bg-gray-800 p-2">
                      Fleet
                    </a>
                  </li>
                  <li>
                    <a href="/companies" className="hover:bg-gray-800 p-2">
                      Companies
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a href="/services" className="font-bebas-neue text-2xl">
              Services
            </a>
            <a href="/contact" className="font-bebas-neue text-2xl">
              Contact
            </a>
          </div>
        )}
      </header>
    )
  );
}
