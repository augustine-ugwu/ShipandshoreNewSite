"use client";

import { useState, useEffect } from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function FleetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Open Modal with the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 19);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 19) % 19);
  };

  // Swipe functionality
  const handleSwipe = (direction) => {
    if (direction === "left") {
      nextImage();
    } else if (direction === "right") {
      prevImage();
    }
  };

  // Handle touch events
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      handleSwipe("left"); // Swipe left
    } else if (touchEndX - touchStartX > 50) {
      handleSwipe("right"); // Swipe right
    }
  };

  // Check screen size for desktop or mobile
  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection title="Our Fleet" backgroundImage="/assets/1543.jpg" />
      <div className="bg-white p-6 pb-32">
        <section className="pt-14 pb-2">
          <div className="container mx-auto text-center">
            <h2 className="font-bebas-neue text-2xl mb-8">
              Our Legacy, Our Fleet
            </h2>
            <h1 className="font-bebas-neue md:text-6xl text-4xl">
              Powering Excellence in Maritime Services
            </h1>
            <p className="text-lg py-4 px-4 md:px-48 mb-8">
              At Ship & Shore Services Limited, our fleet is the backbone of
              over three decades of maritime excellence, serving Nigeria’s
              coastal and international shipping needs. Since our incorporation
              in 1987, we have established ourselves as a leading player in the
              shipping industry, delivering a comprehensive range of services
              tailored to meet dynamic market demands.
            </p>
          </div>
        </section>

        {/* Image Grid Container */}
        <div className="mt-8 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 19 }).map((_, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={`/assets/${String(index + 1).padStart(2, "0")}.jpg`}
                alt={`Fleet Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(index)} // Open the modal on click
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 transition-all">
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-4 w-full h-full justify-between px-4">
              {isDesktop && (
                <button
                  onClick={prevImage}
                  className="text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 transition-all">
                  <ChevronLeftIcon className="h-8 w-8" />
                </button>
              )}
              <img
                src={`/assets/${String(currentImageIndex + 1).padStart(
                  2,
                  "0"
                )}.jpg`}
                alt={`Fleet Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              {isDesktop && (
                <button
                  onClick={nextImage}
                  className="text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 transition-all">
                  <ChevronRightIcon className="h-8 w-8" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
