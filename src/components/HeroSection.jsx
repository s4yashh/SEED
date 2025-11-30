import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen text-white">
      {/* Static background image instead of Spline 3D model */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/image1.svg')" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold">
        Invest And Get Your Startup Funded,
        Across The Globe.
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Unlock funding and connect with investors across the globe.
        </p>

       
      </div>
    </section>
  );
};

export default HeroSection;
