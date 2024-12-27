"use client";

import { useState } from "react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prevState) => !prevState);
  };

  return (
    <section id="hero-section" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/BgVid.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline></video>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navigation Bar as part of Hero */}
      <header className="absolute top-0 left-0 w-full bg-transparent text-white z-20 transition-all duration-300 ease-in-out">
        <nav className="container mx-auto flex items-center justify-between p-6">
          <a href="/">
            <div className="text-lg tracking-wider md:p-10 flex items-center space-x-2">
              <img
                src="/assets/logo.png"
                className="md:h-20 h-16 w-auto"
                alt="Ship and Shore Logo"
              />
              <span className="font-bebas-neue md:text-3xl">Shipandshore</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8 text-xl p-10">
            <li>
              <a
                href="/"
                className="nav font-bebas-neue relative cursor-pointer line-permanent">
                Home
                <span className="absolute left-0 bottom-0 w-full h-0.2 bg-white transition-all transform duration-300"></span>
              </a>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}>
              <a
                href="#about"
                className="nav font-bebas-neue relative cursor-pointer">
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all transform duration-300"></span>
              </a>
              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <ul className="absolute top-full left-0 bg-black text-white w-48 py-2 shadow-lg text-sm">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="#management">Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="#fleet">Fleet</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="#companies">Companies</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#services"
                className="nav font-bebas-neue relative cursor-pointer">
                Services
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav font-bebas-neue relative cursor-pointer">
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
          <div className="absolute top-0 right-0 bg-black opacity-90 lg:hidden w-full h-screen flex flex-col items-center justify-center space-y-6 text-white z-20">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute p-6 top-4 right-4 text-white text-4xl"
              aria-label="Close menu">
              &times;
            </button>
            <a href="#services" className="font-bebas-neue text-2xl">
              Services
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
                <ul className="mt-2 bg-black text-white w-48 py-2 shadow-lg text-sm">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="#management">Management</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="#fleet">Fleet</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <a href="#companies">Companies</a>
                  </li>
                </ul>
              )}
            </div>
            <a href="#contact" className="font-bebas-neue text-2xl">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end h-full md:p-24 p-6 text-white">
        <p className="font-bebas-neue text-lg md:text-3xl mb-4 max-w-3xl">
          Shipandshore service limited
        </p>
        <h1 className="font-bebas-neue text-5xl md:text-8xl font-bold tracking-wide">
          welcome to shipandshore group
        </h1>
      </div>
    </section>
  );
}
