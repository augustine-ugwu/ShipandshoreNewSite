import React from "react";

const HeroSection = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative h-[250px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="font-bebas-neue text-white text-4xl lg:text-5xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
