"use client";

import Hero from './components/home/Hero';
import LogoCarousel from './shared/logo-carousel';
import HomeLayout from './components/layouts/home-layout';
import { FC } from 'react';
import ExperienceComp from './components/home/ExperienceComp';
import LandingPage from './components/home/landingPage';

const Home: FC = () => {
  // return (
  //   <HomeLayout>
  //     <Hero />
  //     <LogoCarousel />
  //     <ExperienceComp />
  //   </HomeLayout>
  // );
  return (
    <main className="w-full">
      <LandingPage />
    </main>
  )
}

export default Home;