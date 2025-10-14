"use client";

import { FC } from 'react';
import HomeLayout from '../components/layouts/home-layout';
import ResidentialHeroSection from '../components/app/Residential/Hero';
import ShowcaseSection from '../components/app/Residential/ShowcaseSection';
import OurProjectSection from '../shared/OurProjects';
import WhyChooseUsSection from '../shared/WhyChooseUs';
import SignatureHero from '../components/app/Residential/SignatureHero';
import ExperienceComp from '../components/home/ExperienceComp';
import TrustedBy from '../shared/TrustedBy';

const Residential: FC = () => {
  return (
    <HomeLayout>
      <ResidentialHeroSection />
      <ShowcaseSection />
      <SignatureHero />
      <WhyChooseUsSection />
      <OurProjectSection />
      <TrustedBy />
      <ExperienceComp />
    </HomeLayout>
  );
}

export default Residential;