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
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col sm:flex-row md:flex-row items-center justify-between bg-white h-screen">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full space-y-4 text-center md:text-left px-6 md:px-16"
      >

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-montserrat">
          crafting personalised <br />
          luxury experiences
        </h1>

        <h2 className="text-lg sm:text-xl md:text-xl text-orange-500 font-semibold text-left font-montserrat">
          since 2010
        </h2>

        <p className="font-montserrat text-left leading-relaxed text-xs md:text-sm">
          With over a decade of delivering technology in Nigeria’s most
          prestigious projects, HAUSBA is the trusted partner for developers,
          architects, and homeowners who demand nothing but the best. Our
          portfolio includes top-tier residences in Lagos and Accra, where we
          seamlessly integrate technology with lifestyle.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <div className="relative w-full h-full">
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
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ShowcaseSection;
