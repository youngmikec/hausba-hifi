"use client";

import Banner from '../components/app/Banner';
import ContactForm from '../components/app/ContactForm';
import HomeLayout from '../components/layouts/home-layout';
import { FC } from 'react';

const Residential: FC = () => {
  return (
    <HomeLayout>
        <Banner bgImg={"/images/default-banner.png"} />
        <ContactForm />
    </HomeLayout>
  );
}

export default Residential;