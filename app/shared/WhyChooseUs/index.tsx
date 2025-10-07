"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/new-imgs/stylish-highrise.png",
  "/images/new-imgs/highrise-building.png",
  "/images/new-imgs/luxury-apartment.png",
]; // Replace with your actual image URLs in /public/images/

const reasons = [
    {
        title: 'Luxury-centric Design',
        description: 'Solutions that prioritize aesthetics, comfort, and exclusivity.'
    },
    {
        title: 'Proven Track Record',
        description: 'Experience in delivering technology for West Africa’s most prestigious addresses.'
    },
    {
        title: 'World-Class Brands',
        description: 'Partnerships with the finest technology manufacturers globally.'
    },
    {
        title: 'End-to-End Expertise',
        description: 'From design consultation to project execution and long-term support.'
    },
]

const WhyChooseUsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col sm:flex-row md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-12 bg-black">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full sm:w-6/12 md:w-6/12 space-y-4 text-center md:text-left"
      >

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          why choose us
        </h1>

        <div className="grid grid-cols-2 gap-4">
            {
                reasons.map((item, index) => (
                    <div key={index} className="my-3">
                        <h3 className="text-sm font-semibold text-primary">{item.title}</h3>
                        <p className="text-xs text-white font-montserrat leading-relaxed">{item.description}</p>
                    </div>
                ))
            }
        </div>

        <div className="my-12">
            <button 
                className="bg-transparent border-2 border-primary rounded-3xl 
                flex justify-center items-center text-primary py-2 px-6 w-max
                 hover:bg-primary hover:text-primary text-xs" 
            >Our Method</button>
        </div>
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

export default WhyChooseUsSection;
