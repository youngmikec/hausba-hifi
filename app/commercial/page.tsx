"use client";
import { FC } from 'react';

import HomeLayout from '../components/layouts/home-layout';
import ResidentialHeroSection from '../components/app/Residential/Hero';
import ShowcaseSection from '../components/app/Residential/ShowcaseSection';
import OurProjectSection from '../shared/OurProjects';
import WhyChooseUsSection from '../shared/WhyChooseUs';
import TrustedBy from '../shared/TrustedBy';
import ExperienceComp from '../components/home/ExperienceComp';

const Commercial: FC = () => {
  return (
    <HomeLayout>
        <ResidentialHeroSection />
        <ShowcaseSection />
        <WhyChooseUsSection />
        <OurProjectSection />
        <TrustedBy />
        <ExperienceComp />
    </HomeLayout>
  );
}

export default Commercial;