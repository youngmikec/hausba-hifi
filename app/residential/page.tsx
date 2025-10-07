"use client";

import { FC } from 'react';
import HomeLayout from '../components/layouts/home-layout';
import ResidentialHeroSection from '../components/app/Residential/Hero';
import ShowcaseSection from '../components/app/Residential/ShowcaseSection';
import OurProjectSection from '../shared/OurProjects';
import WhyChooseUsSection from '../shared/WhyChooseUs';

const Residential: FC = () => {
  return (
    <HomeLayout>
      <ResidentialHeroSection />
      <ShowcaseSection />
      <OurProjectSection />
      <WhyChooseUsSection />
    </HomeLayout>
  );
}

export default Residential;