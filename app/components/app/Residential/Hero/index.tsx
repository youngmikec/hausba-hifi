

"use client";

import React from "react";

const ResidentialHeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/HausbaHeroVid_Resi.mp4" // Place video in public/videos/
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for better text contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Experience the Future of Innovation
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Cutting-edge technology meets modern design to bring your ideas to
          life.
        </p>
        <button className="px-6 py-3 bg-primary hover:bg-primary/30 rounded-lg text-lg font-medium transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ResidentialHeroSection;
