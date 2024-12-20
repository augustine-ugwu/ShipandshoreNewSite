"use client";

import { useState } from "react";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
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
            <div className="text-lg tracking-wider md:p-16 flex items-center space-x-2">
              <img
                src="/assets/logo.png"
                className="h-20 w-auto"
                alt="Ship and Shore Logo"
              />
              <span className="font-bebas-neue text-3xl">Ship and shore</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-xl p-16">
            <li>
              <a
                href="/"
                className="font-bebas-neue border-b-2 border-white transition-all transform duration-200 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="font-bebas-neue transition-all hover:border-b-2 hover:border-white transform duration-200 cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-bebas-neue transition-all hover:border-b-2 hover:border-white transform duration-200 cursor-pointer">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-bebas-neue transition-all hover:border-b-2 hover:border-white transform duration-200 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <div className="md:hidden">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 right-0 bg-black opacity-90 md:hidden w-full h-screen flex flex-col items-center justify-center space-y-6 text-white z-20">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute p-6 top-4 right-4 text-white text-4xl"
              aria-label="Close menu">
              &times;
            </button>

            {/* Menu Links */}
            <a
              href="#services"
              className="font-bebas-neue text-2xl transition-all hover:border-b-2 hover:border-white transform duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a
              href="#about"
              className="font-bebas-neue text-2xl transition-all hover:border-b-2 hover:border-white transform duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </a>
            <a
              href="#contact"
              className="font-bebas-neue text-2xl transition-all hover:border-b-2 hover:border-white transform duration-200 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          Welcome to Ship & Shore Services
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          Your Trusted Partner in Maritime Solutions
        </p>
        <a
          href="#services"
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition-all duration-300 ease-in-out cursor-pointer">
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
