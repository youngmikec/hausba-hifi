"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/new-imgs/stylish-highrise.png",
  "/images/new-imgs/highrise-building.png",
  "/images/new-imgs/luxury-apartment.png",
]; // Replace with your actual image URLs in /public/images/

const ShowcaseSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col sm:flex-row md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-12 bg-white">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full sm:w-6/12 md:w-6/12 space-y-4 text-center md:text-left"
      >
        <Image
          src="/images/logo-black.png"
          alt="Hausba Logo"
          width={120}
          height={40}
          className="mx-auto md:mx-0 mb-6"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          crafting personalised <br />
          luxury experiences
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-orange-500 font-semibold text-left">
          since 2010
        </h2>

        <p className="font-montserrat text-left leading-relaxed px-4">
          With over a decade of delivering technology in Nigeria’s most
          prestigious projects, HAUSBA is the trusted partner for developers,
          architects, and homeowners who demand nothing but the best. Our
          portfolio includes top-tier residences in Lagos and Accra, where we
          seamlessly integrate technology with lifestyle.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <div className="relative w-full sm:w-6/12 md:w-4/12 h-[500px] mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt="Luxury building"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border-[2px] border-black transition ${
                index === current ? "bg-primary" : "bg-gray-100"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
