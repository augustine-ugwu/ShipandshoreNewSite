"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

// Example Fleet Data (1 image per ship)
const fleet = [
  {
    name: "Barwasa",
    image: "/assets/02.jpg",
  },
  {
    name: "TugBoat Stane",
    image: "/assets/10.jpg",
  },
  {
    name: "TugBoat Battle Axe",
    image: "/assets/11.jpg",
  },
  {
    name: "Sea Pearl",
    image: "/assets/17.jpg",
  },
  {
    name: "Barwasa 1",
    image: "/assets/19.jpg",
  },
  {
    name: "Rahama",
    image: "/assets/26.jpg",
  },
  {
    name: "African Sky",
    image: "/assets/29.jpg",
  },
  {
    name: "African Star",
    image: "/assets/30.jpg",
  },
];

export default function FleetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentShipIndex, setCurrentShipIndex] = useState(null);

  // Open modal
  const openModal = (shipIndex) => {
    setCurrentShipIndex(shipIndex);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentShipIndex(null);
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fleet.map((ship, index) => (
            <div key={index} className="text-center">
              <img
                src={ship.image}
                alt={ship.name}
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(index)}
              />
              <h3 className="font-bebas-neue text-xl mt-4">{ship.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 w-full h-full">
          <div className="relative w-full h-full flex flex-col justify-center items-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-100 transition-all">
              <XMarkIcon className="h-6 w-6" />
            </button>
            <img
              src={fleet[currentShipIndex].image}
              alt={fleet[currentShipIndex].name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <h3 className="text-white font-bebas-neue text-2xl mt-4">
              {fleet[currentShipIndex].name}
            </h3>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
