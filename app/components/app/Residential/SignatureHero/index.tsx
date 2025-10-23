"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AppAnimationSpeed } from '../../../../constants';

interface ProjectLink {
  id: number;
  title: string;
  href: string;
  backgroundImage: string;
}

const projectLinks: ProjectLink[] = [
  {
    id: 0,
    title: 'Luxury Multi-Dwelling Units',
    href: '/residential/multi-dwelling-unit',
    backgroundImage: '/images/new-imgs/highrise-building.png',
  },
  {
    id: 1,
    title: 'Large Residential Villas',
    href: '/residential/large-residential-villas',
    backgroundImage: '/images/new-imgs/ss-miatama.png',
  },
  {
    id: 2,
    title: 'Reference Cinemas',
    href: '/residential/reference-cinemas',
    backgroundImage: '/images/new-imgs/stylish-highrise.png',
  },
];

const SignatureHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projectLinks.length);
        setIsAnimating(false);
      }, AppAnimationSpeed);
    }, AppAnimationSpeed);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projectLinks[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Crossfade */}
      {projectLinks.map((project, index) => (
        <div
          key={project.id}
          className={`absolute inset-0 transition-opacity duration-1000 bg-black ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={project.backgroundImage}
            alt={project.title}
            fill
            objectFit='cover'
            objectPosition='center'
            className="h-full w-full object-cover bg-blend-overlay bg-black"
          />
          <div className="absolute inset-0 bg-[#010101cc]" />
        </div>
      ))}

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="hidden md:block"></div>
        <div className="relative z-10 h-full flex flex-col justify-start items-center px-6">
          <div className="w-full h-max my-auto">
            <p className="mb-12 animate-fade-in text-2xl text-hero-text md:text-3xl font-semibold font-montserrat text-white">
              Redefining Luxury Living <br /> Through Technology
            </p>
            {/* <p className="mb-12 animate-fade-in text-2xl text-hero-text md:text-3xl font-semibold font-montserrat text-white">
              signature experiences
              <br />
              for signature projects
            </p> */}
            <p 
              className="mb-12 animate-fade-in font-montserrat text-left 
              leading-relaxed text-xs md:text-sm text-white w-full md:w-9/12"
            >
              HAUSBA delivers world-class smart living and audiovisual solutions for luxury MDUs, 
              exclusive villas, and reference home cinemas across Nigeria and West Africa.
            </p>

            <nav className="flex flex-col gap-4">
              {projectLinks.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className={`group relative transition-all duration-500 font-montserrat text-xs md:text-sm text-left ${
                    project.id === currentIndex
                      ? ' text-primary'
                      : 'text-white hover:text-primary hover:scale-105'
                  }`}
                >
                  <span
                    className={`inline-block transition-all duration-500 ${
                      isAnimating && project.id === currentIndex
                        ? 'translate-y-2 opacity-0'
                        : 'translate-y-0 opacity-100'
                    }`}
                  >
                    {project.title} &gt;
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureHero;
